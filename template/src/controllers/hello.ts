import { Controller } from 'kda'

const Hello: Controller = async ctx => {
  ctx.body = `${ctx.store.utils.now()} - Hello, KDA!`
}

export default Hello
