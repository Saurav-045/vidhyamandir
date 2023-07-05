import express from "express";
import { router } from "./router/User-router.js";
import mongoose from "mongoose";
import cors from "cors"

const app = express();
app.use(express.json());

app.use(cors());

try{
mongoose.connect("mongodb+srv://ssf:ssf@cluster0.jluywem.mongodb.net/SINGH'SORG-2023-06-21>SSF?retryWrites=true&w=majority")
  console.log("Connected to MongoDb")
} catch(error){
    console.log(error);
}


app.use("/auth", router)
const PORT = 8000;

app.listen(PORT, (req,res)=>{
    console.log(`Connected to port ${PORT}`);
})