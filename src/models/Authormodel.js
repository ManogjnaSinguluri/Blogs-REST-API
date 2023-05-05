const mongoose= require('mongoose')
const authschema = mongoose.Schema(
    {
       fullname: {
           type: String,
           required:true
       },
       email: {
        type: String,
        required:true
       }
    },
    {
        timestamps: true
    }
)

const Author = mongoose.model('Authors',authschema);
module.exports = Author;