<template>
  <div class="table-wrap">
    <el-table
      show-summary
      sum-text="Итого"
      style="width: 100%"
      max-height="500"
      :data="list"
    >
      <el-table-column min-width="150" prop="name" label="Название">
      </el-table-column>
      <el-table-column min-width="100" prop="amount" label="Количество">
        <template slot-scope="scope">
          <el-input-number
            :min="1"
            :placeholer="scope.row.measure"
            v-model="scope.row.amount"
          />
        </template>
      </el-table-column>
      <!--      <el-table-column min-width="100" prop="measure" label="Ед изм" />-->
      <!--      <el-table-column min-width="100" prop="price" label="Цена">-->
      <!--        <template slot-scope="scope"> {{ scope.row.price }} ₽ </template>-->
      <!--      </el-table-column>-->
      <el-table-column label="Удалить">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="$emit('handleDelete', scope.row)"
          >
            <i class="el-icon-delete" />
          </el-button>
        </template>
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
  max-width: 500px;
  margin: 0 auto;
}
</style>
