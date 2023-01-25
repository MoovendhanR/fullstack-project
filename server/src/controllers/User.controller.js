const express = require('express');
const User = require('../models/User.model');
const router =express.Router();

router.get("/",async(req, res)=>{
    try{
         const users = await User.find().lean().exec();
         res.status(200).send({users: users});
    }catch(err){
        res.status(500).send({message: err.message});
    }
})


router.post("/",async(req, res)=>{
    try{
         const user = await User.create(req.body);
         res.status(200).send({user: user});
    }catch(err){
        res.status(500).send({message: err.message});
    }
})
router.get("/:id",async(req, res)=>{
    try{
         const user = await User.findById(req.params.id).lean().exec();
         res.status(200).send({user: user});
    }catch(err){
        res.status(500).send({message: err.message});
    }
})


router.patch("/:id",async(req, res)=>{
    try{
         const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
         res.status(200).send({user: user});
    }catch(err){
        res.status(500).send({message: err.message});
    }
})

router.delete("/:id",async(req, res)=>{
    try{
         const user = await User.findByIdAndDelete(req.params.id).lean().exec();
         res.status(200).send({user: user});
    }catch(err){
        res.status(500).send({message: err.message});
    }
})

module.exports = router;