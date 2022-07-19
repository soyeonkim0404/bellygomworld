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
          {{ $store.getters.getLocale }}
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
        <img src="@/assets/images/commons/mobile_menu.svg" alt="메뉴" />
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
                @click="
                  storyModal();
                  sendGaEvent('M_' + 'gnb_bellyStory', 'FLT');
                "
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
                @click="
                  openMobileGnb($event);
                  faqModal();
                  sendGaEvent('M_' + 'gnb_bellyFaq', 'GNB');
                "
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
              <a :href="item.url" target="_blank"><img :src="item.imgUrl" /></a>
            </li>
          </ul>
        </div>
      </div>
    </transition>

    <!--STORY MODAL-->
    <modal v-if="showStoryModal" @close="closeStoryModal" class="story-modal">
      <div slot="header">STORY<br />BOOK</div>
      <div slot="body">
        <div class="story">
          <div id="st_1" class="box" :class="{ on: currIndi === 1 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom01.png"
              class="left-img"
            />
            <template v-if="$store.getters.getLocale === 'ENG'">
              <div class="txt eng">
                <h3>
                  Bellygom was born in a Haunted House. Here's how it happened…
                </h3>
                <p>
                  One day, a little boy who visited the haunted house
                  accidentally dropped a bubble gumball. In it, this cute
                  Bellygom was born.<br />
                  <br />
                  Bellygom likes to bring excitement to people by surprising
                  them. However, due to Belly's insatiable appetite and cuteness
                  overload, Bellygom is kicked out, as that image does not fit
                  the haunted house.
                </p>
              </div>
            </template>
            <template v-else>
              <div class="txt">
                <h3>벨리곰, 유령의 집에서 태어나다</h3>
                <p class="first">
                  어느 날, 유령의 집에 놀러 온 꼬마가 흘린 풍선껌, 그 속에서
                  커여운 벨리곰이 탄생했다.
                </p>
                <p>
                  벨리곰은 사람들을 놀래키며 행복을 주는 일을 좋아하지만, 넘치는
                  식탐과 귀여운 외모가 유령의 집에 어울리지 않는다며 쫓겨나게
                  된다.
                </p>
              </div>
            </template>
          </div>
          <div id="st_2" class="box" :class="{ on: currIndi === 2 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom02.png"
              class="left-img"
            />
            <div class="txt eng" v-if="$store.getters.getLocale === 'ENG'">
              <h3>Soon, Bellygom moves into Belly Villa.</h3>
              <p>
                Bellygom continues to surprise people here and there, despite
                having been banished from the haunted house. Although, people
                aren't as responsive to Bellygom's pranks as they used to
                be...<br /><br />
                When Bellygom - wandering aimlessly, down in the dumps - sat on
                a box for a moment and was deep in thought, a cute little kitty
                emerged from the box! Feeling excited again, at the sight of
                this miracle, Bellygom adopts Kitty and they move into Belly
                Villa together.
              </p>
            </div>
            <div class="txt" v-else>
              <h3>벨리빌라에 입주하다</h3>
              <p class="first">
                유령의 집에서 쫓겨난 후 벨리곰은 서프라이즈를 계속하지만
                사람들은 예전만큼 벨리곰의 장난에 반응하지 않는다.
              </p>
              <p>
                풀이 죽어 떠돌던 벨리곰이 잠시 박스 위에 앉아 고민에 잠겨있던
                순간, 박스 속에서 등장한 꼬냥이!
              </p>
              <p>
                귀여운 꼬냥이의 모습에 다시 행복을 느낀 벨리곰은 꼬냥이를 따라가
                벨리빌라에 입주한다.
              </p>
            </div>
          </div>
          <div id="st_3" class="box" :class="{ on: currIndi === 3 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom03.png"
              class="left-img"
            />
            <div class="txt eng" v-if="$store.getters.getLocale === 'ENG'">
              <h3>Bellygom now has 10,000 mysterious powers!</h3>
              <p>
                One day, Bellygom finds a vending machine, in front of the
                villa, with a strange vibe. The gluttonous Bellygom takes a
                gumball from the vending machine and begins chewing... Suddenly,
                there's a transformation in Belly's body, resulting in 10,000
                unique surprise-powers!
              </p>
            </div>
            <div class="txt" v-else>
              <h3>1만 개의 신비로운 힘이 생긴 벨리곰!</h3>
              <p class="first">
                어느 날, 벨리곰은 벨리빌라 앞에서 신비로운 기운이 느껴지는
                자판기를 발견한다.
              </p>
              <p>
                식탐 많은 벨리곰이 자판기 속 껌을 꺼내어 씹기 시작하자, 1만 개의
                서프라이즈 능력이 생겨나는데...
              </p>
            </div>
          </div>
          <div id="st_4" class="box" :class="{ on: currIndi === 4 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom04.png"
              class="left-img"
            />
            <div class="txt eng" v-if="$store.getters.getLocale === 'ENG'">
              <h3>
                Oh, Bellygom - now with 10,000 mysterious abilities - what kinds
                of surprises will you bring to the people?
              </h3>
            </div>
            <div class="txt" v-else>
              <h3>
                1만 개의 신비로운 능력을 얻은 벨리곰은 어떤 서프라이즈를 가져다
                줄까?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </modal>
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
                        sendGaEvent('M_' + 'bf_faq' + item.pdf + '_file', 'BR');
                      "
                      class="pdf-btn"
                    >
                      <img src="@/assets/m_images/main/pdf_download.png" />
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
      showStoryModal: false,
      currIndi: 1,
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
            "Download the PDF file for a detailed step-by-step guide on creating a Kaikas Wallet.",
          pdf: 2,
        },
        {
          title: "오픈씨는 어떻게 이용하는거야?",
          engTitle: "How do I use opensea?",
          cont: "다운받기 눌러봐!  더 상세하게 설명해줄게!",
          engCont:
            "Download the PDF file for a detailed step-by-step guide on using OpenSea.",
          pdf: 3,
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
    scrollLock(data) {
      this.$nuxt.$emit("scrollLock", data);
    },
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
    openMobileGnb(e) {
      this.mobileGnbShow = !this.mobileGnbShow;
      this.mobileGnbShow
        ? e.target.classList.add("open")
        : e.target.classList.remove("open");
    },
    storyModal() {
      this.currIndi = 1;
      this.scrollLock(false);
      this.showStoryModal = true;
    },
    closeStoryModal() {
      this.scrollLock(true);
      this.showStoryModal = false;
    },
    storySlideNext() {
      this.currIndi++;
      if (this.currIndi > 4) this.currIndi = 4;
    },
    storySlidePrev() {
      this.currIndi--;
      if (this.currIndi < 1) this.currIndi = 1;
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
        padding: 0 10px 0 15px;
        background: $white;
        border-radius: 25px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        color: $black;
        font-size: 14px;
        line-height: 1.5;
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
