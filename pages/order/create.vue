<template>
  <el-row>
    <el-row type="flex" align="middle">
      <el-col :span="14">
        <h1>Создание заказа</h1>
      </el-col>
      <el-col :span="10">
        <el-button-group style="float: right">
          <el-button type="primary" @click="saveOrder"> Сохранить </el-button>
          <el-button>
            <nuxt-link class="link" to="/order/list">Назад</nuxt-link>
          </el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <CreateOrder :order="order" />
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
import CreateOrder from 'components/order-pages/CreateOrUpdateOrder'
import Order from 'assets/js/Order.class'
export default {
  components: { CreateOrder },
  data() {
    return {
      order: {
        type: Order,
        default: () => {},
      },
    }
  },
  created() {
    this.order = new Order()
  },
  methods: {
    saveOrder() {
      // update order
    },
  },
}
</script>
