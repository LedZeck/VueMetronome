<template>
  <el-row id="playButtonWrapper">
    <el-col :span="24">
      <img id="playButton" src="../assets/play-button.svg" alt="">
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'playButton',
  data: () => ({

  })
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
