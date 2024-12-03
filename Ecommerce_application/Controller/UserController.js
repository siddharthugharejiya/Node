const bcrypt = require('bcrypt');
const UserModel = require('../Model/UserModel');

const Register = async (req, res) => {
    try {
        const { password } = req.body;      
        const hash = await bcrypt.hash(password, 10);
        const data = await UserModel.create({
            ...req.body,
            password: hash
        });
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await UserModel.findOne({ email });
        if (!data) {
            res.json({ msg: "Email not Found" });
        }
       
        const match_password = await bcrypt.compare(password, data.password);
        if (!match_password) {
            res.json({ msg: "Email is Invalid" });
        }else if (match_password) {
            res.status(200).json({ msg: "User Login Successfully" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { Register, Login };
