const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    commentUser:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    commentText:String,
    twitteComment:mongoose.SchemaTypes.ObjectId
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment