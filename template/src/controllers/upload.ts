import { createController } from 'kda'

const Upload = createController(async ctx => {
  ctx.body = ctx.request.file
})

export default Upload
