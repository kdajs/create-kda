// import models from './models'
import router from './router'
import utils from './utils'
import clients from './clients'
import { createConfig, createState, createServer } from 'kda'

const config = createConfig()
const state = createState(config, { utils })

createServer({ state, router }).start(3000, clients)
