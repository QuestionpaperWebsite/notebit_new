import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connect(){
    try {
       mongoose.connect(process.env.MONGO_URI!) ;
       const connection = mongoose.connection;

       connection.on('connected', () =>{
        console.log('Database Connected');
       })

       connection.on('error', (err) =>{
        console.log('Database connection error :' + err);
        process.exit();
       })
    } catch (error) {
        console.log('OOps Something Happen.');
        console.log(error);
    }
}