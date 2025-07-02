import dotenv from "dotenv";


import connectDB from "./db/dbconnect.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
});

connectDB()
.then(() => {
    console.log("Database connected successfully");
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
    // You can start your server here or perform other operations after the connection is established
})
.catch((error) => {
    console.error("Failed to connect to the database:", error.message);
    // Exit the process with failure
});


/*first way to connect to the database

export const connectDB = async () => {
  try {
    const dbURI = process.env.DATABASE_URI || "mongodb://localhost:27017/videotube";
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}






second way to connect to the database
easy hai

import express from "express";
const app = express();
// iffi method hai
(async()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (err) => {
        console.error("Error in database connection:", err);

        throw err; // Rethrow the error to stop the server from starting
      });
    //   app.on("connected", () => {
    //     console.log("Database connected successfully");
    //   });
    //   app.on("disconnected", () => {
    //     console.log("Database disconnected");
    //   });
    //   app.on("reconnected", () => {     
    //     console.log("Database reconnected");
    //   });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });   
      // console.log("Database connected successfully");

    }catch(error){
        console.error("Database connection failed:", error);
        throw error;
        // process.exit(1);
    }
    })();

*/