<template>
  <div>
    <h3>{{id ? "编辑" : "新建"}}文章</h3>
    <el-form label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select multiple v-model="model.categories" placeholder="请选择文章分类">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.title"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="正文">
        <mavon-editor ref="md" v-model="model.body" :ishljs="true" code_style="monokai-sublime"></mavon-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ArticleEdit",
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      categories: [],
      model: {},
    };
  },
  methods: {
    async fetchCatrgories() {
      const res = await this.$http.get("/rest/categories");
      this.categories = res.data;
    },

    async save() {
      let res;
      if (!this.id) {
        res = await this.$http.post("/rest/articles", this.model);
      } else {
        res = await this.$http.put(`/rest/articles/${this.id}`, this.model);
      }
      if (res.data.status === 0) {
        this.$message({
          type: "success",
          message: res.data.message,
        });
        this.$router.push("/articles/list");
      }
    },

    //抓取编辑文章的先前内容
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fetchCatrgories();
    this.id && this.fetch();
  },
};
</script>

<style>
</style>