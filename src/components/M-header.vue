<template>
    <div class="header">
      <span class="header-item"></span>
      <span class="header-content">
        <img class="header-content-img" src="../assets/狮子.png" alt="">
        <span class="header-title">Music</span>
      </span>
      <span class="header-item">
        <img class="header-item-img" src="../assets/我的.png" alt="">
      </span>
    </div>
</template>

<script>
export default {
  name: 'M-header'
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .header{
    width: 100vw;
    height: 44px;
    line-height: 44px;
    font-size: 0;
  }
  .header-item{
    display: inline-block;
    width: 20%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    text-align: right;
  }
  .header-content{
    display: inline-block;
    width: 60%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    text-align: center;
    color: #ffcd32;
  }
  .header-content-img{
    vertical-align: middle;
    position: relative;
    top: -2px;
  }
  .header-title{
    font-size: 18px;
    vertical-align: middle;
    margin-left: 5px;
  }
  .header-item-img{
    width: 20px;
    position: relative;
    right: 20px;
    overflow: hidden;
    vertical-align: middle;
  }
</style>
