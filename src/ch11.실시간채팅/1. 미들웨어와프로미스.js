// @ts-check

const Koa = require('koa')

const app = new Koa()
const PORT = 5000

app.use(async (ctx, next) => {
  ctx.body = 'Hello World'
  await next() // 익스프레스와 차이점은 next가 프로미스를 반환
  ctx.body = `${ctx.body}\n -> 2. 이후 돌아와 남은 수행문 처리` // next처리가 완료되면 돌아온후 처리
})
app.use(async (ctx) => {
  ctx.body = `${ctx.body}\n -> 1. 넥스트 처리`
})
app.listen(PORT)
