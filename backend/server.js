require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const conversation = require('./routes/conversationRoute')
const message = require('./routes/messageRoute')

mongoose.connect('mongodb://localhost:27017/legal-testing')
.then(() => console.log('Connected to MongoDB successfully!'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use(cors())
app.use(express.json())

app.use('/api/conversation',conversation)
app.use('/api/conversation',message)

app.get('/',(req,res)=>{
    res.send('welcome to the app!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}!`)
})