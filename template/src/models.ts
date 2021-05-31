import { createModels, ModelsRepository } from 'kda'
import config from './config'
import User from './models/user'

export interface ModelsEntity {
  User: User
}

export default await createModels<ModelsEntity>({
  ...config.DB,
  entities: {
    User
  }
})
