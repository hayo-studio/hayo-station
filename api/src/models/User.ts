import {Document, Model, Schema, Types, model} from 'mongoose'
import extend from './extends/User'
import {IHAYOProfile} from './HAYOProfile'
import {IBBSProfile} from './BBSProfile'
import {IPhoto} from './Photo'
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
  // 是否管理员
  isAdmin: {type: Boolean, default: false},
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
  avatar: Types.ObjectId | IPhoto
  isAdmin: Boolean,
  haypProfile: Types.ObjectId | IHAYOProfile,
  bbsProfile: Types.ObjectId | IBBSProfile
}

export interface IUserModel extends Model<IUser> {
  register: (username: string, password: string, email: string) => IUser
}

export default model<IUser, IUserModel>('User', UserSchema)
