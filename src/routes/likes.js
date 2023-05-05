const express=require('express')
const router=express.Router();
const Blog = require("../models/Blogmodel");

router.post('/blogs/:title/like',async(req,res)=>{
       const blog=await Blog.findOne({title:req.params.title});
       if(!blog){
            res.send("Blog not found!")
       }
       else{
            blog.likes+=1;
            await blog.save();
            res.send("Liked the blog")
       }
});

module.exports=router