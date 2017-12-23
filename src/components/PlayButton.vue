<template>
  <el-row id="playButtonWrapper">
    <el-col :span="24" class="fixBlurry">
      <img id="playButton" src="../assets/play-button.svg" alt="Play Button" @click="changeRythm" :class="{'rythm-bass': rythmBass}">
    </el-col>
  </el-row>
</template>
<script>
import Rythm from 'rythm.js'
const rythm = new Rythm()
export default {
  name: 'playButton',
  data: () => ({
    rythmBass: false
  }),
  methods: {
    async changeRythm () {
      const myAudioCtx = new AudioContext()
      await myAudioCtx.close()
      this.rythmBass = !this.rythmBass
      rythm.stop()
      rythm.setMusic('../../static/tick.mp3')
      rythm.start()
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
