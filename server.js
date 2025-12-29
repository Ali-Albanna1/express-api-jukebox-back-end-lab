// dotenv
const dotenv = require('dotenv')
dotenv.config()

// mongoose
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

mongoose.Connection.on('connected', ()=>{ console.log('connected to DB')})

//express
const express = require('express')

const app = express()

//controllers
const morgan = require('morgan')


//middleware
app.use(morgan('dev'))
app.use(express.json()) // accepts json from postman

//routes



app.listen(3000, ()=>{
    console.log('the express app is ready')
})
