import {Document, Model, Schema, Types, model} from 'mongoose'
import {IUserModel} from './User'
import {ICommentModel} from './Comment'

const ObjectId = Schema.Types.ObjectId

const CommentPraiseSchema = new Schema({
  // 点赞人
  user: {type: ObjectId, ref: 'User', required: true},
  // 点赞评论
  comment: {type: ObjectId, ref: 'Comment', required: true}
}, {
  timestamps: true
})

export interface ICommentPraise extends Document {
  user: Types.ObjectId | IUserModel,
  comment: Types.ObjectId | ICommentModel
}

export interface ICommentPraiseModel extends Model<ICommentPraise> {}

export default  model<ICommentPraise, ICommentPraiseModel>('CommentPraise', CommentPraiseSchema)
