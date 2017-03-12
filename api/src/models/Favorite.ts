import {Document, Model, Schema, Types, model} from 'mongoose'
import {IUserModel} from './User'
import {IEntryModel} from './Entry'
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
  user: Types.ObjectId | IUserModel,
  entries: Types.ObjectId[] | IEntryModel[]
}

export interface IFavoriteModel extends Model<IFavorite> {}

export default  model<IFavorite, IFavoriteModel>('Favorite', FavoriteSchema)
