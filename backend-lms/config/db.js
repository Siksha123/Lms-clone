import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/lmsproject', {
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); 
    }
};
export default connectDb;