import './router'
import './clients'
// import models from './models'
import utils from './utils'
import clients from './clients'
import { createServer } from 'kda'

createServer({ utils, clients }).start(3000)
