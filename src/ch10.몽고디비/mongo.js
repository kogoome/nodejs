// @ts-check

// 디비 연결 모듈

const { MongoClient } = require('mongodb')
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.pjzwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = client
