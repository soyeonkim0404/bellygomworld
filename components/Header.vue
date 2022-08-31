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
        <li data-menuanchor="firstSection" @click="navClickFc">
          <a href="/#bellyRoad/slide1" title="GET BELLY"
            ><span @click="sendGaEvent('gnb_getBelly', 'GNB')"
              >GET BELLY</span
            ></a
          >
        </li>
        <li data-menuanchor="secondSection" @click="navClickFc">
          <a href="/#bellyRoad/slide3" title="BELLY ROAD"
            ><span @click="sendGaEvent('gnb_bellyRoad', 'GNB')"
              >BELLY ROAD</span
            ></a
          >
        </li>
        <li data-menuanchor="thirdSection" @click="navClickFc">
          <a href="/#bellyShip" title="BELLY SHIP"
            ><span @click="sendGaEvent('gnb_bellyShip', 'GNB')"
              >BELLY SHIP</span
            ></a
          >
        </li>
        <li @click="navClickFc">
          <nuxt-link to="/bellyPhoto">BELLY PHOTO</nuxt-link>
        </li>
        <li data-menuanchor="fourthSection" @click="navClickFc">
          <button id="show-modal" @click="faqModal">
            <span @click="sendGaEvent('gnb_bellyFaq', 'GNB')">BELLY FAQ</span>
          </button>
        </li>
      </ul>
      <div class="etc-link">
        <ul class="sns">
          <li class="link0" :class="{ active: $store.state.connect }">
            <button @click="setWallet">지갑연결</button>
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

    <!--FAQ MODAL-->
    <modal
      v-if="faqShow"
      @faqModal="faqModal"
      @close="closeFaq"
      class="faq-modal"
    >
      <div slot="header">
        <h2 class="title">FAQ</h2>
      </div>
      <div slot="body">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <p class="desc-txt">
            ※ For more details on FAQ, join us on
            <a
              class="underline"
              href="https://discord.gg/bellygom"
              target="_blank"
              >Discord</a
            >.
          </p>
        </template>
        <template v-else>
          <p class="desc-txt">
            ※ FAQ 상세 내용은
            <a
              class="underline"
              href="https://discord.gg/bellygom"
              target="_blank"
              >디스코드</a
            >에서 확인할 수 있습니다.
          </p>
        </template>
        <div class="content">
          <div class="inner">
            <div class="content-wrap">
              <AccordionComponent :list="faqList">
                <template #title="{ item }">
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    {{ item.engTitle }}
                  </template>
                  <template v-else>
                    {{ item.title }}
                  </template>
                </template>
                <template #cont="{ item }">
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    {{ item.engCont }}
                  </template>
                  <template v-else>
                    {{ item.cont }}
                  </template>
                  <span class="pdf" v-if="item.pdf">
                    <button
                      @click="
                        downloadPdf(item.pdf, $store.getters.getLocale);
                        sendGaEvent('bf_faq' + item.pdf + '_file', 'BR');
                      "
                      class="pdf-btn"
                    >
                      <span>
                        <img
                          src="@/assets/images/main/ic_download.svg"
                          alt=""
                        />PDF Download
                      </span>
                    </button>
                  </span>
                </template>
              </AccordionComponent>
            </div>
          </div>
        </div>
      </div>
    </modal>
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
      faqShow: false,
      isShow: false,
      showLang: false,
      mobileGnbShow: false,
      showModal: false,
      isConnect: false,
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
        {
          url: "https://www.instagram.com/bellygom.official/",
          name: "Instagram",
        },
      ],
      faqList: [
        {
          title: "벨리곰 NFT는 어떤 블록체인을 이용해?",
          engTitle: "What blockchain does Bellygom NFT use?",
          cont: "벨리곰 NFT는 클레이튼(Klaytn) 블록체인을 이용하고 있어!",
          engCont: "Bellygom NFT uses the Klaytn blockchain!",
          faqIndex: 1,
        },
        {
          title: "카이카스 지갑은 어떻게 만드는거야?",
          engTitle: "How do I make a Kaikas Wallet?",
          cont: "다운받기 눌러봐! 더 상세하게 설명해줄게!",
          engCont:
            "Download the pdf file for a detailed step-by-step guide on creating a Kaikas Wallet.",
          pdf: 2,
          faqIndex: 2,
        },
        {
          title: "오픈씨는 어떻게 이용하는거야?",
          engTitle: "How do you use opensea?",
          cont: "다운받기 눌러봐!  더 상세하게 설명해줄게!",
          engCont:
            "Download the pdf file for a detailed step-by-step guide on using OpenSea.",
          pdf: 3,
          faqIndex: 3,
        },
        {
          title: "Klip 지갑으로 민팅 할 수 있어?",
          engTitle: "Can I mint with a Klip wallet?",
          cont: "카이카스 지갑만 지원하고 있어!",
          engCont: "For now, only Kaikas wallets are supported.",
          faqIndex: 4,
        },
        {
          title: "Klip 지갑으로 전송 시, 벨리곰 NFT를 확인할 수 있어?",
          engTitle:
            "Can I check the Bellygom NFT when transferring to my Klip wallet?",
          cont: "확인할 수 없어! 카이카스 지갑을 이용해줘!",
          engCont: "Can't confirm! Please use Kaikas wallet!",
          faqIndex: 5,
        },
        {
          title: "리빌은 어떻게 하는거야?",
          engTitle: "How does the ‘Reveal’ work?",
          cont: "9월 1일 (목) 자동으로 리빌이 진행돼!",
          engCont:
            "On September 1st (Thursday), the Reveal will happen automatically!",
          faqIndex: 6,
        },
        {
          title: "랭킹은 어떻게 확인 할 수 있어?",
          engTitle: "How do I check the ranking?",
          cont: "추후에 다시 공지해 줄게! 9월을 넘기지는 않을 거야!",
          engCont: "We'll keep you posted! (No longer than September)",
          faqIndex: 7,
        },
        {
          title: "디스코드, 트위터에 어떻게 참여할 수 있어?",
          engTitle: "How can I join the Bellygom Discord, Twitter channels?",
          cont: "채널은 홈페이지 우측 상단 링크 아이콘을 눌러서 참여할 수 있어!",
          engCont:
            "You can join the channels by clicking the linked icons at the top right corner of the homepage.",
          faqIndex: 8,
        },
        {
          title: "2차 판매 수수료가 있어?",
          engTitle: "Are there any secondary sales fees?",
          cont: "2차 판매 수수료는 7.5%야!",
          engCont: "Secondary sales commission is 7.5%!",
          faqIndex: 9,
        },
        {
          title: "벨리곰NFT는 저작권 활용할 수 있어?",
          engTitle: "Can Bellygom NFTs be copyrighted?",
          cont: "Road1에는 소유권만 인정하고 있어. 그렇지만 Road2에는 NFT 사업권을 사용할 수 있어!",
          engCont:
            "Road1 only recognizes ownership. However, you can use NFT licenses for Road2!",
          faqIndex: 10,
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

  mounted() {
    let connect = this.getCookie("b_connect");
    if (connect && connect === "YES" && this.$store.state.connect) {
      this.$store.commit("setConnect");
    } else {
      this.$store.commit("setNoConnect");
    }
  },
  methods: {
    async setWallet() {
      await this.$store.dispatch("callMyNftData");
      await this.$nuxt.$emit("fetchWallet");
    },
    faqModal() {
      this.faqShow = true;
    },
    closeFaq() {
      this.faqShow = false;
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
    navClickFc(event) {
      const siblings = event.currentTarget.parentElement.children;
      Array.from(siblings).forEach(function (t) {
        t.classList.remove("active");
      });
      event.currentTarget.classList.add("active");
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
        position: relative;
        display: inline-flex;
        &:nth-child(4) {
          margin-left: 61px;
          &:before {
            content: "";
            position: absolute;
            width: 1px;
            height: 20px;
            background: #333333;
            opacity: 0.5;
            left: -30px;
            top: 8px;
          }
        }
        span {
          line-height: 27px;
        }
        a,
        button {
          font-size: 18px;
          font-family: "Sandoll Odongtong", sans-serif;
          font-weight: 400;
          padding: 10px 20px;
          color: #333333;
          &:after {
            display: block;
            content: "";
            width: 0;
            height: 2px;
            background: #333;
            transition: width 250ms ease-in-out;
            transform-origin: 0% 0;
          }
          &:hover:after {
            width: 100%;
          }
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
          a,
          button {
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
              button,
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
            &.active {
              button {
                &::after {
                  content: "";
                  position: absolute;
                  top: 28px;
                  left: 34px;
                  width: 20px;
                  height: 20px;
                  background: url("@/assets/images/ic_20_connect.svg") center;
                }
              }
            }
            button {
              position: relative;
              text-indent: -9999em;
              font-size: 0;
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
.fp-viewing-bellyRoad-slide1 #head .category {
  .anchor-nav {
    li.active:nth-child(1) a {
      color: #fe3d6b;
      &:after {
        background: #fe3d6b;
      }
    }
  }
}
.fp-viewing-bellyRoad-slide3 #head .category,
.fp-viewing-bellyRoad-slide2 #head .category {
  .anchor-nav {
    li.active:nth-child(2) a {
      color: #fe3d6b;
      &:after {
        background: #fe3d6b;
      }
    }
  }
}
.fp-viewing-bellyShip #head .category,
.fp-viewing-level-belly #head .category {
  .anchor-nav {
    li.active:nth-child(3) a {
      color: #fe3d6b;
      &:after {
        background: #fe3d6b;
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
