<template>
  <main class="main">
    <section class="section-1">
      <canvas></canvas>
      <span class="text">DON’T WORRY</span>
      <span class="text2">BE BERRY</span>
    </section>
    <section class="section-2">
      <div class="box_wrapper">
        <div class="box box1 horizon_box">
          <h1>1</h1>
        </div>
        <div class="box box2 horizon_box">
          <h1>2</h1>
        </div>
        <div class="box box3 horizon_box">
          <h1>3</h1>
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
      const $sections = document.querySelectorAll(".horizon_box");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-2",
          pin: true,
          scrub: 0.3,
          start: "top top",
          end: "+=3000",
        },
      });
      tl.to($sections, {
        xPercent: -100,
        duration: 2,
        ease: "none",
        stagger: 3,
      }).to({}, { duration: 1 });
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
  .horizon_box {
    position: absolute;
    top: 0;
    left: 100%;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .box h1 {
    font-size: 50px;
    text-align: center;
  }
  .box1 {
    background: cadetblue;
  }
  .box2 {
    background: crimson;
  }
  .box3 {
    background: darkorchid;
  }
}
</style>
