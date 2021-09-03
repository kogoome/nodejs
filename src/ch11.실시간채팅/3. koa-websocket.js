// @ts-check

// 웹소켓 사용

const Koa = require('koa')
const Pug = require('koa-pug')
const path = require('path')
const route = require('koa-route')
const websockify = require('koa-websocket')


const app = websockify(new Koa());
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

// Using routes
app.ws.use(route.all('/test/:id', (ctx)=>{
  // `ctx` is the regular koa context created from the `ws` onConnection `socket.upgradeReq` object.
  // the websocket is added to the context on `ctx.websocket`.
  ctx.websocket.send('Hello World');
  ctx.websocket.on('message', (message)=>{
    // do something with the message from client
        console.log(message);
  });
}));

app.listen(3000);


app.listen(PORT)

