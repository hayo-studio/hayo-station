import {Document, Model, Schema, Types, model} from 'mongoose'
import extend from './extends/User'
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
  // 用户名
  username: {type: String, required: true, index: true},
  // 密码
  password: {type: String, required: true},
  // 邮箱
  email: {type: String, required: true},
  // 头像
  avatar: {type: ObjectId, ref: 'Photo'},
  // HAYO
  hayoProfile: {type: ObjectId, ref: 'HAYOProfile'},
  // BBS
  bbsProfile: {type: ObjectId, ref: 'BBSProfile'}
}, {
  timestamps: true
})

extend(UserSchema)

export interface IUser extends Document {
  username: String,
  password: String,
  email: String,
  avatar: Types.ObjectId
}

export interface IUserModel extends Model<IUser> {
  register: () => any
}

export default model<IUser, IUserModel>('User', UserSchema)
