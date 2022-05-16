import Router from 'express'
import UploadController from './controllers/UploadController'
import PostsController from './controllers/PostsController'


const router = new Router()

router.post('/upload-entirely', UploadController.entirely)
router.get('/posts', PostsController.getAll)

export default router;