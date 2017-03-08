import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const CommentReportSchema = new Schema({
  // 举报人
  user: {type: ObjectId, ref: 'User', required: true},
  // 举报评论
  comment: {type: ObjectId, ref: 'Comment', required: true},
  // 描述
  desc: {type: String, trim: true}
}, {
  timestamps: true
})

export default  model('CommentReport', CommentReportSchema)
