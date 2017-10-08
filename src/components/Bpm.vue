<template>
  <div id="bpm">
    <h1>{{beat}} BPM</h1>
  </div>
</template>
<script>
import vueBus from '../services/Bus'
export default {
  name: 'bpm',
  data: () => ({
    beat: 60
  }),
  created () {
    vueBus.$on('decreaseValue', (value) => {
      this.beat = this.beat - value
    })
    vueBus.$on('increaseValue', (value) => {
      this.beat = this.beat + value
    })
    vueBus.$on('beatValueFromSlider', (value) => {
      console.log(value)
      this.beat = value
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
