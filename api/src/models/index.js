const mongoose = require('mongoose')
const config = require('../config')
const {createConnStr} = require('../libs/mongodbUtils')

mongoose.Promise = global.Promise
mongoose.connect(createConnStr(config.mongodb))
mongoose.connection.on('err', (err) => {
  console.log(err)
  process.exit(1)
})

const User = require('./User')
const HayoProfile = require('./HayoProfile')

/* eslint-disable comma-style */
module.exports = mongoose.Types.ObjectId
{ ObjectId
, User
, HayoProfile
}
