import {Document, Model, Schema, Types, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const HAYOProfileSchema = new Schema({
  // 官方评价（职称）
  officialEvaluation: {type: String, default: '成员'},
  // 个人评价
  selfEvaluation: {type: String, default: ''},
  // 加入时间
  joinAt: {type: Date, default: Date.now},
  // 是否优秀
  excellent: {type: Boolean, default: false}
}, {
  timestamps: true
})

export interface IHAYOProfile extends Document {
  officialEvaluation: String,
  selEvaluation: String,
  joinAt: Date,
  excellent: Boolean
}

export interface IHAYOProfileModel extends Model<IHAYOProfile> {}

export default  model<IHAYOProfile, IHAYOProfileModel>('HAYOProfile', HAYOProfileSchema)
