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
    <a href="#getBelly" class="top-btn"
      ><img src="../assets/images/commons/top_btn.svg"
    /></a>
    <!--STORY MODAL-->
    <modal v-if="showStoryModal" @close="closeStoryModal" class="story-modal">
      <div slot="body">
        <!--        <div id="st_1" class="box">
          <img
            src="@/assets/images/main/img_storybook_bellygom01.png"
            class="left-img"
          />
          <div class="txt">
            <h3>벨리곰, 유령의 집에서 태어나다</h3>
            <p>
              어느 날, 유령의 집에 놀러 온 꼬마가 흘린 풍선껌, 그 속에서 커여운
              벨리곰이 탄생했다.<br />
              <br />
              벨리곰은 사람들을 놀래키며 행복을 주는 일을 좋아하지만, 넘치는
              식탐과 귀여운 외모가 유령의 집에 어울리지 않는다며 쫓겨나게 된다.
            </p>
          </div>
        </div>-->
        <div id="st_2" class="box">
          <img
            src="@/assets/images/main/img_storybook_bellygom02.png"
            class="left-img"
          />
          <div class="txt">
            <h3>벨리빌라에 입주하다</h3>
            <p>
              유령의 집에서 쫓겨난 후 벨리곰은 서프라이즈를 계속하지만 사람들은
              예전만큼 벨리곰의 장난에 반응하지 않는다.<br /><br />
              풀이 죽어 떠돌던 벨리곰이 잠시 박스 위에 앉아 고민에 잠겨있던
              순간, 박스 속에서 등장한 꼬냥이!<br /><br />
              귀여운 꼬냥이의 모습에 다시 행복을 느낀 벨리곰은 꼬냥이를 따라가
              벨리빌라에 입주한다.
            </p>
          </div>
        </div>
        <!--        <div id="st_3" class="box">
          <img
            src="@/assets/images/main/img_storybook_bellygom03.png"
            class="left-img"
          />
          <div class="txt">
            <h3>
              1만 개의<br />
              신비로운 힘이 생긴 벨리곰!
            </h3>
            <p>
              어느 날, 벨리곰은 벨리빌라 앞에서 신비로운 기운이 느껴지는
              자판기를 발견한다.<br />
              <br />
              식탐 많은 벨리곰이 자판기 속 껌을 꺼내어 씹기 시작하자, 1만 개의
              서프라이즈 능력이 생겨나는데...
            </p>
          </div>
        </div>
        <div id="st_4" class="box">
          <img
            src="@/assets/images/main/img_storybook_bellygom04.png"
            class="left-img"
          />
          <div class="txt">
            <h3>
              1만 개의<br />
              신비로운 능력을 얻은 벨리곰은<br />
              어떤 서프라이즈를 가져다 줄까?
            </h3>
          </div>
        </div>-->
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
