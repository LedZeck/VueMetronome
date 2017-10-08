<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="24">
        <vueBpm/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <vueDecreaseButton/>
      </el-col>
      <el-col :span="18">
        <vueSlider/>
      </el-col>
      <el-col :span="3">
        <vueIncreaseButton/>
      </el-col>
    </el-row>
    <vuePlayButton/>
  </el-card>
</template>
<script>
import vueBpm from './Bpm'
import vueDecreaseButton from './DecreaseButton'
import vueSlider from './Slider'
import vueIncreaseButton from './IncreaseButton'
import vuePlayButton from './PlayButton'
export default {
  name: 'card',
  data: () => ({

  }),
  components: {
    vueBpm,
    vueDecreaseButton,
    vueIncreaseButton,
    vueSlider,
    vuePlayButton
  }
}
</script>
<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
}
</style>
