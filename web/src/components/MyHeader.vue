<template>
  <header class="head nav d-flex jc-around ai-center" :class="isScrolling ? `mini` : ''">
    <div class="hand">
      <router-link tag="div" to="/" class="lawson">
        <!-- <span>好电脑</span> -->
        <img src="../assets/img/logo.png" height="42" class="main-img" />
      </router-link>
    </div>
    <div class="d-flex text-white hand">
      <!-- exact:用于控制当前激活项的匹配行为 -->
      <router-link
        exact
        tag="div"
        :to="item.link"
        v-for="item in items"
        :key="item.text"
        active-class="active"
        class="nav-item px-5 icon"
      >{{item.text}}</router-link>
      <el-dropdown trigger="click" @visible-change="(v) => (isShowMenu = v)">
        <div
          class="menu-button hand"
          @click="isShowMenu = !isShowMenu"
          :class="{ isShowMenu: isShowMenu }"
        >
          <i></i>
          <i></i>
          <i></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link tag="div" to="/">首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <router-link tag="div" to="/archives">归档</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <router-link tag="div" to="/tags">标签</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <router-link tag="div" to="/about">关于</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      //控制移动端菜单是否显示
      isShowMenu: false,
      isScrolling: false,
      items: [
        { text: "首页", link: "/" },
        { text: "归档", link: "/archives" },
        { text: "标签", link: "/tags" },
        // { text: "留言", link: "/message" },
        { text: "关于", link: "/about" },
      ],
    };
  },
  mounted() {
    this.adjustNavigation();
    //监听滚动，一旦滚动就执行一次
    window.addEventListener("scroll", this.adjustNavigation);
  },
  beforeDestory() {
    window.removeEventListener("scroll", this.adjustNavigation);
  },
  methods: {
    //页面是否往下滚动了
    adjustNavigation() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      this.isScrolling = scrollTop > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

.nav-item.active {
  color: map-get($colors, "red");
}

.nav-item:hover {
  color: map-get($colors, "red");
}

.head {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  display: relative;
  height: 65px;
  background-color: transparent;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease-in-out;
}

.mini {
  background-color: map-get($colors, "navcolor");
  height: 56px;
  transition: 0.5s ease-in-out;
}

// 移动端的三条横线
.menu-button {
  border: none;
  display: none;
  i {
    display: block;
    width: 24px;
    height: 3px;
    background-color: #fff;
    margin: 5px auto;
    transition: 0.2s ease-in-out;
  }
}

//变成X号
.isShowMenu {
  i {
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(1) {
      transform: translateY(8px) rotate(-45deg);
    }
    &:nth-child(3) {
      transform: translateY(-8px) rotate(45deg);
    }
  }
}

@media screen and (max-width: 650px) {
  .nav-item {
    display: none;
  }
  .menu-button {
    display: block;
    margin-left: 120px;
  }
}

.lawson {
  display: flex;
  align-items: center;
  color: #fff;
  span {
    margin-right: 30px;
    font-size: 20px;
  }
}
</style>