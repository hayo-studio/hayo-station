import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const ShareSchema = new Schema({
  // 链接
  url: {type: String, required: true, trim: true},
  // 是否原创
  original: {type: Boolean, default: false}
}, {
  timestamps: true
})

export default  model('Share', ShareSchema)
