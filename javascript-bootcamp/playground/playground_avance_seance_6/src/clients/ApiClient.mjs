import config from '../core/config.mjs'
import FetchAjaj from '../core/FetchAjaj.mjs'

export default class {
  constructor () {
    this.fetchAjaj = FetchAjaj.shared
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

  get(path) {
    return this.fetchAjaj.fetch(`${config.apiUrl}/${path}`)
  }

  post(path, payload) {
    return this.fetchAjaj.fetch(`${config.apiUrl}/${path}`, 'post', payload)
  }

  put(path, payload) {
    return this.fetchAjaj.fetch(`${config.apiUrl}/${path}`, 'put', payload)
  }

  delete(path) {
    return this.fetchAjaj.fetch(`${config.apiUrl}/${path}`, 'delete')
  }
}