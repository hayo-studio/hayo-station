import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const CommentPraiseSchema = new Schema({
  // 点赞人
  user: {type: ObjectId, ref: 'User', required: true},
  // 点赞评论
  comment: {type: ObjectId, ref: 'Comment', required: true}
}, {
  timestamps: true
})

export default  model('CommentPraise', CommentPraiseSchema)
