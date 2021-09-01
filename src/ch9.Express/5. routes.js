// @ts-check

/* eslint-disable no-console */

const express = require('express')

const userRouter = express.Router()

const app = express() // 익스프레스 앱 객체
app.use(express.json)

const PORT = 5000

userRouter.get('/', (req, res) => {
  res.send(`User list`)
})

const USERS = {
  jack: {
    nickname: 'johnson',
  },
}

userRouter.param('id', (req, res, next, value) => {
  // 2. 검출된 아이디정보로부터
  console.log(`id param :`, value) // 3. 절차를 수행하고
  // @ts-ignore
  req.user = USERS[value]
  next() // 4. 다음프로세스로 아이디정보를 넘김
})

userRouter.get('/', (req, res) => {
  res.send('print user-list')
})

userRouter.get('/:id', (req, res) => {
  // 1. 요청url에서 아이디가 존재하면
  console.log('userRouter get ID')
  // @ts-ignore
  res.send(req.user) // 받은 유저 정보를 응답
})

userRouter.post('/', (req, res) => {
  // register user
  res.send(`User registered`)
})

userRouter.post(`/:id/nickname`, (req, res) => {
  // res.body:{'nickname':}
  // @ts-ignore
  const { user } = req
  const { nickname } = req.body

  user.nickname = nickname

  res.send(`User nickname updated : ${nickname}`)
})

app.use('/users', userRouter)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listen port ${PORT}`)
})
