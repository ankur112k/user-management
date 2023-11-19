require('dotenv').config()
const connectDB = require('./db/mongoConnect')
const DataSchema = require('./models/dataSchema')

const jsonData = require('./db.json')

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        await DataSchema.create(jsonData)
        await DataSchema.deleteMany()
        console.log("success")
    }catch(error){
        console.log(error)
    }
}

start();