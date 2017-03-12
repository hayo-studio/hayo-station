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
export {default as Album} from './Album'
export {default as Article} from './Article'
export {default as BBSProfile} from './BBSProfile'
export {default as Favorite} from './Favorite'
export {default as Comment} from './Comment'
export {default as CommentPraise} from './CommentPraise'
export {default as CommentReport} from './CommentReport'
export {default as Entry} from './Entry'
export {default as EntryPraise} from './EntryPraise'
export {default as EntryReport} from './EntryReport'
export {default as HAYOProfile} from './HAYOProfile'
export {default as Notification} from './Notification'
export {default as Photo} from './Photo'
export {default as Share} from './Share'
export {default as User} from './User'

export * from './enums'
