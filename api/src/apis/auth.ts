import Circe from 'circe'
const router = new Circe.Router()

// 用户登录验证
router.post('/auth/login', Circe.checker({
  username: (ctx) => ctx.checkBody('username'),
  password: (ctx) => ctx.checkBody('password')
}), async (ctx) => {
  const {username, password} = ctx.vals

  const user = await ctx.$models.User.find({username, password}).exec()
  if (!user) return ctx.fail('用户名不存在或密码错误')

  const token = Circe.jwt.sign(ctx._.pick(user, ['_id', 'name']), ctx.$config.app.secret)
  ctx.success({token})
})

export default router
