<template>
  <el-row id="playButtonWrapper">
    <el-col :span="24">
      <img id="playButton" src="../assets/play-button.svg" alt="Play Button" @click="changeRythm" :class="{'rythm-bass': rythmBass}">
    </el-col>
  </el-row>
</template>
<script>
import Rythm from 'rythm.js'
export default {
  name: 'playButton',
  data: () => ({
    rythmBass: false
  }),
  methods: {
    changeRythm () {
      const myAudioCtx = new AudioContext()
      myAudioCtx.close().then(() => {
        this.rythmBass = !this.rythmBass
        const rythm = new Rythm()
        rythm.stop()
        rythm.setMusic('../../static/tick.mp3')
        rythm.start()
      })
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
</style>
