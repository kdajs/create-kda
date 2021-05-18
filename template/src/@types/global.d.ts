import  { State, Model, UDPSocketClient } from 'kda'
import User from '../models/user'

export const enum NODE_ENV {
  Development = 'development',
  Test = 'test',
  Production = 'production'
}

export interface Utils {
  now: () => string
  today: () => string
  uuid: () => string
  jsonSchemaValidator: (data: any, schema: object) => string | undefined
}

export interface Models {
  User: Model<User>
}

export interface UDPSocketClients {
  Test: UDPSocketClient
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined
      NODE_ENV: NODE_ENV
    }
  }

  interface CommonState extends State {
    // models: Models
    utils: Utils
  }

  interface HttpState extends CommonState {
    udpSocketClients: UDPSocketClients
  }
}
