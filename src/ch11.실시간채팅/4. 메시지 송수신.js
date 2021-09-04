// @ts-check

// 웹소켓 스태틱 마운트 연결

const Koa = require('koa')
const Pug = require('koa-pug')
const path = require('path')
const route = require('koa-route')
const serve = require('koa-static')
const mount = require('koa-mount')
const websockify = require('koa-websocket')

const app = websockify(new Koa())
const PORT = 5000

// @ts-ignore
// eslint-disable-next-line no-new
new Pug({
  viewPath: path.resolve(`${__dirname}/../views`), // 상위폴더로 이동하기 위해 /..을 사용
  app,
})

app.use(mount('/public', serve('src/public'))) // /public 주소에 뒤에 요소를 마운트 퍼그가 스태틱파일과 연결

app.use(async (ctx) => {
  await ctx.render('koa_index')
})

// Using routes
app.ws.use(
  // 웹소캣 미들웨어는 .ws로 구현
  route.all('/ws', (ctx) => {
    // 해당 주소로 들어오면 처리
    // `ctx` is the regular koa context created from the `ws` onConnection `socket.upgradeReq` object.
    // the websocket is added to the context on `ctx.websocket`.
    // ctx.websocket.send('Hello World')
    ctx.websocket.on('message', (data) => {
      // do something with the message from client
      if (typeof data !== 'string') {
        return
      } // 데이터가 스트링일때만 수행하게끔 스트링이 아닐때 멈추도록
      const { userId, message } = JSON.parse(data)

      const { server } = app.ws

      if (!server) {
        return
      }

      server.clients.forEach((client) => {
        client.send(
          JSON.stringify({
            userId,
            message,
          })
        )
      })
    })
  })
)

app.listen(PORT)
