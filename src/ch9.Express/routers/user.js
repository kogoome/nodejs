// @ts-check

const express = require('express')
const multer = require('multer')

const upload = multer({ dest: 'uploads/' })

const router = express.Router()

const USERS = {
  jack: {
    nickname: 'johnson',
    profileImagekey: undefined,
  },
  11: {
    nickname: 'foo',
    profileImagekey: undefined,
  },
  12: {
    nickname: 'bar',
    profileImagekey: undefined,
  },
}

router.get('/', (req, res) => {
  res.send(`User list`)
})

router.param('id', async (req, res, next, value) => {
  // 어싱크는 프로미스를사용하기때문에
  try {
    // 프로미스 캐치로 에러를 넘겨야한다
    const user = USERS[value]
    if (!user) {
      const err = new Error('User not found.') // 에러 객체를 만들고
      // @ts-ignore
      err.statusCode = 404 // 프로퍼티에 상태코드를 심어줌
      throw err // 에러 메시지는 잘 나오나 스택트레이스가 지저분
    }

    // @ts-ignore
    req.user = user
    next() // 4. 다음프로세스로 아이디정보를 넘김
  } catch (err) {
    next(err)
  }
})

// users/jack
router.get('/:id', (req, res) => {
  const resMimeType = req.accepts(['json', 'html']) // 헤더에 요청을 명시

  if (resMimeType === 'json') {
    // @ts-ignore
    res.send(req.user) // 받은 유저 정보를 응답
  } else if (resMimeType === 'html') {
    res.render('user-profile', {
      // @ts-ignore
      nickname: req.user.nickname,
      userId: req.params.id,
      // profileImageURL: '/uploads/ccb12c92b39993afcaad5c2f59862b4a', // 확인용
      // @ts-ignore
      profileImageURL: `/uploads/${req.user.profileImagekey}`,
    })
  }
})

router.post('/', (req, res) => {
  // register user
  res.send(`User registered`)
})

router.post(`/:id/nickname`, (req, res) => {
  // @ts-ignore
  const { user } = req
  const { nickname } = req.body

  user.nickname = nickname

  res.send(`User nickname updated : ${nickname}`)
})

router.post('/:id/profile', upload.single('profile'), (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.file)

  // @ts-ignore
  const { user } = req
  const { filename } = req.file
  user.profileImagkey = filename

  res.send(`User profile image uploaded : ${filename}`)
})

module.exports = router