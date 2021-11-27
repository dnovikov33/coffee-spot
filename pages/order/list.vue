<template>
  <el-row>
    <el-col>
      <el-table
        :row-class-name="tableRowClassName"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="id" label="ID" width="100" />
        <el-table-column type="expand">
          <template slot-scope="props">
            <p>State: {{ props.row.state }}</p>
            <p>City: {{ props.row.city }}</p>
            <p>Address: {{ props.row.address }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="Заказ" width="150" />
        <el-table-column prop="date" label="Привоз" width="120" />
        <el-table-column prop="agent" label="Контрагент" width="120">
          <template slot-scope="scope">
            <el-tag size="medium"> {{ scope.row.agent }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="received" label="Принял" width="120">
          <template slot-scope="scope">
            <i class="el-icon-check" v-if="scope.row.received"></i>
          </template>
        </el-table-column>
        <el-table-column prop="amount" label="Сумма" width="120" />
        <el-table-column fixed="right" label="Действия" width="300">
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
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: '2016-05-03',
          agent: 'Tom',
          state: 'California',
          received: true,
          amount: 2499,
        },
        {
          id: 1,
          date: '2016-05-02',
          agent: 'Tom',
          state: 'California',
          received: false,
          amount: 2499,
        },
        {
          id: 1,
          date: '2016-05-04',
          agent: 'Tom',
          state: 'California',
          received: true,
          amount: 2499,
        },
        {
          id: 1,
          date: '2016-05-01',
          agent: 'Tom',
          state: 'California',
          received: false,
          amount: 2499,
        },
        {
          id: 1,
          date: '2016-05-08',
          agent: 'Tom',
          state: 'California',
          received: true,
          amount: 2499,
        },
        {
          id: 1,
          date: '2016-05-06',
          agent: 'Tom',
          state: 'California',
          received: true,
          amount: 2499,
        },
        {
          id: 1,
          date: '2016-05-07',
          agent: 'Tom',
          state: 'California',
          received: true,
          amount: 2499,
        },
      ],
    }
  },
  methods: {
    handleApprove(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    tableRowClassName({ row }) {
      if (row.received === true) {
        return 'received-row'
      } else if (row.received === false) {
        return 'waiting-row'
      }
      return ''
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
