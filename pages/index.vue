<template>
  <main class="main">
    <section class="section-1">
      <canvas></canvas>
      <span class="text">DON’T WORRY</span>
      <span class="text2">BE BERRY</span>
    </section>
    <section class="section-2">
      <div class="slide-wrap">
        <div class="slide">
          <div class="slide-item">
            <p>
              <span>1</span>
              Whatever the solution, it is only a first step of a great journey.
              We’ll be by your side when the need for further improvements,
              optimization or additional functionality arises. Feel free to
              contact when it is time to level up – we’ll accompany you in
              exploring new paths.
            </p>
          </div>
          <div class="slide-item">
            <p>
              <span>2</span>
              Whatever the solution, it is only a first step of a great journey.
              We’ll be by your side when the need for further improvements,
              optimization or additional functionality arises. Feel free to
              contact when it is time to level up – we’ll accompany you in
              exploring new paths.
            </p>
          </div>
          <div class="slide-item">
            <p>
              <span>3</span>
              Whatever the solution, it is only a first step of a great journey.
              We’ll be by your side when the need for further improvements,
              optimization or additional functionality arises. Feel free to
              contact when it is time to level up – we’ll accompany you in
              exploring new paths.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-3"></section>
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
    return {};
  },
  mounted() {
    this.imageAnimation();
    this.horizonAnimation();
  },
  methods: {
    imageAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      const secEle1 = document.querySelector(".section-1");
      const canvas = secEle1.querySelector("canvas");
      initCanvas(secEle1, canvas);
      function initCanvas(section, canvas) {
        const text = section.querySelector(".text");
        const text2 = section.querySelector(".text2");
        const context = canvas.getContext("2d");
        canvas.width = 1920;
        canvas.height = 1080;

        const frameCount = 111;
        const currentFrame = (index) =>
          require(`@/assets/images/hero/${(index + 1).toString()}.png`);

        const images = [];
        const belly = {
          frame: 8,
        };

        for (let i = 8; i < frameCount; i++) {
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
          .to(text, {
            opacity: 1,
            x: -100,
            duration: 0.5,
          })
          .to(text2, {
            opacity: 1,
            x: 100,
            duration: 0.5,
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
    horizonAnimation() {
      gsap.registerPlugin(ScrollTrigger);

      {
        const slideEle = document.querySelector(".slide");
        if (typeof slideEle != "undefined" && slideEle != null) {
          let items = gsap.utils.toArray(".slide-item");
          gsap.to(items, {
            xPercent: -100 * (items.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: slideEle,
              markers: false,
              scrub: 1,
              pin: true,
              snap: 1 / (items.length - 1),
              end: () => "+=" + document.querySelector(".slide").offsetWidth,
            },
          });
        }
      }
    },
  },
};
</script>
<style scoped lang="scss">
[class^="section"] {
  position: relative;
  width: 100%;
  height: 100vh;
}
.section-1 {
  background: #000;
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
  .slide-wrap {
    //overflow: hidden;
  }
  .slide {
    width: 300%;
    display: flex;
    flex-wrap: nowrap;
    align-self: center;
    height: 100vh !important;
    background: cadetblue;
    &-item {
      display: flex;
      align-items: center;
      padding: 0 100px;
      span {
        font-size: 30px;
        display: block;
      }
    }
  }
}
</style>
