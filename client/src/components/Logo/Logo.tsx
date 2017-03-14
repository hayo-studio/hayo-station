import * as React from 'react'
import * as n from 'classnames'
import * as styles from './Logo.styl'

interface ILogoProps {
  size?: string,
  loading?: boolean
}

interface ILogoState {
  path: string
}

export default class Logo extends React.Component<ILogoProps, ILogoState> {
  constructor (props: ILogoProps) {
    super(props)
    this.state = {
      path: [
        'M429.32,391.21,286,474a60,60,0,0,1-60,0',
        'L82.68,391.21a60,60,0,0,1-30-52',
        'V173.76a60,60,0,0,1,30-52',
        'L226,39a60,60,0,0,1,60,0',
        'l143.32,82.74a60,60,0,0,1,30,52',
        'V339.24A60,60,0,0,1,429.32,391.21Z'
      ].join('')
    }
  }
  render () {
    console.log(styles)
    const {path} = this.state
    let {size, loading} = this.props
    size = size || '64px'
    loading = !!loading
    const style = {width: size, height: size}
    return (
      <div className={n(
          styles.root,
          loading ? styles.loading : styles.breathing
        )} style={style}>
        <svg className={styles.hexagon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path d={path}/>
        </svg>
      </div>
    )
  }
}
