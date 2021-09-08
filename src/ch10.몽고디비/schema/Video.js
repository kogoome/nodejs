const mongoose = require('mongoose')

const Schema = mongoose.Schema()

const Video = new Schema({
  _id: Schema.Types.ObjectId,
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    require: true,
  },
  title: {
    type: String,
    maxlength: 50,
  },
  description: {
    type: String,
  },
})

module.exports = mongoose.model('Video',Video)
