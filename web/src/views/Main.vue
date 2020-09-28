<template>
  <div class="main">
    <my-header></my-header>
    <keep-alive include="Home">
      <router-view style="min-height: 800px;"></router-view>
    </keep-alive>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style>
</style>