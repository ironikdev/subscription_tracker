import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'username is required'],
        trim:true,
        minlength:4,
        maxlength:50,},

    email:{
        type:String,
        required:[true,'email is required'],
        trim:true,
        unique:true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,'Please fill valid email address']},

    password:{
        type:String,
        required:[true,'user password is required'],
        minlength:5,
    }

}, {timestamps:true});
const User =
    mongoose.models.User || mongoose.model("User", userSchema);

export default User;
