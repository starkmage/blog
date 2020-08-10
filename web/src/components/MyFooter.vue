<template>
  <div class="foot">
    <div class="border-bottom border-top bg-navcolor">
      <div class="d-flex py-6 jc-center">
        <div class="px-7 hand">
          <a href="https://github.com/starkmage" target="_blank" class="text-grey-1">GitHub</a>
        </div>
        <div class="px-7 hand">
          <a href="mailto:zhang_shengjie@qq.com" target="_blank" class="text-grey-1">Email</a>
        </div>
        <div class="px-7 hand">
          <a href="https://t.me/stark_tg" target="_blank" class="text-grey-1">Telegram</a>
        </div>
        <div class="px-7 hand">
          <a href="https://twitter.com/stark_mage" target="_blank" class="text-grey-1">Twitter</a>
        </div>
      </div>
    </div>
    <div class="footer pt-3 bg-navcolor">
      <div class="pt-5 d-flex jc-center">
        <div class="px-8 mb-4">
          <img src="../assets/img/logo.jpg" height="32" />
          <div class="text-grey-2 fs-sm">
            <p class="load">日常总结，分享点滴</p>
            <p>
              The Site is Powered by
              <a href="https://github.com/starkmage" target="_blank">starkmage</a>
            </p>
            <p>
              <a
                href="http://www.beian.miit.gov.cn/"
                target="_blank"
                class="text-grey-2"
              >沪ICP备20010345号-1</a>
            </p>
          </div>
        </div>
        <div class="px-8">
          <div class="text-grey-1 fs-md mt-5">
            最近更新
          </div>
          <div class="text-grey-2 fs-sm hand">
            <router-link
              tag="p"
              v-for="item in model"
              :key="item._id"
              :to="`/article/list/${item._id}`"
            >{{item.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: []
    }
  },
  methods: {
    //获取最新文章
    async fetchArticles() {
      const res = await this.$http.get("articles/recent")
      this.model = res.data
    }
  },
  mounted() {
    this.fetchArticles()
  }
};
</script>

<style lang="scss" scoped>
.foot {
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>