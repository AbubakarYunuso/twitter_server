const mongoose = require(`mongoose`)

const twitteSchema = mongoose.Schema({
    twitteHead:String,
    twitteText:String,
    twitteAuthors:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    likes:[{
        type:mongoose.SchemaTypes.ObjectId
    }]
})

const Twitte = mongoose.model('Twitte',twitteSchema)

module.exports = Twitte