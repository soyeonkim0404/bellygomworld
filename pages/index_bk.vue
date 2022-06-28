<template>
  <div class="main">
    <div class="blank" />
    <div class="wrapper">
      <div class="img1" />
      <h2 class="title1">Lorem ipsum<br /><span>Dolor sit amet</span></h2>
      <div class="img2" />
      <h2 class="title2">Lorem ipsum<br /><span>Dolor sit amet</span></h2>
    </div>
    <div class="blank" />

    <!--image scroll area-->
    <div class="image_scroll">
      <canvas></canvas>
      <div class="text">Some Text</div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  mounted() {
    this.startAnimation()
    this.imageAnimation()
  },
  methods: {
    startAnimation() {
      const tl = new TimelineMax({ onUpdate: updatePercentage })

      tl.to('.img1', 1, { width: '100%', height: '100%' }, 0)
      tl.to('.title1', 0.5, { opacity: 1 }, 1)
      tl.to('.title1', 0.5, { opacity: 0 }, 2)
      tl.to('.img2', 1, { height: '100%' }, 2)
      tl.from('.title2', 1, { opacity: 0 }, 2.2)
      tl.to('.img1', 0, { opacity: 0 }, 3)
      tl.to(
        '.img1',
        1,
        { width: '60%', height: '60%', transform: 'translate(-30%, -30%)' },
        3
      )
      tl.to('.title2', 1, { opacity: 0 }, 3)

      const scene = this.$scrollmagic
        .scene({
          triggerElement: '.wrapper',
          triggerHook: 0,
          duration: '300%',
        })
        .setPin('.wrapper')
        .setTween(tl)

      this.$scrollmagic.addScene(scene)

      function updatePercentage() {
        tl.progress()
      }
    },
    imageAnimation() {
      gsap.registerPlugin(ScrollTrigger)

      const ele = document.querySelector('.image_scroll')
      const canvas = ele.querySelector('canvas')

      initCanvas(ele, canvas)

      function initCanvas(section, canvas) {
        const text = section.querySelector('.text')
        const context = canvas.getContext('2d')
        canvas.width = 1920
        canvas.height = 1080

        const frameCount = 111
        const currentFrame = (index) =>
          `https://radioactivecrocsclub.com/images/hero/${(
            index + 1
          )
            .toString()}.png`

        // const currentFrame = (index) =>
        //   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
        //     index + 1
        //   )
        //     .toString()
        //     .padStart(4, '0')}.jpg`

        const images = []
        const airpods = {
          frame: 0,
        }

        for (let i = 0; i < frameCount; i++) {
          const img = new Image()
          img.src = currentFrame(i)
          images.push(img)
        }

        gsap
          .timeline({
            onUpdate: render,
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 0.5,
              end: '+=200%',
              markers: false,
            },
          })
          .to(text, {
            opacity: 1,
            x: -100,
            duration: 0.5,
          })
          .to(
            airpods,
            {
              frame: frameCount - 1,
              snap: 'frame',
              ease: 'none',
              duration: 1,
            },
            0
          )

        images[0].onload = render

        function render() {
          context.clearRect(0, 0, canvas.width, canvas.height)
          context.drawImage(images[airpods.frame], 0, 0)
        }
      }
    },
  },
}
</script>
<style scoped lang="scss">
html {
  box-sizing: border-box;
  font-size: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

body {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: 'Open Sans', sans-serif;
  overflow-x: hidden;
  color: black;
  font-size: 16px;
}

.blank {
  width: 100%;
  height: 100vh;
}

.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}

.img1 {
  background-image: url('../assets/images/main/screen_xdr.jpeg');
  width: 70%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.title1 {
  position: absolute;
  top: 50%;
  left: 20%;
  font-size: 32px;
  transform: translate(-50%, -50%);
  opacity: 0;
  span {
    font-size: 24px;
    font-weight: 400;
    display: block;
  }
}

.img2 {
  background-image: url('../assets/images/main/processing_endframe.jpeg');
  width: 100%;
  height: 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.title2 {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 80px;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  text-align: center;
  line-height: 80px;
}

.image_scroll {
  height: 100vh;
  background: #ccc;
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
}
</style>
