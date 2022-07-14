<template>
  <!--S : 앵커 헤드-->
  <header id="head" class="site-header" role="banner">
    <div class="logo">
      <a href="/">
        <img src="@/assets/images/commons/logo-2.svg" alt="logo" />
      </a>
    </div>
    <div class="category">
      <ul class="anchor-nav">
        <li data-menuanchor="firstSection">
          <a href="#bellyRoad/slide1" title="GET BELLY">GET BELLY</a>
        </li>
        <li data-menuanchor="secondSection">
          <a href="#bellyRoad/slide3" title="BELLY ROAD">BELLY ROAD</a>
        </li>
        <li data-menuanchor="thirdSection">
          <a href="#bellyShip" title="BELLY SHIP">BELLY SHIP</a>
        </li>
        <li data-menuanchor="fourthSection">
          <button id="show-modal" @click="faqModal">BELLY FAQ</button>
        </li>
      </ul>
      <div class="etc-link">
        <ul class="sns">
          <li class="link1">
            <a href="https://bellygom.com/" target="_blank" />
          </li>
          <!--<li class="linked">
            <button type="button" class="btn-link" @mouseover="mouseOver" />
            <transition name="fade">
              <ul class="link-list" v-if="this.isShow">
                <li v-for="(item, index) in linkList" :key="index">
                  <a :href="item.url" target="_blank">{{ item.name }}</a>
                </li>
              </ul>
            </transition>
          </li>-->
        </ul>
        <div class="lang">
          <button class="btn-lang" @click="openLang">
            {{ $store.state.locale }}
          </button>
          <transition name="fade">
            <div class="lang-list" v-if="this.showLang">
              <a @click="openLang();$store.commit('setKOR');" :class="{'nuxt-link-active':$store.state.locale === 'KOR'}">
                KOR
              </a>
               <a @click="openLang();$store.commit('setENG');" :class="{'nuxt-link-active':$store.state.locale === 'ENG'}">
                ENG
              </a>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!--FAQ MODAL-->
    <modal v-if="showModal" @close="closeModal" class="faq-modal">
      <div slot="header">
        <h2 class="title">FAQ</h2>
      </div>
      <div slot="body">
        <div class="content">
          <div class="inner">
            <div class="content-wrap">
              <AccordionComponent :list="faqList">
                <template #title="{ item }">
                  <template v-if="$store.state.locale === 'ENG'">
                    {{ item.engTitle }}
                  </template>
                  <template v-else>
                    {{ item.title }}
                  </template>
                </template>
                <template #cont="{ item }">
                  <template v-if="$store.state.locale === 'ENG'">
                    {{ item.engCont }}
                    <span class="pdf" v-if="item.engPdfUrl">
                      <a href="" download=""></a>
                    </span>
                  </template>
                  <template v-else>
                    {{ item.cont }}
                    <span class="pdf" v-if="item.pdfUrl">
                      <a href="" download=""></a>
                    </span>
                  </template>
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
      isShow: false,
      showLang: false,
      mobileGnbShow: false,
      showModal: false,
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
      faqList: [
        {
          title: "벨리곰 NFT는 어떤 블록체인을 이용해?",
          engTitle: "What blockchain does Bellygom NFT use?",
          cont: "벨리곰 NFT는 클레이튼(Klaytn) 블록체인을 이용하고 있어!",
          engCont: "Bellygom NFT uses the Klaytn blockchain!",
        },
        {
          title: "카이카스 지갑은 어떻게 만드는거야?",
          engTitle: "How do I make a Kaikas Wallet?",
          cont: "다운받기 눌러봐! 더 상세하게 설명해줄게!",
          engCont:
            "Download the pdf file for a detailed step-by-step guide on creating a Kaikas Wallet.",
          //pdfUrl: require("@/assets/media/kor/02_BELLYGOM_CreateaKaikaswallet.pdf"),
          //engPdfUrl: require("@/assets/media/eng/02_BELLYGOM_CreateaKaikaswallet(EN).pdf"),
        },
        {
          title: "오픈씨는 어떻게 이용하는거야?",
          engTitle: "How do you use opensea?",
          cont: "다운받기 눌러봐!  더 상세하게 설명해줄게!",
          engCont:
            "Download the pdf file for a detailed step-by-step guide on using OpenSea.",
          // pdfUrl: require("@/assets/media/kor/03_BELLYGOM_HowtouseOpensea.pdf"),
          //engPdfUrl: require("@/assets/media/eng/03_BELLYGOM_HowtouseOpensea(EN).pdf"),
        },
        {
          title: "Klip 지갑으로 민팅 할 수 있어?",
          engTitle: "Can I mint with a Klip wallet?",
          cont: "카이카스 지갑만 지원하고 있어!",
          engCont: "For now, only Kaikas wallets are supported.",
        },
        {
          title: "Klip 지갑으로 전송 시, 벨리곰 NFT를 확인할 수 있어?",
          engTitle:
            "Can I check the Bellygom NFT when transferring to my Klip wallet?",
          cont: "확인할 수 없어! 카이카스 지갑을 이용해줘!",
          engCont: "Can't confirm! Please use Kaikas wallet!",
        },
        {
          title: "2차 판매 수수료가 있어?",
          engTitle: "Are there any secondary sales fees?",
          cont: "2차 판매 수수료는 7.5%야!",
          engCont: "Secondary sales commission is 7.5%!",
        },
        {
          title: "벨리곰NFT는 저작권 활용할 수 있어?",
          engTitle: "Can Bellygom NFTs be copyrighted?",
          cont: "Road1에는 소유권만 인정하고 있어. 그렇지만 Road2에는 NFT 사업권을 사용할 수 있어!",
          engCont:
            "Road1 only recognizes ownership. However, you can use NFT licenses for Road2!",
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
    openLang(e) {
      this.showLang = !this.showLang;
    },
    mouseOver() {
      this.isShow = !this.isShow;
    },
    faqModal() {
      this.showModal = true;
      if (this.showModal) {
        document.body.classList.add("modalOn");
      }
    },
    closeModal() {
      this.showModal = false;
      if (!this.showModal) {
        document.body.classList.remove("modalOn");
      }
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
          padding: 0 20px;
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
              background: url("assets/images/commons/ic_header_link_3.svg")
                center no-repeat;
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
                background: url("assets/images/commons/ic_header_link.svg")
                  center no-repeat;
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
              background: url("assets/images/commons/ic_header_link_2.svg")
                center no-repeat;
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
          padding: 0 10px 0 15px;
          background: $white;
          border-radius: 25px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
          color: $black;
          font-size: 18px;
          box-sizing: border-box;
          font-weight: 700;
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
</style>
