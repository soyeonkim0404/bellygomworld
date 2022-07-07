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
      <a href="@/assets/pdf/test.pdf" download target="_self" class="guide">
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
        breakpoints: {
          360: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
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
      const frameCount = 87;
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
            scrub: 0.5,
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
  background: $themeColor;
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
  }
  canvas {
    display: block;
    width: 70%;
    height: auto;
    margin: 0 auto;
  }
  .mobile & {
    canvas {
      width: 250%;
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
    height: 500px;
    background-image: url("../assets/images/commons/bubble.svg");
    background-position: top center;
    background-repeat: repeat-x;
    background-size: 1920px auto;
    transform: translateX(-50%);
    .mobile & {
      top: -280px;
      left: 0;
      height: 280px;
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
        width: 328px;
        height: 489px;
        .mobile & {
          width: 100%;
          height: auto;
        }
      }
      .belly-dong {
        width: 1030px;
        height: 1207px;
        margin: -260px auto 0;
        .mobile & {
          width: 100%;
          height: auto;
          margin: 0 auto;
        }
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
  .nft-slide {
  }
  .mobile & {
    padding: 0 0 150px;
    .story {
      padding: 0 20px 100px;
    }
  }
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

#fixed-ele {
  position: fixed;
  bottom: 100px;
  right: 50px;
  z-index: 99;
  .guide {
    width: 110px;
    height: 110px;
  }
}
</style>
