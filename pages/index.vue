<template>
  <div class="main">
    <div class="image_scroll">
      <canvas></canvas>
      <div class="text">DON’T WORRY</div>
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
        const currentFrame = (index) => require(`@/assets/images/hero/${(index + 1).toString()}.png`)

        const images = []
        const airpods = {
          frame: 0,
        }

        for (let i = 8; i < frameCount; i++) {
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
}
</style>
