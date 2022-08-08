<template>
  <div id="errorWrapper">
    <span class="img-text">
       <img v-if="$mq === 'pc'"
            src="@/assets/images/main/img_error_belly02.png"
       />
       <img v-else
            src="@/assets/m_images/main/img_error_belly02.png"
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
    padding: 0 30px;
    .img-text {
      display: inline-block;
      width: 100%;
      margin: 60px 0 0;
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
    width: 21%;
    max-width: 715px;
    margin: auto;
    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 768px) {
  #errorWrapper {
    .img-text {
      width: 40%;
    }
  }
}
</style>