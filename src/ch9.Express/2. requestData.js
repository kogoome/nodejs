// @ts-check

/* eslint-disable no-console */

const express = require('express')

const app = express() // 익스프레스 앱 객체

const PORT = 5000

app.use('/', (req, res, next) => {
  console.log('middle ware1')
  const time = new Date() // 현재시간을 가져와
  // @ts-ignore
  req.time = time // 리퀘스트에 타임 프로퍼티로 넣고
  next() // 다음절차로 넘기면
})

/* 수많은 미들웨어들 */

app.use((req, res) => {
  console.log('middle ware2')
  // @ts-ignore
  res.send(`Hello Express!: Requested at = ${req.time}`) // 응답으로 출력
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listen port ${PORT}`)
})