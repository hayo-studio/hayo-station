import * as Circe from 'circe'
const router = new Circe.Router()

// 添加用户
router.post('/users', Circe.checker({
    username: (ctx) => ctx.checkBody('username').match(/^[0-9a-zA-Z]{6,20}$/, '用户名格式不正确'),
    password: (ctx) => ctx.checkBody('password').match(/^[0-9a-zA-Z]{6,20}$/, '密码格式不正确'),
    email: (ctx) => ctx.checkBody('email').match(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '电子邮箱格式不正确')
}), async (ctx: IContext) => {
    const {username, password, email} = ctx.vals
    try {
      const user = await ctx.$models.User.register(username, password, email)
      ctx.success({user: ctx._.pick(user, ['username', 'email'])})
    } catch (err) {
      ctx.fail(err.message)
    }
})

export default router
