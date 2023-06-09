export default class {
  constructor() {
    this.subscribeToDomEvent('[data-action="edit"]', 'click', this.editItem.bind(this))
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

  getTextareaValue () {
    return document.querySelector('textarea').value
  }

  editItem (e) {
    const item = this.getItemFromTable(e)
    document.querySelector('textarea').value = JSON.stringify(item)
  }

  addRows(items) {
    this.emptyTable()
    items.forEach(item => this.insertItemRow(item))
  }

  showItem(item) {
    document.querySelector('textarea').value = JSON.stringify(item)
  }

  insertItemRow (item) {
    const tbody = document.querySelector('table tbody')
    const tr = document.createElement('tr')
    tr.setAttribute('data-id', item.id)
    tr.setAttribute('data-item', JSON.stringify(item))
    tr.innerHTML = this.getRowTemplate(item).trim()
    tbody.appendChild(tr)
  }

  updateItemRow (item) {
    const row = document.querySelector(`table tbody [data-id="${item.id}"]`)
    const tr = document.createElement('tr')
    tr.innerHTML = this.getRowTemplate(item).trim()
    row.outerHTML = tr
  }

  removeItemRow (item) {
    const row = document.querySelector(`table tbody [data-id="${item.id}"]`)
    row && row.remove()
  }

  emptyTable () {
    document.querySelectorAll(`table tbody tr`).forEach(row => row.remove())
  }

  getItemFromTable(e) {
    return JSON.parse(e.target.closest('tr').getAttribute('data-item'))
  }

  getRowTemplate (item) {
    return `
      <td>${item.id}</td>
      <td>${item.firstname}</td>
      <td>${item.lastname}</td>
      <td>${item.age}</td>
      <td>${item.gender}</td>
      <td><button data-action="show">Show</button></td>
      <td><button data-action="edit">Edit</button></td>
      <td><button data-action="delete">Delete</button></td>
    `
  }

  subscribeToDomEvent(selector, eventName, callback) {
    const trigger = document.querySelector(selector)
    if (trigger) {
      trigger.addEventListener(eventName, callback)
    } else {
      document.addEventListener(eventName, e => {
        if (e.target.isEqualNode(document.querySelector(selector))) {
          callback(e)
        }
      })
    }
  }
}