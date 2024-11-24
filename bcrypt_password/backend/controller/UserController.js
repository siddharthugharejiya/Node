const UserModel = require("../Model/UserModel");
const bcrypt = require('bcrypt');


const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const hash = await bcrypt.hash(password, 10);
        console.log(hash);


        const newUser = await UserModel.create({
            username,
            email,
            password: hash
        });

        res.status(201).json({ message: "User created successfully", user: newUser });

    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Error during signup", error });
    }
};


const login_controller = async (email, password) => {
    try {

        const data = await UserModel.findOne({ email: email });

        if (!data) {
            console.log("Login failed: User not found");
            return { message: "User not found" };
        }

        const valid = await bcrypt.compare(password, data.password);

        if (valid) {
            console.log("User login successful");
            return { message: "Login successful", user: data };
        } else {
            console.log("Login failed: Invalid password");
            return { message: "Invalid password" };
        }

    } catch (error) {
        console.log("Error in login controller:", error);
        return { message: "Error occurred during login", error };
    }
};

module.exports = { signup, login_controller };
