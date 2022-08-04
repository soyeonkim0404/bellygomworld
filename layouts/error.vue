<template>
  <div id="errorWrapper">
    <span class="img-text">
        <template v-if="$store.getters.getLocale === 'ENG'">
         <img v-if="$mq === 'pc'"
                src="@/assets/images/main/img_error_belly01_eng.png"
             />
         <img v-else
              src="@/assets/m_images/main/img_error_belly01.png"
         />
        </template>
        <template v-else>
           <img v-if="$mq === 'pc'"
              src="@/assets/images/main/img_error_belly01.png"
           />
           <img v-else
              src="@/assets/m_images/main/img_error_belly01.png"
           />
        </template>
    </span>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'errorLayout',
  mounted() {
    let locale = this.getCookie("b_locale");
    if (locale && locale === "KOR") {
      this.$store.commit("setKOR");
    } else {
      this.$store.commit("setENG");
    }
  },
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
    img {
      width: 100%;
    }
  }
}

</style>