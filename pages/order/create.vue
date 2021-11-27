<template>
  <el-row>
    <el-row type="flex" align="middle">
      <el-col :span="21">
        <h1>Создание заказа</h1>
      </el-col>
      <el-col :span="3">
        <el-button style="float: right" type="primary">
          <nuxt-link class="link" to="/order/list">Назад</nuxt-link>
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <!--        <CreateOrder :form-data="" />-->
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
import CreateOrder from 'components/order-pages/CreateOrUpdateOrder'
export default {
  components: { CreateOrder },
  data() {
    return {}
  },
}
</script>
