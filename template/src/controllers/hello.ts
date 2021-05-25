import { createController } from 'kda'

const Hello = createController(async ctx => {
  ctx.body = `${ctx.store.utils.now()} - Hello, KDA!`
})

export default Hello
