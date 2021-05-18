import { UDPSocketClients } from './@types/global.d'
import router from './router'
import createModels from './models'
import utils from './utils'
import {
  createConfig,
  createLogger,
  createHttpServer,
  createUDPSocketServer,
  createUDPSocketClient
} from 'kda'

const config = createConfig()
const logger = createLogger(config.path.log)
// const models = await createModels()
const commonState: CommonState = { config, logger, utils }

const udpSocketServer = createUDPSocketServer({
  state: commonState,
  port: 3001,
  router
})

const udpSocketClients: UDPSocketClients = {
  Test: createUDPSocketClient({
    server: udpSocketServer,
    port: 3001
  })
}

const httpState: HttpState = { ...commonState, udpSocketClients }

createHttpServer({
  state: httpState,
  router
}, 3000)
