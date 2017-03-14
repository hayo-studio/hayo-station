import {Document, Model, Schema, Types, model} from 'mongoose'
import {IAttachment} from './Attachment'
import {IEntry} from './Entry'

const ObjectId = Schema.Types.ObjectId

const ArticleSchema = new Schema({
  // 对象
  entry: {type: ObjectId, ref: 'Entry', required: true},
  // 内容
  content: {type: String, required: true, trim: true},
  // 附件
  attachments: [{type: ObjectId, ref: 'Attachment'}]
}, {
  timestamps: true
})

export interface IArticle extends Document {
  entry: Types.ObjectId | IEntry,
  content: String,
  attachements: Types.ObjectId[] | IAttachment[]
}

export interface IArticleModel extends Model<IArticle> {}

export default  model<IArticle, IArticleModel>('Article', ArticleSchema)
