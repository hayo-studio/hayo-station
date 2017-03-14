import {Document, Model, Schema, Types, model} from 'mongoose'
import {IUser} from './User'
import {IComment} from './Comment'

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

export interface ICommentReport extends Document {
  user: Types.ObjectId | IUser,
  comment: Types.ObjectId | IComment
}

export interface ICommentReportModel extends Model<ICommentReport> {}

export default  model<ICommentReport, ICommentReportModel>('CommentReport', CommentReportSchema)
