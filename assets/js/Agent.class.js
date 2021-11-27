import { get } from 'lodash'
class Agent {
  constructor(init) {
    this.name = get(init, 'name', '')
  }
}

export default Agent
