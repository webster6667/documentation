import Router from 'express'
import DataController from './controllers/DataController'

const router = new Router()
router.get('/data', DataController.getData)

export default router;