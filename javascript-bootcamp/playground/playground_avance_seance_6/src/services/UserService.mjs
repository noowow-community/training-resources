import ApiClient from "../clients/ApiClient.mjs"
import config from "../core/config.mjs"
import User from "../models/User.mjs"

export default class {
  constructor () {
    this.apiClient = ApiClient.shared
  }

  static getInstance () {
    return new this()
  }

  static get shared () {
    if (!this.singleton) {
      this.singleton = this.getInstance()
    }
    return this.singleton
  }

  getAll() {
    return this.apiClient
      .get(config.userPath)
      .then(res => Promise.resolve(res.data.map(v => User.fromObject(v))))
  }

  getByFirstname(value) {
    return this.getAll()
      .then(data => Promise.resolve(data.filter(v => v.firstname === value)))
  }

  async get(id) {
    const res = await this.apiClient.get(`${config.userPath}/${id}`)
    return await Promise.resolve(User.fromObject(res.data))
  }

  save(user) {
    return user.id ? this.update(user) : this.create(user)
  }

  create(user) {
    return this.apiClient.post(config.userPath, user)
  }

  update(user) {
    return this.apiClient.put(config.userPath, user)
  }
  
  delete(user) {
    return this.apiClient.delete(`${config.userPath}/${user.id}`)
  }
}