<template>
  <div id="increaseButton">
    <el-button @click="increase" :plain="true" type="success">
      <i class="el-icon-plus"></i>
    </el-button>
  </div>
</template>
<script>
import vueBus from '../services/Bus'
export default {
  name: 'increaseButton',
  data: () => ({

  }),
  methods: {
    increase () {
      const value = 1
      vueBus.$emit('increaseValue', value)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
