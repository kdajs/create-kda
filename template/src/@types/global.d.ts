import 'kda'
import utils from '../utils'
import { Models } from '../models'

interface CustomState {
  // models: Models
  utils: typeof utils
}

declare global {
  export const enum NODE_ENV {
    Development = 'development',
    Test = 'test',
    Production = 'production'
  }

  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined
      NODE_ENV: NODE_ENV
    }
  }
}
