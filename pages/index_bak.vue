<template>
  <main class="main">
    <section>
      <div class="visual">
        <canvas></canvas>
      </div>
    </section>
    <section>
      <div class="story">
        <h2 class="story-title"></h2>
        <div class="story-item">
          <div class="text ani">
            <h3 class="title">
              벨리곰,<br />
              유령의 집에서 태어나다.
            </h3>
            <p class="desc">
              어느 날, 유령의 집에 놀러 온 꼬마가 흘린 풍선껌, 그 속에서 커여운
              벨리곰이 탄생했다. 벨리곰은 사람들을 놀래키며 행복을 주는 일을
              좋아하지만, 과도한 식탐과 귀여운 외모가 유령의 집에 어울리지
              않는다며 쫓겨나게 된다.
            </p>
          </div>
          <div class="images ani fade-in-right">
            <img
              src="../assets/images/main/img_main_story01.png"
              alt="story01"
            />
          </div>
        </div>
        <div class="story-item">
          <div class="images ani fade-in-left">
            <img
              src="../assets/images/main/img_main_story01.png"
              alt="story01"
            />
          </div>
          <div class="text ani">
            <h3 class="title">
              벨리곰,<br />
              유령의 집에서 태어나다.
            </h3>
            <p class="desc">
              어느 날, 유령의 집에 놀러 온 꼬마가 흘린 풍선껌, 그 속에서 커여운
              벨리곰이 탄생했다. 벨리곰은 사람들을 놀래키며 행복을 주는 일을
              좋아하지만, 과도한 식탐과 귀여운 외모가 유령의 집에 어울리지
              않는다며 쫓겨나게 된다.
            </p>
          </div>
        </div>
        <div class="story-item">
          <div class="text ani">
            <h3 class="title">
              벨리곰,<br />
              유령의 집에서 태어나다.
            </h3>
            <p class="desc">
              어느 날, 유령의 집에 놀러 온 꼬마가 흘린 풍선껌, 그 속에서 커여운
              벨리곰이 탄생했다. 벨리곰은 사람들을 놀래키며 행복을 주는 일을
              좋아하지만, 과도한 식탐과 귀여운 외모가 유령의 집에 어울리지
              않는다며 쫓겨나게 된다.
            </p>
          </div>
          <div class="images ani fade-in-right">
            <img
              src="../assets/images/main/img_main_story01.png"
              alt="story01"
            />
          </div>
        </div>
        <div class="story-bottom"></div>
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
    <section>
      <div class="loop-holder">
        <div class="loop-holder__text">Don't worry be BELLY</div>
        <div class="loop-holder__text">Don't worry be BELLY</div>
        <div class="loop-holder__text">Don't worry be BELLY</div>
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
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      const keyVisual = document.querySelector(".visual");
      const canvas = keyVisual.querySelector("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 1920;
      canvas.height = 1080;
      const frameCount = 59;
      const currentFrame = (index) =>
        require(`@/assets/images/vellygom/vellygomv2_sq_${index
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
            end: "+=200%",
            markers: false,
          },
        })
        .to(
          belly,
          {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            duration: 1,
          },
          0
        );

      /* start story fade*/
      function animateFrom(elem, direction) {
        direction = direction || 1;
        let x = 0,
          y = direction * 100;
        if (elem.classList.contains("fade-in-left")) {
          x = -100;
          y = 0;
        } else if (elem.classList.contains("fade-in-right")) {
          x = 100;
          y = 0;
        }
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
      /* end story fade*/
    },
  },
};
</script>
<style scoped lang="scss">
.main {
  max-width: 1920px;
  margin: 0 auto;
}
.visual {
  width: 100%;
  canvas {
    width: 100%;
    height: 100%;
  }
}
.story {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1260px;
  margin: 0 auto;
  box-sizing: border-box;
  transform: scale(0.8);
  .story-title {
    display: block;
    width: 618px;
    height: 420px;
    background: #ddd;
    margin: 0 auto;
  }
  .story-item {
    display: flex;
    margin-top: 250px;
    .text {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex: 0 0 calc(100% - 618px);
      padding-right: 135px;
      .title {
        text-align: left;
        font-size: 38px;
        color: $black;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      }
      .desc {
        font-size: 18px;
        color: $black;
      }
    }
    .images {
      flex: 0 0 618px;
      width: 618px;
      height: 390px;
    }
    & + .story-item {
      margin-top: 250px;
    }
    &.fade-in-right {
      .text {
        padding-left: 135px;
        padding-right: 0;
      }
    }
  }
}

/*.nft-slide {
  .swiper-wrapper {
    .swiper-slide {
      width: 512px !important;
      height: 512px !important;
    }
  }
}*/

.loop-holder {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
}

.loop-holder__text {
  animation: textLoop 20s linear infinite;
  font-size: 6vw;
  padding-right: 0.35em;
}

@keyframes textLoop {
  0% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
