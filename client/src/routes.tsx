import * as React from 'react'
import {Route, IndexRedirect} from 'react-router'
import App from './App'
import Test from './pages/Test'

let routes =
  <Route path='/' component={App}>
    <IndexRedirect to='/test'/>
    <Route path='test' component={Test}/>
  </Route>

/*
 react-router hack
 see: https://github.com/gaearon/react-hot-loader/issues/454
 or: https://github.com/gaearon/react-hot-loader/issues/249
 */
if (module.hot) {
  const oldRoutes = module.hot.data && module.hot.data.routes
  if (oldRoutes) routes = oldRoutes
  module.hot.dispose((data: any) => {
    data.routes = routes
  })
}

export default routes
