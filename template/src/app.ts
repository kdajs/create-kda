import '@/router'
// import models from '@/models'
import utils from '@/utils'
import clients from '@/clients'
import { createServer } from 'kda'

createServer({ utils, clients }).start(parseInt(process.env.SERVER_PORT))
