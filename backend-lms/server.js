import express from  'express'
import cors from 'cors'
const app = express();
import connectDb from './config/db.js'
const PORT = process.env.PORT || 5000; 
app.use(cors());
 connectDb();
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
