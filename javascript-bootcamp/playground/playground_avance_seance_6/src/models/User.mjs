export default class {
  constructor(args) {
    this.id = args.id
    this.age = args.age
    this.gender = args.gender
    this.lastname = args.lastname
    this.firstname = args.firstname
  }

  get isMajor () {
    return this.age >= 18
  }

  get isMinor () {
    return this.age < 18
  }

  get fullname () {
    return `${this.firstname} ${this.lastname}`
  }

  static fromObject (value) {
    return new this(value)
  }

  static fromJson (value) {
    return new this(JSON.parse(value))
  }

  toJson() {
    return JSON.stringify(this)
  }
}