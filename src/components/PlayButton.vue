<template>
  <el-row id="playButtonWrapper">
    <el-col :span="24" class="fixBlurry">
      <img id="playButton" src="../assets/play-button.svg" alt="Play Button" @click="changeRythm" :class="{'rythm-bass': rythmBass}">
    </el-col>
  </el-row>
</template>
<script>
import Rythm from 'rythm.js'
import vueBus from '../services/Bus'
const rythm = new Rythm()
export default {
  name: 'playButton',
  data: () => ({
    rythmBass: false,
    beatTime: 60,
    teste: 100
  }),
  created () {
    vueBus.$on('increaseValue', (value) => {
      this.beatTime = this.beatTime + value
    })
    vueBus.$on('decreaseValue', (value) => {
      this.beatTime = this.beatTime - value
    })
    vueBus.$on('beatValueFromSlider', (value) => {
      this.beatTime = value
    })
  },
  methods: {
    async changeRythm () {
      const time = vueBus.beatTime(this.beatTime)
      await setInterval(() => {
        const myAudioCtx = new AudioContext()
        myAudioCtx.close()
        this.rythmBass = !this.rythmBass
        rythm.stop()
        rythm.setMusic('../../static/tick.mp3')
        rythm.start()
      }, time)
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
