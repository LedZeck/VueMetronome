<template>
  <div id="app">
    <img src="./assets/metronome.svg">
    <vueRootScreen/>
  </div>
</template>

<script>
import vueRootScreen from './screens/RootScreen'

export default {
  name: 'app',
  components: {
    vueRootScreen
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
  margin-top: 60px;
}

.el-slider__bar, .el-slider__button, .el-slider__button.hover {
  background-color: #41B883;
}
</style>
