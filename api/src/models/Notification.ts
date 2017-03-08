import {Schema, model} from 'mongoose'
import * as _ from 'lodash'
import NotificationTypes from './enums/NotificationTypes'

const ObjectId = Schema.Types.ObjectId

const NotificationSchema = new Schema({
  // 接受通知用户
  user: {type: ObjectId, ref: 'User', required: true},
  // 类型
  kind: {type: Number, enum: _.values(NotificationTypes), required: true},
  // 评论
  comment: {type: ObjectId, ref: 'Comment'},
  // 点赞
  entryPraise: {type: ObjectId, ref: 'EntryPraise'},
  // 评论点赞
  commentPraise: {type: ObjectId, ref: 'CommentPraise'},
  // 收藏
  collection: {type: ObjectId, ref: 'Collection'}
}, {
  timestamps: true
})

export default  model('Notification', NotificationSchema)
