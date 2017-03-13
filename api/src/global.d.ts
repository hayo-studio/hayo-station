import * as models from './models'
import * as lodash from 'lodash'
import * as Circe from 'circe'

declare global {
  interface IContext extends Circe.IContext{
    vals: any,
    $config: any,
    $models: typeof models,
    _: typeof lodash
  }
}
