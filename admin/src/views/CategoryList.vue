<template>
  <div>
    <h3>分类列表</h3>
    <el-table :data="model" style="width: 100%">
      <el-table-column prop="_id" label="ID" width="280"></el-table-column>
      <el-table-column prop="title" label="名称"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            @click="() => $router.push(`/categories/edit/${scope.row._id}`)"
            type="text"
            size="small"
          >编辑</el-button>
          <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      model: [],
    };
  },
  methods: {
    //获取分类列表
    async fetch() {
      const res = await this.$http.get("/rest/categories");
      this.model = res.data;
    },
    //删除分类列表
    del(row) {
      this.$confirm("确定删除该分类？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const res = await this.$http.delete(`/rest/categories/${row._id}`);
          if (res.data.status === 0) {
            this.$message({
              type: "success",
              message: res.data.message,
            });
            //删除后立即更新列表
            this.fetch();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>