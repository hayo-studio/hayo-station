import {Document, Model, Schema, Types, model} from 'mongoose'
import {IAttachmentModel} from './Attachment'

const ObjectId = Schema.Types.ObjectId

const ArticleSchema = new Schema({
  // 内容
  content: {type: String, required: true, trim: true},
  // 附件
  attachments: [{type: ObjectId, ref: 'Attachment'}]
}, {
  timestamps: true
})

export interface IArticle extends Document {
  content: String,
  attachements: Types.ObjectId[] | IAttachmentModel[]
}

export interface IArticleModel extends Model<IArticle> {}

export default  model<IArticle, IArticleModel>('Article', ArticleSchema)
