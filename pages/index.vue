<template>
  <div id="main">
    <div class="inner">
      <client-only>
        <full-page ref="fullpage" :options="options" id="fullpage">
          <section class="section">
            <video id="mainBelly" loop muted data-autoplay playsinline>
              <source src="../assets/media/belly.mp4" type="video/mp4" />
            </video>
          </section>
          <div class="cloud-wrapper ignore" :class="{ moved: cloudMoved }">
            <img src="../assets/images/main_cloud_big.png" />
          </div>
          <section class="section">
            <div>
              <img src="../assets/images/s2_bg.jpeg" />
            </div>
          </section>
          <section class="section">
            <div class="slide" data-anchor="slide1">
              <div class="contents">
                <img src="../assets/images/main/getbelly_road_ko_1.jpeg" />
                <div class="text-con">
                  <div class="item nm1">
                    <img src="../assets/images/main/cloud_02.png" />
                  </div>
                  <div class="item nm2">
                    <img src="../assets/images/main/cloud_01.png" />
                  </div>
                  <div class="item nm3">
                    <img src="../assets/images/main/cloud_03.png" />
                  </div>
                </div>
                <button class="info-btn" @click="showInfo" />
              </div>
            </div>
            <div class="slide" data-anchor="slide2">
              <div class="contents">
                <img src="../assets/images/main/getbelly_road_ko_2.jpeg" />
              </div>
            </div>
            <div class="road-img" :class="treeClass">
              <img src="../assets/images/main/img_getroad_layer.svg" alt="" />
            </div>
            <div class="slide" data-anchor="slide3">
              <div class="contents">
                <img src="../assets/images/main/getbelly_road_ko_3.jpeg" />
                <div class="text-con">
                  <button class="item2 nm1" @click="roadModal2">
                    <img src="../assets/images/main/img_road_balloon02.png" />
                    <div class="txt">
                      <span class="road">ROAD 2</span>
                      <div class="title">
                        벨리곰이<br />
                        놀래키다
                      </div>
                      <span class="more">more</span>
                    </div>
                  </button>
                  <button class="item2 nm2" @click="roadModal1">
                    <img src="../assets/images/main/img_road_balloon01.png" />
                    <div class="txt">
                      <span class="road">ROAD 1</span>
                      <div class="title">
                        벨리곰이<br />
                        나타나다
                      </div>
                      <span class="more">more</span>
                    </div>
                  </button>
                  <button class="item2 nm3" @click="roadModal3">
                    <img src="../assets/images/main/img_road_balloon03.png" />
                    <div class="txt">
                      <span class="road">ROAD 3</span>
                      <div class="title">
                        벨리월드가<br />
                        열리다
                      </div>
                      <span class="more">more</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section class="section">
            <div class="ending">
              <img src="../assets/images/main/img_bellyship_bg.jpeg" />
            </div>
          </section>
          <section class="section fp-auto-height">
            <Footer />
          </section>
          <div
            class="main-char ignore"
            :class="charClass"
            :style="{ top: charTop }"
          >
            <div class="fall">
              <img src="../assets/images/char-fall.png" />
            </div>
            <div class="stand">
              <img src="../assets/images/char-stand.png" />
            </div>
            <div class="walk" :style="{ 'background-position': walkSprite }">
              <img src="../assets/images/char-walk.png" />
            </div>
            <div class="end">
              <img src="../assets/images/char-end.png" />
            </div>
          </div>
        </full-page>
      </client-only>
    </div>

    <!-- MODAL-->
    <modal v-if="showRoad1" @close="closeRoad1" class="road-modal">
      <div slot="header">
        <span class="sub">ROAD 1</span>
        <div class="title">벨리곰이 나타나다</div>
      </div>
      <div slot="body">
        <ul class="road-list">
          <li>크립토파티에 깜짝 등장</li>
          <li>벨리곰 커뮤니티의 시작</li>
          <li>리빌 이후 레어리티&랭킹 공개</li>
          <li>모든 홀더들을 위한 깜짝 혜택 공개</li>
          <li>완판 기념! 벨리곰의 축하 세레머니 START~</li>
        </ul>
      </div>
    </modal>
    <modal v-if="showRoad2" @close="closeRoad2" class="road-modal">
      <div slot="header">
        <span class="sub">ROAD 2</span>
        <div class="title">벨리곰이 놀래키다</div>
      </div>
      <div slot="body">
        <ul class="road-list">
          <li>깜짝 벨리 페스티벌 개최</li>
          <li>벨리곰과 빠르게!!! 벨리패스</li>
          <li>벨리곰과 글로벌 프로젝트와 콜라보레이션</li>
          <li>2차 창작 가능! 벨리곰 NFT 에어드랍</li>
          <li>크리에이터 스튜디오, 양성 프로그램 오픈</li>
        </ul>
      </div>
    </modal>
    <modal v-if="showRoad3" @close="closeRoad3" class="road-modal">
      <div slot="header">
        <span class="sub">ROAD 3</span>
        <div class="title">벨리월드가 열리다</div>
      </div>
      <div slot="body">
        <ul class="road-list">
          <li>벨리곰과 친구들, 메타버스 세상으로 이주</li>
          <li>벨리월드 랜드 NFT 에어드랍</li>
          <li>벨리월드 빅 셀럽 콘서트 개최</li>
          <li>벨리월드 첫 번째 프로젝트 깜짝 테마곡 만들기 (feat. ?)</li>
          <li>벨리월드 두 번째 프로젝트 깜짝 웹툰 만들기 (feat. ?)</li>
          <li>벨리월드 세 번째 프로젝트 깜짝 게임 만들기</li>
        </ul>
        <span class="notice">홀더와 함께 만드는 Road 4!!!</span>
      </div>
    </modal>
    <modal v-if="showInf" @close="closeInf" class="info-modal">
      <div slot="header">
        <span class="sub">벨리곰 NFT 소식은?</span>
        <div class="title">
          디스코드 채널을 통해<br />
          가장 빠르게 확인할 수 있습니다.
        </div>
      </div>
      <div slot="body">
        <div class="list-title">1차 화이트리스트(확정)</div>
        <ul class="road-list">
          <li>
            트위터, 벨리곰 디스코드 채널 참여 이벤트를 통해 추첨 및 대상자 확정
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
              화이트리스트 신청 및 선정 관련 상세 일정은 <a>디스코드</a>,
              <a>트위터</a>를 통해 사전 공지될 예정입니다.
            </li>
            <li>
              민팅가격에 대한 자세한 사항은 디스코드 > mint-belly or
              announcements 채널에서 확인할 수 있습니다.
            </li>
            <li>
              벨리곰 NFT의 민팅 일정, 화이트리스트 개수가 곧 공지 될 예정입니다.
            </li>
          </ul>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "IndexPage",
  layout: "defalut",
  components: { Footer },
  data() {
    return {
      showInf: false,
      showRoad1: false,
      showRoad2: false,
      showRoad3: false,
      scrollToTop: true,
      cloudMoved: false,
      treeClass: "left",
      charClass: "s0",
      footClass: "",
      charTop: "50%",
      walkSprite: "0% 0%",
      walkSpriteCnt: 0,
      options: {
        keyboardScrolling: false,
        scrollingSpeed: 1000,
        licenseKey: "H68K9-OX8AH-GK457-17J28-VGRRP",
        scrollBar: false,
        navigation: false,
        scrollOverflow: true,
        scrollHorizontally: true,
        scrollHorizontallyKey: "YmVsbHlnb20ud29ybGRfaktDYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1NFN6",
        anchors: ["getBelly", "falling", "bellyRoad", "bellyShip"],
        afterLoad: (origin, destination, direction) => {
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
          console.log(destination);
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
              (window.innerWidth / 16) * 9 * 0.28 +
              "px";
          } else if (destination.index === 3) {
            this.charTop =
              window.innerHeight * 4 -
              (window.innerWidth / 16) * 9 * 0.7 +
              "px";
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
          if (destination.anchor === "slide1") {
            this.treeClass = "slide1";
          } else if (destination.anchor === "slide2") {
            this.treeClass = "slide2";
          } else if (destination.anchor === "slide3") {
            this.treeClass = "slide3";
          }
          if (destination.anchor === "slide2") {
            this.charClass = "slide2";
          }
        },
        afterSlideLoad: (direction, origin, destination) => {
          if (destination.anchor === "slide1") {
            this.charClass = "slide1";
          } else if (destination.anchor === "slide3") {
            this.charClass = "slide3";
          }
        },
      },
    };
  },
  mounted() {
    //setInterval(this.runWalk, 50);
  },
  methods: {
    runWalk() {
      this.walkSpriteCnt++;
      if (this.walkSpriteCnt > 79) this.walkSpriteCnt = 0;
      const t = (this.walkSpriteCnt / 79) * 100;
      console.log(t);
      this.walkSprite = t + "% 0%";
    },
    roadModal1() {
      this.showRoad1 = true;
      if (this.showRoad1) {
        document.body.classList.add("modalOn");
      }
    },
    roadModal2() {
      this.showRoad2 = true;
      if (this.showRoad2) {
        document.body.classList.add("modalOn");
      }
    },
    roadModal3() {
      this.showRoad3 = true;
      if (this.showRoad3) {
        document.body.classList.add("modalOn");
      }
    },
    showInfo() {
      this.showInf = true;
      if (this.showInf) {
        document.body.classList.add("modalOn");
      }
    },
    closeRoad1() {
      this.showRoad1 = false;
      if (!this.showRoad1) {
        document.body.classList.remove("modalOn");
      }
    },
    closeRoad2() {
      this.showRoad2 = false;
      if (!this.showRoad2) {
        document.body.classList.remove("modalOn");
      }
    },
    closeRoad3() {
      this.showRoad3 = false;
      if (!this.showRoad3) {
        document.body.classList.remove("modalOn");
      }
    },
    closeInf() {
      this.showInf = false;
      if (!this.showInf) {
        document.body.classList.remove("modalOn");
      }
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
  height: 100vh;
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
    position: absolute;
    bottom: 0;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    .text-con {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      .item {
        opacity: 0;
        position: absolute;
        width: 25%;
        height: 25%;
        transform: translate(0, -30px);
        transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        &.nm1 {
          bottom: 63%;
          left: 39%;
        }
        &.nm2 {
          bottom: 43%;
          left: 16%;
        }
        &.nm3 {
          bottom: 42%;
          right: 17%;
        }
      }
      .item2 {
        opacity: 0;
        position: absolute;
        width: 22%;
        height: 43%;
        transform: translate(0, -30px);
        transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        color: $white;
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
            font-size: 1vw;
            line-height: 1.2;
          }
          .title {
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            margin-top: 15px;
            font-size: 2.5vw;
            line-height: 1.2;
          }
          .more {
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 1vw;
            line-height: 1.2;
            margin-top: 20px;
            text-decoration: underline;
            text-underline-position: under;
          }
        }
        &.nm1 {
          bottom: 52%;
          left: 35%;
        }
        &.nm2 {
          bottom: 37%;
          left: 19%;
        }
        &.nm3 {
          bottom: 33.5%;
          right: 18.5%;
        }
      }
    }
  }
  &.active {
    .contents {
      .text-con {
        .item2 {
          opacity: 1;
          transform: translate(0, 30px);
          &.nm1 {
            transition-delay: 1.5s;
          }
          &.nm2 {
            transition-delay: 1s;
          }
          &.nm3 {
            transition-delay: 1.8s;
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
          }
          &.nm2 {
            transition-delay: 1.3s;
          }
          &.nm3 {
            transition-delay: 1.6s;
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
.fp-auto-height {
  &.active {
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
  left: -10%;
  width: 120%;
  z-index: 3;

  height: 0;
}
.cloud-wrapper.moved {
  padding-top: -10%;
}
.cloud-wrapper > img {
  position: absolute;
  transition: transform 1s ease-in-out;
  width: 100%;
  top: 0%;
  transform: translateY(-50%);
}
.cloud-wrapper.moved > img {
  transform: translateY(-100%);
}
.section-2 {
  z-index: 1;
}
.main-char {
  pointer-events: none;
  position: fixed;
  top: 0px;
  left: 50%;
  width: 37.5%;
  z-index: 1;
  transform: translate(-50%, -50%);
  transition: top 1s ease-in-out;
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
  /*background-image: url("@/assets/images/walk-sprites-h.png");*/
}
.ending {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.ending img {
  height: 100%;
  object-fit: cover;
}

.fp-controlArrow.fp-prev,
.fp-controlArrow.fp-next {
  display: none;
}
</style>
