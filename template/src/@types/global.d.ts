import  { State, Model, UDPSocketClient } from 'kda'
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

  interface Models {
    User: Model<User>
  }

  interface CommonState extends State {
    // models: Models
    utils: Utils
  }

  interface UDPSocketClients {
    Test: UDPSocketClient
  }

  interface HttpState extends CommonState {
    udpSocketClients: UDPSocketClients
  }
}
