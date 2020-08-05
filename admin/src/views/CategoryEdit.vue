<template>
  <div class="cat-create">
    <h3>{{id ? "编辑" : "新建"}}分类</h3>
    <el-form label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CategoryEdit',
  data() {
    return {
      model: {}
    }
  },
  props: {
    id: {
      type: String
    }
  },
  methods: {
    async save() {
      let res
      if (!this.id) {
        res = await this.$http.post('/rest/categories', this.model)
      } else {
        res = await this.$http.put(`/rest/categories/${this.id}`, this.model)
      }

      if (res.data.status === 0) {
        this.$message({
          type: 'success',
          message: res.data.message
        })
      }

      this.$router.push('/categories/list')
    },

    //编辑已有的，需要把之前的标题自动填入
    async fetch() {
      const res = await this.$http.get(`/rest/categories/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>

<style>

</style>