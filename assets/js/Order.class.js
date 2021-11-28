import { get, has } from 'lodash'
import DeliveryItem from './DeliveryItem.class'
import Agent from './Agent.class'
import { format } from 'date-fns'
import ReceivedEvent from './ReceivedEvent.class'

class Order {
  constructor(init) {
    this.id = get(init, 'id', 0)
    this.amount = get(init, 'amount', 0)
    this.received = has(init, 'received')
      ? new ReceivedEvent(init.received)
      : new ReceivedEvent()
    this.orderedDate = has(init, 'ordered_date')
      ? new Date(init.ordered_date)
      : new Date()
    this.deliveryDate = has(init, 'delivery_date')
      ? new Date(init.delivery_date)
      : false
    this.items = has(init, 'items')
      ? init.items.map((item) => new DeliveryItem(item))
      : []
    this.agent = has(init, 'agent') ? new Agent(init.agent) : new Agent()
  }

  get orderedDateFormatted() {
    return format(this.orderedDate, 'dd.MM.yyyy')
  }

  get deliveryDateFormatted() {
    return format(this.deliveryDate, 'dd.MM.yyyy')
  }

  get isNewOrder() {
    return this.id === 0
  }
}

export default Order
