import {Document, Model, Schema, Types, model} from 'mongoose'
import {NotificationTypes, getNames} from './enums'
import {IUserModel} from './User'
import {IFavoriteModel} from './Favorite'
import {ICommentPraiseModel} from './CommentPraise'
import {IEntryPraiseModel} from './EntryPraise'
import {ICommentModel} from './Comment'

const ObjectId = Schema.Types.ObjectId

const NotificationSchema = new Schema({
  // 接受通知用户
  user: {type: ObjectId, ref: 'User', required: true},
  // 类型
  kind: {type: Number, enum: getNames(NotificationTypes), required: true},
  // 评论
  comment: {type: ObjectId, ref: 'Comment'},
  // 点赞
  entryPraise: {type: ObjectId, ref: 'EntryPraise'},
  // 评论点赞
  commentPraise: {type: ObjectId, ref: 'CommentPraise'},
  // 收藏
  favorite: {type: ObjectId, ref: 'Favorite'}
}, {
  timestamps: true
})

export interface INotification extends Document {
  user: Types.ObjectId | IUserModel,
  kind: NotificationTypes,
  comment: Types.ObjectId | ICommentModel,
  entryPraise: Types.ObjectId | IEntryPraiseModel,
  commentPraise: Types.ObjectId | ICommentPraiseModel,
  favorite: Types.ObjectId | IFavoriteModel
}

export interface INotificationModel extends Model<INotification> {}

export default  model<INotification, INotificationModel>('Notification', NotificationSchema)
