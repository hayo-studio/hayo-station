import {Schema, model} from 'mongoose'
import * as _ from 'lodash'
import EntryTypes from './enums/EntryTypes'

const ObjectId = Schema.Types.ObjectId

const EntrySchema = new Schema({
  // 发布者
  user: {type: ObjectId, ref: 'User', required: true},
  // 类型
  kind: {type: String, enum: _.values(EntryTypes), required: true},
  // 标题
  title: {type: String, required: true, trim: true},
  // 简述
  desc: {type: String},
  // 详情
  detail: {type: ObjectId, refPath: 'kind'},
  // 标签
  tags: [{type: ObjectId, ref: 'Tag'}],
  // 评论
  comments: [{type: ObjectId, ref: 'Comment'}],
  // 点赞
  praises: [{type: ObjectId, ref: 'EntryPraise'}],
  // 收藏集
  favorites: [{type: ObjectId, ref: 'Favorite'}],
  // 举报
  reports: [{type: ObjectId, ref: 'EntryReport'}]
}, {
  timestamps: true
})

export default  model('Entry', EntrySchema)
