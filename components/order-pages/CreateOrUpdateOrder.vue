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
        v-model="order.agent.name"
        filterable
        remote
        :remote-method="findAgent"
        :loading="loadingAgent"
        placeholder="Начните вводить"
      >
        <el-option
          v-for="item in agentsList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Дата получения факт">
      <el-date-picker v-model="order.received.date" placeholder="Укажите" />
    </el-form-item>
    <!--    <el-form-item label="Номенклатура">-->
    <!--      <el-select-->
    <!--        filterable-->
    <!--        remote-->
    <!--        :remote-method="findItem"-->
    <!--        :loading="loadingItem"-->
    <!--        placeholder="Начните вводить"-->
    <!--      >-->
    <!--        <el-option-->
    <!--          v-for="item in itemsList"-->
    <!--          :key="item.value"-->
    <!--          :label="item.label"-->
    <!--          :value="item.value"-->
    <!--        >-->
    <!--        </el-option>-->
    <!--      </el-select>-->
    <!--    </el-form-item>-->
    <OrderItemList :list="order.items" />
  </el-form>
</template>
<script>
import Order from 'assets/js/Order.class'

export default {
  name: 'CreateOrder',
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
    }
  },
  methods: {
    findAgent(query) {
      if (query !== '') {
        this.loadingAgent = true
        setTimeout(() => {
          this.loadingAgent = false
        }, 200)
      } else {
        this.options = []
      }
    },
    findItem() {
      if (query !== '') {
        this.loadingAgent = true
        setTimeout(() => {
          this.loadingAgent = false
        }, 200)
      } else {
        this.options = []
      }
    },
  },
}
</script>
