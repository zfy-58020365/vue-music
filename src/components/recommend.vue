<template>
  <div class="recommend">
    <Header></Header>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from './M-header'
import TabBar from './Tabbar'
import {getRecommend} from '../api/recommend'
import {ERR_OK} from '../api/config'

export default {
  name: 'recommend',
  data () {
    return {}
  },
  components: {
    Header,
    TabBar
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recommend{
    width: 100vw;
    height: 100vh;
    font-size: 0;
    background-color: rgba(0,0,0, .85);
  }

</style>
