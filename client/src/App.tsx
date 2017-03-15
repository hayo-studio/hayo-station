import * as React from 'react'
import Logo from './components/Logo'
import ParticleField from './components/ParticleField'

export default class App extends React.Component<{children: any}, void> {
  render () {
    const users = [
      {username: 'Harrie', avatar: {url: 'https://avatars2.githubusercontent.com/u/14304201?v=3&s=460'}}
    ]
    /*return (
      <div>
        <h1>Hello, HAYO</h1>
        <div>{this.props.children}</div>
        <Logo/>
      </div>
    )*/
    return (
      <div>
        <ParticleField/>
      </div>
    )
  }
}
