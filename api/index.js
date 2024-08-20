import express, { Router } from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import pool from '../config/db.js';
import router from '../routes/index.js';

dotenv.config();
const app=express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({}));
app.use(express.urlencoded({ extended: false }))
app.listen( 3002, () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
})
app.use('/',router)

