<template>
  <div id="app" :class="$mq">
    <Header v-if="$mq === 'pc'" />
    <MobileHeader v-else />
    <Nuxt />
    <Fixed v-if="$mq === 'pc'" />
    <MobileFixed v-else />
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
  &.pc {
    min-width: 1260px;
    overflow-x: auto;
  }
}
</style>
