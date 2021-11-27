<template>
  <div class="table-wrap">
    <el-table :data="list">
      <el-table-column min-width="400" prop="name" label="Название">
      </el-table-column>
      <el-table-column min-width="150" prop="amount" label="Количество">
      </el-table-column>
      <el-table-column min-width="100" prop="price" label="Цена">
        <template slot-scope="scope"> {{ scope.row.price }} ₽ </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'OrderItemList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.table-wrap {
  max-width: 700px;
  margin: 0 auto;
}
</style>
