<template>
  <div class="main-container">
    <div class="page-article d-flex jc-center" v-if="model">
      <div class="d-none left"></div>
      <div class="page">
        <div class="text-green fs-xxxxl mt-11">{{model.title}}</div>
        <div class="text-grey-2 d-flex fs-sm my-4">
          <p class="mr-4">{{model.createdAt | date("YYYY-MM-DD HH:mm:ss")}}</p>
          <p class="mr-4">字数：{{model.htbody.length}}</p>
          <!-- <p>评论：{{comments.length}}</p> -->
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
            <span class>&nbsp;{{model.categories[0].title}}</span>
          </router-link>
        </div>
        <div class="text-grey-2 fs-md mb-9 container">
          <div class="markdown-body">
            <div id="content" v-html="model.htbody" v-highlight></div>
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
              v-for="item in articleToc"
              :key="item.id"
              :style="{paddingLeft: `${item.indent}em`}"
              @click="scrollTo(item.id)"
            >{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="art-comment" v-if="model">
      <div class="text-grey boeder-top">
        <p>• 非特殊说明，文章均为博主原创</p>
        <p>• 本博客所有文章均采用 CC BY-SA 3.0协议 。转载请注明出处！</p>
      </div>
      <!-- <h3 class="fs-xxxxl mt-9">评论</h3>
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
      ></comment-list>-->
    </div>
    <div class="w-100 h-100">
      <el-backtop :bottom="50"></el-backtop>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      model: null,
      articleToc: [],
    };
  },
  watch: {
    id: "fetch",
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/articles/list/${this.id}`);
      this.model = res.data;

      setTimeout(() => {
        //生成目录
        let childrens = document.getElementById("content").children;
        let treeArray = [];

        // 获取标题级别的函数
        function getLevel(str = "") {
          const result = str.slice(-1);
          return Number(result);
        }

        for (let i = 0; i < childrens.length - 1; i++) {
          let nodeName = childrens[i].nodeName;
          if (
            nodeName == "H1" ||
            nodeName == "H2" ||
            nodeName == "H3" ||
            nodeName == "H4" ||
            nodeName == "H5" ||
            nodeName == "H6"
          ) {
            treeArray.push({
              id: childrens[i].childNodes[0].getAttribute("id"),
              text: childrens[i].innerText,
              indent: getLevel(childrens[i].nodeName),
            });
          }
        }
        //统一格式
        let base = treeArray[0].indent;
        treeArray.forEach((item) => {
          item.indent = item.indent - base;
        });
        this.articleToc = treeArray;
      }, 1000);
    },

    //点击目录跳转功能
    scrollTo(id) {
      let node = document.querySelector("#" + id);
      if (!node) {
        return;
      }
      node.scrollIntoView({
        //设置滚动效果：平滑滚动，html5新增
        behavior: "smooth",
        //块级元素排列方向要滚动的位置，center表示元素中间和视口的中间对齐
        block: "center",
        //行内元素排列方向要滚动的位置
        inline: "nearest",
      });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/markdown.css";

.markdown-body {
  h1 h2 h3 h4 h5 h6 {
    color: #a7ce94 !important;
  }
}

#content {
  line-height: 2.3;
  h1,h2,h3,h4,h5,h6 {
    color: map-get($colors, "green-1");
  }
}

.page {
  width: 50%;
}

.post-tags {
  max-width: 60px;
}

.post-tags:hover {
  background-color: map-get($colors, "border");
  color: map-get($colors, "grey");
}

.left {
  width: 25%;
}

.blogs-menu {
  max-width: 400px;
  line-height: 1.3;
  margin-top: 205px;
  .menu-title {
    padding: 6px 0;
    color: map-get($colors, "green-1");
    &:hover {
      text-decoration: underline;
    }
  }
}

.toc-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 80px;
}

.art-comment {
  max-width: 650px;
  margin: 0 auto 40px;
}

.textarea-box {
  padding: 15px;
}

@media screen and (max-width: 900px) {
  .d-none {
    display: none;
  }
  .page {
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .page {
    width: 95%;
    margin: 0 auto;
  }
  .art-comment {
    width: 90%;
    margin: 0 auto;
  }
}
</style>