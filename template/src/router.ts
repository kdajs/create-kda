import { createRouter } from 'kda'
import Hello from './controllers/hello'
import { Test } from './controllers/udp'

const router = createRouter()

router.get('/', Hello)
router.udp('/udp/test', Test)

export default router
