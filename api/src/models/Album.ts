import {Document, Model, Schema, Types, model} from 'mongoose'
import {IPhoto} from './Photo'
import {IEntry} from './Entry'

const ObjectId = Schema.Types.ObjectId

const AlbumSchema = new Schema({
  // 对象
  entry: {type: ObjectId, ref: 'Entry', required: true},
  // 图片
  photos: [{type: ObjectId, ref: 'Photo'}]
}, {
  timestamps: true
})

export interface IAlbum extends Document {
  entry: Types.ObjectId | IEntry,
  photos: Types.ObjectId[] | IPhoto[]
}

export interface IAlbumModel extends Model<IAlbum> {}

export default  model<IAlbum, IAlbumModel>('Album', AlbumSchema)
