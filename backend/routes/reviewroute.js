const express=require('express')
const router =express.Router()
const {addReview,getallReview,deleteReview}=require('../Controller/ReviewController')

router.post("/add",addReview)
router.get("/all",getallReview)
router.post("/delete/:id",deleteReview)
module.exports =router