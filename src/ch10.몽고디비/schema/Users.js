const mongoose = require('mongoose')

const Schema = mongoose.Schema()

const Users = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    require: true,
  },
  // uploadvideo: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'video',
  // },
})

// const users = new Schema({
//   id: { type: Schema.Types.ObjectId },
//   email: { type: String, required: true, unique: true, lowercase: true },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 8,
//     maxlength: 20,
//   },
//   nickname: { type: String, require: true },
//   profileImgKey: { type: String },
//   userinfo: { type: String },
//   count: {
//     following_count: { type: Number },
//     follower_count: { type: Number },
//     board_count: { type: Number },
//     newMsg_count: { type: Number },
//   },
//   created_at: { type: Date },
//   updated_at: { type: Date },
//   article_private: { type: Boolean },
// })

// const article = new mongoose.Schema({
//   id: Schema.Types.ObjectId,
//   writer_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
//   content: {
//     images: [
//       {
//         img_id: { type: Number },
//         img_name: { type: String },
//       },
//     ],
//     title: { type: String },
//     text: { type: String },
//   },
//   tag: [{ type: String }],
//   created_at: { type: Date },
// })


module.exports = mongoose.model('Users',Users)