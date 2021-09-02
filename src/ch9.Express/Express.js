// @ts-check

/* eslint-disable no-console */

const express = require('express')
// const bodyParser = require('body-parser')

const userRouter = express.Router()

const app = express()
app.use(express.json())

app.set('views', 'src/views')
app.set('view engine', 'pug')
const PORT = 5000

const USERS = {
  jack: {
    nickname: 'johnson',
  },
}

userRouter.get('/', (req, res) => {
  res.send(`User list`)
})

userRouter.param('id', (req, res, next, value) => {
  // 2. 검출된 아이디정보로부터
  console.log(`id param :`, value) // 3. 절차를 수행하고
  // @ts-ignore
  req.user = USERS[value]
  next() // 4. 다음프로세스로 아이디정보를 넘김
})

userRouter.get('/:id', (req, res) => {
  const resMimeType = req.accepts('json', 'html')

  if (resMimeType === 'json') {
    // @ts-ignore
    res.send(req.user) // 받은 유저 정보를 응답
  } else if (resMimeType === 'html') {
    res.render('user-profile')
  }

  // 1. 요청url에서 아이디가 존재하면
  console.log('userRouter get ID')
})

userRouter.post('/', (req, res) => {
  // register user
  res.send(`User registered`)
})

userRouter.post(`/:id/nickname`, (req, res) => {
  // @ts-ignore
  const { user } = req
  const { nickname } = req.body

  user.nickname = nickname

  res.send(`User nickname updated : ${nickname}`)
})

app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.render('index', {
    msg: 'Hello Pug!',
  })
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listen port ${PORT}`)
})
