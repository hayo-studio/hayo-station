const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
  username: {type: String, required: true, index: true},
  password: {type: String, required: true},
  hayoProfile: {type: ObjectId, ref: 'HayoProfile'}
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
