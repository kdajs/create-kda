import { Controller } from 'kda'

const Hello: Controller<HttpState> = async ctx => {
  ctx.body = `${ctx.state.utils.now()} - Hello, KDA!`
}

export default Hello
