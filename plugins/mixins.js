import Vue from "vue";

const mixin = {
  data() {
    return {};
  },
  mounted() {
    let locale = this.getCookie("b_locale");
    if (locale && locale === "ENG") {
      this.$store.commit("setENG");
    } else {
      this.$store.commit("setKOR");
    }
  },
  methods: {
    mySilentScroll(section, slide) {
      this.$refs.fullpage.api.setScrollingSpeed(0);
      this.$refs.fullpage.api.moveTo(section, slide);
      this.$refs.fullpage.api.setScrollingSpeed(700);
    },
    downloadPdf(_no, _locale) {
      if (_no === 1) {
      } else if (_no === 2) {
        if (_locale === "KOR")
          window.open(
            "https://drive.google.com/file/d/1EaHygFcjGFHKoEZg1Ysx2E3OCIMms4nE/view?usp=sharing"
          );
        else if (_locale === "ENG")
          window.open(
            "https://drive.google.com/file/d/17wtIWstPmIIl-KfHGK6hmowgzCzgn_2y/view?usp=sharing"
          );
      } else if (_no === 3) {
        if (_locale === "KOR")
          window.open(
            "https://drive.google.com/file/d/14fkAK-w0LGka4iOBYIK1pe5RLFZdLpDe/view?usp=sharing"
          );
        else if (_locale === "ENG")
          window.open(
            "https://drive.google.com/file/d/1t2Xuibgx_GqqNv-plfXOkukIzeeGXfPE/view?usp=sharing"
          );
      }
    },
    getCookie(name) {
      let matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
  },
};

Vue.mixin(mixin);
