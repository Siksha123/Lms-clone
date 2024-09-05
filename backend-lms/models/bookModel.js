import mongoose from 'mongoose';
 const userSchema= new mongoose.Schema({
book_name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    price:{
        type:String,
        required:true,
        unique:true,
    },
    author:{
        type:String,
        required:true,
    },
 });
 module.exports= mongoose.model("User",userSchema)