<template>
  <div id="app" :class="$mq">
    <Header />
    <Nuxt />
    <Footer />
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
}
</style>
