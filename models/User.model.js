const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName:String,
    isBloced:Boolean,
    saves:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'Twitte'
    }]
})
const User = mongoose.model('User', userSchema)

module.exports = User