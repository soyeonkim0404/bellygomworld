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
        <div class="story-item fade-in-left">
          <div class="text">
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
          <div class="images">
            <img
              src="../assets/images/main/img_main_story01.png"
              alt="story01"
            />
          </div>
        </div>
        <div class="story-item fade-in-right">
          <div class="images">
            <img
              src="../assets/images/main/img_main_story01.png"
              alt="story01"
            />
          </div>
          <div class="text">
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
        <div class="story-item fade-in-left">
          <div class="text">
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
          <div class="images">
            <img
              src="../assets/images/main/img_main_story01.png"
              alt="story01"
            />
          </div>
        </div>
      </div>
    </section>
    <section></section>
    <section>
      <div class="nft-preview">
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
        speed: 1000,
        autoplay: {
          delay: 0,
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
        require(`@/assets/images/vellygom/vellygomv2_sq_${(index + 1)
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

      const story = document.querySelector(".story");

      gsap.timeline({
        scrollTrigger: {
          trigger: story,
          pin: false,
          scrub: 0.5,
          start: "top",
          end: "+=200%",
          markers: false,
        },
      });

      const animateItems = gsap.utils.toArray(".story-item");
      animateItems.forEach((item, idx) => {
        let stData = {
          trigger: item,
          start: item.start,
          scrub: 2.2,
        };

        if (item.classList.contains("fade-in-left")) {
          gsap.set(".text", { opacity: 0, x: -100 });
          gsap.to(".text", {
            duration: 1,
            opacity: 1,
            x: 0,
            scrollTrigger: stData,
          });
          gsap.set(".images", { opacity: 0, x: 100 });
          gsap.to(".images", {
            duration: 1,
            opacity: 1,
            x: 0,
            scrollTrigger: stData,
          });
        }

        if (item.classList.contains("fade-in-right")) {
          gsap.set(".text", { opacity: 0, x: 100 });
          gsap.to(".text", {
            duration: 1,
            opacity: 1,
            x: 0,
            scrollTrigger: stData,
          });
          gsap.set(".images", { opacity: 0, x: -100 });
          gsap.to(".images", {
            duration: 1,
            opacity: 1,
            x: 0,
            scrollTrigger: stData,
          });
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.main {
  max-width: 1920px;
  margin: 0 auto;
  background: $yellow;
}
.story {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1260px;
  margin: 0 auto;
  padding: 80px 0;
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
</style>
