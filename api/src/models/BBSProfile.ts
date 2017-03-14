import {Document, Model, Schema, Types, model} from 'mongoose'
import {IUser} from './User'

const ObjectId = Schema.Types.ObjectId

const BBSProfileSchema = new Schema({
  // 用户
  user: {type: ObjectId, ref: 'User', required: true},
  // uid
  uid: {type: String, required: true},
  // 用户名
  username: {type: String, required: true},
  // 头像
  avatar: {type: String},
  // 注册时间
  joinAt: {type: Date}
}, {
  timestamps: true
})

export interface IBBSProfile extends Document {
  user: Types.ObjectId | IUser,
  uid: String,
  username: String,
  avatar: String,
  joinAt: Date
}

export interface IBBSProfileModel extends Model<IBBSProfile> {}

export default  model<IBBSProfile, IBBSProfileModel>('BBSProfile', BBSProfileSchema)
