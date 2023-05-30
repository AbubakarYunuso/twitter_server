const Twitte = require("../models/Twitte.model")
const Comment = require('../models/Comment.model')

module.exports.twittesController={
    addTwitte: async (req,res)=>{
        try {
            await Twitte.create({
                twitteHead:req.body.twitteHead,
                twitteText:req.body.twitteText,
                twitteAuthors:req.body.twitteAuthors
                })
            res.json('Твит добавлен')
        } catch (error) {
            res.json(`При добавлении твита, произошла ошибка!!!`)
        }
    },
    getTwittes:async (req,res)=>{
        try {
            let twittes = await Twitte.find({}).populate('twitteAuthors', '-_id userName')
            res.json(twittes)
        } catch (error) {
            res.json("Ошибка при выводе")
        }
    },
    deleteTwitte: async (req,res)=>{
        try {
            await Twitte.findByIdAndDelete(req.params.id)
            await Comment.deleteMany({twitteComment:req.params.id})
            res.json(`Твит удалён`)
        } catch (error) {
            res.json(`Произошла ошибка`)
        }
    },
    updateTwitte:async (req,res)=>{
        try {
            await Twitte.findByIdAndUpdate({
                twitteHead:req.body.twitteHead,
                twitteText:req.body.twitteText,
            })
            res.json('Твит изменён')
        } catch (error) {
            res.json("Ошибка при изменении")
        }
    },
    likeTwitte:async(req,res)=> {
        try {
            await Twitte.findByIdAndUpdate(req.params.id,{$push:{likes: req.params.userId}})
            res.json('Понравилось')
        } catch (error) {
            res.json('Ошибка')
        }
    },

}