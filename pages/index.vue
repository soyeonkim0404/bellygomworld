<template>
  <main class="main">
    <section class="section-1">
      <div class="main-top">
        <canvas></canvas>
        <!--        <span class="text">DON’T WORRY</span>-->
        <!--        <span class="text2">BE BERRY</span>-->
      </div>
    </section>
    <section class="section-2">
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
    </section>
    <section class="section-3">
      <div class="roadmap">
        <div class="test-lan">{{ $t("name") }}</div>
      </div>
    </section>
    <section class="section-4">
      <div class="nft-preview">
        <ul class="nft-list">
          <li class="item">
            <img
              src="https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1270.91fed644.png&w=3840&q=100"
              alt=""
            />
          </li>
          <li class="item">
            <img
              src="https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F747.00e188c1.png&w=3840&q=100"
              alt=""
            />
          </li>
          <li class="item">
            <img
              src="https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F152.40b1b711.png&w=3840&q=100"
              alt=""
            />
          </li>
          <li class="item">
            <img
              src="https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F600.471255c6.png&w=3840&q=100"
              alt=""
            />
          </li>
          <li class="item">
            <img
              src="https://www.bloobies.art/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F875.56e847e8.png&w=3840&q=100"
              alt=""
            />
          </li>
        </ul>
      </div>
    </section>
    <section class="section-5">
      <div class="main-faq">
        <AccordionComponent :list="list">
          <template #title="{ item }"> {{ item.title }} </template>
          <template #cont="{ item }">
            {{ item.cont }}
          </template>
        </AccordionComponent>
      </div>
    </section>
  </main>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccordionComponent from "@/components/AccordionComponent";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
export default {
  name: "IndexPage",
  layout: "defalut",
  components: { AccordionComponent },
  data() {
    return {
      list: [
        {
          title: "아코디언1",
          cont: "김소연김소연김소연김소연김소연김소연김소연김소연김소연김소연김소연김소연김소연김소연",
        },
        {
          title: "아코디언2",
          cont: "박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검",
        },
        {
          title: "아코디언3",
          cont: "송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강",
        },
        {
          title: "아코디언4",
          cont: "공유공유공유공유공유공유공유공유공유공유공유공유공유공유공유공유공유공유",
        },
      ],
    };
  },
  mounted() {
    this.imageAnimation();
    this.horizonAnimation();
    this.imageSlideAnimation();
  },
  methods: {
    imageAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      const secEle1 = document.querySelector(".main-top");
      const canvas = secEle1.querySelector("canvas");
      initCanvas(secEle1, canvas);
      function initCanvas(section, canvas) {
        // const text = section.querySelector(".text");
        // const text2 = section.querySelector(".text2");
        const context = canvas.getContext("2d");
        canvas.width = 1920;
        canvas.height = 1080;

        const frameCount = 125;
        const currentFrame = (index) =>
          require(`@/assets/images/webp/vellygomv_${(index + 1)
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
    horizonAnimation() {
      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray(".slide-item");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".slide",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + document.querySelector(".slide").offsetWidth,
        },
      });
    },
    imageSlideAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      const section = document.querySelector(".section-4");
      const w = document.querySelector(".nft-preview");
      const [x, xEnd] = ["100%", (w.scrollWidth - section.offsetWidth) * -1];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    },
  },
};
</script>
<style scoped lang="scss">
[class^="section"] {
  position: relative;
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
  .slide-wrap {
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
  overflow-x: hidden;
  .nft-list {
    display: flex;
    .item {
      flex-shrink: 0;
      width: clamp(500px, 60vw, 800px);
      padding-right: 1rem;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
