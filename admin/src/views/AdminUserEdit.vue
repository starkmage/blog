<template>
  <div>
    <h3>{{id ? "编辑" : "新建"}}管理员</h3>
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AdminUserEdit",
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async save() {
      let res;
      let repeateAdmin = false;
      if (!this.id) {
        //验证该用户是否已经存在
        const adminList = await this.$http.get("./rest/admin_users");
        for (let item of adminList.data) {
          if (item.username === this.model.username) {
            repeateAdmin = true;
            break;
          }
        }

        if (!repeateAdmin) {
          res = await this.$http.post("/rest/admin_users", this.model);
        } else {
          this.$message({
            type: "warning",
            message: "该用户已存在",
          });
        }
      } else {
        res = await this.$http.put(`/rest/admin_users/${this.id}`, this.model);
      }

      if (!repeateAdmin) {
        if (res.data.status === 0) {
          this.$message({
            type: "success",
            message: res.data.message,
          });
          this.$router.push("/adminusers/list");
        }
      }
    },


    async fetch() {
      const res = await this.$http.get(`/rest/admin_users/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>

<style>
</style>