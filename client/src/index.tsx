import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Root from './Root'
import './styles/base.styl'

const render = (Root: any) => {
  ReactDOM.render(
    <AppContainer>
      <Root/>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const nextRoot = require('./Root').default
    render(nextRoot)
  })
}
