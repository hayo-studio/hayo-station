import {Schema, model} from 'mongoose'
import * as _ from 'lodash'
import EntryReportTypes from './enums/EntryReportTypes'

const ObjectId = Schema.Types.ObjectId

const EntryReportSchema = new Schema({
  // 举报人
  user: {type: ObjectId, ref: 'User', required: true},
  // 举报对象
  entry: {type: ObjectId, ref: 'Entry', required: true},
  // 类型
  kind: {type: Number, enum: _.values(EntryReportTypes), required: true},
  // 描述
  desc: {type: String, trim: true}
}, {
  timestamps: true
})

export default  model('EntryReport', EntryReportSchema)
