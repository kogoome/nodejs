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
  11: {
    nickname: 'foo',
  },
  12: {
    nickname: 'bar',
  },
}

userRouter.get('/', (req, res) => {
  res.send(`User list`)
})

userRouter.param('id', (req, res, next, value) => {
  // @ts-ignore
  req.user = USERS[value]
  next() // 4. 다음프로세스로 아이디정보를 넘김
})

// users/jack
userRouter.get('/:id', (req, res) => {
  const resMimeType = req.accepts(['json', 'html']) // 헤더에 요청을 명시

  if (resMimeType === 'json') {
    // @ts-ignore
    res.send(req.user) // 받은 유저 정보를 응답
  } else if (resMimeType === 'html') {
    res.render('user-profile', {
      nickname: req.user.nickname,
    })
  }
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
