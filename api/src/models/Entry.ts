import {Document, Model, Schema, Types, model} from 'mongoose'
import {EntryTypes, getNames} from './enums'
import {IUserModel} from './User'
import {ITagModel} from './Tag'
import {ICommentModel} from './Comment'
import {IEntryPraiseModel} from './EntryPraise'
import {IFavoriteModel} from './Favorite'
import {IEntryReportModel} from './EntryReport'

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
  user: Types.ObjectId | IUserModel,
  kind: EntryTypes,
  title: String,
  desc: String,
  detail: Types.ObjectId,
  tags: Types.ObjectId[] | ITagModel[],
  comments: Types.ObjectId[] | ICommentModel[],
  praises: Types.ObjectId[] | IEntryPraiseModel[],
  favorites: Types.ObjectId[] | IFavoriteModel[],
  reports: Types.ObjectId[] | IEntryReportModel[]
}

export interface IEntryModel extends Model<IEntry> {}

export default  model<IEntry, IEntryModel>('Entry', EntrySchema)
