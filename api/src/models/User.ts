import {Schema, model} from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
  username: {type: String, required: true, index: true},
  password: {type: String, required: true},
  hayoProfile: {type: ObjectId, ref: 'HayoProfile'}
}, {
  timestamps: true
})

export default model('User', UserSchema)
