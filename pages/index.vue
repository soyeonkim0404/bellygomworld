<template>
  <main class="main">
    <section class="section-1">
      <div class="main-top">
        <canvas></canvas>
      </div>
    </section>
    <section class="section-2">
      <div class="features">
        <div
          class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone"
        >
          <div
            class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft"
          >
            <div class="card">
              <img
                width="479"
                src="https://picsum.photos/479/479?index=1"
                alt=""
              />
            </div>
          </div>

          <div class="ipsGrid_span7 ipsType_left">
            <h2 class="heading_large gs_reveal">
              Create amazing <strong>SVG</strong> animations
            </h2>
            <p class="gs_reveal">
              <a href="https://greensock.com/drawsvg/">DrawSVGPlugin</a> allows
              you to progressively reveal (or hide) SVG strokes to make them
              look like they're being drawn.
              <a href="https://greensock.com/morphsvg/">MorphSVGPlugin</a> to
              Morph any SVG shape into any other shape smoothly regardless of
              the number of points in each.
              <a href="/docs/v3/Plugins/MotionPathPlugin">MotionPathPlugin</a>
              allows you to easily move any object along a path.
            </p>
          </div>
        </div>

        <div
          class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone"
        >
          <div class="ipsGrid_span7 ipsType_right">
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

          <div
            class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight"
          >
            <div class="card">
              <img
                width="479"
                src="https://picsum.photos/479/479?index=2"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone"
        >
          <div
            class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft"
          >
            <div class="card">
              <img
                width="479"
                src="https://picsum.photos/479/479?index=3"
                alt=""
              />
            </div>
          </div>

          <div class="ipsGrid_span7 ipsType_left">
            <h2 class="heading_large gs_reveal">
              Control performant <strong>Canvas</strong> animations
            </h2>
            <p class="gs_reveal">
              GSAP makes animating with Canvas even easier by providing an
              easier way to look and sequence animations. GSAP works great with
              <a href="//www.adobe.com/products/animate.html">Adobe Animate</a>
              and <a href="//createjs.com/easeljs">EaseJS</a> through GSAP's
              <a href="https://greensock.com/easelplugin/">EaselJSPlugin</a>.
            </p>
          </div>
        </div>

        <div
          class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone"
        >
          <div class="ipsGrid_span7 ipsType_right">
            <h2 class="heading_large gs_reveal">
              <strong>Award winning</strong> websites
            </h2>
            <p class="gs_reveal">
              GSAP is used on over 8,500,000 sites and over 1,000 sites featured
              on
              <a
                href="https://www.awwwards.com/websites/gsap-animation/"
                target="_blank"
                >Awwwards</a
              >. For some of our favorites, check out
              <a href="https://greensock.com/showcase/">our showcase</a>.
            </p>
          </div>

          <div
            class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight"
          >
            <div class="card">
              <img
                width="479"
                src="https://picsum.photos/479/479?index=4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-3">
      <div id="wrapper" class="slide1">
        <div id="ImageContainer">
          <img
            src="https://icodeayush.github.io/Dora/img/ModernLiving.jpg"
            alt="ModernLiving"
          />
        </div>
        <div id="slide">
          <h1>Modern Living</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            enim in, perspiciatis sunt expedita consectetur! Repellat delectus
            fugit, laboriosam qui deleniti iure.
          </p>
        </div>
      </div>

      <div id="wrapper" class="slide2">
        <div id="ImageContainer">
          <img
            src="https://icodeayush.github.io/Dora/img/CoffeeTable.jpg"
            alt="CoffeeTable"
          />
        </div>
        <div id="slide">
          <h1>Coffee Table</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            perspiciatis veritatis reprehenderit, officiis incidunt itaque
            facilis placeat sint dignissimos accusantium tenetur repellendus.
          </p>
        </div>
      </div>

      <div id="wrapper" class="slide3">
        <div id="ImageContainer">
          <img
            src="https://icodeayush.github.io/Dora/img/BedroomInterior.jpg"
            alt="BedroomInterior"
          />
        </div>
        <div id="slide">
          <h1>Bedroom Interior</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            deleniti quo odit dolorum laudantium aut magnam impedit. Placeat
            magni at culpa ex.
          </p>
        </div>
      </div>
    </section>
    <!--    <section class="section-3">
      <div class="roadmap">
        <div class="test-lan">{{ $t("name") }}</div>
      </div>
    </section>-->
    <!--    <section class="section-5">
      <div class="main-faq">
        <AccordionComponent :list="list">
          <template #title="{ item }"> {{ item.title }} </template>
          <template #cont="{ item }">
            {{ item.cont }}
          </template>
        </AccordionComponent>
      </div>
    </section>-->
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
    this.textScrollAnimation();
    this.scrollAni();
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
    textScrollAnimation() {
      function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0,
          y = direction * 100;
        if (elem.classList.contains("gs_reveal_fromLeft")) {
          x = -100;
          y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
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

      document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
          hide(elem); // assure that the element is hidden when scrolled into view

          ScrollTrigger.create({
            trigger: elem,
            onEnter: function () {
              animateFrom(elem);
            },
            onEnterBack: function () {
              animateFrom(elem, -1);
            },
            onLeave: function () {
              hide(elem);
            }, // assure that the element is hidden when scrolled into view
          });
        });
      });
    },
    scrollAni() {
      gsap.registerPlugin(ScrollTrigger);
      let Slide1 = gsap.timeline({
        // Slide1---------------------
        scrollTrigger: {
          trigger: ".slide1",
          start: "100% 100%",
          end: "300% 0%",
          // markers: "true",
          scrub: 2.2,
          pin: ".slide1",
        },
      });
      Slide1.from(".slide1 #slide h1", {
        opacity: 0,
        x: "-22%",
      })
        .from(".slide1 #slide p", {
          opacity: 0,
          y: "22%",
        })
        .from(".slide1 #ImageContainer", {
          opacity: 0,
          y: "22%",
        }); // Slide1---------------------

      let Slide2 = gsap.timeline({
        // Slide2---------------------
        scrollTrigger: {
          trigger: ".slide2",
          start: "100% 100%",
          end: "300% 0%",
          // markers: "true",
          scrub: 2.2,
          pin: ".slide2",
        },
      });
      Slide2.from(".slide2 #slide h1", {
        opacity: 0,
        x: "-22%",
      })
        .from(".slide2 #slide p", {
          opacity: 0,
          y: "22%",
        })
        .from(".slide2 #ImageContainer", {
          opacity: 0,
          y: "22%",
        }); // Slide2---------------------

      let Slide3 = gsap.timeline({
        // Slide3---------------------
        scrollTrigger: {
          trigger: ".slide3",
          start: "100% 100%",
          end: "300% 0%",
          // markers: "true",
          scrub: 2.2,
          pin: ".slide3",
        },
      });
      Slide3.from(".slide3 #slide h1", {
        opacity: 0,
        x: "-22%",
      })
        .from(".slide3 #slide p", {
          opacity: 0,
          y: "22%",
        })
        .from(".slide3 #ImageContainer", {
          opacity: 0,
          y: "22%",
        }); // Slide3---------------------
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
  .ipsType_right {
    text-align: right;
  }
  .ipsType_center {
    text-align: center;
  }
  .cInnerContent {
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
  }
  .ipsSpacer_bottom_double {
    margin-bottom: 30px;
  }
  .ipsGrid {
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  .ipsGrid::before,
  .ipsGrid::after {
    display: table;
    content: "";
    line-height: 0;
  }
  .ipsGrid > [class*="ipsGrid_span"] {
    display: block;
    width: 100%;
    min-height: 30px;
    box-sizing: border-box;
  }
  .ipsGrid > .ipsGrid_span5 {
    width: 40.42553191489362%;
  }
  .ipsGrid > .ipsGrid_span7 {
    width: 57.44680851063829%;
  }
  .ipsGrid > [class*="ipsGrid_span"] {
    float: left;
    margin-left: 2%;
  }
  .ipsGrid > [class*="ipsGrid_span"]:first-child {
    margin-left: 0;
  }
  .feature {
    display: flex;
    align-items: center;
  }
  .card {
    margin-bottom: 30px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 1px 1px 5px 1px #cccccc;
    /*   transition: 0.3s; */
  }
  .featured-image-container .card {
    padding: 10px;
    height: 0;
    padding-bottom: calc(100% - 10px);
  }
  h2.heading_large {
    font-size: 1.8em;
  }
  img {
    max-width: 100%;
  }

  .header-section {
    margin: 200px auto;
  }

  .gs_reveal {
    opacity: 0;
    visibility: hidden;
    will-change: transform, opacity;
  }
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
</style>
