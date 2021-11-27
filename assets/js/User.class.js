import { get } from 'lodash'
export default class User {
  constructor(init) {
    this.name = get(init, 'name', '')
  }
}
