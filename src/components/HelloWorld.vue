<template>
  <section>
    <i class="fa fa-circle" ref='ff'></i>
    {{ msg }}
    <mt-search></mt-search>
  </section>
</template>

<script>
import {css,MTween} from '@/assets/js/m.Tween.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    var that = this;
    setTimeout(function(){
      // css(that.$refs.ff,"translateY",120);
      MTween({
        el:that.$refs.ff,
        time:2000,
        target:{
          translateY:40
        },
        type: "bounceOut"
      });
    },2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@r:50rem;
</style>
