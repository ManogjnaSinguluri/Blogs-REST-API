const express=require('express')
const router=express.Router();
const Blog = require("../models/Blogmodel");

router.post('/blogs/:title/view',async(req,res)=>{
       const blog=await Blog.findOne({title:req.params.title});
       if(!blog){
              res.send("Blog not found!")
       }
       else{
              blog.views+=1;
              await blog.save();
              res.send("Viewed the blog")
       }
});

module.exports=router