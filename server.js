// dotenv
const dotenv = require('dotenv')
dotenv.config()

// mongoose
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', ()=>{ console.log('connected to DB')})

//express
const express = require('express')

const app = express()

//controllers
const morgan = require('morgan')
const trackCtrl = require('./controllers/tracks')


//middleware
app.use(morgan('dev'))
app.use(express.json()) // accepts json from postman

//routes
app.use('/tracks', trackCtrl)


app.listen(3000, ()=>{
    console.log('the express app is ready')
})
