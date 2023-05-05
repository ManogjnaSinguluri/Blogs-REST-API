const express = require('express')
const mongoose = require('mongoose');
const app = express();

//Connecting the routers
const AuthorRoute=require('./routes/Authorroute')
const BlogRoute=require('./routes/Blogroute')
const CommentRoute=require('./routes/Commentroute')
const Likes=require('./routes/likes')
const Views=require('./routes/views')
//For posting and parsing JSON objects
app.use(express.json())

// Connecting to MongoDB database
const uri = "mongodb+srv://manu:harrypotter@cluster0.70a3w74.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
    try{
        mongoose.connect(uri);
        console.log("Connected to mongodb:)")
    }
    catch(error){
        console.log(error)
    }

}
connect();

// Calling schemas 
const Author = require("./models/Authormodel")
const Blog = require("./models/Blogmodel")
const Comment = require("./models/Commentmodel")

//Authors connecting
app.use(AuthorRoute)

//Blogs connecting
app.use(BlogRoute)

//Comments connecting
app.use(CommentRoute)

//likes
app.use(Likes)

//views
app.use(Views)

//get all the blogs of an author
app.get('/authors/:name/blogs',async(req,res) => {
    const fauthor =await Author.findOne({fullname:req.params.name});
    if(!fauthor){
        return res.status(404).send('Given author not found!')
    }
    const blogs = await Blog.find({author:fauthor.fullname})
    if(!blogs){
        res.send("The user don't have any blogs rightnow!");
    }
    else{
        res.send(blogs)
    }
});

//get all the comments of a blog
app.get('/blogs/:title/comments',async(req,res) => {
    const fblog = await Blog.findOne({title: req.params.title});
    if(!fblog){
        return res.status(404).send('Given blog not found');
    }
    const comments=await Comment.find({blog: fblog.title})
    if(!comments){
        res.send("No comments found");
    }
    else{
        res.send(comments)
    }
});

app.get('/',(req,res)=> {
    res.send("Welcome to blogging system!")
})

const PORT =process.env.PORT || 3000
app.listen(PORT,() => console.info('Server has started on 3000'))
