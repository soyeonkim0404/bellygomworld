<template>
  <div class="header">
    <div class="logo">
      <nuxt-link :to="localePath('/')">
        <img src="@/assets/images/commons/logo.svg" alt="logo" />
      </nuxt-link>
    </div>
    <template v-if="$mq === 'mobile'">
      <div class="lang">
        <button class="btn-lang" @click="openLang">{{ $i18n.locale }}</button>
        <div class="lang-list" v-if="this.showLang">
          <nuxt-link
            v-for="localeCode in $i18n.localeCodes"
            :key="localeCode"
            :exact="true"
            :to="switchLocalePath(localeCode)"
            @click.native="openLang"
          >
            {{ localeCode }}
          </nuxt-link>
        </div>
      </div>
      <button type="button" class="btn-mobile-gnb" @click="openMobileGnb">
        <img src="@/assets/images/commons/mobile_menu.svg" alt="메뉴" />
      </button>
      <div
        id="mobile-gnb"
        v-if="this.mobileGnbShow"
        :class="{ mobileGnb: true, open: this.mobileGnbShow }"
      >
        <div class="inner">
          <button class="btn-close" @click="openMobileGnb">
            <img src="@/assets/images/commons/ic_close.svg" alt="close" />
          </button>
          <!--          <nav class="gnb">
            <a href="javascript:alert('comming soon');" class="soon">GALLERY</a>
            <nuxt-link :to="localePath('/news')">NEWS</nuxt-link>
            <nuxt-link :to="localePath('/roadmap')">ROADMAP</nuxt-link>
            <nuxt-link :to="localePath('/utility')">UTILITY</nuxt-link>
            <nuxt-link :to="localePath('/faq')">FAQ</nuxt-link>
          </nav>
          <ul class="sns">
            <li>
              <a href="#">
                <img src="@/assets/images/commons/ic_mall.svg" alt="mall" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/images/commons/ic_wallet.svg" alt="wallet" />
              </a>
            </li>
            <li class="linked">
              <button type="button" class="btn-link" @click="openLink">
                <img src="@/assets/images/commons/ic_link.svg" alt="link" />
              </button>
              <ul class="link-list">
                <li v-for="(item, index) in linkList" :key="index">
                  <a :href="item.url">{{ item.name }}</a>
                </li>
              </ul>
            </li>
          </ul>-->
        </div>
      </div>
    </template>
    <template v-else>
      <div class="menu">
        <nav class="gnb">
          <a href="javascript:alert('comming soon');" class="soon">GALLERY</a>
          <nuxt-link :to="localePath('/news')">NEWS</nuxt-link>
          <nuxt-link :to="localePath('/roadmap')">ROADMAP</nuxt-link>
          <nuxt-link :to="localePath('/utility')">UTILITY</nuxt-link>
          <nuxt-link :to="localePath('/faq')">FAQ</nuxt-link>
        </nav>
        <ul class="sns">
          <li>
            <a href="#">
              <img src="@/assets/images/commons/ic_mall.svg" alt="mall" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/commons/ic_wallet.svg" alt="wallet" />
            </a>
          </li>
          <li class="linked">
            <button type="button" class="btn-link" @click="openLink">
              <img src="@/assets/images/commons/ic_link.svg" alt="link" />
            </button>
            <ul class="link-list" v-if="this.isShow">
              <li v-for="(item, index) in linkList" :key="index">
                <a :href="item.url">{{ item.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="lang">
          <button class="btn-lang" @click="openLang">{{ $i18n.locale }}</button>
          <div class="lang-list" v-if="this.showLang">
            <nuxt-link
              v-for="localeCode in $i18n.localeCodes"
              :key="localeCode"
              :exact="true"
              :to="switchLocalePath(localeCode)"
              @click.native="openLang"
            >
              {{ localeCode }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "Header",
  data() {
    return {
      isShow: false,
      showLang: false,
      mobileGnbShow: false,
      linkList: [
        {
          url: "https://www.naver.com/",
          name: "Discord",
        },
        {
          url: "https://www.naver.com/",
          name: "Telegram",
        },
        {
          url: "https://www.naver.com/",
          name: "twitter",
        },
        {
          url: "https://www.naver.com/",
          name: "YouTube",
        },
        {
          url: "https://www.naver.com/",
          name: "Opensea",
        },
        {
          url: "https://www.naver.com/",
          name: "Instagram",
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
    openLink(e) {
      this.isShow = !this.isShow;
      this.isShow
        ? e.target.classList.add("on")
        : e.target.classList.remove("on");
    },
    openLang(e) {
      this.showLang = !this.showLang;
      this.showLang
        ? e.target.classList.add("on")
        : e.target.classList.remove("on");
    },
    openMobileGnb(e) {
      this.mobileGnbShow = !this.mobileGnbShow;
      this.mobileGnbShow
        ? e.target.classList.add("open")
        : e.target.classList.remove("open");
      console.log(e);
      const gnb = document.querySelector(".mobileGnb");

      gsap.to(gnb, {
        left: "0",
        duration: 0.2,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  padding: 0 60px;
  background: transparent;
  z-index: 999;
  .logo {
    width: 160px;
    height: 56px;
  }
  .menu {
    display: flex;
    .gnb {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      a {
        display: block;
        font-size: 18px;
        color: $white;
        padding: 0 25px;
        position: relative;
        &.soon {
          &:before {
            content: "SOON";
            display: block;
            width: 49px;
            height: 17px;
            position: absolute;
            left: 16px;
            top: -20px;
            background: #fc8abc;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 2px;
            font-size: 16px;
            color: $white;
            text-align: center;
          }
        }
      }
    }
    .sns {
      margin-left: 25px;
      li {
        display: inline-flex;
        position: relative;
        a {
          width: 48px;
          height: 48px;
          display: block;
        }
        .btn-link {
          padding: 0;
          width: 48px;
          height: 48px;
          display: block;
        }
        .link-list {
          display: block;
          position: absolute;
          top: 50px;
          left: 50%;
          padding: 10px 15px;
          border-radius: 10px;
          background: $white;
          transform: translateX(-50%);
          li {
            font-size: 14px;
            line-height: 20px;
            text-align: left;
            & + li {
              margin-top: 5px;
            }
            a {
              width: auto;
              height: auto;
            }
          }
        }
      }
    }
  }

  .lang {
    position: relative;
    margin-left: 15px;
    .btn-lang {
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
      height: 48px;
      padding: 0 10px 0 15px;
      background: $white;
      border-radius: 25px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
      color: $black;
      font-size: 18px;
      box-sizing: border-box;
      &::after {
        content: "";
        display: inline-flex;
        width: 24px;
        height: 24px;
        background: url("assets/images/main/ic_arrow_down.svg") center no-repeat;
        transition: all 0.3s;
      }
      &.on {
        &::after {
          transform: rotate(180deg);
        }
      }
    }
    .lang-list {
      display: block;
      position: absolute;
      top: 63px;
      left: 50%;
      padding: 20px 30px;
      border-radius: 20px;
      background: $white;
      transform: translateX(-50%);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
      a {
        font-size: 18px;
        line-height: 28px;
        color: $black;
        opacity: 0.4;
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
  .mobile & {
    height: 78px;
    padding: 30px 20px 0;
    box-sizing: border-box;
    .logo {
      width: 110px;
      height: auto;
    }
    .btn-mobile-gnb {
      width: 65px;
      height: 65px;
    }
    #mobile-gnb {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      &.open {
        .inner {
          will-change: transform;
          transition: all 0.3s ease-in;
        }
      }
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
        background: $gradient;
        z-index: 999;
        .gnb {
          a {
          }
        }
        .sns {
        }
      }
    }
  }
}
</style>
