<template>
  <div class="main-container" v-if="model">
    <div class="main-content archive-page">
      <div class="categories-item mt-6" v-for="item in model" :key="item._id.month">
        <div class="categories-title">
          {{item.list[0].createdAt | date('YYYY')}}年{{item._id.month}}月
        </div>
        <div class="post-lists">
          <div class="post-lists-body">
            <div class="post-list-item" v-for="article in item.list" :key="article.createdAt">
              <div class="post-list-item-container show">
                <div class="item-label bg-postcolor">
                  <div class="item-title pl-4">
                    <router-link
                      :to="`/article/${article._id}`"
                      :title="`访问${article.title}`"
                    >{{article.title}}</router-link>
                  </div>
                  <div class="item-meta">
                    <div class="item-meta-date not-text">
                      {{article.createdAt | date("YYYY-MM-DD")}}
                      <router-link
                        class="text-grey-1"
                        to="/tags" 
                        :data-hover="article.categories.map(cat => cat.title).join('|')"
                      >
                        {{article.categories.map(cat => cat.title).join('|')}}
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    async getArchive() {
      const res = await this.$http.get('/archive')
      this.model = res.data
      this.model.sort((a, b) => {
        if (a._id.year === b._id.year) {
          return b._id.month - a._id.month
        } else {
          return b._id.year - a._id.year
        }
      })
    }
  },
  created() {
    this.getArchive()
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  margin-bottom: 180px;
  .archive-page .categories-title {
    font-size: 20px;
    position: relative;
    margin: 10px auto;
    padding: 0 32px;
    color: #bbbbbb;
  }
}
</style>