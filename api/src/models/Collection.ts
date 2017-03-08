import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const CollectionSchema = new Schema({
  // 标题
  title: {type: String, trim: true, required: true},
  // 描述
  desc: {type: String, trim: true},
  // 作者
  user: {type: ObjectId, ref: 'User', required: true},
  // 收藏对象
  entries: [{type: ObjectId, ref: 'Entry'}]
}, {
  timestamps: true
})

export default  model('Collection', CollectionSchema)
