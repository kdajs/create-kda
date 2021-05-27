import 'kda'
// import models from '../models'
import utils from '../utils'

declare module 'kda' {
  interface CustomStore {
    // models: typeof models
    utils: typeof utils
  }
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
