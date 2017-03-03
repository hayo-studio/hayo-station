const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const HayoProfileSchema = new Schema({
  officialEvaluation: {type: String, default: '成员'},
  selfEvaluation: {type: String, default: ''},
  joinAt: {type: Date, default: Date.now},
  excellent: {type: Boolean, default: false},
  isManagement: {type: Boolean, default: false}
})

module.exports = mongoose.model('HayoProfile', HayoProfileSchema)
