const mongoose= require('mongoose')
const commschema = mongoose.Schema(
    {
       blog: {
           type: String,
           required:true
       },
       userinfo: {
        type: String,
        required:true
       }
    },
    {
        timestamps: true
    }
)

const Comment = mongoose.model('Comments',commschema);
module.exports = Comment;