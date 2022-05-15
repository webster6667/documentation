import Router from 'express'
import UploadController from './controllers/UploadController'

const router = new Router()

router.post('/upload-entirely', UploadController.entirely)

export default router;