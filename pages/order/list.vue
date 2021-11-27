<template>
  <el-row>
    <el-col>
      <el-row type="flex" align="middle">
        <el-col :span="22">
          <h1>Список заказов</h1>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">Создать</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
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
                <div v-for="(item, key) in props.row.items" :key="key">
                  {{ item.name }}: {{ item.amount }} - {{ item.price }}₽
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="id" label="ID" min-width="100" />
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
            <el-table-column
              prop="agent.name"
              label="Контрагент"
              min-width="120"
            >
              <template slot-scope="scope">
                <el-tag size="medium"> {{ scope.row.agent.name }} </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="isReceived" label="Принял" min-width="120">
              <template slot-scope="scope">
                <template v-if="scope.row.isReceived">
                  <span>{{ scope.row.received.user.name }}</span>
                  <span> {{ scope.row.received.formattedDate }} </span>
                </template>
                <template v-else>
                  <i class="el-icon-loading"></i>
                </template>
              </template>
            </el-table-column>
            <el-table-column prop="amount" label="Сумма" min-width="120">
              <template slot-scope="scope"> {{ scope.row.amount }} ₽ </template>
            </el-table-column>
            <el-table-column label="Действия" min-width="200">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleApprove(scope.$index, scope.row)"
                >
                  Принять
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >
                  Удалить
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Order from 'assets/js/Order.class'

export default {
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
    tableRowClassName({ row }) {
      if (row.isReceived === true) {
        return 'received-row'
      } else if (row.isReceived === false) {
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
</style>
