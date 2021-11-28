import { has } from 'lodash'
import User from './User.class'
import { format } from 'date-fns'

export default class ReceivedEvent {
  constructor(init) {
    this.user = has(init, 'user') ? new User(init.user) : new User()
    this.date = has(init, 'date') ? new Date(init.date) : false
    this.isReceived = !!this.date
  }

  get formattedDate() {
    return format(this.date, 'dd.MM.yyyy')
  }
}
