<template>
  <!--S : Fixed Contents-->
  <div id="fixed">
    <div class="audio">
      <button class="sound_btn" ref="soundClick" @click="play()" />
      <audio loop ref="audioElm" src="../assets/media/BELLY.mp3"></audio>
    </div>
    <button @click="storyModal" class="story-modal-btn">
      <img src="../assets/images/commons/story_btn.svg" />
    </button>
    <a href="#firstSection" class="top-btn"
      ><img src="../assets/images/commons/top_btn.svg"
    /></a>
    <!--STORY MODAL-->
    <modal
      v-if="showStoryModal"
      @close="closeStoryModal"
      @storyModal="storyModal"
      class="story-modal"
    >
      <div slot="header">
        <h2 class="title">FAQ</h2>
      </div>
      <div slot="body">
        <div class="content">
          <div class="inner">dddd</div>
        </div>
      </div>
    </modal>
  </div>
  <!--E : Fixed Contents-->
</template>

<script>
export default {
  name: "Fixed",
  data() {
    return {
      showStoryModal: false,
    };
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
    storyModal() {
      this.showStoryModal = true;
      if (this.showStoryModal) {
        document.body.classList.add("modalOn");
      }
    },
    closeStoryModal() {
      this.showStoryModal = false;
      if (!this.showStoryModal) {
        document.body.classList.remove("modalOn");
      }
    },
  },
};
</script>

<style scoped lang="scss">
/*fixed Content*/
#fixed {
  .sound_btn {
    position: fixed;
    bottom: 100px;
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
      background-image: url("assets/images/commons/sound_belly.svg");
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
      background-image: url("assets/images/commons/player.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      transition: all 0.3s;
    }
    &.play {
      &::before {
        background-image: url("assets/images/commons/sound_belly_2.svg");
      }
      &::after {
        background-image: url("assets/images/commons/stop.svg");
      }
    }
  }
  .story-modal-btn {
    position: fixed;
    bottom: 180px;
    right: 50px;
    width: 70px;
    height: 70px;
  }
  .top-btn {
    position: fixed;
    bottom: 100px;
    right: 50px;
    width: 70px;
    height: 70px;
    border-radius: 100%;
  }
}
</style>
