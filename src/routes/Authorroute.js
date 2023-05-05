const express=require('express')
const router=express.Router();
const Author = require("../models/Authormodel")
router.get('/authors', async (req, res) => {
    const authors = await Author.find();
    res.send(authors);
  });

router.get('/authors/:name', async (req,res) => 
{
    const author = await Author.findOne({fullname:req.params.name});
    res.send(author);
});

router.post('/authors', async(req,res) => 
{
    try{
    const author = await Author.create(req.body);
    res.status(200).json(author);
    }
    catch(error){
    console.log(error);
    }
});

router.put('/authors/:name', async (req,res) => 
{
    const author = await Author.findOneandUpdate({fullname:req.params.name},req.body);
    res.send(author);
});

router.delete('/authors/:name', async (req,res) => 
{
    const author = await Author.findOneandDelete({fullname:req.params.name});
    res.send("Author is deleted");
});
module.exports=router;