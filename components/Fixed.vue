<template>
  <div id="fixed">
    <div class="audio" ref="audio">
      <button
        class="sound_btn"
        @click="
          play();
          sendGaEvent('flt_bgmOn', 'FLT');
        "
      />
      <audio loop ref="audioElm" src="../assets/media/BELLY.mp3" />
      <Lottie
        :options="defaultOptions"
        :height="100"
        :width="150"
        v-on:animCreated="handleAnimation"
        class="music_on"
      />
    </div>
    <button @click="storyModal" class="story-modal-btn">
      <img
        src="@/assets/images/story_btn.svg"
        @click="sendGaEvent('flt_bellyStory', 'FLT')"
      />
    </button>
    <a href="#getBelly" class="top-btn">
      <img src="@/assets/images/top_btn.svg" />
    </a>
  </div>
</template>

<script>
import Lottie from "@/components/Lottie.vue";
import * as animationData from "@/assets/json/pc_btn_music_on.json";
export default {
  name: "Fixed",
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
    };
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    play() {
      const audio = this.$refs.audioElm;
      if (audio.paused) {
        this.$refs.audio.classList.add("play");
        audio.play();
      } else {
        this.$refs.audio.classList.remove("play");
        audio.pause();
      }
    },
    scrollLock(data) {
      this.$nuxt.$emit("scrollLock", data);
    },
    storyModal() {
      this.$nuxt.$emit("storyModal");
    },
    sendGaEvent(eventName, event_category) {
      console.log(eventName + "|||||||" + event_category);
      gtag("event", eventName, {
        event_category: event_category,
      });
    },
  },
};
</script>

<style scoped lang="scss">
#fixed {
  .pc & {
    .audio {
      .sound_btn {
        position: fixed;
        bottom: 50px;
        left: 50px;
        z-index: 100;
        width: 150px;
        height: 100px;
        background: url("@/assets/images/music_off.png") center no-repeat;
        background-size: 100%;
      }
      .music_on {
        position: fixed;
        bottom: 50px;
        left: 50px;
        z-index: 99;
        opacity: 0;
      }
      &.play {
        .sound_btn {
          opacity: 0;
          transition: opacity 0.5s 0.5s ease;
        }
        .music_on {
          opacity: 1;
          transition: opacity 0.5s 0.5s ease;
        }
      }
    }
  }
  .story-modal-btn {
    position: fixed;
    bottom: 40px;
    right: 34px;
    width: 120px;
    height: auto;
    transition: all 0.2s;
    z-index: 4;
    &.up {
      bottom: 130px;
    }
  }
  .mint-modal-btn {
    position: fixed;
    bottom: 150px;
    right: 28px;
    width: 130px;
    height: auto;
    transition: all 0.2s;
    z-index: 4;
    &.up {
      bottom: 245px;
    }
  }
  .top-btn {
    position: fixed;
    bottom: 40px;
    right: 50px;
    width: 88px;
    height: 88px;
    border-radius: 100%;
    opacity: 0;
  }
}
</style>
