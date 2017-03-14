declare const module: any
declare const require: any

declare module '*.styl' {
  const _: any
  export = _
}

declare module 'classnames' {
  const classnames: (...args: any[]) => string
  export = classnames
}
