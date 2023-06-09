// JS avancé séance 6
// Online js evaluate: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
// Author: Evens Stone

import ViewManager from "./views/ViewManager.mjs"
import User from "./models/User.mjs"
import UserService from "./services/UserService.mjs"

export default class ModuleAndTools {
  constructor() {
    this.userService = UserService.shared
    this.viewManager = ViewManager.shared
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

  init() {
    this.viewManager.subscribeToDomEvent('[data-action="show"]', 'click', this.showUser.bind(this))
    this.viewManager.subscribeToDomEvent('[data-action="list"]', 'click', this.listUsers.bind(this))
    this.viewManager.subscribeToDomEvent('[data-action="create"]', 'click', () => this.createUser())
    this.viewManager.subscribeToDomEvent('[data-action="update"]', 'click', this.updateUser.bind(this))
    this.viewManager.subscribeToDomEvent('[data-action="delete"]', 'click', this.deleteUser.bind(this))
  }

  createUser() {
    const json = this.viewManager.getTextareaValue()
    const user = User.fromJson(json)
    this.userService
      .create(user)
      .then(v => {
        this.userService
          .get(v.id)
          .then(v => this.viewManager.insertItemRow(v))
      })
  }

  updateUser() {
    const json = this.viewManager.getTextareaValue()
    const user = User.fromJson(json)
    this.userService
      .update(user)
      .then(v => this.viewManager.updateItemRow(v))
  }

  deleteUser(e) {
    const user = this.viewManager.getItemFromTable(e)
    this.userService
      .delete(user)
      .then(() => this.viewManager.removeItemRow(user))
  }

  listUsers() {
    this.userService
      .getAll()
      .then(users => this.viewManager.addRows(users))
  }

  showUser(e) {
    const id = this.viewManager.getItemFromTable(e).id
    this.userService
      .get(id)
      .then(user => this.viewManager.showItem(user))
  }
}

(() => {
  ModuleAndTools.getInstance().init()
  console.log('App started...')
})()