<template>
  <div id="errorWrapper">
    <span class="img-text">
       <img v-if="$mq === 'pc'"
          src="@/assets/images/main/img_error_belly01.png"
       />
       <img v-else
          src="@/assets/m_images/main/img_error_belly01.png"
       />
    </span>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'errorLayout',
}
</script>

<style scoped lang="scss">
.mobile {
  #errorWrapper {
    display: flex;
    justify-content: center;
    background: url("assets/m_images/main/img_error_404_bg.png") no-repeat center/cover;
    .img-text {
      display: inline-block;
      width: 100%;
    }
  }
}

#errorWrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  background: url("assets/images/main/img_error_404_bg.png") no-repeat center/cover;
  .img-text {
    display: inline-block;
    width: 52%;
    max-width: 1000px;
    margin: auto;
    .mobile & {
      margin-top: 60px;
    }
    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 768px) {
  #errorWrapper {
    .img-text {
      width: 65%;
    }
  }
}
</style>