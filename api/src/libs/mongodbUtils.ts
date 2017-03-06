export function createConnStr (config: {
  username?: string,
  password?: string,
  host: string | [string],
  option?: string | [string],
  name: string
}): string {
  let {username, password, host, option, name} = config
  const auth = username && password ? `${username}:${password}@` : ''
  host = host instanceof Array ? host.join(',') : host
  option = option ? option instanceof Array ? option.join('&') : option : ''
  return `mongodb://${auth}${host}/${name}?${option}`
}
