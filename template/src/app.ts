import './router'
// import models from './models'
import utils from './utils'
import clients from './clients'
import { createStore, createServer } from 'kda'

createStore({ utils })
createServer().start(3000, clients)
