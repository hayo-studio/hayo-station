import * as models from './models'
import * as lodash from 'lodash'

interface ICirceContext {
  status: Number | String,
  success: (data: any) => void,
  fail: (data:any) => void,
  redirect: (url: String) => void
}

declare global {
  interface IContext extends ICirceContext{
    vals: any,
    $config: any,
    $models: typeof models,
    _: typeof lodash
  }
}
