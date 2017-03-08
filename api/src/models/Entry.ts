import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const entryTypes = ['Share', 'Article', 'Album']

const EntrySchema = new Schema({
  // 发布者
  user: {type: ObjectId, ref: 'User', required: true},
  // 类型
  kind: {type: String, default: 'Share', enum: entryTypes},
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
  collections: [{type: ObjectId, ref: 'Collection'}],
  // 举报
  reports: [{type: ObjectId, ref: 'EntryReport'}]
}, {
  timestamps: true
})

export default  model('Entry', EntrySchema)
