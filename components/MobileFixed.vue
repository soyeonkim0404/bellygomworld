<template>
  <!--S : Fixed Contents-->
  <div id="fixed">
    <div class="audio">
      <button class="sound_btn" ref="soundClick" @click="play()" />
      <audio loop ref="audioElm" src="../assets/media/BELLY.mp3"></audio>
    </div>

    <a href="#getBelly" class="top-btn"
      ><img src="../assets/images/commons/top_btn.svg" />
    </a>
    <!--STORY MODAL-->
    <modal v-if="showStoryModal" @close="closeStoryModal" class="story-modal">
      <div slot="header"></div>
      <div slot="body">
        <div class="story">
          <div id="st_1" class="box" :class="{ on: currIndi === 1 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom01.png"
              class="left-img"
            />
            <template v-if="$store.getters.getLocale === 'ENG'">
              <div class="txt eng">
                <h3>
                  Bellygom was born in a Haunted House. Here's how it happened…
                </h3>
                <p>
                  One day, a little boy who visited the haunted house
                  accidentally dropped a bubble gumball. In it, this cute
                  Bellygom was born.<br />
                  <br />
                  Bellygom likes to bring excitement to people by surprising
                  them. However, due to Belly's insatiable appetite and cuteness
                  overload, Bellygom is kicked out, as that image does not fit
                  the haunted house.
                </p>
              </div>
            </template>
            <template v-else>
              <div class="txt">
                <h3>벨리곰, 유령의 집에서 태어나다</h3>
                <p class="first">
                  어느 날, 유령의 집에 놀러 온 꼬마가 흘린 풍선껌, 그 속에서
                  커여운 벨리곰이 탄생했다.
                </p>
                <p>
                  벨리곰은 사람들을 놀래키며 행복을 주는 일을 좋아하지만, 넘치는
                  식탐과 귀여운 외모가 유령의 집에 어울리지 않는다며 쫓겨나게
                  된다.
                </p>
              </div>
            </template>
          </div>
          <div id="st_2" class="box" :class="{ on: currIndi === 2 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom02.png"
              class="left-img"
            />
            <div class="txt eng" v-if="$store.getters.getLocale === 'ENG'">
              <h3>Soon, Bellygom moves into Belly Villa.</h3>
              <p>
                Bellygom continues to surprise people here and there, despite
                having been banished from the haunted house. Although, people
                aren't as responsive to Bellygom's pranks as they used to
                be...<br /><br />
                When Bellygom - wandering aimlessly, down in the dumps - sat on
                a box for a moment and was deep in thought, a cute little kitty
                emerged from the box! Feeling excited again, at the sight of
                this miracle, Bellygom adopts Kitty and they move into Belly
                Villa together.
              </p>
            </div>
            <div class="txt" v-else>
              <h3>벨리빌라에 입주하다</h3>
              <p class="first">
                유령의 집에서 쫓겨난 후 벨리곰은 서프라이즈를 계속하지만
                사람들은 예전만큼 벨리곰의 장난에 반응하지 않는다.
              </p>
              <p>
                풀이 죽어 떠돌던 벨리곰이 잠시 박스 위에 앉아 고민에 잠겨있던
                순간, 박스 속에서 등장한 꼬냥이!
              </p>
              <p>
                귀여운 꼬냥이의 모습에 다시 행복을 느낀 벨리곰은 꼬냥이를 따라가
                벨리빌라에 입주한다.
              </p>
            </div>
          </div>
          <div id="st_3" class="box" :class="{ on: currIndi === 3 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom03.png"
              class="left-img"
            />
            <div class="txt eng" v-if="$store.getters.getLocale === 'ENG'">
              <h3>Bellygom now has 10,000 mysterious powers!</h3>
              <p>
                One day, Bellygom finds a vending machine, in front of the
                villa, with a strange vibe. The gluttonous Bellygom takes a
                gumball from the vending machine and begins chewing... Suddenly,
                there's a transformation in Belly's body, resulting in 10,000
                unique surprise-powers!
              </p>
            </div>
            <div class="txt" v-else>
              <h3>
                1만 개의<br />
                신비로운 힘이 생긴 벨리곰!
              </h3>
              <p class="first">
                어느 날, 벨리곰은 벨리빌라 앞에서 신비로운 기운이 느껴지는
                자판기를 발견한다.
              </p>
              <p>
                식탐 많은 벨리곰이 자판기 속 껌을 꺼내어 씹기 시작하자, 1만 개의
                서프라이즈 능력이 생겨나는데...
              </p>
            </div>
          </div>
          <div id="st_4" class="box" :class="{ on: currIndi === 4 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom04.png"
              class="left-img"
            />
            <div class="txt eng" v-if="$store.getters.getLocale === 'ENG'">
              <h3>
                Oh, Bellygom - now with 10,000 mysterious abilities - what kinds
                of surprises will you bring to the people?
              </h3>
            </div>
            <div class="txt" v-else>
              <h3>
                1만 개의<br />
                신비로운 능력을 얻은 벨리곰은<br />
                어떤 서프라이즈를 가져다 줄까?
              </h3>
            </div>
          </div>
          <div class="indicator">
            <div class="indi" @click="currIndi = 1">
              <img
                v-if="currIndi === 1"
                src="@/assets/images/main/img_storybook_bookmark_on.png"
              />
              <img
                v-else
                src="@/assets/images/main/img_storybook_bookmark_off.png"
              />
            </div>
            <div class="indi" @click="currIndi = 2">
              <img
                v-if="currIndi === 2"
                src="@/assets/images/main/img_storybook_bookmark_on.png"
              />
              <img
                v-else
                src="@/assets/images/main/img_storybook_bookmark_off.png"
              />
            </div>
            <div class="indi" @click="currIndi = 3">
              <img
                v-if="currIndi === 3"
                src="@/assets/images/main/img_storybook_bookmark_on.png"
              />
              <img
                v-else
                src="@/assets/images/main/img_storybook_bookmark_off.png"
              />
            </div>
            <div class="indi" @click="currIndi = 4">
              <img
                v-if="currIndi === 4"
                src="@/assets/images/main/img_storybook_bookmark_on.png"
              />
              <img
                v-else
                src="@/assets/images/main/img_storybook_bookmark_off.png"
              />
            </div>
          </div>
          <div class="arrow">
            <span
              class="prev"
              :class="{ on: currIndi > 1 }"
              @click="storySlidePrev()"
            ></span>
            <span
              class="next"
              :class="{ on: currIndi < 4 }"
              @click="storySlideNext()"
            ></span>
          </div>
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
      currIndi: 1,
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
    scrollLock(data) {
      this.$nuxt.$emit("scrollLock", data);
    },
    storyModal() {
      this.currIndi = 1;
      this.scrollLock(false);
      this.showStoryModal = true;
    },
    closeStoryModal() {
      this.scrollLock(true);
      this.showStoryModal = false;
    },
    storySlideNext() {
      this.currIndi++;
      if (this.currIndi > 4) this.currIndi = 4;
    },
    storySlidePrev() {
      this.currIndi--;
      if (this.currIndi < 1) this.currIndi = 1;
    },
  },
};
</script>

<style scoped lang="scss">
/*fixed Content*/
#fixed {
  .sound_btn {
    position: fixed;
    bottom: 20px;
    left: 15px;
    z-index: 99;
    width: 70px;
    height: 40px;
    border-radius: 30px;
    background: #ffffff;
    box-shadow: 0 4px 10px rgb(0 0 0 / 3%);
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;
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
      top: 10px;
      right: 9px;
      width: 21px;
      height: 21px;
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
    bottom: 130px;
    right: 34px;
    width: 120px;
    height: auto;
  }
  .top-btn {
  position: fixed;
    bottom: 20px;
    right: 15px;
    width: 50px;
    height: 40px;
    border-radius: 100%;
  }
}
</style>
