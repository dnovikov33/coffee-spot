<template>
  <el-row>
    <el-col>
      <el-row type="flex" align="middle">
        <el-col :span="21">
          <h1>Список заказов</h1>
        </el-col>
        <el-col :span="3">
          <el-button style="float: right" type="primary">
            <nuxt-link class="link" to="/order/create">Создать</nuxt-link>
          </el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <Order-list
            @handle-approve="handleApprove"
            @handle-delete="handleDelete"
            :loading="loading"
            :table-data="tableData"
          />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Order from 'assets/js/Order.class'
import OrderList from 'components/order-pages/OrderList'

export default {
  components: { OrderList },
  data() {
    return {
      tableData: [],
      loading: true,
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      try {
        const res = await this.$axios.$get('/api/orders')
        const formattedRes = res.map((item) => new Order(item))
        this.loading = false
        this.tableData = formattedRes
      } catch (er) {
        console.log(er)
      }
    },
    handleApprove(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
  },
}
</script>

<style scoped>
.link {
  text-decoration: none;
  color: white;
}
</style>
