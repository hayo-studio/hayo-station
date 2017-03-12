import {Document, Model, Schema, Types, model} from 'mongoose'
import {IPhotoModel} from './Photo'

const ObjectId = Schema.Types.ObjectId

const AlbumSchema = new Schema({
  // 图片
  photos: [{type: ObjectId, ref: 'Photo'}]
}, {
  timestamps: true
})

export interface IAlbum extends Document {
  photos: Types.ObjectId[] | IPhotoModel[]
}

export interface IAlbumModel extends Model<IAlbum> {}

export default  model<IAlbum, IAlbumModel>('Album', AlbumSchema)
