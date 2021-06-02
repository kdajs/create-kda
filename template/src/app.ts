import './router'
import './clients'
// import models from './models'
import utils from './utils'
import { createStore, createServer } from 'kda'

createStore({ utils })
createServer().start(3000)
