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

    <el-dialog
      title="Удалить заказ"
      :visible.sync="deleteOrderDialog"
      width="50%"
    >
      <div>Вы действительно хотите удалить заказ</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteOrderDialog = false">Отменить</el-button>
        <el-button type="primary" @click="deleteOrder"> Подтвердить </el-button>
      </span>
    </el-dialog>
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
      deleteOrderDialog: false,
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
      this.deleteOrderDialog = true
    },
    deleteOrder() {
      // delete order
      this.deleteOrderDialog = false
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
