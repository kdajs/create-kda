import controllers from './controllers'
import routerDelegates from './router.delegates'
import createModels from './models'
import utils from './utils'
import createUDPSocketClients from './udp.socket.clients'
import {
  createConfig,
  createLogger,
  createHttpServer,
  createWebsocket
} from 'kda'

const config = createConfig()
const logger = createLogger(config.path.log)
// const models = await createModels()
const commonState: CommonState = { config, logger, utils }
const udpSocketClients = createUDPSocketClients(commonState)
const httpState: HttpState = { ...commonState, udpSocketClients }

createHttpServer({
  state: httpState,
  controllers,
  routerDelegates
}, 3000)
