<template>
  <div class="main">
    <my-header></my-header>
    <!-- <my-snow></my-snow> -->
    <keep-alive include="Home">
      <router-view style="min-height: 800px;"></router-view>
    </keep-alive>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
// import MySnow from "../components/MySnow";
export default {
  components: {
    MyHeader,
    MyFooter,
    // MySnow,
  },
};
</script>

<style>
</style>