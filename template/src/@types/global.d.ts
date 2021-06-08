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
}
