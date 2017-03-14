import {Document, Model, Schema, Types, model} from 'mongoose'
import {IUser} from './User'
import {IEntry} from './Entry'
const ObjectId = Schema.Types.ObjectId

const EntryPraiseSchema = new Schema({
  // 点赞人
  user: {type: ObjectId, ref: 'User', required: true},
  // 点赞对象
  entry: {type: ObjectId, ref: 'Entry', required: true}
}, {
  timestamps: true
})

export interface IEntryPraise extends Document {
  user: Types.ObjectId | IUser,
  entry: Types.ObjectId | IEntry
}

export interface IEntryPraiseModel extends Model<IEntryPraise> {}

export default  model<IEntryPraise, IEntryPraiseModel>('EntryPraise', EntryPraiseSchema)
