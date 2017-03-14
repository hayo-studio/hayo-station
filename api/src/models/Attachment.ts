import {Document, Model, Schema, Types, model} from 'mongoose'
import {IArticle} from './Article'

const ObjectId = Schema.Types.ObjectId
const Mixed = Schema.Types.Mixed

const AttachmentSchema = new Schema({
  // 文章
  article: {type: ObjectId, ref: 'Article', required: true},
  // 链接
  url: {type: String},
  // 存储细节
  meta: {type: Mixed}
}, {
  timestamps: true
})

export interface IAttachment extends Document {
  article: Types.ObjectId | IArticle,
  url: String,
  meta: any
}

export interface IAttachmentModel extends Model<IAttachment> {}

export default  model<IAttachment, IAttachmentModel>('Attachment', AttachmentSchema)
