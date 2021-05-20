import { Controller } from 'kda'

const Hello: Controller<CustomState> = async ctx => {
  ctx.body = `${ctx.state.utils.now()} - Hello, KDA!`
}

export default Hello
