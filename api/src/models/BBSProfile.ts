import {Document, Model, Schema, Types, model} from 'mongoose'

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

export interface IBBSProfile extends Document {
  uid: String,
  username: String,
  avatar: String,
  joinAt: Date
}

export interface IBBSProfileModel extends Model<IBBSProfile> {}

export default  model<IBBSProfile, IBBSProfileModel>('BBSProfile', BBSProfileSchema)
