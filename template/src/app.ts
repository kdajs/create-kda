// import models from './models'
import router from './router'
import utils from './utils'
import clients from './clients'
import { createStore, createServer } from 'kda'

const store = createStore({ utils })

createServer({ store, router }).start(3000, clients)
