<template>
  <div id="app" :class="$mq" class="belly-photo">
    <Header v-if="$mq === 'pc'" />
    <MobileHeader v-else />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "bellyPhoto",
};
</script>

<style scoped lang="scss">
.belly-photo {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background: linear-gradient(
      0deg,
      rgba(255, 204, 235, 0.2),
      rgba(255, 204, 235, 0.2)
    ),
    #ffffff;
  &.pc {
    min-width: 1260px;
    overflow-x: auto;
  }
}

::v-deep #head {
  .pc & {
    background: #fff5fb;
  }
  .category .anchor-nav li .nuxt-link-active {
    color: #fe3d6b;
    &::after {
      background: #fe3d6b;
    }
  }
}
</style>
