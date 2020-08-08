<template>
  <div class="mb-9">
    <div class="mb-7">
      <div class="bgImg d-flex jc-center" id="header">
        <div class="text-white d-flex jc-center ai-center">
          <span class="shouye-text">罗森店员不会说欢迎</span>
        </div>
        <div class="arrow-down">
          <i class="iconfont icon-down" @click="downpage"></i>
        </div>
      </div>
    </div>
    <div class="post-container d-flex flex-wrap jc-center ai-center">
      <div v-for="(article, index) in articles" :key="index">
        <div class="show home-art">
          <router-link
            tag="div"
            :to="`/article/list/${article._id}`"
            class="top mt-10 mx-8 mb-0 hand"
            :style="{'background-image': `url(${article.icon})`}"
          ></router-link>
          <div class="bg-postcolor pt-8 mx-8 title">
            <router-link
              tag="span"
              :to="`/article/list/${article._id}`"
              class="fs-xxl jc-center d-flex flex-wrap hard text=gery-1"
            >{{article.title}}</router-link>
            <div class="d-flex mt-4 p-7 text-grey-1">
              <i class="iconfont icon-riqi2 pr-2"></i>
              <span class="fs-sm">{{ article.createdAt | date("YYYY-MM-DD") }}</span>
              <i class="iconfont icon-sort pl-9"></i>
              <router-link
                tag="span"
                :to="`/tags`"
                class="fs-sm pl-2 mr-6 hand"
              >{{ article.categories[0].name }}</router-link>
              <i class="iconfont icon-love text-red hand"></i>
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
          <a @click="goToPage(article)" :data-hover="article" class="text-grey-1">{{ article }}</a>
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
          <a @click="goToPage(pagination.totalPage)" data-hover="末页">
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

export default {

}
</script>

<style>

</style>