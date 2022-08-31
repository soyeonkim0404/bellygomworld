<template>
  <!--S : Fixed Contents-->
  <div id="fixed">
    <div class="audio">
      <button
        class="sound_btn"
        ref="soundClick"
        @click="
          play();
          sendGaEvent('flt_bgmOn', 'FLT');
        "
      />
      <audio loop ref="audioElm" src="../assets/media/BELLY.mp3" />
    </div>
    <!--    <a
      href="https://bellygom.launchpad.xclusive.market/"
      target="_blank"
      class="mint-modal-btn"
    >
      <img src="@/assets/images/main/btn_mint.svg" />
    </a>-->
    <button @click="storyModal" class="story-modal-btn">
      <img
        src="@/assets/images/story_btn.svg"
        @click="sendGaEvent('flt_bellyStory', 'FLT')"
      />
    </button>
    <!--top btn-->
    <a href="#getBelly" class="top-btn">
      <img src="@/assets/images/top_btn.svg" />
    </a>
    <!--top btn-->
  </div>
  <!--E : Fixed Contents-->
</template>

<script>
export default {
  name: "Fixed",
  data() {
    return {};
  },
  methods: {
    play() {
      const audio = this.$refs.audioElm;
      if (audio.paused) {
        this.$refs.soundClick.classList.add("play");
        audio.play();
      } else {
        this.$refs.soundClick.classList.remove("play");
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
/*fixed Content*/
#fixed {
  .sound_btn {
    position: fixed;
    bottom: 50px;
    left: 50px;
    z-index: 99;
    width: 120px;
    height: 70px;
    border-radius: 35px;
    background: $white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
      background-image: url("@/assets/images/sound_belly.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      transition: all 0.3s;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 19px;
      right: 18px;
      width: 32px;
      height: 32px;
      background-image: url("@/assets/images/player.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      transition: all 0.3s;
    }
    &.play {
      &::before {
        background-image: url("@/assets/images/sound_belly_2.svg");
      }
      &::after {
        background-image: url("@/assets/images/stop.svg");
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
