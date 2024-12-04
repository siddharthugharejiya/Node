const bcrypt = require('bcrypt');
const UserModel = require('../Model/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Register = async (req, res) => {
    try {
        const { username, email, password, role, secretkey } = req.body;
    console.log(req.body);

        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (role === "admin") {
            if (process.env.adminsecretkey !== secretkey) {
                return res.status(403).json({ error: "You are not authorized" });
            }
        }

        const hash = await bcrypt.hash(password, 10);
        const data = await UserModel.create({
            ...req.body,
            password: hash
        });
        res.send({ data });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const data = await UserModel.findOne({ email });
        if (!data) {
            return res.json({ msg: "Email not found" });
        }

        const match_password = await bcrypt.compare(password, data.password);
        if (!match_password) {
            return res.json({ msg: "Invalid password" });
        }

        const token = jwt.sign({ userId: data._id, UserRole: data.role }, process.env.JWT_SECRET);
        res.send({ data, token, msg: "User login successful" });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { Register, Login };
