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
      DB_HOST: string
      DB_PORT: string
      DB_USERNAME: string
      DB_PASSWORD: string
      DB_DATABASE: string
      SERVER_PORT: string
    }
  }
}
