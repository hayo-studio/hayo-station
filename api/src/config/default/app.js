module.exports = {
  name: 'hayo-station',
  port: 8080,
  secret: 'JSOM_WEB_TOKEN_SECRET',
  whitelist: [
    '/v1/auth/login'
  ]
}
