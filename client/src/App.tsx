import * as React from 'react'

export default class App extends React.Component<{children: any}, void> {
  render () {
    return (
      <div>
        <h1>Hello, HAYO</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
