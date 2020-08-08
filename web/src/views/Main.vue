<template>
  <div class="main">
    <Header></Header>
    <router-view style="min-height: 800px;"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>