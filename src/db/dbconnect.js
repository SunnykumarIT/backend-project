import mongoose from "mongoose";
import{ DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Database connected successfully on db host ${connectionInstance.connection.host} \n`);

    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit the process with failure
      
    }
}

export default connectDB;  