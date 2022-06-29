<template>
  <nav>지엔비 영역</nav>
</template>

<script>
export default {
  name: "nav",
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  height: 50px;
  font-size: 48px;
  background: #fff;
  z-index: 99;
}
</style>
