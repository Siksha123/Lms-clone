import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    user_image: {
        type: String,
        default: "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
    },
    phone_number: {
        type: String,
        required: [true, "phone number is minimum 10 numbers"]
    },
    password: {
        type: String,
    },
    confirm_password: {
        type: String,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    }
});
module.exports = mongoose.model("User", userSchema)