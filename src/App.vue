<template>
  <div id="app">
    <img src="@/assets/imgs/logo.png">
    <router-view/>
  </div>
</template>

<script>
import {fontSize} from '@/assets/js/common.js'

export default {
  name: 'App',
  created(){
    fontSize(15);
  }

}
</script>

<style lang="less">

</style>
