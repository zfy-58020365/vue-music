<template>
  <div class="search">
    <Header></Header>
    <TabBar></TabBar>
    搜索
  </div>
</template>

<script>
import Header from './M-header'
import TabBar from './Tabbar'
export default {
  name: 'search',
  data () {
    return {}
  },
  components: {
    Header,
    TabBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search{
    width: 100vw;
    height: 100vh;
    font-size: 0;
    background-color: rgba(0,0,0, .85);
  }

</style>
