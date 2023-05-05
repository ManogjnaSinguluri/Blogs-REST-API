const mongoose= require('mongoose')
const viewschema = mongoose.Schema(
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

const views = mongoose.model('Likes',likeschema);
module.exports = views;