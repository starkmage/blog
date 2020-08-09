<template>
  <div class="main-container page-about d-flex flex-column ai-center pt-9 content">
    <div class="page p-5">
      <div class="text-green fs-xxxxl">About</div>
      <div class="mt-5 mb-5"></div>
      <div class="py-4">
        <span class="fs-xxl text-green">#&nbsp;</span>
        <span class="fs-xxl text-grey-1">关于自己</span>
      </div>
      <div class="pl-5 text-green-1">
        <p>• 土木狗转行前端程序🐵一枚，目前📍：上海</p>
        <p>• 本科、研究生都在同济大学，现在研究生二年级在读</p>
        <p>• 中等强迫症患者，喜欢简约风</p>
      </div>
      <div class="py-4">
        <span class="fs-xxl text-green">#&nbsp;</span>
        <span class="fs-xxl text-grey-1">关于个人博客</span>
      </div>
      <div class="pl-5 text-green-1">
        <p>• 该博客项目前后端分离开发，前端基于Vue，后端由express提供接口，MongoDB存储数据，部署在腾讯云服务器上</p>
        <p>• 根据相关要求，本站不提供文章评论、留言等功能，如需联系，个人联系方式已在下方提供</p>
        <p>• 搭建该博客的目的主要是满足真正拥有个人网站的心愿，记录自己的学习历程以及一些可能很浅显的技术总结</p>
        <p>• 如有文章错误、网站bug的地方烦请指正</p>
        <p>
          • 该站的部分文章由
          <a
            href="https://starkmage.github.io/"
            target="_blank"
            class="text-red bd-bottom-about"
          >旧站</a> 迁移而来
        </p>
        <p>
          • 项目的完成离不开互联网的开源精神，本站已经在
          <a
            href="https://github.com/starkmage/blog.git"
            target="_blank"
            class="text-red bd-bottom-about"
          >GitHub</a> 上完全开源
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";
.content {
  line-height: 1.8 !important;
}
.bd-bottom-about {
  border-bottom: 1px solid grey;
  &.bd-bottom-about:hover {
    color: map-get($colors, "red");
  }
}
</style>