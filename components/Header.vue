<template>
  <!--S : 앵커 헤드-->
  <header id="head" class="site-header" role="banner">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-233928727-1"
      v-if="$mq === 'pc'"
    ></script>
    <script v-if="$mq === 'pc'">
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-233928727-1");
    </script>
    <div class="logo">
      <a href="/" @click="sendGaEvent('gnb_logo', 'GNB')">
        <img src="@/assets/images/logo-2.svg" alt="logo" />
      </a>
    </div>
    <div class="category">
      <ul class="anchor-nav">
        <li data-menuanchor="firstSection">
          <a href="#bellyRoad/slide1" title="GET BELLY"
            ><span @click="sendGaEvent('gnb_getBelly', 'GNB')"
              >GET BELLY</span
            ></a
          >
        </li>
        <li data-menuanchor="secondSection">
          <a href="#bellyRoad/slide3" title="BELLY ROAD"
            ><span @click="sendGaEvent('gnb_bellyRoad', 'GNB')"
              >BELLY ROAD</span
            ></a
          >
        </li>
        <li data-menuanchor="thirdSection">
          <a href="#bellyShip" title="BELLY SHIP"
            ><span @click="sendGaEvent('gnb_bellyShip', 'GNB')"
              >BELLY SHIP</span
            ></a
          >
        </li>
        <li data-menuanchor="fourthSection">
          <button id="show-modal" @click="faqModal">
            <span @click="sendGaEvent('gnb_bellyFaq', 'GNB')">BELLY FAQ</span>
          </button>
        </li>
      </ul>
      <div class="etc-link">
        <ul class="sns">
          <li class="link0">
            <a href="#" target="_blank"></a>
          </li>
          <li class="link1" @click="sendGaEvent('gnb_shop', 'GNB')">
            <a href="https://bellygom.com/" target="_blank"></a>
          </li>
          <li class="linked">
            <button type="button" class="btn-link" @click="openLink" />
            <transition name="fade">
              <ul class="link-list" v-if="this.isShow">
                <li v-for="(item, index) in linkList" :key="index">
                  <a
                    :href="item.url"
                    target="_blank"
                    @click="sendGaEvent('gnb_sns_' + item.name, 'GNB')"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </transition>
          </li>
        </ul>
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
                  sendGaEvent('gnb_kor', 'GNB');
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
                  sendGaEvent('gnb_eng', 'GNB');
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
      </div>
    </div>
  </header>
  <!--E : 앵커 헤드-->
</template>

<script>
import modal from "@/components/Modal";
import AccordionComponent from "@/components/AccordionComponent";

export default {
  name: "Header",
  components: {
    modal,
    AccordionComponent,
  },
  data() {
    return {
      isShow: false,
      showLang: false,
      mobileGnbShow: false,
      showModal: false,
      linkList: [
        /*{
          url: "https://opensea.io/",
          name: "Opensea",
        },*/
        {
          url: "https://discord.gg/TDYtz2fcSN",
          name: "Discord",
        },
        {
          url: "https://twitter.com/bellygom",
          name: "Twitter",
        },
        {
          url: "https://youtube.com/channel/UCN9NpIA1d-wB1MsQQfkQnig",
          name: "YouTube",
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
    faqModal() {
      this.$nuxt.$emit("faqModal");
    },
    openLink() {
      this.isShow = !this.isShow;
      if (this.showLang) {
        this.showLang = false;
      }
    },
    openLang() {
      this.showLang = !this.showLang;
      if (this.isShow) {
        this.isShow = false;
      }
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
  min-width: 1000px;
  height: 110px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 40px 0 30px;
  z-index: 999;
  .logo {
    flex: 0 0 110px;
    width: 110px;
    height: 110px;
    a {
      display: block;
    }
  }
  .category {
    flex: 1 1 auto;
    width: calc(100% - 110px);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .anchor-nav {
      li {
        display: inline-flex;
        a,
        button {
          font-size: 18px;
          font-family: "Sandoll Odongtong", sans-serif;
          font-weight: 400;
          padding: 10px 20px;
          color: #333333;
        }
      }
    }
    .etc-link {
      display: flex;
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
              background: url("@/assets/images/ic_header_link_3.svg") center
                no-repeat;
              transform: translate(-50%, -50%);
            }
          }
          .link-list {
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
              font-weight: 700;
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
          &.link0,
          &.link1,
          &.link2 {
            position: relative;
            width: 48px;
            height: 48px;
            border-radius: 100%;
            background: $white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
          }
          &.link0 {
            a {
              position: relative;
              &::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                width: 32px;
                height: 32px;
                background: url("@/assets/images/ic_header_kaikas.svg") center
                no-repeat;
                transform: translate(-50%, -50%);
              }
            }
          }
          &.link1 {
            a {
              position: relative;
              &::before {
                content: "";
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 20px;
                height: 20px;
                background: url("@/assets/images/ic_header_link.svg") center
                  no-repeat;
                transform: translate(-50%, -50%);
              }
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
              background: url("@/assets/images/ic_header_link_2.svg") center
                no-repeat;
              transform: translate(-50%, -50%);
            }
          }
          & + li {
            margin-left: 15px;
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
          line-height: 49px;
          padding: 0 10px 0 15px;
          background: $white;
          border-radius: 25px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
          color: $black;
          font-size: 18px;
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
            font-weight: 700;
            cursor: pointer;
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
}

@media (max-width: 1000px) {
  #head .category .anchor-nav li a,
  #head .category .anchor-nav li button {
    padding: 10px;
  }
}
</style>
