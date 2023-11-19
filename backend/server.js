require('dotenv').config()
const express = require('express')
const app = express()
const dataRoutes = require('./routes/userRoutes')
const connectDB = require('./db/mongoConnect')
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use((req , res , next) => {
    console.log(req.path , req.method)
    next()
})

app.use('/api/team' , dataRoutes)


const start = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log("server running on port 5000")
        })
        
    } catch (error) {
        console.log(error)
    }
}

start()