import { createModels } from 'kda'
import User from './models/user'

const testConfig = {
  host: 'test.test.com',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test'
}

const productionConfig = {
  host: 'test.test.com',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test'
}

const getConfig = (): {
  host: string
  port: number
  username: string
  password: string
  database: string
} => {
  switch (process.env.NODE_ENV) {
    case NODE_ENV.Production:
      return productionConfig
    default:
      return testConfig
  }
}

export default async function (): Promise<Models> {
  return await new Promise(resolve => {
    resolve(createModels<Models>({
      ...getConfig(),
      entities: {
        User
      }
    }))
  })
}
