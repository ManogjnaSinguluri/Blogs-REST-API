const express=require('express')
const router=express.Router();
const Blog = require("../models/Blogmodel");
const { route } = require('./Authorroute');
router.get('/blogs',async(req,res) => {
    const blogs = await Blog.find();
    res.send(blogs);
});

router.get('/blogs/:title',async(req,res) => {
    const blog = await Blog.findOne({title:req.params.title});
    res.send(blog);
});

router.post('/blogs',async(req,res) => {
    try{
        const blog = await Blog.create(req.body);
        res.status(200).json(blog);
        }
        catch(error){
        console.log(error);
        }
});
router.put('/blogs/:title',async(req,res) => {
    const blog = await Blog.findOneandUpdate({title:req.params.title},req.body,{new:true});
    res.send(blog);
});
router.delete('/blogs/:title',async(req,res) => {
    const blog = await Blog.findByIdandDelete({title:req.params.title});
    res.send("Blog is deleted");
});

module.exports=router