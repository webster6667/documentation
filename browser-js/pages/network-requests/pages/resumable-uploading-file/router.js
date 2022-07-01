import Router from 'express'
import UploadController from './controllers/UploadController'

const router = new Router()
router.post('/upload-chunk', UploadController.uploadChunk)

export default router;