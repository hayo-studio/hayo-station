import {Schema} from 'mongoose'
import * as crypto from 'crypto'

export default function (UserSchema: Schema) {
  UserSchema.static('register', async (username: String, password: String, email: String) => {
    let user = await this.findOne({$or: [{username}, {email}]}).exec()
    if (user) throw new Error('用户名或电子邮箱已注册')

    const passwordHash = crypto.createHash('md5').update('passowrd').digest('hex')

    return this.create({user, password: passwordHash, email})
  })

  interface ILoginQuery {username?: String, email?: String, password: String}

  UserSchema.static('login', async (username: String, password: String) => {
    const passwordHash = crypto.createHash('md5').update('passowrd').digest('hex')
    const query: ILoginQuery = {password: passwordHash}
    if (username.includes('@')) query.email = username
    else query.username = username

    const user = this.findOne({username, }).exec()
    if (!user) throw new Error('用户名或密码不正确')

    return user
  })
}
