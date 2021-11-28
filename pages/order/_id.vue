<template>
  <el-row>
    <el-row type="flex" align="middle">
      <el-col :span="21">
        <h1>Редактирование заказа</h1>
      </el-col>
      <el-col :span="3">
        <el-button style="float: right" type="primary">
          <nuxt-link class="link" to="/order/list">Назад</nuxt-link>
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <CreateOrUpdateOrder v-if="order" :order="order" />
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
import CreateOrUpdateOrder from 'components/order-pages/CreateOrUpdateOrder'
import Order from 'assets/js/Order.class'
export default {
  components: { CreateOrUpdateOrder },
  data() {
    return {
      order: false,
    }
  },
  created() {
    this.init()
  },
  validate({ params }) {
    function isInt(value) {
      return (
        !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10))
      )
    }
    if (params.id && isInt(params.id)) return true
    return false
  },
  methods: {
    async init() {
      try {
        const res = await this.$axios.$get(
          `/api/orders/${this.$route.params.id}`
        )
        this.order = new Order(res)
      } catch (er) {
        console.log(er)
      }
    },
  },
}
</script>
