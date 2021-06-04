import { createRouter, createUploadController } from 'kda'
import Hello from './controllers/hello'
import { TestClientPath } from './@types/kda'
import { Test1, Test2 } from './controllers/udp'

const router = createRouter()
const uploadController = createUploadController()

router.get('/', Hello)
router.post('/upload', uploadController.single('file'), ctx => (ctx.body = ctx.request.file))
router.udp(TestClientPath.Test1, Test1)
router.udp(TestClientPath.Test2, Test2)
