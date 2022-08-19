<template>
  <div id="errorWrapper">
    <span class="img-text">
      <div class="txt-wrap">
        <img
          v-if="$mq === 'pc'"
          src="@/assets/images/main/img_error_belly02.png"
        />
        <img v-else src="@/assets/m_images/main/img_error_belly02.png" />
        <p class="txt">2020.11.01 22:00 ~ 2020.11.03 22:00</p>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "errorLayout",
};
</script>

<style scoped lang="scss">
.mobile {
  #errorWrapper {
    display: flex;
    justify-content: center;
    padding: 0 20px;
    .img-text {
      width: 100%;
      margin-top: 60px;
      .txt {
        font-size: 4.3vw;
        top: 72.9%;
        left: 9.5%;
      }
    }
  }
}

#errorWrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  .txt-wrap {
    position: relative;
  }
  .img-text {
    display: inline-block;
    //width: 21%;
    max-width: 715px;
    margin: auto;
    img {
      width: 100%;
    }
    .txt {
      position: absolute;
      width: 100%;
      font-size: 18px;
      font-weight: bold;
      top: 72.9%;
      left: 14%;
    }
  }
}
/*@media screen and (max-width: 768px) {
  #errorWrapper {
    .img-text {
      width: 40%;
    }
  }
}*/
</style>
