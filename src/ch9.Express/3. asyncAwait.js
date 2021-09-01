// @ts-check

/* eslint-disable no-console */

const express = require('express')
const fs = require('fs')

const app = express() // 익스프레스 앱 객체

const PORT = 5000

app.use('/', async (req, res, next) => { // 어웨잇 사용하려면 함수가 어싱크여야함
  console.log('middle ware1')

  const gitig = await fs.promises.readFile('.gitignore') // 파일 읽는 시간을 기다렷다가
  const time = new Date()
  // @ts-ignore
  req.time = time
  // @ts-ignore
  req.file = gitig // 리퀘스트에 전달
  next() // 다음 웨어로 넘겨서
})

/* 수많은 미들웨어들 */

app.use((req, res) => {
  console.log('middle ware2')
  res.send(
    // @ts-ignore
    `Hello Express!: Requested at ${req.time}, ${req.file}` // 출력
  )
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listen port ${PORT}`)
})