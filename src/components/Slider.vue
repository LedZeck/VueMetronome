<template>
  <div id="slider">
    <el-slider @input="sendSliderValue" v-model="range" :min="10" :max="220"></el-slider>
  </div>
</template>
<script>
import vueBus from '../services/Bus'
export default {
  name: 'slider',
  data: () => ({
    range: 60
  }),
  created () {
    vueBus.$on('decreaseValue', (value) => {
      this.range = this.range - value
    })
    vueBus.$on('increaseValue', (value) => {
      this.range = this.range + value
    })
  },
  methods: {
    sendSliderValue (event) {
      vueBus.$emit('beatValueFromSlider', event)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
