<template>
  <div id="app" :class="$mq">
    <Nuxt />
    <Footer v-if="$mq === 'pc'" />
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
  }
  &.pc {
    min-width: 1260px;
    overflow-x: auto;
  }
}
</style>
