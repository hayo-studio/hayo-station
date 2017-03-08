import Circe from 'circe'
const Validator = Circe.checker.Validator

Validator.addMethod('match', (regexp, tip) => {
  this.throwIfNot(regexp.test(this.val), tip)
  return this
})
