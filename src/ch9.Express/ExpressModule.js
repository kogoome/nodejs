// @ts-check

/* eslint-disable no-console */

const express = require('express')

const app = express() // 익스프레스 앱 객체

const PORT = 5000

app.use(
  '/',
  (req, res, next) => {
    console.log('middle ware1 => ')
    setTimeout(() => {
      next()
    }, 1000)
  },
  (req, res, next) => {
    console.log('middle ware1-2')
  }
)

app.use((req, res) => {
  console.log('middle ware2')
  res.send('Hello Express!')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listen port ${PORT}`)
})
