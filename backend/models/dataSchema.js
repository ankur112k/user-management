const mongoose = require('mongoose')

const schema = mongoose.Schema

const dataSchema = new schema({
    first_name:{
        type : String,
        required : true
    },
    last_name:{
        type : String,
        required : true
    },
    email:{
        type : String, 
        required : true
    },
    gender:{
        type : String, 
        required : true
    },
    avatar:{
        type : String, 
        required : true
    },
    domain:{
        type : String, 
        required : true
    },
    available:{
        type : String, 
        required : true
    }
}, {timestapms : true})

module.exports = mongoose.model('DataSchema', dataSchema)