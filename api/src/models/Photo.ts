import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId
const Mixed = Schema.Types.Mixed

const photoTypes = ['']

const PhotoSchema = new Schema({
  // 链接
  url: {type: String},
  // 存储类型
  kind: {type: String, enum: photoTypes, default: ''},
  // 存储细节
  meta: {type: Mixed}
}, {
  timestamps: true
})

export default  model('Photo', PhotoSchema)
