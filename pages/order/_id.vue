<template>
  <el-row>
    <el-row type="flex" align="middle">
      <el-col :span="14">
        <h1>Редактирование заказа #{{ order.id }}</h1>
      </el-col>
      <el-col :span="10">
        <el-button-group style="float: right">
          <el-button type="primary" @click="saveOrder"> Сохранить </el-button>
          <el-button @click="approveOrderDialog = true" type="success">
            <i class="el-icon-check"></i>
          </el-button>
          <el-button>
            <nuxt-link class="link" to="/order/list">Назад</nuxt-link>
          </el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <CreateOrUpdateOrder v-if="order" :order="order" />
      </el-col>
    </el-row>
    <el-dialog
      title="Принять заказ"
      :visible.sync="approveOrderDialog"
      width="50%"
      :before-close="handleCloseDialog"
    >
      <div>Все позиции и их количество в заказе мною сверены</div>
      <div>
        В заказе будет установлена дата принятия {{ todayDate }} и ответственный
        {{ userName }}
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="approveOrderDialog = false">Отменить</el-button>
        <el-button type="primary" @click="approveOrder">
          Подтвердить
        </el-button>
      </span>
    </el-dialog>
  </el-row>
</template>
<script>
import CreateOrUpdateOrder from 'components/order-pages/CreateOrUpdateOrder'
import Order from 'assets/js/Order.class'
import { format } from 'date-fns'

export default {
  components: { CreateOrUpdateOrder },
  data() {
    return {
      order: false,
      approveOrderDialog: false,
    }
  },
  created() {
    this.init()
  },
  computed: {
    todayDate() {
      return format(new Date(), 'dd.MM.yyyy')
    },
    userName() {
      return 'userName'
    },
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
    saveOrder() {
      // update order
    },
    handleCloseDialog(done) {
      this.$confirm('Вы уверены, что хотите закрыть?')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    approveOrder() {
      this.approveOrderDialog = false
      // update order
    },
  },
}
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>
