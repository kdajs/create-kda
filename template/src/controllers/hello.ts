const Hello: Controller = async (ctx, next) => {
  ctx.body = `${ctx.state.utils.now()} - Hello, KDA!`
}

export default Hello
