const {Router} = require(`express`)
const {commentsController} = require('../controllers/comments.controller.js')

const router = Router()

router.post('/comments',commentsController.addComment)
router.get('/comments/twitte/:id',commentsController.getComments)
router.delete('/comments/:id',commentsController.deleteCom)
router.patch('/comments/:id',commentsController.updateCom)

module.exports = router