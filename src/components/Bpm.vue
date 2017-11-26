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
    beat: 60,
    time: null
  }),
  created () {
    vueBus.$on('decreaseValue', (value) => {
      this.beat = this.beat - value
      this.time = vueBus.beatTime(this.beat)
    })
    vueBus.$on('increaseValue', (value) => {
      this.beat = this.beat + value
      this.time = vueBus.beatTime(this.beat)
    })
    vueBus.$on('beatValueFromSlider', (value) => {
      this.beat = value
      this.time = vueBus.beatTime(this.beat)
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
