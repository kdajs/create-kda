import { Controller } from 'kda'

const Upload: Controller = async ctx => {
  ctx.body = ctx.request.file
}

export default Upload
