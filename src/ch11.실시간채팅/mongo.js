// @ts-check

const { MongoClient } = require('mongodb')
// const { mainModule } = require('process')

const uri =
  'mongodb+srv://kogoome:1231@cluster0.pjzwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = client