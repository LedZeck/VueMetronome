<template>
  <el-row id="playButtonWrapper">
    <el-col :span="24" class="fixBlurry">
      <img id="playButton"
        src="../assets/play-button.svg"
        alt="Play Button"
        @click="toggleMetronome"
        :class="{'rythm-bass': rythmBass}">
    </el-col>
  </el-row>
</template>
<script>
import Rythm from 'rythm.js'
import vueBus from '../services/Bus'

const rythm = new Rythm()
let loop = null
rythm.setMusic('../../static/tick.mp3')

export default {
  name: 'playButton',
  data: () => ({
    rythmBass: false,
    beatTime: 60,
    playing: false
  }),
  created () {
    vueBus.$on('increaseValue', (value) => {
      this.beatTime = this.beatTime + value
      this.changeRythm()
    })
    vueBus.$on('decreaseValue', (value) => {
      this.beatTime = this.beatTime - value
      this.changeRythm()
    })
    vueBus.$on('beatValueFromSlider', (value) => {
      this.beatTime = value
      this.changeRythm()
    })
  },
  methods: {
    async changeRythm () {
      const time = vueBus.beatTime(this.beatTime)
      if (this.playing === true) {
        // Clear any pre-existing loop before starting a new one
        if (loop) clearInterval(loop)

        // Start a loop with a new bpm
        loop = await setInterval(() => {
          console.log('in interval')
          this.rythmBass = true
          rythm.start()
        }, time)
      } else {
        return clearInterval(loop)
      }
    },
    toggleMetronome () {
      this.playing = !this.playing
      this.changeRythm()
    }
  }
}
</script>
<style lang="scss" scoped>
  #playButton {
    height: 100px;
  }
  #playButtonWrapper {
    margin-top: 50px;
  }
  // fix chrome image blurry
  .fixBlurry {
    -webkit-perspective: 1000;
    -webkit-backface-visibility: hidden;
  }
</style>
