import {Document, Model, Schema, Types, model} from 'mongoose'
import {IUser} from './User'
import {IEntry} from './Entry'
const ObjectId = Schema.Types.ObjectId

const FavoriteSchema = new Schema({
  // 标题
  title: {type: String, trim: true, required: true},
  // 描述
  desc: {type: String, trim: true},
  // 作者
  user: {type: ObjectId, ref: 'User', required: true},
  // 收藏对象
  entries: [{type: ObjectId, ref: 'Entry'}]
}, {
  timestamps: true
})

export interface IFavorite extends Document {
  title: String,
  desc: String,
  user: Types.ObjectId | IUser,
  entries: Types.ObjectId[] | IEntry[]
}

export interface IFavoriteModel extends Model<IFavorite> {}

export default  model<IFavorite, IFavoriteModel>('Favorite', FavoriteSchema)
