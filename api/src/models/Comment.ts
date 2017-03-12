import {Document, Model, Schema, Types, model} from 'mongoose'
import {IEntryModel} from './Entry'
import {IUserModel} from './User'
import {ICommentPraiseModel} from './CommentPraise'
import {ICommentReportModel} from './CommentReport'

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
  entry: Types.ObjectId | IEntryModel,
  user: Types.ObjectId | IUserModel,
  content: String,
  mentions: Types.ObjectId[] | IUserModel[],
  praises: Types.ObjectId[] | ICommentPraiseModel,
  reports: Types.ObjectId[] | ICommentReportModel
}

export interface ICommentModel extends Model<IComment> {}

export default  model<IComment, ICommentModel>('Comment', CommentSchema)
