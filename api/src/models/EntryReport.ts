import {Document, Model, Schema, Types, model} from 'mongoose'
import {EntryReportTypes, getNames} from './enums'
import {IUserModel} from './User'
import {IEntryModel} from './Entry'

const ObjectId = Schema.Types.ObjectId

const EntryReportSchema = new Schema({
  // 举报人
  user: {type: ObjectId, ref: 'User', required: true},
  // 举报对象
  entry: {type: ObjectId, ref: 'Entry', required: true},
  // 类型
  kind: {type: Number, enum: getNames(EntryReportTypes), required: true},
  // 描述
  desc: {type: String, trim: true}
}, {
  timestamps: true
})

export interface IEntryReport extends Document {
  user: Types.ObjectId | IUserModel,
  entry: Types.ObjectId | IEntryModel,
  kind: EntryReportTypes,
  desc: String
}

export interface IEntryReportModel extends Model<IEntryReport> {}

export default  model<IEntryReport, IEntryReportModel>('EntryReport', EntryReportSchema)
