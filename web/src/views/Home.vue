<template>
  <div class="mb-9">
    <div class="mb-7">
      <div class="bgImg d-flex jc-center" id="header">
        <div class="text-white d-flex jc-center ai-center">
          <span class="shouye-text">多喝热水</span>
        </div>
        <div class="arrow-down">
          <i class="iconfont icon-down" @click="downPage"></i>
        </div>
      </div>
    </div>
    <div class="post-container d-flex flex-wrap jc-center ai-center">
      <div v-for="(article, index) in articles" :key="index">
        <div class="show home-art">
          <router-link
            tag="div"
            :to="`/article/${article._id}`"
            class="top mt-10 mx-8 mb-0 hand article-icon" 
          ><img :src="require(`../assets/img/article/icon${article.title.length % 6 + 1}.jpg`)" height="260px" width="280px" alt=""></router-link>
          <div class="bg-postcolor pt-8 mx-8 title article-info">
            <router-link
              tag="span"
              :to="`/article/${article._id}`"
              class="fs-xxl jc-center d-flex flex-wrap hand text-grey-1 px-4"
            >{{article.title}}</router-link>
            <div class="d-flex mt-4 p-7 text-grey-1 jc-center">
              <i class="iconfont icon-riqi2 pr-2"></i>
              <span class="fs-sm not-text">{{ article.createdAt | date("YYYY-MM-DD") }}</span>
              <i class="iconfont icon-sort pl-9"></i>
              <router-link
                tag="span"
                to="/tags"
                class="fs-sm pl-2 hand"
              >{{ article.categories[0].title }}</router-link>
              <!-- <i class="iconfont icon-love text-blue hand"></i> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-10" v-if="articles.length > 0">
      <div class="page-navigator d-flex jc-center">
        <div :class="{ current: 1 == pagination.currentPage }" class="mx-4 hand fs-md">
          <a @click="gotoPage(1)" data-hover="首页">
            <span class="text-grey-1">首页</span>
          </a>
        </div>
        <div class="mx-4 hand fs-md">
          <a @click="prev()">
            <span class="text-grey-1">&laquo;</span>
          </a>
        </div>
        <div
          class="mx-4 hand fs-md"
          :class="{ current: article == pagination.currentPage }"
          v-for="article in pagination.totalPage"
          :key="article"
        >
          <a @click="gotoPage(article)" :data-hover="article" class="text-grey-1">{{ article }}</a>
        </div>
        <div class="mx-4 hand fs-md">
          <a @click="next()">
            <span class="text-grey-1">&raquo;</span>
          </a>
        </div>
        <div
          class="mx-4 hand fs-md"
          :class="{ current: pagination.totalPage == pagination.currentPage }"
        >
          <a @click="gotoPage(pagination.totalPage)" data-hover="末页">
            <span class="text-grey-1">末页</span>
          </a>
        </div>
        <div class="current mx-4 fs-md">
          <span class="text-grey-1">第{{ pagination.currentPage }}页 / 共{{ pagination.totalPage }}页</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: 'Home',
  data() {
    return {
      articles: [],
      pagination: {
        totalPage: 1,
        currentPage: 1,
      },
    };
  },
  methods: {
    //从服务端获取数据
    async fetchData() {
      const res = await this.$http.get(
        `/articles/${this.pagination.currentPage}`
      );
      this.articles = res.data.list;
      this.pagination.totalPage = res.data.totalPage;
      this.pagination.currentPage = res.data.currentPage;
    },

    //跳转到指定页数
    async gotoPage(pageNum) {
      this.pagination.currentPage = pageNum;
      this.fetchData();
      this.downPage();
    },

    //上一页
    prev() {
      if (this.pagination.currentPage === 1) return;
      this.pagination.currentPage--;
      this.fetchData();
      this.downPage();
    },

    //下一页
    next() {
      if (this.pagination.currentPage === this.pagination.totalPage) return;
      this.pagination.currentPage++;
      this.fetchData();
      this.downPage();
    },
    //开启下滑箭头
    //animate() 方法执行 CSS 属性集的自定义动画
    //该方法通过 CSS 样式将元素从一个状态改变为另一个状态，CSS属性值是逐渐改变的，这样就可以创建动画效果。
    downPage() {
      $("html, body").animate(
        {
          // scrollTop 设置垂直滚动条位置：
          //outerHeight() 方法返回第一个匹配元素的外部高度。该方法包含 padding 和 border
          scrollTop: $("#header").outerHeight() - 56,
        },
        //动画时间
        500
      );
    },
  },

  mounted() {
    this.fetchData();
  }
};
</script>

<style lang="scss" scoped>
.bgImg {
  background-image: url("https://cdn.jsdelivr.net/gh/starkmage/ImgHosting/starkmage-picgo/bg-blog.png");
  width: 100%;
  height: 100vh;
  //图片初始位置
  background-position: center;
  //缩放背景图片以完全覆盖背景区，可能背景图片部分看不见
  background-size: cover;
  position: relative;
  overflow: hidden;
  .shouye-text {
    font-size: 32px;
    font-family: "Roboto", sans-serif;
    width: 14em;
    white-space: nowrap;
    animation: typing 2.5s steps(13, end), infinite;
    overflow: hidden;
  }
  .arrow-down {
    position: absolute;
    bottom: 30px;
    color: #fff;
    //动画时间0.8s，匀速播放，延迟未设置，无限播放，先执行一遍动画，然后再反向执行一遍动画
    animation: arrowDown 0.8s linear infinite alternate;
    .icon-down {
      cursor: pointer;
      font-size: 45px;
    }
  }
}

//使用@keyframes规则,创建动画,通过逐步改变从一个CSS样式设定到另一个
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 14em;
  }
}

@keyframes arrowDown {
  0% {
    visibility: hidden;
    //透明度
    opacity: 0;
    -webkit-transform: translatey(-20%);
  }
  20% {
    visibility: visible;
    opacity: 0;
    -webkit-transform: translatey(10%);
  }
  100% {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translatey(20%);
  }
}

.post-container {
  max-width: 1024px;
  margin: 0 auto;
  .top {
    width: 280px;
    height: 260px;
  }
  .article-info {
    width: 280px;

  }
}

//变化首页欢迎语的大小
@media screen and (max-width: 768px) {
  .shouye-text {
    font-size: 24px !important;
  }
}
</style>