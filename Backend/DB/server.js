import mongoose from "mongoose";
import DB_NAME from "../Constant/constant.js"

const connectionDb = async ()=>{
    try {
        const data = await mongoose.connect(`${process.env.connection_string}/${DB_NAME}`)
        console.log("database Connected successfully");
    } catch (error) {
        console.log("connection failed" , error)
        process.exit(0);
    }
}

export default connectionDb;