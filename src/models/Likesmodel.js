const mongoose= require('mongoose')
const likeschema = mongoose.Schema(
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

const likes = mongoose.model('Likes',likeschema);
module.exports = likes;