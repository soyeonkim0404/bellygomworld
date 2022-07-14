<template>
  <div id="main">
    <div class="inner">
      <client-only>
        <full-page ref="fullpage" :options="options" id="fullpage">
          <section class="section">
            <video id="mainBelly" loop muted data-autoplay playsinline>
              <source src="@/assets/media/m_belly.mp4" type="video/mp4" />
            </video>
          </section>
          <div class="cloud-wrapper ignore" :class="{ moved: cloudMoved }">
            <img src="@/assets/m_images/main/img_keyvisual_01.png" />
          </div>
          <section class="section">
            <div class="second">
              <img src="@/assets/m_images/main/img_keyvisual_02.png" />
              <div class="sec-cloud">
                <img src="@/assets/m_images/main/img_keyvisual_cloud.png" />
              </div>
            </div>
          </section>
          <section class="section" >
            <div class="slide fp-noscroll" data-anchor="slide1">
              <div class="contents">
                <img class="roads" src="@/assets/m_images/main/getbelly_road_ko_1.png" />
                <div class="text-con">
                  <div
                    v-once
                    v-swiper:mySwiper="swiperOption"
                    class="swiper-container cloud"
                  >
                    <div class="swiper-wrapper">
                      <div
                        v-for="(slide, index) in cloudImg"
                        :key="index"
                        class="swiper-slide"
                      >
                        <template v-if="$store.getters.getLocale === 'ENG'">
                          <img :src="slide.engUrl" alt="" class="slide1-cloud-img"/>
                        </template>
                        <template v-else>
                          <img :src="slide.url" alt="" class="slide1-cloud-img"/>
                        </template>
                      </div>
                    </div>
                    		<!-- pagination -->
		                <div class="swiper-pagination swiper-pagination-1" slot="pagination"></div>
                  </div>
                </div>
                <button class="info-btn" @click="showInfo" />
              </div>
            </div>
            <div class="slide fp-noscroll" data-anchor="slide2">
              <div class="contents">
                <img class="roads"  src="@/assets/m_images/main/getbelly_road_ko_2.png" />
              </div>
            </div>
            <div class="slide fp-noscroll" data-anchor="slide3">
              <div class="contents">
                <img class="roads" src="@/assets/m_images/main/getbelly_road_ko_3.png" />
                <div class="text-con">
                  <div
                    v-once
                    v-swiper:mySwiper2="swiperOption2"
                    class="swiper-container"
                  >
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <button class="item2" @click="roadModal1">
                          <img
                            src="@/assets/m_images/main/img_road_balloon01.png"
                          />
                          <div class="txt">
                            <span class="road">ROAD 1</span>
                            <template v-if="$store.getters.getLocale === 'ENG'">
                              <div class="title">
                                Bellygom<br />
                                Emerges!
                              </div>
                            </template>
                            <template v-else>
                              <div class="title">
                                벨리곰이<br />
                                나타나다
                              </div>
                            </template>
                            <span class="more">more</span>
                          </div>
                        </button>
                      </div>
                      <div class="swiper-slide">
                        <button class="item2" @click="roadModal2">
                          <img
                            src="@/assets/m_images/main/img_road_balloon02.png"
                          />
                          <div class="txt">
                            <span class="road">ROAD 2</span>
                            <template v-if="$store.getters.getLocale === 'ENG'">
                              <div class="title">
                                Bellygom<br />
                                Surprises!
                              </div>
                            </template>
                            <template v-else>
                              <div class="title">
                                벨리곰이<br />
                                놀래키다
                              </div>
                            </template>
                            <span class="more">more</span>
                          </div>
                        </button>
                      </div>
                      <div class="swiper-slide">
                        <button class="item2" @click="roadModal3">
                          <img
                            src="@/assets/m_images/main/img_road_balloon03.png"
                          />
                          <div class="txt">
                            <span class="road">ROAD 3</span>
                            <template v-if="$store.getters.getLocale === 'ENG'">
                              <div class="title">
                                BellyWorld<br />
                                Opening
                              </div>
                            </template>
                            <template v-else>
                              <div class="title">
                                벨리월드가<br />
                                열리다
                              </div>
                            </template>
                            <span class="more">more</span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div
                      class="swiper-pagination swiper2-page"
                      slot="pagination"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section">
            <template v-if="$store.getters.getLocale === 'ENG'">
              <div class="ending">
                <img src="@/assets/m_images/main/bellyship.jpeg" />
              </div>
            </template>
            <template v-else>
              <div class="ending">
                <img src="@/assets/m_images/main/bellyship.jpeg" />
              </div>
            </template>
          </section>
          <section class="section fp-auto-height">
            <footer>
              <div class="inner">
                <div class="footer-logo">
                  <img
                    src="@/assets/images/commons/footer_logo.svg"
                    alt="footer-logo"
                  />
                </div>
                <div class="footer-contents">
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    <ul class="footer-list">
                      <li>CEO Lee, Wan Shin</li>
                      <li>
                        Address: (Yangpyeongdong 5-ga) 10 Yangpyeong-ro 21-gil
                        Yeongdeungpo-gu, Seoul
                      </li>
                      <li>Privacy Policy Manager: Shin, Sung Bin</li>
                    </ul>
                    <ul class="footer-list">
                      <li>Hosting Service Provider: Woori Home Shopping</li>
                      <li>Affiliates & Inquiry: master@lotteimall.com</li>
                      <li>
                        <nuxt-link to="ENG/terms" target="_blank">
                          Terms of Service
                        </nuxt-link>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <ul class="footer-list">
                      <li>대표 이완신</li>
                      <li>주소: 서울특별시 영등포구 양평로21길10(양평동5가)</li>
                      <li>개인정보 보호책임자: 신성빈</li>
                    </ul>
                    <ul class="footer-list">
                      <li>호스팅 서비스 사업자: (주)우리홈쇼핑</li>
                      <li>제휴 및 문의: master@lotteimall.com</li>
                      <li>
                        <nuxt-link to="/terms" target="_blank"
                          >이용약관</nuxt-link
                        >
                      </li>
                    </ul>
                  </template>

                  <p class="copyright">
                    Copyright Ⓒ
                    <span class="logo">
                      <img
                        src="@/assets/images/commons/img_footer_logo_bellygom.svg"
                        alt="footer-logo"
                      />
                    </span>
                    All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </section>
          <div
            class="main-char ignore"
            :class="charClass"
            :style="{ top: charTop }"
            ref="mainChar"
          >
            <div class="fall">
              <img src="@/assets/m_images/char-fall.webp" type="image/webp" />
            </div>
            <div class="stand">
              <img src="@/assets/m_images/char-stand.png" />
            </div>
            <div class="walk">
              <img src="@/assets/m_images/char-walk.webp" type="image/webp" />
            </div>
            <div class="end">
              <img src="@/assets/m_images/char-end.png" />
            </div>
          </div>
        </full-page>
      </client-only>
    </div>

    <!-- MODAL-->
    <modal v-if="showRoad1" @close="closeRoad1" class="road-modal">
      <div slot="header">
        <span class="sub">ROAD 1</span>
        <template v-if="$store.getters.getLocale === 'ENG'">
          <div class="title">Bellygom Emerges!</div>
        </template>
        <template v-else>
          <div class="title">벨리곰이 나타나다</div>
        </template>
      </div>
      <div slot="body">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <ul class="road-list">
            <li>Surprise Appears in Crypto Party</li>
            <li>The start of the Bellygom community</li>
            <li>Rarity & Ranking Revealed After Reveal</li>
            <li>Surprise Offer Revealed for All Holders</li>
            <li>
              Sold out celebration! Bellygom's celebration ceremony Start~
            </li>
          </ul>
        </template>
        <template v-else>
          <ul class="road-list">
            <li>크립토파티에 깜짝 등장</li>
            <li>벨리곰 커뮤니티의 시작</li>
            <li>리빌 이후 레어리티&랭킹 공개</li>
            <li>모든 홀더들을 위한 깜짝 혜택 공개</li>
            <li>완판 기념! 벨리곰의 축하 세레머니 START~</li>
          </ul>
        </template>
      </div>
    </modal>
    <modal v-if="showRoad2" @close="closeRoad2" class="road-modal">
      <div slot="header">
        <span class="sub">ROAD 2</span>
        <template v-if="$store.getters.getLocale === 'ENG'">
          <div class="title">Bellygom Surprises!</div>
        </template>
        <template v-else>
          <div class="title">벨리곰이 놀래키다</div>
        </template>
      </div>
      <div slot="body">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <ul class="road-list">
            <li>Surprise Valley Festival held</li>
            <li>Fast!!! Belly Pass with Bellygom</li>
            <li>Bellygom and global projects and collaborations</li>
            <li>The second operation is possible! Bellygom NFT Airdrop</li>
            <li>Creator Studio, training program open</li>
          </ul>
        </template>
        <template v-else>
          <ul class="road-list">
            <li>깜짝 벨리 페스티벌 개최</li>
            <li>벨리곰과 빠르게!!! 벨리패스</li>
            <li>벨리곰과 글로벌 프로젝트와 콜라보레이션</li>
            <li>2차 창작 가능! 벨리곰 NFT 에어드랍</li>
            <li>크리에이터 스튜디오, 양성 프로그램 오픈</li>
          </ul>
        </template>
      </div>
    </modal>
    <modal v-if="showRoad3" @close="closeRoad3" class="road-modal">
      <div slot="header">
        <span class="sub">ROAD 3</span>
        <template v-if="$store.getters.getLocale === 'ENG'">
          <div class="title">BellyWorld Opening!</div>
        </template>
        <template v-else>
          <div class="title">벨리월드가 열리다</div>
        </template>
      </div>
      <div slot="body">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <ul class="road-list">
            <li>Bellygom and friends migrate to the metaverse world</li>
            <li>Belly World's Land NFT, Airdrop</li>
            <li>Belly World Big Celebrity Concert held</li>
            <li>
              Making a surprise theme song for Belly World's 1st project (feat.
              ?)
            </li>
            <li>
              Making a surprise webtoon for Belly World's 2nd project (feat. ?)
            </li>
            <li>Belly World 3rd Project Make a surprise game</li>
          </ul>
        </template>
        <template v-else>
          <ul class="road-list">
            <li>벨리곰과 친구들, 메타버스 세상으로 이주</li>
            <li>벨리월드 랜드 NFT 에어드랍</li>
            <li>벨리월드 빅 셀럽 콘서트 개최</li>
            <li>벨리월드 첫 번째 프로젝트 깜짝 테마곡 만들기 (feat. ?)</li>
            <li>벨리월드 두 번째 프로젝트 깜짝 웹툰 만들기 (feat. ?)</li>
            <li>벨리월드 세 번째 프로젝트 깜짝 게임 만들기</li>
          </ul>
        </template>
        <template v-if="$store.getters.getLocale === 'ENG'">
          <span class="notice">Road 4 made with holder!!!</span>
        </template>
        <template v-else>
          <span class="notice">홀더와 함께 만드는 Road 4!!!</span>
        </template>
      </div>
    </modal>
    <modal v-if="showInf" @close="closeInf" class="info-modal">
      <div slot="header">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <span class="sub">To get Belly News,</span>
          <div class="title">Visit the Discord Channel ASAP!</div>
        </template>
        <template v-else>
          <span class="sub">벨리곰 NFT 소식은?</span>
          <div class="title">
            디스코드 채널을 통해<br />
            가장 빠르게 확인할 수 있습니다.
          </div>
        </template>
      </div>
      <div slot="body">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <div class="list-title">1st Whitelist (Guaranteed)</div>
          <ul class="road-list">
            <li>
              Twitter and Bellygom Discord Channel Participation Event Lucky
              Draw and Winners Announcement
            </li>
          </ul>
          <div class="list-title">2nd Whitelist (Competition)</div>
          <ul class="road-list">
            <li>
              At least one NFT holder among Sunmiya Club, Smile Miya,
              HappierTown, Noni Commando Entertainment, and Nick Place (Only for
              applicants)
            </li>
          </ul>
          <div class="list-title">Public Sale</div>
          <ul class="road-list">
            <li>First come, first serve! No restrictions.</li>
          </ul>
          <div class="notice">
            <strong>General Terms of Use</strong>
            <ul class="notice-list">
              <li>You can purchase 2 pcs per wallet</li>
              <li>
                Detailed schedule for whitelist application and selection
                criteria will be announced in advance, on
                <span class="underline">Discord</span> and
                <span class="underline">Twitter</span>.
              </li>
              <li>
                Details on minting price can be found on Discord > mint-belly or
                announcements channel.
              </li>
              <li>
                Bellygom NFT's minting schedule and number of whitelists will be
                announced soon.
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <div class="list-title">1차 화이트리스트(확정)</div>
          <ul class="road-list">
            <li>
              트위터, 벨리곰 디스코드 채널 참여 이벤트를 통해 추첨 및 대상자
              확정
            </li>
          </ul>
          <div class="list-title">2차 화이트리스트(경쟁)</div>
          <ul class="road-list">
            <li>
              선미야클럽, 스마일미야, HappierTown, 노느니특공대 엔터테인먼트,
              닉플레이스 중 1개 이상 NFT 홀더 (신청자에 한함)
            </li>
          </ul>
          <div class="list-title">퍼블릭 세일</div>
          <ul class="road-list">
            <li>선착순 판매, 참여자격 제한 없음</li>
          </ul>
          <div class="notice">
            <strong>공통 해당 사항</strong>
            <ul class="notice-list">
              <li>지갑당 2개 구매 가능</li>
              <li>
                화이트리스트 신청 및 선정 관련 상세 일정은
                <span class="underline">디스코드</span>,
                <span class="underline">트위터</span>를 통해 사전 공지될
                예정입니다.
              </li>
              <li>
                민팅가격에 대한 자세한 사항은 디스코드 > mint-belly or
                announcements 채널에서 확인할 수 있습니다.
              </li>
              <li>
                벨리곰 NFT의 민팅 일정, 화이트리스트 개수가 곧 공지 될
                예정입니다.
              </li>
            </ul>
          </div>
        </template>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  data() {
    return {
      showInf: false,
      showRoad1: false,
      showRoad2: false,
      showRoad3: false,
      scrollToTop: true,
      cloudMoved: false,
      charClass: "s0",
      footClass: "",
      charTop: "50%",
      options: {
        controlArrows:false,
        loopHorizontal:false,
        verticalCentered:false,
        keyboardScrolling: false,
        css3: true,
        scrollingSpeed: 1500,
        licenseKey: "H68K9-OX8AH-GK457-17J28-VGRRP",
        scrollBar: false,
        navigation: false,
        scrollOverflow: true,
        normalScrollElements: ".modal-container, .swiper-container",
        scrollHorizontally: true,
        scrollHorizontallyKey:
          "YmVsbHlnb20ud29ybGRfaktDYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1NFN6",
        anchors: ["getBelly", "falling", "bellyRoad", "bellyShip"],
        afterResize: (width, height) => {
          // alert("The sections have finished resizing");
          this.$refs.fullpage.api.rebuid();
        },
        afterLoad: (origin, destination, direction) => {
          this.$refs.fullpage.api.setAllowScrolling(true);
          console.log("afterLoad");
          if (destination.index === 0) {
            this.charTop = "0px";
            this.cloudMoved = false;
          } else {
            this.cloudMoved = true;
          }

          if (destination.index === 2) {
            this.charClass = "s2";
          }
        },
        onLeave: (origin, destination, direction) => {
          this.$refs.fullpage.api.setAllowScrolling(false);
          console.log("onLeave");
          if (destination.index === 0) {
            this.charClass = "s0";
          } else if (destination.index === 1) {
            this.charClass = "s1";
          } else if (destination.index === 3) {
            this.charClass = "s3";
          }

          if (destination.index === 0) {
            this.cloudMoved = false;
          }

          if (destination.index === 0) {
            this.charTop = "0px";
          } else if (destination.index === 1) {
            this.charTop =
              window.innerHeight * 1 + window.innerHeight / 2 + "px";
          } else if (destination.index === 2) {
            this.charTop =
              window.innerHeight * 3 -
              (window.innerWidth / 16) * 9 * 0.75 +
              "px";
          } else if (destination.index === 3) {
            // this.charTop =
            //   window.innerHeight * 4 -
            //   (window.innerWidth / 16) * 9 * 0.7 +
            //   "px";
            this.charTop =
              window.innerHeight * 4 - window.innerHeight * 0.65 + "px";
          }

          if (destination.index === 4) {
            document.getElementById("fixed").style.display = "none";
          } else {
            setTimeout(() => {
              document.getElementById("fixed").style.display = "block";
            }, 1000);
          }
        },
        onSlideLeave: (section, origin, destination) => {
          this.$refs.fullpage.api.setAllowScrolling(false);
          if (destination.anchor === "slide2") {
            this.charClass = "slide2";
          }
        },
        afterSlideLoad: (direction, origin, destination) => {
          this.$refs.fullpage.api.setAllowScrolling(true);
          console.log("afterSlideLoad");
          if (destination.anchor === "slide1") {
            this.charClass = "slide1";
          } else if (destination.anchor === "slide2") {
            this.charClass = "slide2";
          } else if (destination.anchor === "slide3") {
            this.charClass = "slide3";
          }
        },
        afterRender: function () {
          console.log("afterRender");
        },
        afterReBuild: function () {},
        afterResponsive: function (isResponsive) {},
        onScrollOverflow: function (section, slide, position, direction) {
          console.log(section, slide, position, direction);
        },
      },
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 700,
        pagination: {
						el: '.swiper-pagination-1'
        },
      },
      swiperOption2: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 700,
        pagination: {
          el: ".swiper2-page",
          clickable: true,
          dynamicBullets: true,
        },
      },
      cloudImg: [
        {
          url: require("@/assets/m_images/main/cloud_01.png"),
          engUrl: require("@/assets/m_images/main/cloud_01_en.png"),
        },
        {
          url: require("@/assets/m_images/main/cloud_02.png"),
          engUrl: require("@/assets/m_images/main/cloud_02_en.png"),
        },
        {
          url: require("@/assets/m_images/main/cloud_03.png"),
          engUrl: require("@/assets/m_images/main/cloud_03_en.png"),
        },
      ],
    };
  },
  created() {
    this.$nuxt.$on("scrollLock", (data) => {
      this.$refs.fullpage.api.setAllowScrolling(data);
    });
  },
  mounted() {
    let locale = this.getCookie("b_locale");
    if (locale && locale === "KOR") {
      this.$store.commit("setKOR");
    } else {
      this.$store.commit("setENG");
    }
  },
  methods: {
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
    roadModal1() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showRoad1 = true;
    },
    roadModal2() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showRoad2 = true;
    },
    roadModal3() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showRoad3 = true;
    },
    showInfo() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showInf = true;
    },
    closeRoad1() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showRoad1 = false;
    },
    closeRoad2() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showRoad2 = false;
    },
    closeRoad3() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showRoad3 = false;
    },
    closeInf() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showInf = false;
    },
  },
};
</script>
<style scoped lang="scss">
#main {
  background: #ceedff;
}

.slide {
  width: 100vw;
  transform:translate3d(0,0,0);
  -webkit-transform:translate3d(0,0,0);
  ::v-deep .fp-tableCell {
    position: relative;
    img {
      bottom: 0;
      width: 100%;
      height: auto;
    }
  }
  .contents {
    width: 100%;
    position: relative;
    height: 100%;
    transform: translate3d(0, 0, 0);
    .text-con {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -100%);
      .item {
        opacity: 0;
        position: absolute;
        width: 22%;
        height: 25%;
        padding:2%;
        transform: translate(0, -30px);
        transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        -webkit-transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        &.nm1 {
          bottom: 59%;
          left: 39%;
        }
        &.nm2 {
          bottom: 43%;
          left: 18%;
        }
        &.nm3 {
          bottom: 42%;
          right: 19%;
        }
      }
      .item2 {
        .txt {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          transform: translate(-50%, -50%);
          .road {
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: $white;
          }
          .title {
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            margin-top: 15px;
            font-size: 26px;
            line-height: 33px;
            color: $white;
          }
          .more {
            display: block;
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            margin-top: 20px;
            text-decoration: underline;
            text-underline-position: under;
            color: $white;
          }
        }
      }
    }
  }
}

#mainBelly {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  z-index: 3;
}
::v-deep .active {
  .active {
    .contents {
      .text-con {
        .item {
          opacity: 1;
          transform: translate(0, 30px);
          &.nm1 {
            transition-delay: 1s;
            -webkit-transition-delay: 1s;
          }
          &.nm2 {
            transition-delay: 1.3s;
            -webkit-transition-delay: 1.3s;
          }
          &.nm3 {
            transition-delay: 1.6s;
            -webkit-transition-delay: 1.6s;
          }
        }
      }
    }
  }
}
.info-btn {
  position: absolute;
  width: 14%;
  height: 16%;
  bottom: 10%;
  left: 30%;
}

.ending {
  position: relative;
  .top {
  }
  .bottom {
    img {
    }
  }
  .txt {
    img {
    }
    &.eng {
    }
  }
  img {
  }
}
.second {
  position: relative;
  .sec-cloud {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    img {
      object-fit: contain;
    }
  }
}

footer {
  clear: both;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 20px;
  background: #34343d;
  box-sizing: border-box;
  .inner {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .footer-logo {
      flex: 0 0 163px;
      width: 163px;
      height: auto;
      img {
        position: relative;
      }
    }
    .footer-contents {
      flex: 1 1 auto;
      padding-left: 158px;
      .footer-list {
        li {
          position: relative;
          display: inline-flex;
          font-size: 16px;
          line-height: 25px;
          color: $white;
          box-sizing: border-box;
          padding-right: 15px;
          margin-right: 15px;
          a {
            text-decoration: underline;
            text-underline-position: under;
          }
          &::after {
            content: "";
            display: inline-block;
            position: absolute;
            top: 3px;
            right: 0;
            width: 1px;
            height: 18px;
            background: rgba(255, 255, 255, 0.2);
            box-sizing: border-box;
            vertical-align: middle;
          }
          &:last-child {
            &::after {
              display: none;
            }
          }
        }
        & + .footer-list {
          margin-top: 10px;
        }
      }
      .copyright {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 35px;
        font-size: 16px;
        color: #9e9e9e;
        .logo {
          display: inline-block;
          margin: -4px 5px 0;
          width: 90px;
          height: 26px;
          img {
            position: relative;
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
  .mobile & {
    display: block;
    padding: 40px 20px 65px;
    .footer-logo {
      flex: none;
      width: 129px;
    }
    .footer-contents {
      flex: none;
      padding-left: 0;
      margin-top: 30px;
      .footer-list {
        margin: 0;
        li {
          display: block;
          margin-top: 8px;
          font-size: 14px;
          line-height: 22px;
          & + li {
            margin-left: 0;
            padding-left: 0;
            &::before {
              content: none;
            }
          }
        }
      }
      .copyright {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}
</style>
<style>
.section-1 {
  z-index: 2;
}
.cloud-wrapper {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;

  height: 0;
}
.cloud-wrapper.moved {
  padding-top: -10%;
}
.cloud-wrapper > img {
  position: absolute;
  transition: transform 0.5s ease-in-out;
  -webkit-transition: transform 0.5s ease-in-out;
  width: 100%;
  top: 0%;
  transform: translateY(-69%);
  -webkit-transform: translateY(-69%);
}
.cloud-wrapper.moved > img {
  transform: translateY(-80%);
  -webkit-transform: translateY(-80%);
}
.section-2 {
  z-index: 1;
}
.main-char {
  overflow: hidden;
  border-radius: 40%;
  pointer-events: none;
  position: fixed;
  top: 0px;
  left: 50%;
  width: 100%;
  z-index: 1;
  transform: translate3d(-50%, -53%, 0);
  -webkit-transform: translate3d(-50%, -53%, 0);
  transition: top 1.5s ease-in-out;
  -webkit-transition: top 1.5s ease-in-out;
}
.main-char > div {
  display: none;
}
.main-char.s0 .fall {
  display: block;
}
.main-char.s1 .fall {
  display: block;
}
.main-char.s2 .stand {
  display: block;
}
.main-char.slide1 .stand {
  display: block;
}
.main-char.slide2 .walk {
  display: block;
}
.main-char.slide3 .stand {
  display: block;
}
.main-char.s3 .end {
  display: block;
}

.road-img {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 18%;
  /* height: 30%; */
  z-index: 3;
  transform: translateX(-50%);
  transition: left 1s ease-in-out;
  -webkit-transition: left 1s ease-in-out;
}
.road-img.slide1 {
  left: 110%;
}
.road-img.slide3 {
  left: -10%;
}
.walk {
  width: auto;
  height: 100%;
  background-size: auto 100%;
  /*background-image: url("@/assets/m_images/walk-sprites-h.png");*/
}

.fp-controlArrow.fp-prev,
.fp-controlArrow.fp-next {
  display: none;
}
.roads {
  position: absolute;bottom:0;width:100%;
}

.slide1-cloud-img {
    padding: 10%;
    width: 80%;
}

.swiper-pagination {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
}
.swiper-pagination-bullet {
    width: 8px;
    margin: 0px 3px;
    height: 8px;
    background: #e1e1e1;
    border-radius: 4px;
}
.swiper-pagination-bullet-active {
  background: #000;
  width:20px;
}
</style>
