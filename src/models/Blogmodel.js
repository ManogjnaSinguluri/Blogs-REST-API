const mongoose= require('mongoose')
const blogschema = mongoose.Schema(
    {
       title: {
           type: String,
           required:true
       },
       content: {
        type: String,
        required:true
       },
       author: {
        type: String,
        required:true
       },
       likes:{
        type: Number,
        default:0
       },
       views:{
        type: Number,
        default:0
       }
    },
    {
        timestamps: true
    }
)

const Blog = mongoose.model('Blogs',blogschema);
module.exports= Blog;