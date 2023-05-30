const Comment = require('../models/Comment.model')

module.exports.commentsController={
    addComment:async(req,res)=>{
        try {
            await Comment.create({
                commentUser:req.body.commentUser,
                commentText:req.body.commentText,
                twitteComment:req.body.twitteComment
            })
            res.json('Коммент добавлен')
        } catch (error) {
            res.json('Ошибка при добавлении')
        }
    },
    getComments:async (req,res)=> {
        try {
            let comments = await Comment.find({twitteComment:req.params.id})
            res.json(comments)
        } catch (error) {
            res.json('Ошибка при выводе')
        }
    },
    deleteCom:async(req,res)=>{
        try {
            await Comment.findByIdAndDelete(req.params.id)
            res.json('Комментарий удалён')
        } catch (error) {
            res.json('Произошла ошибка')
        }
    },
    updateCom:async (req,res)=>{
        try {
          await Comment.findByIdAndUpdate(req.params.id,{
            commentText:req.body.commentText
          })  
        } catch (error) {
            res.json('Ошибка при изменении')
        }
    }
}