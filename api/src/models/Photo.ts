import {Schema, model} from 'mongoose'
import * as _ from 'lodash'
import PhotoTypes from './enums/PhotoTypes'

const ObjectId = Schema.Types.ObjectId
const Mixed = Schema.Types.Mixed

const PhotoSchema = new Schema({
  // 链接
  url: {type: String},
  // 存储类型
  kind: {type: Number, enum: _.values(PhotoTypes), default: PhotoTypes.normal, required: true},
  // 存储细节
  meta: {type: Mixed}
}, {
  timestamps: true
})

export default  model('Photo', PhotoSchema)
