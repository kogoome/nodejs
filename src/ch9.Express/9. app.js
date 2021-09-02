// @ts-check

/* eslint-disable no-console */

const express = require('express')

const app = express() // 익스프레스 객체 생성
app.use(express.json()) // json 파싱
app.set('views', 'src/views') // 뷰페이지 경로설정
app.set('view engine', 'pug') // 퍼그사용

const userRouter = require('./routers/user')

app.use('/users', userRouter)
app.use('/public', express.static('src/public')) // css 반영.

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // 에러 핸들링 (스택트레이스처리)
  res.statusCode = err.statusCode || 500 // 받아온 상태코드를 출력하거나 없다면 500처리
  res.send(err.message)
})

// app.listen 은 테스트 중에도 실행되서 테스트종료가 불가능 -> 분리필요

module.exports = app
