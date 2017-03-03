const path = require('path')
const Circe = require('circe')

module.exports = Circe.config.from(path.resolve(__dirname))
