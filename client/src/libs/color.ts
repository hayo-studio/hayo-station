export default class Color {
  r: number
  g: number
  b: number
  a: number

  constructor (r: number, g: number, b: number, a?: number) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a === undefined ? 1 : a
  }

  static fromHex (hex: string): Color{
    // By Tim Down - http://stackoverflow.com/a/5624139/3493650
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    const fullForm = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
    hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)
    const result = fullForm.exec(hex)
    return result ? new Color(
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ) : null
  }

  setAlpha (a: number) {
    this.a = a
    return this
  }

  toRgbString () {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }

  toRgbaString () {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }
}
