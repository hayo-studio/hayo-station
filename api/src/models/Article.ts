import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const ArticleSchema = new Schema({
  // 内容
  content: {type: String, required: true, trim: true},
  // 附件
  attachments: [{type: ObjectId, ref: 'Attachment'}]
}, {
  timestamps: true
})

export default  model('Article', ArticleSchema)
