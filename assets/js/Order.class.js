import { get, has } from 'lodash'
import DeliveryItem from './DeliveryItem.class'
import Agent from './Agent.class'
import { format } from 'date-fns'
import ReceivedEvent from './ReceivedEvent.class'

class Order {
  constructor(init) {
    this.id = get(init, 'id', 0)
    this.amount = get(init, 'amount', 0)
    this.received = has(init, 'approved')
      ? new ReceivedEvent(init.approved)
      : new ReceivedEvent()
    this.orderedDate = has(init, 'ordered_date')
      ? new Date(init.ordered_date)
      : false
    this.deliveryDate = has(init, 'receive_date')
      ? new Date(init.receive_date)
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

  get isReceived() {
    return !!this.received.date
  }
}

export default Order