import { createRouter, createUploadController } from 'kda'
import Hello from './controllers/hello'
import Upload from './controllers/upload'
import { Test } from './controllers/udp'

const router = createRouter()
const uploadController = createUploadController()

router.get('/', Hello)
router.post('/upload', uploadController.single('file'), Upload)
router.udp('/udp/test', Test)

export default router
