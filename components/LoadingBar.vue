<template>
  <div v-if="loading" class="loading-page">
    <img src="@/assets/images/main/Spinner-1s-200px.svg" alt="" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped lang="scss">
.loading-page {
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
  }
}
</style>
