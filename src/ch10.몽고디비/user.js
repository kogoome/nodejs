// @ts-check

// const express = require('express')
const mongoose = require('mongoose')
const Users = require('./schema/Users')
const Video = require('./schema/Video') // 디비 컬렉션 정보 포함
const mongo = require('./0.mongo')
// const { Mongoose } = require('./mongoose')//디비연결정보가 들어잇는데 그냥 연결 되나
// const client = require('./mongo')

// const app = express()

async function main() {
  await mongo.connect()

  const users = new Users({
    _id: new mongoose.Types.ObjectId(),
    name: '알파카',
  })

  const video = new Video({
    _id: new mongoose.Types.ObjectId(),
    writer: users._id,
    title: '먹방',
    description: '쌀겨',
  })

  // // 컬렉션 연결
  // const users = client.db('weeksom').collection('users')
  // const video = client.db('weeksom').collection('video')

  // Reset
  // await users.deleteMany({})
  // await article.deleteMany({})

  // init
  // await users.insertMany([
  //   {
  //     email: 'test1@kakao.com',
  //     password: 'test1234#',
  //     nickname: '코끼리',
  //   },
  //   {
  //     email: 'test2@kakao.com',
  //     password: 'test1234#',
  //     nickname: '알파카',
  //   },
  //   {
  //     email: 'test3@kakao.com',
  //     password: 'test1234#',
  //     nickname: '물범',
  //   },
  // ])

  // 팔로우 업데이트
  // await users.updateOne(
  //   { email: 'test1@kakao.com' },
  //   { $set: { follow: ['test2@kakao.com'] } }
  // )
  // await users.updateOne(
  //   { email: 'test2@kakao.com' },
  //   { $set: { follower: ['test1@kakao.com'] } },
  //   { upsert: true }
  // )

  // 언팔로우 업데이트

  // 검색
  let cursor = users.find({})
  // 출력
  await cursor.forEach(console.log)

  // 검색
  cursor = video.find({})
  // 출력
  await cursor.forEach(console.log)

  // 연결종료
  await mongo.close()
}

main()
