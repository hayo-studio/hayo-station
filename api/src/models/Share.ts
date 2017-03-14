import {Document, Model, Schema, Types, model} from 'mongoose'
import {IEntry} from './Entry'
const ObjectId = Schema.Types.ObjectId

const ShareSchema = new Schema({
  // 对象
  entry: {type: ObjectId, ref: 'Entry', required: true},
  // 链接
  url: {type: String, required: true, trim: true},
  // 是否原创
  original: {type: Boolean, default: false}
}, {
  timestamps: true
})

export interface IShare extends Document {
  entry: Types.ObjectId | IEntry,
  url: String,
  original: Boolean
}

export interface IShareModel extends Model<IShare> {}

export default  model<IShare, IShareModel>('Share', ShareSchema)
