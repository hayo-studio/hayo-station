import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const AlbumSchema = new Schema({
  // 图片
  photos: [{type: ObjectId, ref: 'Photo'}]
}, {
  timestamps: true
})

export default  model('Album', AlbumSchema)
