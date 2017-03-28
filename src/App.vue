<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a @click.prevent="clickLinkOne">Go to Hello</a>
    <a @click.prevent="clickLinkTwo">Go to Test</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    clickLinkOne(){
      this.$router.push('/')
    },
    clickLinkTwo(){
      this.$router.push('/test')
    }
  }
}
</script>

<style lang="scss">
$color: red;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: $color;
}
</style>
