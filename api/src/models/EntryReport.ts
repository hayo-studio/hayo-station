import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const entryReportTypes = ['Plagiarism', 'Violation', 'Other']

const EntryReportSchema = new Schema({
  // 举报人
  user: {type: ObjectId, ref: 'User', required: true},
  // 举报对象
  entry: {type: ObjectId, ref: 'Entry', required: true},
  // 类型
  kind: {type: String, enum: entryReportTypes, required: true},
  // 描述
  desc: {type: String, trim: true}
}, {
  timestamps: true
})

export default  model('EntryReport', EntryReportSchema)
