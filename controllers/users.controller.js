const User = require("../models/User.model")

module.exports.usersController = {
    addUser:async (req,res)=>{
        try {
            await User.create({
                userName:req.body.userName,
                isBloced:req.body.isBloced
            })
            res.json('Пользователь добавлен')
        } catch (error) {
            res.json('При добавлении пользователя, произошла ошибка!!!')
        }
    },
    getUsers:async (req,res)=>{
        try {
            let users = await User.find({})
            res.json(users)
        } catch (error) {
            res.json('Произошла ошибка при  выводе пользователей ')
        }
    },
    getUserSaves:async (req,res)=>{
        try {
            let saves = await User.findById(req.params.id).populate('saves', '-_id -__v -likes')
            res.json(saves.saves)
        } catch (error) {
            res.json(`При выводе сохранений, произошла ошибка`)
        }
    },
    addSavesUser:async (req,res)=>{
        try {
            await User.findByIdAndUpdate(req.params.id ,{ $push: {saves: req.params.twitteId}})
            res.json(`Сохранено`)
        } catch (error) {
            res.json('Произошла ошибка')
        }
    },
    getUser: async(req,res)=>{
        try {
            let user = await User.findById(req.params.id)
            res.json(user)
        } catch (error) {
            res.json(`При выводе пользователя, произошла ошибка`)
        }
    },
    updateUser:async(req,res) =>{
        try {
            await User.findByIdAndUpdate(req.params.id,{
                userName:req.body.userName
            })
            res.json(`Ваш профиль был изменён`)
        } catch (error) {
            res.json(`При изменении, произошла ошибка`)
        }
    },
    deleteUser: async (req,res)=>{
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json(`Пользователь удалён))`)
        } catch (error) {
            res.json(`При удалении произошла ошибка`)
        }
    }
}