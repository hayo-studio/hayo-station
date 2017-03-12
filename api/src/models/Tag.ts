import {Document, Model, Schema, Types, model} from 'mongoose'

const ObjectId = Schema.Types.ObjectId

const TagSchema = new Schema({
  title: {type: String, required: true}
}, {
  timestamps: true
})

export interface ITag extends Document {
  title: String
}

export interface ITagModel extends Model<ITag> {}

export default  model<ITag, ITagModel>('Tag', TagSchema)
