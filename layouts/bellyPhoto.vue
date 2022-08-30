<template>
  <div id="app" :class="$mq" class="belly-photo">
    <Header v-if="$mq === 'pc'" />
    <MobileHeader v-else />
    <a href="#getBelly" class="top-btn" @click="topBtn">
      <img src="@/assets/images/top_btn.svg" />
    </a>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "bellyPhoto",
  mounted() {
    window.addEventListener("scroll", this.topBtnShow);
  },
  methods: {
    topBtn() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    topBtnShow() {
      const contentHeight = document.querySelector("#app").offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      if (scrollY > 600) {
        document.querySelector(".top-btn").style.opacity = 1;
      } else {
        document.querySelector(".top-btn").style.opacity = 0;
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.topBtnShow);
  },
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

.top-btn {
  .pc & {
    position: fixed;
    bottom: 40px;
    right: 50px;
    width: 88px;
    height: 88px;
    border-radius: 100%;
    opacity: 0;
  }
  .mobile & {
    position: fixed;
    bottom: 18px;
    right: 20px;
    width: 44px;
    height: 44px;
    border-radius: 100%;
    z-index: 1000;
  }
}
</style>
