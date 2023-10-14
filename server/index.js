require("dotenv").config()
const cors = require('cors')
const express = require('express')
const connectDB = require('./connectDB')
const Book = require('./models/Books')
const app = express()
const PORT = process.env.PORT || 8000

//midllewares
connectDB()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/', (req, res) => {
    res.json("hey app")
})
app.get('/api/books', async (req, res) => {
    try{
        const data = await Book.find({}).limit(2);
        res.json(data)

    }
    catch(error){
       res.status(500).json({error})
    }
})
app.get('*', (req, res) => {
    res.sendStatus("404")
})


app.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`)
})


