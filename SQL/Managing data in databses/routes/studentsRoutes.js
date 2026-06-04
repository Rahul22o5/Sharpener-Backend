const express=require('express')
const router = express.Router()
const {addEntries}=require('../controller/studentController')

router.post("/",addEntries)

module.exports=router