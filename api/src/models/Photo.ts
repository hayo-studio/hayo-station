import {Document, Model, Schema, Types, model} from 'mongoose'
import {PhotoTypes, getNames} from './enums'

const ObjectId = Schema.Types.ObjectId
const Mixed = Schema.Types.Mixed

const PhotoSchema = new Schema({
  // 链接
  url: {type: String},
  // 存储类型
  kind: {type: Number, enum: getNames(PhotoTypes), default: PhotoTypes.normal, required: true},
  // 存储细节
  meta: {type: Mixed}
}, {
  timestamps: true
})

export interface IPhoto extends Document {
  url: String,
  kind: PhotoTypes,
  meta: any
}

export interface IPhotoModel extends Model<IPhoto> {}

export default  model<IPhoto, IPhotoModel>('Photo', PhotoSchema)
