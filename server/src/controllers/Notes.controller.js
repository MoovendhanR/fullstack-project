const express = require('express');
const uploads = require('../middlewares/upload.js');
const Notes = require('../models/Note.model.js');
const router =express.Router();

router.get("/",async(req, res)=>{
    try{
         const notes = await Notes.find().lean().exec();
         res.status(200).send({notes: notes});
    }catch(err){
        res.status(500).send({message: err.message});
    }
})


router.post("/",uploads.single("profilePic"),async(req, res)=>{
    try{
        console.log(req.body);
         const note = await Notes.create({
             title: req.body.title,
             notes: req.body.notes,
             category: req.body.category,
             profilePic:req.file.path,
         });
         res.status(200).send({note: note});
    }catch(err){
        res.status(500).send({message: err.message});
    }
})
router.get("/:id",async(req, res)=>{
    try{
         const note = await Notes.findById(req.params.id).lean().exec();
         res.status(200).send({note: note});
    }catch(err){
        res.status(500).send({message: err.message});
    }
})


router.patch("/:id",async(req, res)=>{
    try{
         const note = await Notes.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
         res.status(200).send({note: note});
    }catch(err){
        res.status(500).send({message: err.message});
    }
})

router.delete("/:id",async(req, res)=>{
    try{
         const note = await Notes.findByIdAndDelete(req.params.id).lean().exec();
        res.status(200).send({note: note});
    }catch(err){
        res.status(500).send({message: err.message});
    }
})

module.exports = router;