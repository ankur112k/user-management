const express = require('express')
const { getData , createData , getSingleData , deleteData , updateData } = require('../controllers/dataController')

const router = express.Router()

// get all expenses
router.get('/' , getData)

// post routes
router.post('/' , createData)

// get single expense
router.get('/:id' , getSingleData)

//delete expense
router.delete('/:id' , deleteData)

// update expenses
router.patch('/:id' , updateData)



module.exports = router