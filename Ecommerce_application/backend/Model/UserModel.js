const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // secretkey: { type: String, required: true },
    role: { type: String, required: true, enum: ["user", "admin"] }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
