import {Document, Model, Schema, Types, model} from 'mongoose'
import {NotificationTypes, getNames} from './enums'
import {IUser} from './User'
import {IFavorite} from './Favorite'
import {ICommentPraise} from './CommentPraise'
import {IEntryPraise} from './EntryPraise'
import {IComment} from './Comment'

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
  user: Types.ObjectId | IUser,
  kind: NotificationTypes,
  comment: Types.ObjectId | IComment,
  entryPraise: Types.ObjectId | IEntryPraise,
  commentPraise: Types.ObjectId | ICommentPraise,
  favorite: Types.ObjectId | IFavorite
}

export interface INotificationModel extends Model<INotification> {}

export default  model<INotification, INotificationModel>('Notification', NotificationSchema)
