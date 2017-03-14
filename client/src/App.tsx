import * as React from 'react'
import Logo from './components/Logo'

export default class App extends React.Component<{children: any}, void> {
  render () {
    return (
      <div>
        <h1>Hello, HAYO</h1>
        <div>{this.props.children}</div>
        <Logo/>
      </div>
    )
  }
}
