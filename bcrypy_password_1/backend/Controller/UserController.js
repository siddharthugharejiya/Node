const UserModel = require("../Model/UserModel");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')
// const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await bcrypt.hash(password, 10, async (error, hash) => {
            if (hash) {
                await UserModel.create({
                    username,
                    email,
                    password: hash
                })
            }
            else {
                console.log(error)
            }

        })
        res.send({ msg: "user register" })
    } catch (error) {
        console.log(error)
    }

};
const login = async (req, res) => {
    const { email, password } = req.body
    console.log(password);

    let data = await UserModel.findOne({ email })
    console.log(data)
    if (!data) {
        return res.send({ msg: "Invalid email or password" });
    }


    bcrypt.compare(password, data.password, (err, result) => {
        if (result) {
            res.send({ msg: "user loging" })
        }
        else {
            res.send({ msg: "User not login" })
        }
    })
}
const change = async (req, res) => {
    const { email, CurrentPassword, NewPassword } = req.body
    console.log(email)
    console.log(CurrentPassword);
    console.log(NewPassword)
    try {
        const data = await UserModel.findOne({ email: email })
        console.log(data.password)
        const matched = await bcrypt.compare(CurrentPassword, data.password)
        if (matched) {
            let Newhash = await bcrypt.hash(NewPassword, 10)
            await UserModel.findOneAndUpdate(
                { email: email },
                { password: Newhash }
            )
            res.send({ msg: "User Password chnage" })
        }
        else {
            console.log({ msg: "User Password Not Matched" })
        }

    } catch (error) {
        console.log(error)
    }

}
// const OTP_password = require('otp-generator')
// let OTP = OTP_password.generate(4, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });



const Forget = async (req, res) => {
    try {
        // Generate a 4-digit numeric OTP
        const OTP = otpGenerator.generate(4, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        });

        console.log(`Generated OTP: ${OTP}`);
        const { email } = req.body;


        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,             
            secure: false,        
            auth: {
                user: "multiera96@gmail.com", 
                pass:"poqr wanm qppf wmwi" 
            }
        });

        // Prepare the email
        const mailOptions = {
            from: "multiera96@gmail.com", // Sender address
            to: email,                    // Recipient email
            subject: "Password Reset OTP",
            text: `Your OTP for password reset is: ${OTP}`
        };

        
        const info = await transporter.sendMail(mailOptions);

        console.log(`Message sent: ${info.messageId}`);
        return res.status(200).send({ msg: "OTP sent successfully", OTP });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).send({ msg: "Failed to send OTP", error: error.message });
    }
};

module.exports = { signup, login, change, Forget };
