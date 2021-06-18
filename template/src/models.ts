import { createModels } from 'kda'
import User from '@/models/user'

export default await createModels({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  entities: {
    User
  }
})
