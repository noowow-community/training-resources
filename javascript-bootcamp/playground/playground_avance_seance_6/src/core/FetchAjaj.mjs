export default class {
  static getInstance () {
    return new this()
  }

  static get shared () {
    if (!this.singleton) {
      this.singleton = this.getInstance()
    }
    return this.singleton
  }

  async fetch (url, method = 'get', body = null) {
    body = body ? JSON.stringify(body) : undefined
    const response = await fetch(url, { method, body })
    if (response.ok) {
      const data = await response.json()
      return Promise.resolve({ status: response.status, data })
    } else {
      return Promise.reject({ status: response.status, statusText: response.statusText })
    }
  }
}