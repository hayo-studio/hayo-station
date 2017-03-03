exports.createConnStr = function (config) {
  let {username, password, host, option, name} = config
  const auth = username && password ? `${username}:${password}@` : ''
  host = host instanceof Array ? host.join(',') : host
  option = option ? option instanceof Array ? option.join('&') : option : ''
  return `mongodb://${auth}${host}/${name}?${option}`
}
