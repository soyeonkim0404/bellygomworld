<template>
  <div class="main">
    <div class="blank" />
    <div class="image_scroll">
      <canvas></canvas>
      <div class="text">Some Text</div>
    </div>
    <div class="blank" />
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
    this.imageAnimation()
  },
  methods: {
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
