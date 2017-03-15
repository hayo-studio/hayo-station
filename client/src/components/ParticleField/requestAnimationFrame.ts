declare const window: any

const animationSetTimeout = (cb: Function) => { window.setTimeout(cb, 1000 / 60) }

export const requestAnimFrame = (() => {
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    animationSetTimeout
})().bind(window)

export const cancelRequestAnimFrame = (() => {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
})().bind(window)
