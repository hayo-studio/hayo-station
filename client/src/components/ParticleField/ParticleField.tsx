import * as React from 'react'
import Color from '../../libs/color'
import {requestAnimFrame} from './requestAnimationFrame'
import * as styles from './ParticleField.styl'

interface IVector {
  x: number
  y: number
}

class Particle {
  pos: IVector
  speed: IVector
  radius: number
  color: Color
  opacity: number

  constructor (pos: IVector, speed?: IVector, radius?: number, color?: Color, opacity?: number) {
    this.pos = pos
    this.speed = speed || {x: Math.random(), y: Math.random()}
    this.radius = radius || Math.random() * 3
    this.color = color || Color.fromHex('#aaa')
    this.opacity = opacity || 0.5 + Math.random() * 0.5
  }

  draw (ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color.setAlpha(this.opacity).toRgbaString()
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false)
    ctx.closePath()
    ctx.fill()
  }

  update (w: number, h: number) {
    this.pos.x += this.speed.x
    this.pos.y += this.speed.y
    const vx = Math.abs(this.speed.x)
    const vy = Math.abs(this.speed.y)
    if (this.pos.x > w) this.speed.x = -vx
    else if (this.pos.x < 0) this.speed.x = vx
    if (this.pos.y > h) this.speed.y = -vy
    else if (this.pos.y < 0) this.speed.y = vy
  }

  drawLinkLine (ctx: CanvasRenderingContext2D, p: Particle, distance: number) {
    const dx = this.pos.x - p.pos.x
    const dy = this.pos.y - p.pos.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist <= distance) {
      // 0.5 * (distance - dist) / distance
      const opacity = 0.5 - (dist / (1 / 0.5)) / distance
      if (opacity <= 0) return
      ctx.strokeStyle = Color.fromHex('#aaa').setAlpha(opacity).toRgbaString()
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(this.pos.x, this.pos.y)
      ctx.lineTo(p.pos.x, p.pos.y)
      ctx.closePath()
      ctx.stroke()
    }
  }
}

interface IParticleFieldProps {
  count?: number,
  linkDistance?: number
}

export default class ParticleField extends React.Component<IParticleFieldProps, void> {
  root: HTMLDivElement
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  w: number
  h: number
  particles: Particle[]
  af: any

  constructor (props: IParticleFieldProps) {
    super(props)
    this.setRoot = this.setRoot.bind(this)
    this.setCanvas = this.setCanvas.bind(this)
    this.particles = []
  }

  setRoot (r: HTMLDivElement) {
    this.root = r
    this.resize()
  }

  setCanvas (c: HTMLCanvasElement) {
    this.canvas = c
    this.ctx = c.getContext('2d')
  }

  resize () {
    this.w = this.root.offsetWidth
    this.h = this.root.offsetHeight
    this.canvas.width = this.w
    this.canvas.height = this.h
  }

  canvasClear () {
    this.ctx.clearRect(0, 0, this.w, this.h)
  }

  canvasUpdate () {
    for (let p of this.particles) {
      p.update(this.w, this.h)
    }
  }

  canvasDraw () {
    this.canvasClear()
    for (let i = 0; i < this.particles.length; i++) {
      const p1 = this.particles[i]
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j]
        p1.drawLinkLine(this.ctx, p2, this.props.linkDistance || 200)
      }
      p1.draw(this.ctx)
    }
  }

  start () {
    this.canvasUpdate()
    this.canvasDraw()
    this.af = requestAnimFrame(this.start.bind(this))
  }

  componentDidMount () {
    window.addEventListener('resize', () => { this.resize() })
    let {count} = this.props
    count = count || 20
    for (let i = 0; i < count; i++) {
      this.particles.push(new Particle({
        x: Math.random() * this.w,
        y: Math.random() * this.h
      }))
    }
    this.start()
  }

  render () {
    return (
      <div className={styles.root} ref={this.setRoot}>
        <canvas className={styles.canvas} ref={this.setCanvas}/>
      </div>
    )
  }
}
