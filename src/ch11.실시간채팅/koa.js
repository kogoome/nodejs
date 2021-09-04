// @ts-check

// 디비 연결

const Koa = require('koa')
const Pug = require('koa-pug')
const path = require('path')
const route = require('koa-route')
const serve = require('koa-static')
const mount = require('koa-mount')
const websockify = require('koa-websocket')
const mongoClient = require('./mongo')

const app = websockify(new Koa())
const PORT = 5000

// @ts-ignore
// eslint-disable-next-line no-new
new Pug({
  // 퍼그연결
  viewPath: path.resolve(`${__dirname}/../views`),
  app,
})

// css, js마운트
app.use(mount('/public', serve('src/public')))
// 퍼그렌더링
app.use(async (ctx) => {
  await ctx.render('koa_index')
})

// eslint-disable-next-line no-underscore-dangle
const _client = mongoClient.connect() // 디비연결은 한번만

async function getChatsCollection() {
  const client = await _client // 연결객체를 프로미스로 사용
  return client.db('chat').collection('chats')
}

// Using routes
app.ws.use(
  route.all('/ws', async (ctx) => {
    // 메시지 받기전에 이전 채팅기록들 푸쉬
    const chatsCollection = await getChatsCollection() // 채팅디비연결
    const chatsCursor = chatsCollection.find(
      {},
      {
        sort: {
          createdAt: 1, // 오름차순으로 정렬
        },
      }
    )
    // 채팅디비 모든내용에 커서주고
    const chats = await chatsCursor.toArray() // 배열로 만들어서
    ctx.websocket.send(
      JSON.stringify({
        type: 'sync',
        payload: {
          chats,
        },
      })
    )

    ctx.websocket.on('message', async (data) => {
      // 채팅내용 푸쉬
      if (typeof data !== 'string') {
        return
      }

      /** 클라이언트.js에 정의된 챗데이터
       * @typedef Chat
       * @property {string} userId
       * @property {string} message
       */

      /** @type {Chat} */
      const chat = JSON.parse(data) // 받은 메시지 데이터를
      await chatsCollection.insertOne({
        ...chat,
        createdAt: new Date(),
      }) // 디비에 푸쉬

      const { userId, message } = chat
      const { server } = app.ws
      if (!server) {
        return
      }
      server.clients.forEach((client) => {
        client.send(
          JSON.stringify({
            type: 'chat',
            payload: {
              userId,
              message,
            },
          })
        )
      })
    })
  })
)

app.listen(PORT)
