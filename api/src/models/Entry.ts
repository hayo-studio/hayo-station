import {Document, Model, Schema, Types, model} from 'mongoose'
import {EntryTypes, getNames} from './enums'
import {IUser} from './User'
import {ITag} from './Tag'
import {IComment} from './Comment'
import {IEntryPraise} from './EntryPraise'
import {IFavorite} from './Favorite'
import {IEntryReport} from './EntryReport'

const ObjectId = Schema.Types.ObjectId

const EntrySchema = new Schema({
  // 发布者
  user: {type: ObjectId, ref: 'User', required: true},
  // 类型
  kind: {type: String, enum: getNames(EntryTypes), required: true},
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

export interface IEntry extends Document {
  user: Types.ObjectId | IUser,
  kind: EntryTypes,
  title: String,
  desc: String,
  detail: Types.ObjectId,
  tags: Types.ObjectId[] | ITag[],
  comments: Types.ObjectId[] | IComment[],
  praises: Types.ObjectId[] | IEntryPraise[],
  favorites: Types.ObjectId[] | IFavorite[],
  reports: Types.ObjectId[] | IEntryReport[]
}

export interface IEntryModel extends Model<IEntry> {}

export default  model<IEntry, IEntryModel>('Entry', EntrySchema)
