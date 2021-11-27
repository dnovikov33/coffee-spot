import { get } from 'lodash'
class DeliveryItem {
  constructor(init) {
    this.id = get(init, 'id', 0)
    this.name = get(init, 'name', '')
    this.price = get(init, 'price', 0)
    this.amount = get(init, 'amount', 0)
  }
}

export default DeliveryItem
