const bcrypt = require('bcrypt');
const UserModel = require('../Model/UserModel');

const Register = async (req, res) => {
    try {
        const { password } = req.body;      
        const hash = await bcrypt.hash(password,10)
        const data = await UserModel.create({
            ...req.body,
            password : hash
        })
        console.log(hash);
        res.json({data})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = Register;
