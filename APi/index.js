import express from 'express';
import  cors from 'cors';
import helmet from 'helmet'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(process.env.mongo_url).then(()=>console.log ("conexion exitosa"));

const app = express();

app.use(cors())
app.use(helmet())

app.get("/", (req, res) => res.send("el mero Server"))

app.listen(4000, ()=>console.log("Server is running"))