import app from "./app.js"
import dotenv from "dotenv"
import connectionDb from "./DB/server.js";
dotenv.config();

const port = process.env.PORT || 3002;

connectionDb()
.then(()=>{
    app.listen(port , ()=>{
        console.log(`Server is running at ${port}`); 
    })
})
.catch((error)=>{
    console.log("app crashed" , error);
    process.exit(1); // Exit the process if connection fails
    
})