<template>
  <div id="app" :class="$mq">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "defalut",
};
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  margin: 0 auto;
  &.mobile {
    overflow-x: hidden;
  }
  &.pc {
    min-width: 1000px;
  }
}
</style>
