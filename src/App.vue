<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <a @click.prevent="clickLinkOne">Go to Hello</a>
    <a @click.prevent="clickLinkTwo">Go to Test</a> -->
    <div class="touchWrap" @touchstart='vTouchStart'>
      
        <viking-home></viking-home>

    </div>
    <router-view></router-view>
    
  </div>
</template>

<script>
import vikingHome from '@/components/viking-home'
export default {
  name: 'app',
  methods: {
    clickLinkOne(){
      this.$router.push('/')
    },
    clickLinkTwo(){
      this.$router.push('/test')
    },
    vTouchStart: function(e){
      alert(1);
    },

  },
  components:{
    vikingHome
  }
}
</script>

<style lang="scss">
html,body {
  height: 100%;
  background-size: cover;
}
$color: red;
$fontsize:1.8rem;
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: $fontsize;
  height: 100%;
  .touchWrap {
    
  }
}
</style>
