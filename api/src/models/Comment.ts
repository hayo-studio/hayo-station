import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const CommentSchema = new Schema({
  // 评论对象
  entry: {type: ObjectId, ref: 'Entry', required: true},
  // 评论人
  user: {type: ObjectId, ref: 'User', required: true},
  // 评论内容
  content: {type: String, trim: true, required: true},
  // 提及
  mentions: [{type: ObjectId, ref: 'User'}],
  // 点赞
  praises: [{type: ObjectId, ref: 'CommentPraise'}],
  // 举报
  reports: [{type: ObjectId, ref: 'CommentReport'}]
}, {
  timestamps: true
})

export default  model('Comment', CommentSchema)
