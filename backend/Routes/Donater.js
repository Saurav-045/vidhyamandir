const express = require('express');
const router = express.Router();
const Donater= require("../models/Donater");
const { body, validationResult } = require('express-validator');

 
router.post("/createdonater", 
body('email').isEmail(),
body('firstname').isLength({ min: 3}),
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        await Donater.create({
            firstname:req.body.firstname ,
            lastname:req.body.lastname,
            email:req.body.email,
            contact:req.body.contact,
            profession:req.body.profession
        })
        res.json({success: true})
    } catch (error)
    {
        console.log(error);
        res.json({success: false});
    }
})

module.exports = router;