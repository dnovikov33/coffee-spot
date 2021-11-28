<template>
  <el-form v-loading="!order" :inline="true">
    <el-form-item label="Дата заказа">
      <el-date-picker
        v-model="order.orderedDate"
        placeholder="Укажите"
        :disabled="true"
      />
    </el-form-item>
    <el-form-item label="Дата получения план">
      <el-date-picker v-model="order.deliveryDate" placeholder="Укажите" />
    </el-form-item>
    <el-form-item label="Контрагент">
      <el-select
        v-model="order.agent"
        value-key="id"
        filterable
        remote
        :remote-method="findAgent"
        :loading="loadingAgent"
        placeholder="Начните вводить"
      >
        <el-option
          v-for="item in agentsList"
          :key="item.id"
          :label="item.name"
          :value="item"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Дата получения факт">
      <el-date-picker
        :value="order.received.date ? order.received.date : ''"
        @input="order.received.date = $event"
        placeholder="Укажите"
        :disabled="order.isNewOrder"
      />
    </el-form-item>
    <el-form-item label="Номенклатура">
      <el-select
        v-model="newItem"
        value-key="id"
        filterable
        remote
        :remote-method="findItem"
        :loading="loadingItem"
        placeholder="Начните вводить"
      >
        <el-option
          v-for="item in itemsList"
          :key="item.id"
          :label="item.name"
          :value="item"
        >
        </el-option>
      </el-select>
      <el-button type="primary" @click="addItemToList" :disabled="!newItem.id">
        Добавить
      </el-button>
    </el-form-item>
    <OrderItemList :list="order.items" @handleDelete="removeItem" />
  </el-form>
</template>
<script>
import Order from 'assets/js/Order.class'
import Agent from 'assets/js/Agent.class'
import DeliveryItem from 'assets/js/DeliveryItem.class'
import OrderItemList from 'components/order-pages/OrderItemList'
import { filter } from 'lodash'

export default {
  name: 'CreateOrder',
  components: {
    OrderItemList,
  },
  props: {
    order: {
      type: Order,
      default: () => {},
    },
  },
  data() {
    return {
      loadingAgent: false,
      loadingItem: false,
      agentsList: [],
      itemsList: [],
      newItem: {},
    }
  },
  methods: {
    async findAgent(query) {
      if (query !== '') {
        this.loadingAgent = true
        try {
          const res = await this.$axios.$get(`/api/agents?s=${query}`)
          this.agentsList = res.map((item) => new Agent(item)) || []
        } catch (er) {
          console.log(er)
        }
        this.loadingAgent = false
      } else {
        this.agentsList = []
      }
    },
    async findItem(query) {
      if (query !== '') {
        this.loadingItem = true
        try {
          const res = await this.$axios.$get(`/api/items?s=${query}`)
          this.itemsList = res.map((item) => new DeliveryItem(item)) || []
        } catch (er) {
          console.log(er)
        }
        this.loadingItem = false
      } else {
        this.itemsList = []
      }
    },
    addItemToList() {
      this.order.items.push(this.newItem)
      this.newItem = {}
    },
    removeItem(deliveryItem) {
      console.log(deliveryItem)
      this.order.items = filter(
        this.order.items,
        (item) => item.id !== deliveryItem.id
      )
    },
  },
}
</script>
