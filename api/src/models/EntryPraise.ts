import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const EntryPraiseSchema = new Schema({
  // 点赞人
  user: {type: ObjectId, ref: 'User', required: true},
  // 点赞对象
  entry: {type: ObjectId, ref: 'Entry', required: true}
}, {
  timestamps: true
})

export default  model('EntryPraise', EntryPraiseSchema)
