import express from "express";
import path from "path";
import {ENV} from "./lib/env.js";
import { connect } from "http2";
import { connectDB } from "./lib/db.js";

const app = express();

const __dirname=path.resolve()


app.get("/health",(req,res) =>{
     res.status(200).json({msg:"API  is up and running"})
});
app.get("/logs",(req,res) =>{
     res.status(200).json({msg:"This is the books endpoint"})
});

//make app our app ready for deployment
if(ENV.NODE_ENV === "production"){
     app.use(express.static(path.join(__dirname,"../frontend/dist")))

     app.get("/{*any}",(req,res)=>{
          res.sendFile(path.join(__dirname,"../frontend","dist" , "index.html"));
     });
}





const startServer = async () =>{
     try{
     await connectDB();
     app.listen(ENV.PORT ,() => console.log("Server is running on port:" ,ENV.PORT));
     }catch(error){
          console.error("Error starting the Server🕸️",error)
     }
};


startServer();