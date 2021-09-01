// @ts-check

/* eslint-disable no-console */

const express = require('express')

const app = express() // 익스프레스 앱 객체

const PORT = 5000

app.use(
  '/',
  (req, res, next) => {
    console.log('middle ware1-1')
    setTimeout(() => {
      next() // 넥스트 메서드를 이용해 다음단계를 실행
    }, 1000)
  },
  (req, res, next) => { // use를 안써도 되고
    console.log('middle ware1-2')
    next()
  }
)

app.use((req, res) => { // 써도 된다. 
  console.log('middle ware2')
  res.send('Hello Express!')
})

app.use((req, res) => { // 이전에 next를 사용하지 않았으므로 수행 x
  console.log('middle ware3')
  res.send('Hello Express2!')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listen port ${PORT}`)
})