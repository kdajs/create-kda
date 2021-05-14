import KDA from 'kda'
import User from '../models/user'

export const enum NODE_ENV {
  Development = 'development',
  Test = 'test',
  Production = 'production'
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined
      NODE_ENV: NODE_ENV
    }
  }

  interface Utils {
    now: () => string
    today: () => string
    uuid: () => string
  }

  interface Models extends KDA.Models {
    User: KDA.Model<User>
  }

  interface CommonState extends KDA.State {
    // models: Models
    utils: Utils
  }

  // UDP Socket
  type UDPSocketClient = KDA.UDPSocketClient

  interface UDPSocketClients extends KDA.UDPSocketClients {
    Test: UDPSocketClient
  }

  // Http
  interface HttpState extends CommonState {
    udpSocketClients: UDPSocketClients
  }
}
