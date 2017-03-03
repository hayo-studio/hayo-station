const path = require('path')
global.Promise = require('bluebird')

const config = require('./config')
const lodash = require('lodash')
const models = require('./models')

const Circe = require('circe')
const circe = new Circe()

circe.use(Circe.onError((err, ctx) => {
  ctx.status = 500
  ctx.body = process.env.NODE_ENV === 'development'
    ? err.message
    : 'Internal Server Error'
}))

circe.use(Circe.cors())
circe.use(Circe.logger())
circe.use(Circe.jwt({secret: config.app.secret}).unless({path: config.app.whitelist}))
circe.use(Circe.bodyParser())
circe.use(Circe.checker.init())
circe.use(Circe.checker.onError((err, ctx) => ctx.fail(err.message)))

circe.inject({
  $config: config,
  $models: models,
  _: lodash
})

circe.route(path.resolve(__dirname, './apis'), {mount: '/v1'})

module.exports = circe

module.exports.run = function () {
  circe.listen(config.app.port, function () {
    console.log(config.app.name + ' listening at ' + config.app.port)
  })
}
