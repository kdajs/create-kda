import { createController } from 'kda'

const Hello = createController(async ctx => {
  ctx.body = `${ctx.utils.now()} - Hello, KDA!`
})

export default Hello
