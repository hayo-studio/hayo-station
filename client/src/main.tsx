import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './App'

const render = (App: () => JSX.Element) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const nextApp = require('./App').default
    render(nextApp)
  })
}
