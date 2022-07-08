<template>
  <main class="main">
    <div class="visual">
      <canvas></canvas>
    </div>
    <div class="belly">
      <div class="story">
        <div class="title-area">
          <h2 class="story-title">
            Don't<br />
            worry<br />
            be BELLY
          </h2>
          <div class="belly-fri">
            <img src="../assets/images/main/belly_friend.svg" alt="" />
          </div>
          <div class="belly-dong">
            <img src="../assets/images/main/story_belly.svg" alt="" />
          </div>
        </div>
        <p class="ani-text ani">
          {{ $t("mainStory_1") }}
        </p>
        <p class="ani-text ani">
          {{ $t("mainStory_2") }}
        </p>
        <p class="ani-text ani">
          {{ $t("mainStory_3") }}
        </p>
        <p class="ani-text ani">
          {{ $t("mainStory_4") }}
        </p>
        <p class="ani-text ani big">
          {{ $t("mainStory_5") }}
        </p>
      </div>
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
    </div>
    <div id="fixed-ele">
      <a
        href="javascript:alert('작업중');"
        download
        target="_self"
        class="guide"
      >
        <img
          src="@/assets/images/main/minting_guide_btn.svg"
          alt="민팅가이드문서"
        />
      </a>
      <div class="audio">
        <button @click="playSound"></button>
      </div>
    </div>
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
          url: require("@/assets/images/main/main_nft_01.svg"),
          alt: "nft-images",
        },
        {
          url: require("@/assets/images/main/main_nft_02.svg"),
          alt: "nft-images",
        },
        {
          url: require("@/assets/images/main/main_nft_03.svg"),
          alt: "nft-images",
        },
        {
          url: require("@/assets/images/main/main_nft_04.svg"),
          alt: "nft-images",
        },
        {
          url: require("@/assets/images/main/main_nft_05.svg"),
          alt: "nft-images",
        },
      ],
      swiperOption: {
        slidesPerView: "auto",
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

      /*START key visual canvas*/
      const keyVisual = document.querySelector(".visual");
      const canvas = keyVisual.querySelector("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 1750;
      canvas.height = 1650;
      const frameCount = 88;
      const currentFrame = (index) =>
        require(`@/assets/images/vellygom/vellygomv2_sq_Main_24fps_${index
          .toString()
          .padStart(5, "0")}.webp`);
      const images = [];
      const belly = {
        frame: 0,
      };
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
      images[0].onload = render;
      function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[belly.frame], 0, 0);
      }

      gsap
        .timeline({
          onUpdate: render,
          scrollTrigger: {
            trigger: keyVisual,
            pin: true,
            scrub: 1,
            markers: false,
            onLeave: () => {
              gsap.set(".visual", {
                position: "fixed",
                y: 0,
                left: 0,
                width: "100%",
              });
            },
          },
        })
        .to(belly, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          duration: 1,
        });

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
  position: relative;
  background: $themeColor;
  .pin-spacer {
    .mobile & {
      height: 100vh !important;
    }
  }
  .mobile & {
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 609px;
      background: url("../assets/images/main/mobile_key_bg_star.svg") center
        no-repeat;
      transform: translateX(-50%);
      z-index: 0;
    }
  }
}
.visual {
  position: relative;
  width: 100%;
  background: $gradient;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 110px;
    left: 50%;
    width: 1588px;
    height: 764px;
    background: url("../assets/images/main/key_bg_star.svg") center no-repeat;
    transform: translateX(-50%);
    z-index: 3;
    .mobile & {
      display: none;
    }
  }
  canvas {
    display: block;
    width: 90%;
    height: auto;
    margin: 0 auto;
  }
  .mobile & {
    min-height: 100vh !important;

    canvas {
      width: 250%;
      margin-top: 0;
      margin-left: -73%;
    }
  }
}

.belly {
  position: relative;
  width: 100%;
  padding: 100px 0 250px;
  background: $themeColor;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -500px;
    left: 50%;
    width: 100%;
    height: 909px;
    background-image: url("../assets/images/commons/bubble.svg");
    background-position: top center;
    background-repeat: repeat-x;
    background-size: 1920px auto;
    transform: translateX(-50%);
    .mobile & {
      top: -280px;
      left: 0;
      height: 280px;
      background-image: url("../assets/images/commons/mobile_bubble.svg");
      background-size: 100% auto;
      transform: none;
    }
  }
  .story {
    padding-bottom: 250px;
    .pc & {
      max-width: 1170px;
      margin: 0 auto;
    }
    .title-area {
      position: relative;
      .story-title {
        font-family: "Sandoll Odongtong", sans-serif;
        font-size: 190px;
        line-height: 1.2;
        color: $white;
        text-align: center;
        .mobile & {
          font-size: 90px;
        }
      }
      .belly-fri {
        position: absolute;
        top: 30px;
        right: 0;
        width: 297px;
        height: 740px;
        text-align: center;
        font-size: 0;
        transform-origin: top left;
        animation: cat-ani 2.5s infinite alternate ease-in-out;
        .mobile & {
          width: 133px;
          height: auto;
        }
      }
      .belly-dong {
        width: 749px;
        height: 1290px;
        margin: -260px auto 0;
        animation: belly-ani linear 3s infinite;
        animation-direction: reverse;
        transform-origin: center;
        .mobile & {
          width: 100%;
          height: auto;
          margin: 0 auto;
          margin-left: -20px;
        }
      }
    }
    .ani-text {
      font-size: 22px;
      line-height: 37px;
      color: $white;
      text-align: center;
      white-space: pre-line;
      &.big {
        font-size: 38px;
        line-height: 60px;
        font-weight: bold;
        margin-top: 100px;
      }
      & + .ani-text {
        /*margin-top: 40px;*/
      }
      .mobile & {
        font-size: 16px;
        line-height: 25px;
        &.big {
          font-size: 18px;
          line-height: 20px;
          margin-top: 60px;
        }
        & + .ani-text {
          margin-top: 30px;
        }
      }
    }
  }
  .nft-slide {
    .swiper-container {
      touch-action: pan-y;
      transition-timing-function: linear;
      transition-property: transform;
      .swiper-slide {
        width: 500px;
        height: 500px;
        .mobile & {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
  .mobile & {
    padding: 0 0 150px;
    .story {
      padding: 0 20px 100px;
    }
  }
}
#fixed-ele {
  position: fixed;
  bottom: 100px;
  right: 50px;
  z-index: 99;
  .guide {
    display: block;
    width: 110px;
    height: 110px;
  }
  .mobile & {
    right: 10px;
    .guide {
      width: 85px;
      height: 85px;
    }
  }
}

@keyframes cat-ani {
  0% {
    transform: translateY(0) rotate(10deg);
  }
  25% {
    transform: translateY(20px) rotate(10deg);
  }
  75% {
    transform: translateY(80px) rotate(-10deg);
  }
  100% {
    transform: translateY(100px) rotate(-10deg);
  }
}

@keyframes belly-ani {
  0% {
    transform: rotate(3deg) translateY(-100px);
  }
  50% {
    transform: rotate(-3deg) translateY(0);
  }
  100% {
    transform: rotate(3deg) translateY(-100px);
  }
}
</style>
