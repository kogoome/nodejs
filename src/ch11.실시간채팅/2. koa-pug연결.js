// @ts-check

// 퍼그연결

const Koa = require('koa')
const Pug = require('koa-pug')
const path = require('path')

const app = new Koa()
const PORT = 5000

// @ts-ignore
// eslint-disable-next-line no-new
new Pug({
  viewPath: path.resolve(`${__dirname}/../views`), // 상위폴더로 이동하기 위해 /..을 사용
  app,
})

app.use(async (ctx) => {
  await ctx.render('koa_index')
})
app.listen(PORT)
