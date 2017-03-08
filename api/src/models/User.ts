import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
  // 用户名
  username: {type: String, required: true, index: true},
  // 密码
  password: {type: String, required: true},
  // 头像
  avatar: {type: ObjectId, ref: 'Photo'},
  // HAYO
  hayoProfile: {type: ObjectId, ref: 'HAYOProfile'},
  // BBS
  bbsProfile: {type: ObjectId, ref: 'BBSProfile'}
}, {
  timestamps: true
})

export default model('User', UserSchema)
