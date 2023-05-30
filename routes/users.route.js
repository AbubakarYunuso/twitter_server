const {Router} = require(`express`)
const {usersController} = require('../controllers/users.controller.js')

const router = Router()

router.post('/users',usersController.addUser)
router.get('/users',usersController.getUsers)
router.patch('/user/:id/save/:twitteId',usersController.addSavesUser)
router.get('/user/saves/:id',usersController.getUserSaves)
router.get('/users/:id',usersController.getUser)
router.patch('/users/:id',usersController.updateUser)
router.delete('/users/:id',usersController.deleteUser)

module.exports = router