const mongoose=require('mongoose')

const BlogSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }
})

const Blog=mongoose.model('Blog',BlogSchema)
module.exports=Blog