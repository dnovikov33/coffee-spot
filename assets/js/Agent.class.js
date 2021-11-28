import { get } from 'lodash'
class Agent {
  constructor(init) {
    this.name = get(init, 'name', '')
    this.id = get(init, 'id', 0)
  }
}

export default Agent
