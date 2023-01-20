<template>
  <div>
    测试：
    <hr/>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="less" scoped>
#app {
}
</style>
