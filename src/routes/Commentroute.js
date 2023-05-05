const express=require('express')
const router=express.Router();
const Comment = require("../models/Commentmodel");
router.get('/comments',async(req,res) => {
    const comments = await Comment.find();
    res.send(comments);
});

router.get('/comments/:userinfo',async(req,res) => {
    const comments = await Comment.findOne({userinfo:req.params.userinfo});
    res.send(comments);
});

router.post('/comments',async(req,res) => {
    try{
        const comment = await Comment.create(req.body);
        res.status(200).json(comment);
        }
        catch(error){
        console.log(error);
        }
});

router.put('comments/:id',async(req,res) => {
    const comment = await Comment.findOneandUpdate(req.params.id,req.body);
    res.send(comment);
});

router.delete('/comments/:id',async(req,res) => {
    const comment = await Comment.findByIdandDelete(req.params.id);
    res.send("Comment is deleted");
});

 module.exports=router