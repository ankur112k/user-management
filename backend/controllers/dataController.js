const DataSchema = require('../models/dataSchema')
const mongoose = require('mongoose')
//get all data 

const getData = async (req , res) => {

    const { domain , gender , available} = req.query
    const queryObject = {}

    if(domain){
        queryObject.domain = { $regex : domain, $options : "i" };
    }
    if(gender){
        queryObject.gender = gender;
    }
    if(available){
        queryObject.available = available;
    }
    

    const data = await DataSchema.find(queryObject).sort({createdAt: -1})
    res.status(200).json(data)


}

// get Single data

const getSingleData = async (req , res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"No Data Found"})
    }
    const data = await DataSchema.findById(id)
    if(!data){
        res.status(404).json({error:"No Expense Found"})
    }
    res.status(200).json(data)
}

// create data

const createData = async (req , res) => {
    const { first_name , last_name , email , gender , avatar , domain , available } = req.body
    try{
        const data = await DataSchema.create({ first_name , last_name , email , gender , avatar , domain , available })
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//delete data

const deleteData = async (req , res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"No data Found"})
    }
    const data = await DataSchema.findOneAndDelete({_id : id})
    if(!data){
        res.status(404).json({error:"No data Found"})
    }
    res.status(200).json(data)
}

// update data
const updateData = async (req , res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"No Data Found"})
    }
    const data = await DataSchema.findOneAndUpdate({_id : id},{
        ...req.body
    })
    res.status(200).json(data)
}



module.exports = {
    getData,
    getSingleData,
    updateData,
    deleteData,
    createData
}