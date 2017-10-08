<template>
  <div id="decreaseButton">
    <el-button @click="decrease" :plain="true" type="success">
      <i class="el-icon-minus"></i>
    </el-button>
  </div>
</template>
<script>
import vueBus from '../services/Bus'
export default {
  name: 'decreaseButton',
  data: () => ({

  }),
  methods: {
    decrease () {
      const value = 1
      vueBus.$emit('decreaseValue', value)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
