<template>
  <el-form v-loading="!order" :inline="true">
    <el-form-item label="Информация о получателе">
      <el-tooltip :content="`Заказ получен`" placement="top">
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="100"
          inactive-value="0"
        >
        </el-switch>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="Контрагент">
      {{ order.agent }}
      <!--      <el-select-->
      <!--        v-model="order.agent.name"-->
      <!--        filterable-->
      <!--        remote-->
      <!--        :remote-method="findAgent"-->
      <!--        :loading="loadingAgent"-->
      <!--        placeholder="Начните вводить"-->
      <!--      >-->
      <!--        <el-option-->
      <!--          v-for="item in agentsList"-->
      <!--          :key="item.value"-->
      <!--          :label="item.label"-->
      <!--          :value="item.value"-->
      <!--        >-->
      <!--        </el-option>-->
      <!--      </el-select>-->
    </el-form-item>
    <el-form-item label="Дата привоза">
      <el-date-picker v-model="order.deliveryDate" placeholder="Укажите" />
    </el-form-item>
    <el-form-item label="Дата заказа">
      <el-date-picker
        v-model="order.orderedDate"
        placeholder="Укажите"
        :disabled="true"
      />
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
