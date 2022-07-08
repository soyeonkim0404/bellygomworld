<template>
  <div class="header">
    <div class="logo">
      <nuxt-link :to="localePath('/')">
        <img src="@/assets/images/commons/logo.svg" alt="logo" />
      </nuxt-link>
    </div>
    <template v-if="$mq === 'mobile'">
      <div class="mobile-area">
        <!--        <div class="lang">
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
        </div>-->
        <button type="button" class="btn-mobile-gnb" @click="openMobileGnb">
          <img src="@/assets/images/commons/mobile_menu.svg" alt="메뉴" />
        </button>
        <transition name="fade">
          <div
            id="mobile-gnb"
            v-if="this.mobileGnbShow"
            :class="{ mobileGnb: true, open: this.mobileGnbShow }"
          >
            <div class="inner">
              <button class="btn-close" @click="openMobileGnb">
                <img src="@/assets/images/commons/ic_close.svg" alt="close" />
              </button>
              <nav class="gnb">
                <a href="javascript:alert('comming soon');" class="soon"
                  ><span>GALLERY</span></a
                >
                <nuxt-link :to="localePath('/news')"
                  ><span @click="openMobileGnb">NEWS</span></nuxt-link
                >
                <nuxt-link :to="localePath('/roadmap')"
                  ><span @click="openMobileGnb">ROADMAP</span></nuxt-link
                >
                <nuxt-link :to="localePath('/utility')"
                  ><span @click="openMobileGnb">UTILITY</span></nuxt-link
                >
                <nuxt-link :to="localePath('/faq')"
                  ><span @click="openMobileGnb">FAQ</span></nuxt-link
                >
              </nav>
              <ul class="link-list">
                <li v-for="(item, index) in linkList" :key="index">
                  <a :href="item.url" @click="openMobileGnb"
                    ><img :src="item.imgUrl" alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </transition>
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
          <li class="link1">
            <a href="#" />
          </li>
          <li class="link2">
            <a href="#" />
          </li>
          <li class="linked">
            <button type="button" class="btn-link" @click="openLink" />
            <transition name="fade">
              <ul class="link-list" v-if="this.isShow">
                <li v-for="(item, index) in linkList" :key="index">
                  <a :href="item.url" target="_blank">{{ item.name }}</a>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
        <!--        <div class="lang">
          <button class="btn-lang" @click="openLang">{{ $i18n.locale }}</button>
          <transition name="fade">
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
          </transition>
        </div>-->
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
          url: "https://discord.gg/TDYtz2fcSN",
          name: "Discord",
          imgUrl: require("@/assets/images/commons/img_menu_discord.svg"),
        },
        {
          url: "https://twitter.com/bellygom",
          name: "twitter",
          imgUrl: require("@/assets/images/commons/img_menu_twitter.svg"),
        },
        {
          url: "https://youtube.com/channel/UCN9NpIA1d-wB1MsQQfkQnig",
          name: "YouTube",
          imgUrl: require("@/assets/images/commons/img_menu_youtube.svg"),
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
      if (e.target.classList.contains("open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
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
            left: 26px;
            top: -25px;
            background: #fc8abc;
            border-radius: 2px;
            font-size: 16px;
            line-height: 18px;
            color: $white;
            text-align: center;
          }
        }
      }
    }
    .sns {
      display: flex;
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
          position: relative;
          padding: 0;
          width: 48px;
          height: 48px;
          display: block;
          border-radius: 100%;
          background: $white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 17px;
            height: 22px;
            background: url("../assets/images/commons/ic_header_link_3.svg")
              center no-repeat;
            transform: translate(-50%, -50%);
          }
        }
        .link-list {
          display: block;
          position: absolute;
          top: 63px;
          left: 50%;
          width: 152px;
          padding: 20px 30px;
          border-radius: 20px;
          background: $white;
          transform: translateX(-50%);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
          box-sizing: border-box;
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
          li {
            display: block;
            font-size: 18px;
            line-height: 28px;
            text-align: left;
            & + li {
              margin-left: 0;
              margin-top: 5px;
            }
            a {
              width: auto;
              height: auto;
              color: $black;
              opacity: 0.4;
              &:hover {
                opacity: 1;
              }
            }
          }
        }
        &.link1,
        &.link2 {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 100%;
          background: $white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        }
        &.link1 {
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 17px;
            height: 22px;
            background: url("../assets/images/commons/ic_header_link.svg")
              center no-repeat;
            transform: translate(-50%, -50%);
          }
        }
        &.link2 {
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 27px;
            height: 26px;
            background: url("../assets/images/commons/ic_header_link_2.svg")
              center no-repeat;
            transform: translate(-50%, -50%);
          }
        }
        & + li {
          margin-left: 15px;
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
    .mobile-area {
      display: flex;
      align-items: center;
    }
    .logo {
      width: 110px;
      height: auto;
    }
    .lang {
      .btn-lang {
        height: 40px;
      }
    }
    .btn-mobile-gnb {
      width: 51px;
      height: 51px;
      margin-left: 10px;
    }
    #mobile-gnb {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      &.open {
        .inner {
          overflow-y: auto;
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
        .btn-close {
          position: absolute;
          top: 30px;
          right: 20px;
          width: 38px;
          height: 38px;
        }
        .gnb {
          padding: 110px 0 75px;
          a {
            span {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              position: relative;
              width: 100%;
              height: 50px;
              padding-left: 37px;
              font-size: 18px;
              line-height: 32px;
              color: $white;
            }
            &.soon {
              span {
                &:before {
                  content: "SOON";
                  display: block;
                  width: 39px;
                  height: 15px;
                  position: absolute;
                  left: 37px;
                  top: -7px;
                  background: #fc8abc;
                  border-radius: 2px;
                  font-size: 12px;
                  line-height: 17px;
                  color: #ffffff;
                  text-align: center;
                }
              }
            }
          }
        }
        .link-list {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 30px 35px 0 25px;
          li {
            display: inline-flex;
            margin-left: 10px;
            margin-top: 10px;
            a {
              display: block;
              width: 35px;
              height: 35px;
            }
          }
        }
      }
    }
  }
}
</style>
