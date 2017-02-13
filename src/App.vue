<template>
  <div id="app">
    <img src="./assets/logo.png">
    <myHeader></myHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './components/header'

export default {
  name: 'app',
  components: {
    myHeader
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
  #app img {
    width: 100px;
    margin-bottom: 20px;
  }

</style>
