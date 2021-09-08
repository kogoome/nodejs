// @ts-check

// 몽구스 사용 디비연결

const mongoose = require('mongoose')
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.pjzwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(
  uri,
  {
    dbName: 'weeksom',
    // @ts-ignore
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.log('몽고디비 연결 에러', error)
    } else {
      console.log('몽고디비 연결 성공')
    }
  }
)

module.exports = mongoose
// mongoose.connection.on('error', (error) => {
//   console.error('몽고디비 연결 에러', error)
// })

// mongoose.connection.on('disconnected', () => {
//   console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.')
//   connect()
// })
