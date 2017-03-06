import {Mongoose, Types} from 'mongoose'
import config from '../config'
import {createConnStr} from '../libs/mongodbUtils'

const mongoose = new Mongoose()

mongoose.Promise = global.Promise
mongoose.connect(createConnStr(config.mongodb))
mongoose.connection.on('err', (err) => {
  console.log(err)
  process.exit(1)
})

export const ObjectId  = Types.ObjectId
export {default as User} from './User'
export {default as HayoProfile} from './HayoProfile'
