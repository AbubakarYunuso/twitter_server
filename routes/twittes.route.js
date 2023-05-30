const {Router} = require(`express`)
const {twittesController} = require('../controllers/twittes.controller.js')

const router = Router()

router.post('/twittes',twittesController.addTwitte)
router.get('/twittes',twittesController.getTwittes)
router.delete('/twittes/:id',twittesController.deleteTwitte)
router.patch('/twitter/:id',twittesController.updateTwitte)
router.patch('/twitte/:id/likes/:userId',twittesController.likeTwitte)

module.exports = router