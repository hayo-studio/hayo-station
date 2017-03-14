import {Document, Model, Schema, Types, model} from 'mongoose'
import {IEntry} from './Entry'
import {IUser} from './User'
import {ICommentPraise} from './CommentPraise'
import {ICommentReport} from './CommentReport'

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

export interface IComment extends Document {
  entry: Types.ObjectId | IEntry,
  user: Types.ObjectId | IUser,
  content: String,
  mentions: Types.ObjectId[] | IUser[],
  praises: Types.ObjectId[] | ICommentPraise,
  reports: Types.ObjectId[] | ICommentReport
}

export interface ICommentModel extends Model<IComment> {}

export default  model<IComment, ICommentModel>('Comment', CommentSchema)
