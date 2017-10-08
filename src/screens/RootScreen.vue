<template>
  <el-row type="flex" justify="center">
    <el-col :span="16"><div class="grid-content">
      <vueCard id="card"/>
    </div></el-col>
  </el-row>
</template>
<script>
import vueCard from '../components/Card'
export default {
  name: 'rootScreen',
  data: () => ({

  }),
  components: {
    vueCard
  }
}
</script>
<style lang="scss" scoped>
#card {
  margin-top: 32px;
}
</style>
