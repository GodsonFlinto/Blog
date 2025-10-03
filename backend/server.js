const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const postRoutes = require('./Routes/posts')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8000

//Middleware
app.use(bodyParser.json())
app.use(cors())

//connect to moboDB
mongoose.connect('mongodb://localhost:27017/blog')
.then(()=> console.log("MongoDB connected"))
.catch((err)=>console.log("DB error : ", err))


//Use Routes
app.use('/api/posts', postRoutes)

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))