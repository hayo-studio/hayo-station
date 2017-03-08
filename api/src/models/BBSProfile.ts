import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const BBSProfileSchema = new Schema({
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

export default  model('BBSProfile', BBSProfileSchema)
