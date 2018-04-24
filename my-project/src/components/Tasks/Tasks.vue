<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="title"
      label="title"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="description"
      label="Description"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="status"
      label="Status"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="chStatus"
      label="Change Status"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="delete"
      label="Delete"
      style="width: 20%">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          title       : 'New task',
          description : 'Task description',
          status      : 'Sin completar',
          chStatus    : <el-button type="primary" plain onClick={this.handleAddTask}>Mark as done</el-button>,
          delete      : <el-button type="primary" plain onClick={this.handleAddTask}>Delete</el-button>
        }]
      }
    }
  }
</script>
