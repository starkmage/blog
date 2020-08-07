<template>
  <div>
    <h3>管理员列表</h3>
    <el-table :data="model" style="width: 100%">
      <el-table-column prop="_id" label="ID" width="250"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="() => $router.push(`/adminusers/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="samll" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AdminUserList",
  data() {
    return {
      model: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/rest/admin_users");
      this.model = res.data;
    },
    del(row) {
      this.$confirm("确定删除该管理员？", "提升", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        const res = await this.$http.delete(`/rest/admin_users/${row._id}`)
        if (res.data.status === 0) {
          this.$message({
            type: 'success',
            message: res.data.message
          })
          this.fetch()
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
  },
  created() {
    this.fetch()
  }
};
</script>

<style>
</style>