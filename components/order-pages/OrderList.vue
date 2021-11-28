<template>
  <el-table
    ref="list-table"
    v-loading="loading"
    :row-class-name="tableRowClassName"
    :data="tableData"
    style="width: 100%"
    max-height="500"
    empty-text="Нет созданных заказов"
    @row-click="rowClickHandler"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <OrderItemList :list="props.row.items" />
      </template>
    </el-table-column>
    <el-table-column prop="id" label="ID" min-width="70" />
    <el-table-column
      prop="orderedDateFormatted"
      label="Заказ"
      min-width="150"
    />
    <el-table-column
      prop="deliveryDateFormatted"
      label="Привоз"
      min-width="120"
    />
    <el-table-column prop="agent.name" label="Контрагент" min-width="120">
      <template slot-scope="scope">
        <el-tag size="medium"> {{ scope.row.agent.name }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      class="receiver-cell"
      prop="isReceived"
      label="Принял"
      min-width="120"
    >
      <template slot-scope="scope">
        <div class="receiver-cell" v-if="scope.row.received.isReceived">
          <span style="margin-right: 10px">
            {{ scope.row.received.user.name }}
          </span>
          <span>{{ scope.row.received.formattedDate }}</span>
        </div>
        <template v-else>
          <i class="el-icon-loading"></i>
        </template>
      </template>
    </el-table-column>
    <el-table-column prop="amount" label="Сумма" min-width="120">
      <template slot-scope="scope"> {{ scope.row.amount }} ₽</template>
    </el-table-column>
    <el-table-column label="Действия" min-width="300">
      <template slot-scope="scope">
        <el-button-group>
          <el-button
            size="mini"
            @click="$router.push(`/order/${scope.row.id}`)"
          >
            Подробнее
          </el-button>
          <el-button
            size="mini"
            @click="$emit('handleApprove', $event)"
            type="success"
          >
            <i class="el-icon-check"></i>
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="$emit('handleDelete', $event)"
          >
            Удалить
          </el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import OrderItemList from 'components/order-pages/OrderItemList'

export default {
  name: 'Order-list',
  components: { OrderItemList },
  props: {
    loading: {},
    tableData: {},
  },
  methods: {
    tableRowClassName({ row }) {
      if (row.received.isReceived === true) {
        return 'received-row'
      } else if (row.received.isReceived === false) {
        return 'waiting-row'
      }
      return ''
    },
    rowClickHandler(row, column, event) {
      console.log(row, column, event)
      this.$refs['list-table'].toggleRowExpansion(row)
    },
  },
}
</script>
<style>
.el-table .received-row {
  background: #f0f9eb;
}

.el-table .waiting-row {
  background: oldlace;
}
.receiver-cell {
  display: flex;
  flex-wrap: wrap;
}
</style>
