<template>
  <header id="head" class="site-header" role="banner">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-233928727-2"
      v-if="$mq === 'mobile'"
    ></script>
    <script v-if="$mq === 'mobile'">
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-233928727-2");
    </script>

    <div class="logo">
      <a href="/m" @click="sendGaEvent('M_' + 'gnb_logo', 'GNB')">
        <img src="@/assets/m_images/main/mobile_logo.svg" alt="logo" />
      </a>
    </div>

    <div class="category">
      <div class="lang">
        <button
          class="btn-lang"
          @click="openLang"
          :class="{ on: this.showLang }"
        >
           <span class="txt">
              {{ $store.getters.getLocale }}
          </span>
        </button>
        <transition name="fade">
          <div class="lang-list" v-if="this.showLang">
            <a
              @click="
                openLang();
                $store.commit('setKOR');
                sendGaEvent('M_' + 'gnb_kor', 'GNB');
              "
              :class="{
                'nuxt-link-active': $store.getters.getLocale === 'KOR',
              }"
            >
              KOR
            </a>
            <a
              @click="
                openLang();
                $store.commit('setENG');
                sendGaEvent('M_' + 'gnb_eng', 'GNB');
              "
              :class="{
                'nuxt-link-active': $store.getters.getLocale === 'ENG',
              }"
            >
              ENG
            </a>
          </div>
        </transition>
      </div>
      <button type="button" class="btn-mobile-gnb" @click="openMobileGnb">
        <img src="@/assets/m_images/mobile_menu.svg" alt="메뉴" />
      </button>
    </div>

    <transition name="fade">
      <div id="mobile-gnb" v-if="this.mobileGnbShow">
        <div class="inner">
          <button class="btn-close" @click="openMobileGnb">
            <img src="@/assets/m_images/main/btn_menu_close.svg" alt="close" />
          </button>
          <ul class="anchor-nav">
            <li>
              <button
                id="show-modal"
                @click="storyModal('M_' + 'gnb_bellyStory', 'GNB')"
              >
                STORY BOOK
              </button>
            </li>
            <li
              data-menuanchor="firstSection"
              @click="sendGaEvent('M_' + 'gnb_getBelly', 'GNB')"
            >
              <a
                href="#bellyRoad/slide1"
                title="GET BELLY"
                @click="openMobileGnb"
                >GET BELLY</a
              >
            </li>
            <li
              data-menuanchor="secondSection"
              @click="sendGaEvent('M_' + 'gnb_bellyRoad', 'GNB')"
            >
              <a
                href="#bellyRoad/slide3"
                title="BELLY ROAD"
                @click="openMobileGnb"
                >BELLY ROAD</a
              >
            </li>
            <li
              data-menuanchor="thirdSection"
              @click="sendGaEvent('M_' + 'gnb_bellyShip', 'GNB')"
            >
              <a href="#bellyShip" title="BELLY SHIP" @click="openMobileGnb"
                >BELLY SHIP</a
              >
            </li>
            <li data-menuanchor="fourthSection">
              <button
                id="show-modal"
                @click="faqModal('M_' + 'gnb_bellyFaq', 'GNB')"
              >
                BELLY FAQ
              </button>
            </li>
            <li class="shop">
              <a
                href="https://bellygom.com/"
                target="_blank"
                @click="sendGaEvent('M_' + 'gnb_shop', 'GNB')"
                >SHOP</a
              >
            </li>
          </ul>
          <ul class="link-list">
            <li v-for="(item, index) in linkList" :key="index">
              <a
                :href="item.url"
                target="_blank"
                @click="sendGaEvent('M_gnb_sns_' + item.name, 'GNB')"
                ><img :src="item.imgUrl"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import modal from "@/components/Modal";
import AccordionComponent from "@/components/AccordionComponent";

export default {
  name: "MobileHeader",
  components: {
    modal,
    AccordionComponent,
  },
  data() {
    return {
      isShow: false,
      showLang: false,
      mobileGnbShow: false,
      linkList: [
        /*{
          url: "https://opensea.io/",
          name: "Opensea",
          imgUrl: require("@/assets/m_images/img_menu_opensea.svg"),
        },*/
        {
          url: "https://discord.gg/TDYtz2fcSN",
          name: "Discord",
          imgUrl: require("@/assets/m_images/img_menu_discord.svg"),
        },
        {
          url: "https://twitter.com/bellygom",
          name: "twitter",
          imgUrl: require("@/assets/m_images/img_menu_twitter.svg"),
        },
        {
          url: "https://youtube.com/channel/UCN9NpIA1d-wB1MsQQfkQnig",
          name: "YouTube",
          imgUrl: require("@/assets/m_images/img_menu_youtube.svg"),
        },
        {
          url: "https://www.instagram.com/bellygom.official/",
          name: "Instagram",
          imgUrl: require("@/assets/m_images/ic_menu_instagram.svg"),
        },
      ],
    };
  },
  asyncData({ req }) {
    let browserLang = req.headers["accept-language"]
      .split(",")[0]
      .toLocaleLowerCase()
      .substring(0, 2);
    return { lang: browserLang };
  },
  methods: {
    scrollLock(data) {
      this.$nuxt.$emit("scrollLock", data);
    },
    openLang(e) {
      this.showLang = !this.showLang;
    },
    storyModal(eventName, event_category) {
      this.$nuxt.$emit("storyModal");
      gtag("event", eventName, {
        event_category: event_category,
      });
    },
    faqModal(eventName, event_category) {
      this.$nuxt.$emit("faqModal");
      gtag("event", eventName, {
        event_category: event_category,
      });
    },
    openMobileGnb(e) {
      this.mobileGnbShow = !this.mobileGnbShow;
      this.mobileGnbShow
        ? e.target.classList.add("open")
        : e.target.classList.remove("open");
    },
    sendGaEvent(eventName, event_category) {
      console.log(eventName + "|||||||" + event_category);
      gtag("event", eventName, {
        event_category: event_category,
      });
    },
  },
};
</script>

<style scoped lang="scss">
#head {
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px 0 15px;
  z-index: 999;
  .logo {
    a {
      display: block;
    }
    width: 68px;
    margin-top: 10px;
  }
  .category {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
    .lang {
      position: relative;
      margin-left: 15px;
      .btn-lang {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 36px;
        line-height: 47px;
        padding: 0 10px 0 15px;
        background: $white;
        border-radius: 25px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        color: $black;
        font-size: 14px;
        line-height: 1.5;
        box-sizing: border-box;
        font-weight: 700;
        .txt {
          display: inline-block;
          padding-top: 2px;
        }
        &::after {
          content: "";
          display: inline-flex;
          width: 24px;
          height: 24px;
          background: url("assets/images/main/ic_arrow_down.svg") center
            no-repeat;
          transition: all 0.3s;
        }
        &.on {
          &::after {
            transform: rotate(180deg);
            margin-top: -3px;
          }
        }
      }
      .lang-list {
        display: block;
        position: absolute;
        top: 48px;
        left: 50%;
        padding: 20px 30px;
        border-radius: 20px;
        background: $white;
        transform: translateX(-50%);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        a {
          font-size: 14px;
          line-height: 28px;
          color: $black;
          opacity: 0.4;
          font-weight: 700;
          & + a {
            margin-top: 5px;
          }
          &.nuxt-link-active {
            opacity: 1;
          }
        }
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: -5px;
          left: 50%;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid white;
          transform: translateX(-50%);
        }
      }
    }
  }
}

.btn-mobile-gnb {
  width: 48px;
}
#mobile-gnb {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .inner {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% - 80px);
    height: 100vh;
    background-color: #ffcceb;
    z-index: 999;
    .btn-close {
      position: absolute;
      right: 20px;
      top: 30px;
    }
    .anchor-nav {
      padding-top: 110px;
      li {
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 40px;
        a,
        button {
          font-family: "Sandoll Odongtong", sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          color: $black;
        }
        &.shop {
          a {
            color: #ff6491;
          }
        }
      }
    }
    .link-list {
      display: flex;
      padding-top: 30px;
      margin: 30px 40px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      li {
        display: flex;
        a {
          width: 30px;
          height: 30px;
        }
        & + li {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
