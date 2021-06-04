import { createModels } from 'kda'
import config from './config'
import User from './models/user'

export default await createModels({
  ...config.DB,
  entities: {
    User
  }
})
