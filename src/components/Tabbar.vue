<template>
    <div class="tab">
      <router-link tag="div"  class="tab-item" to="recommend">
        <div class="tab-item_title">推荐</div>
      </router-link>
      <router-link tag="div"  class="tab-item" to="singer">
        <div class="tab-item_title">歌手</div>
      </router-link>
      <router-link tag="div"  class="tab-item" to="rank">
        <div class="tab-item_title">排行</div>
      </router-link>
      <router-link tag="div"  class="tab-item" to="search">
        <div class="tab-item_title">搜索</div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped>
  .tab-item{
    display: inline-block;
    width: 10%;
    font-size: 16px;
    text-align: center;
    line-height: 36px;
    margin-left: 12%;
    color: #8f8f8f;
  }
  .tab-item_title{
    display: inline-block;
    width: initial;
    height: 35px;
  }
  .router-link-active{
    color: #ffcd32;
    border-bottom: 2px solid #ffcd32;
  }

</style>
