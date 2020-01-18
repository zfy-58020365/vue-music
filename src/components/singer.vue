<template>
  <div class="singer">
    <Header></Header>
    <TabBar></TabBar>
    歌手
  </div>
</template>

<script>
import Header from './M-header'
import TabBar from './Tabbar'
export default {
  name: 'singer',
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
  .singer{
    width: 100vw;
    height: 100vh;
    font-size: 0;
    background-color: rgba(0,0,0, .85);
  }
</style>
