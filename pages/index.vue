<template>
  <main class="main">
    <section class="key">
      <div class="visual">
        1
        <img
          src="../assets/images/main/test_belly.svg"
          alt="메인 키비주얼"
          class="key-img"
        />
      </div>
    </section>
    <section>
      <div class="story">
        <div class="inner">
          <div class="title-area">
            <h2 class="story-title">
              Don't<br />
              worry<br />
              be BELLY
            </h2>
            <div class="belly-fri bounce">
              <img src="../assets/images/main/belly_friend.svg" alt="" />
            </div>
            <div class="belly-dong bounce">
              <img src="../assets/images/main/story_belly.svg" alt="" />
            </div>
          </div>
          <p class="ani-text ani">
            {{ $t("mainStory_1") }}
          </p>
          <!--          <p class="ani-text ani">
            어느 날, 유령의 집에 놀러 온 꼬마가 흘린 풍선껌, 그 속에서 커여운
            벨리곰이 탄생했다. 벨리곰은 사람들을 놀래키며 행복을 주는 일을
            좋아하지만, 과도한 식탐과 귀여운 외모가 유령의 집에 어울리지
            않는다며
          </p>
          <p class="ani-text ani">
            어느 날, 유령의 집에 놀러 온 꼬마가 흘린 풍선껌, 그 속에서 커여운
            벨리곰이 탄생했다. 벨리곰은 사람들을 놀래키며 행복을 주는 일을
            좋아하지만, 과도한 식탐과 귀여운 외모가 유령의 집에 어울리지
            않는다며 쫓겨나게 된다.
          </p>
          <p class="ani-text big ani">
            1만 개의 신비로운 능력을 얻은 벨리곰은 사람들에게 어떤 서프라이즈를
            가져다 줄까?
          </p>-->
        </div>
      </div>
    </section>
    <section>
      <div class="nft-slide">
        <div v-swiper:mySwiper="swiperOption" class="swiper-container">
          <div class="swiper-wrapper">
            <div
              v-for="(slide, index) in swiperImages"
              :key="index"
              class="swiper-slide"
            >
              <img :src="slide.url" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
export default {
  name: "IndexPage",
  layout: "defalut",
  data() {
    return {
      swiperImages: [
        {
          url: require("@/assets/images/main/img_main_nft01.png"),
          alt: "nft-images",
        },
        {
          url: require("@/assets/images/main/img_main_nft02.png"),
          alt: "nft-images",
        },
        {
          url: require("@/assets/images/main/img_main_nft03.png"),
          alt: "nft-images",
        },
        {
          url: require("@/assets/images/main/img_main_nft04.png"),
          alt: "nft-images",
        },
        {
          url: require("@/assets/images/main/img_main_nft05.png"),
          alt: "nft-images",
        },
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: false,
        speed: 3500,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      },
    };
  },
  mounted() {
    this.triggerMethod();
  },
  methods: {
    triggerMethod() {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: ".visual",
        start: "top top",
        pin: true,
        pinSpacing: false,
      });

      /*ScrollTrigger.create({
        snap: 1 / 4, // snap whole page to the closest section!
      });*/

      /* start story scrollup*/
      function animateFrom(elem, direction) {
        direction = direction || 1;
        let x = 0,
          y = direction * 100;
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(
          elem,
          { x: x, y: y, autoAlpha: 0 },
          {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto",
          }
        );
      }

      function hide(elem) {
        gsap.set(elem, { autoAlpha: 0 });
      }

      gsap.utils.toArray(".ani").forEach((elem) => {
        hide(elem);
        ScrollTrigger.create({
          trigger: elem,
          onEnter: () => animateFrom(elem),
          onEnterBack: () => animateFrom(elem, -1),
          onLeave: () => hide(elem),
        });
      });
      /* end story scrollup*/
    },
  },
};
</script>
<style scoped lang="scss">
.main {
  background: $themeColor;
  padding-bottom: 200px;
}

.visual {
  width: 100%;
  background: $gradient;
  .key-img {
    display: block;
    width: 1071px;
    height: 1242px;
    margin: 0 auto;
    padding-top: 250px;
    box-sizing: border-box;
  }
}

.story {
  position: relative;
  width: 100%;
  padding-top: 100px;
  background: $themeColor;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -22%;
    left: 50%;
    width: 100%;
    height: 500px;
    background-image: url("../assets/images/commons/bubble.svg");
    background-position: top center;
    background-repeat: repeat-x;
    background-size: 1920px auto;
    transform: translateX(-50%);
  }
  .inner {
    max-width: 1170px;
    margin: 0 auto;
    .title-area {
      position: relative;
      .story-title {
        font-size: 190px;
        line-height: 1.2;
        color: $white;
        text-align: center;
      }
      .belly-fri {
        position: absolute;
        top: 30px;
        right: 0;
        width: 328px;
        height: 489px;
      }
      .belly-dong {
        width: 1030px;
        height: 1207px;
        margin: -260px auto 0;
      }
    }
    .ani-text {
      font-size: 22px;
      line-height: 1.2;
      color: $white;
      text-align: center;
      &.big {
        font-size: 26px;
        font-weight: bold;
        margin-top: 100px;
      }
      & + .ani-text {
        margin-top: 50px;
      }
    }
  }
}

.nft-slide {
  margin-top: 250px;
}

.bounce {
  position: relative;
  animation: bounce 0.5s infinite linear;
}

@keyframes bounce {
  0% {
    top: 0;
  }

  50% {
    top: -1px;
  }

  70% {
    top: -2px;
  }

  100% {
    top: 0;
  }
}
</style>
