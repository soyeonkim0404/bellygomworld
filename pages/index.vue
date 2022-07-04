<template>
  <main class="main">
    <section class="section-1">
      <div class="main-top">
        <canvas></canvas>
      </div>
    </section>
    <section class="section-2">
      <div class="nft-story">
        <div class="story-item fade-in-left">
          <div class="text">
            <h2 class="heading_large gs_reveal">
              Supercharge immersive <strong>WebGL</strong> experiences
            </h2>
            <p class="gs_reveal">
              GreenSock is used in some of the most popular
              <a href="//threejs.org/">Three.js</a> powered WebGL projects.
              Animate any object in a scene.
              <a href="https://greensock.com/PixiPlugin/">PixiPlugin</a> makes
              animating <a href="//www.pixijs.com/">Pixi.js</a> objects with
              GSAP a breeze. Animate position, scale, color effects and more
              with all the power and control of GSAP and the rendering speed of
              Pixi.js.
            </p>
          </div>
          <div class="image">
            <img src="https://picsum.photos/479/479?index=2" />
          </div>
        </div>

        <div class="story-item fade-in-right">
          <div class="image">
            <img src="https://picsum.photos/479/479?index=2" />
          </div>
          <div class="text">
            <h2 class="heading_large gs_reveal">
              Supercharge immersive <strong>WebGL</strong> experiences
            </h2>
            <p class="gs_reveal">
              GreenSock is used in some of the most popular
              <a href="//threejs.org/">Three.js</a> powered WebGL projects.
              Animate any object in a scene.
              <a href="https://greensock.com/PixiPlugin/">PixiPlugin</a> makes
              animating <a href="//www.pixijs.com/">Pixi.js</a> objects with
              GSAP a breeze. Animate position, scale, color effects and more
              with all the power and control of GSAP and the rendering speed of
              Pixi.js.
            </p>
          </div>
        </div>

        <div class="story-item fade-in-left">
          <div class="text">
            <h2 class="heading_large gs_reveal">
              Supercharge immersive <strong>WebGL</strong> experiences
            </h2>
            <p class="gs_reveal">
              GreenSock is used in some of the most popular
              <a href="//threejs.org/">Three.js</a> powered WebGL projects.
              Animate any object in a scene.
              <a href="https://greensock.com/PixiPlugin/">PixiPlugin</a> makes
              animating <a href="//www.pixijs.com/">Pixi.js</a> objects with
              GSAP a breeze. Animate position, scale, color effects and more
              with all the power and control of GSAP and the rendering speed of
              Pixi.js.
            </p>
          </div>
          <div class="image">
            <img src="https://picsum.photos/479/479?index=2" />
          </div>
        </div>
      </div>
    </section>
    <section class="section-4">
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
          url: "https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1270.91fed644.png&w=3840&q=100",
          alt: "nft-images",
        },
        {
          url: "https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F747.00e188c1.png&w=3840&q=100",
          alt: "nft-images",
        },
        {
          url: "https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F152.40b1b711.png&w=3840&q=100",
          alt: "nft-images",
        },
        {
          url: "https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F600.471255c6.png&w=3840&q=100",
          alt: "nft-images",
        },
        {
          url: "https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F875.56e847e8.png&w=3840&q=100",
          alt: "nft-images",
        },
        {
          url: "https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1270.91fed644.png&w=3840&q=100",
          alt: "nft-images",
        },
        {
          url: "https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F747.00e188c1.png&w=3840&q=100",
          alt: "nft-images",
        },
        {
          url: "https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F152.40b1b711.png&w=3840&q=100",
          alt: "nft-images",
        },
        {
          url: "https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F152.40b1b711.png&w=3840&q=100",
          alt: "nft-images",
        },
      ],
      swiperOption: {
        slidesPerView: 9,
        spaceBetween: 30,
        loop: true,
        speed: 700,
        autoplay: {
          delay: 0,
        },
      },
    };
  },
  mounted() {
    this.imageAnimation();
    this.textFade();
  },
  methods: {
    imageAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      const secEle1 = document.querySelector(".main-top");
      const canvas = secEle1.querySelector("canvas");
      initCanvas(secEle1, canvas);
      function initCanvas(section, canvas) {
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

        gsap
          .timeline({
            onUpdate: render,
            scrollTrigger: {
              trigger: section,
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

        images[0].onload = render;

        function render() {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(images[belly.frame], 0, 0);
        }
      }
    },
    textFade() {
      gsap.registerPlugin(ScrollTrigger);
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
          gsap.set(".image", { opacity: 0, x: 100 });
          gsap.to(".image", {
            duration: 1,
            opacity: 1,
            x: 0,
            scrollTrigger: stData,
          });
        }
        if (item.classList.contains("fade-in-right")) {
          gsap.set(item, { opacity: 0, x: 100 });
          gsap.to(item, {
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
[class^="section"] {
  position: relative;
  width: 100%;
  overflow-x: hidden;
}
.section-1 {
  .main-top {
    background: radial-gradient(
        41.98% 53.8% at 50% 89.35%,
        rgba(142, 78, 59, 0.55) 0%,
        rgba(252, 201, 162, 0) 100%
      ),
      conic-gradient(
        from -38.65deg at 50% 109.17%,
        #fdb8d7 -44.69deg,
        #ffc1b7 4.78deg,
        rgba(255, 233, 209, 0.81) 158.16deg,
        #fdb8d7 315.31deg,
        #ffc1b7 364.78deg
      ),
      #fcd91e;
    height: 100vh;
  }
  canvas {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .text {
    font-size: 48px;
    color: white;
    position: absolute;
    top: 25%;
    left: 100px;
    opacity: 0;
  }

  .text2 {
    font-size: 48px;
    color: white;
    position: absolute;
    top: 80%;
    right: 100px;
    opacity: 0;
  }
}

.section-2 {
}

.section-3 {
  #wrapper {
    width: 100vw;
    height: 100vh;
    background-size: cover;
  }
  #wrapper #ImageContainer {
    position: absolute;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-flow: column;
    left: 50%;
  }
  #wrapper #ImageContainer img {
    width: 200px;
    height: auto;
    margin-left: 40px;
  }
  #wrapper #slide {
    position: absolute;
    right: 50%;
    height: 100vh;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-flow: column;
    cursor: default;
  }
  #wrapper #slide h1 {
    font-size: 40px;
    font-weight: 700;
    color: #000;
  }
  #wrapper #slide p {
    margin-top: 20px;
    width: 400px;
    font-weight: 400;
    font-size: 20px;
    color: #000;
    text-align: right;
  }
}

.roadmap {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #adb5bd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
}

.nft-preview {
  .swiper-container {
    .swiper-wrapper {
      .swiper-slide {
        width: 200px !important;
        height: 200px !important;
        img {
          max-width: 100%;
        }
      }
    }
  }
}

.nft-story {
  margin-top: 500px;
  .story-item {
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      max-width: 400px;
    }
    .image {
      width: 300px;
      height: auto;
      img {
        max-width: 100%;
      }
    }
    & + .story-item {
      margin-top: 500px;
    }
  }
}
</style>
