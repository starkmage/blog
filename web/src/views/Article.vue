<template>
  <div class="main-container">
    <div class="page-article d-flex jc-center" v-if="model">
      <div class="page">
        <div class="text-green fs-xxxxl mt-11">{{model.title}}</div>
        <div class="text-grey-2 d-flex fs-sm my-4">
          <p class="mr-4">{{model.createdAt | date("YYYY-MM-DD HH:mm:ss")}}</p>
          <p class="mr-4">字数：{{model.body.length}}</p>
          <p>评论：{{comments.length}}</p>
        </div>
        <div>
          <router-link
            tag="div"
            to="/tags"
            class="p-2 bdr post-tags text-border text-center bg-blue fs-sm hand mb-6"
          >
            <span>
              <i class="iconfont icon-tag1"></i>
            </span>
            <span class>&nbsp;{{model.categories[0].name}}</span>
          </router-link>
        </div>
        <div class="text-grey-2 fs-md mb-9 container">
          <div class="markdown-body">
            <div id="content" v-html="model.body"></div>
          </div>
        </div>
      </div>
      <div class="d-none left">
        <div class="blogs-menu toc-sticky text-grey-1 pl-9">
          <div>
            <h2>目录</h2>
            <div
              class="menu-title hand text-ellipsis"
              :title="item.text"
              v-for="item in  articleToc"
              :key="item.id"
              :style="{paddingLeft: `${item.indent}em`}"
              @click="scrllTo(item.id)"
            >{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="art-comment" v-if="model">
      <div class="text-grey boeder-top">
        <p>~非特殊说明，文章均为博主原创</p>
        <p>~本博客所有文章均采用 CC BY-SA 3.0协议 。转载请注明出处！</p>
      </div>
      <h3 class="fs-xxxxl mt-9">评论</h3>
      <comment-textarea
        class="textarea-box bg-postcolor bdr"
        model="comments"
        @toResponse="getBlogComments"
        type="parent"
        :blogsId="id"
        placeholder="请输入留言内容"
      ></comment-textarea>
      <comment-list
        v-if="parentCommentx"
        class="mt-7 mb-10"
        model="comments"
        @getCommentList="getBlogComments"
        :commentsList="parentComments"
        :blogsId="id"
      ></comment-list>
    </div>
    <div class="w-100 h-100">
      <el-backtop :bottom="50"></el-backtop>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>