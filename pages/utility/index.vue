<template>
  <div class="sub-wrap bubble">
    <div class="title-wrap">
      <h1>UTILITY</h1>
      <p class="sub">
        벨리곰 NFT에는 돈으로는 누릴 수 없는 막강한 혜택이 있다!<br />
        나만의 벨리곰이 있어야만 만날 수 있는 홀더 한정 혜택을 확인하세요.
      </p>
    </div>
    <div class="content">
      <div class="inner">
        <div class="content-wrap">
          <span class="utility-belly">
            <img
              src="../../assets/images/utility/utility_belly.svg"
              alt="로드맵 밸리"
            />
          </span>
          <ul class="utility-list">
            <li
              v-for="(item, index) in utility"
              :key="index"
              class="utility-item ani"
              :class="`lv-${item.level}`"
            >
              <div class="level">
                <span>{{ item.level }}</span>
                <span>{{ item.count }}<em class="count">개</em></span>
              </div>
              <div class="description">
                <span v-if="item.flag" class="flag">{{ item.flag }}</span>
                <span class="title" v-if="item.title">{{ item.title }}</span>
                <ul class="desc">
                  <li v-for="(list, idx) in item.list" :key="idx">
                    {{ list }}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <span class="notice">
            유틸리티 횟수와 정책은 추후 업데이트 예정입니다.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default {
  name: "index",
  layout: "defalut",
  data() {
    return {
      utility: [
        {
          level: "Belly",
          count: 30,
          flag: "벨리 한정 혜택",
          title: "롯데백화점 시크릿 나이트 쇼핑",
          list: [
            "롯데월드 홀더전용 페스티벌 (어트랙션 모두 이용 / 페스티벌 / 폐점후 나이트~새벽)",
            "롯데온라인 쇼핑 15% 할인권 (롯데홈쇼핑, 롯데ON)",
            "롯데그룹 유통사 상품 사은권",
          ],
        },
        {
          level: "Legend",
          count: 50,
          flag: "레전드 한정 혜택",
          title: "롯데 호텔 & 리조트 숙박권",
          list: [
            "롯데월드 홀더전용 페스티벌 (어트랙션 모두 이용 / 페스티벌 / 폐점후 나이트~새벽)",
            "롯데온라인 쇼핑 15% 할인권 (롯데홈쇼핑, 롯데ON)",
            "롯데그룹 유통사 상품 사은권",
          ],
        },
        {
          level: "Mega",
          count: 100,
          flag: "메가 한정 혜택",
          title: "롯데호텔 시그니엘 라운지 이용권",
          list: [
            "롯데월드 홀더전용 페스티벌 (어트랙션 모두 이용 / 페스티벌 / 폐점후 나이트~새벽)",
            "롯데온라인 쇼핑 15% 할인권 (롯데홈쇼핑, 롯데ON)",
            "롯데그룹 유통사 상품 사은권",
          ],
        },
        {
          level: "Super",
          count: 200,
          flag: "슈퍼 한정 혜택",
          title: "롯데홈쇼핑 시크릿 라이브커머스",
          list: [
            "롯데월드 홀더전용 페스티벌 (어트랙션 모두 이용 / 페스티벌 / 폐점후 나이트~새벽)",
            "롯데온라인 쇼핑 15% 할인권 (롯데홈쇼핑, 롯데ON)",
            "롯데그룹 유통사 상품 사은권",
          ],
        },
        {
          level: "Surprise",
          count: 3000,
          flag: "서프라이즈 한정 혜택",
          title: "롯데백화점 라운지 이용권",
          list: [
            "롯데월드 홀더전용 페스티벌 (어트랙션 모두 이용 / 페스티벌 / 폐점후 나이트~새벽)",
            "롯데온라인 쇼핑 15% 할인권 (롯데홈쇼핑, 롯데ON)",
            "롯데그룹 유통사 상품 사은권",
          ],
        },
        {
          level: "Friends",
          count: 4820,
          list: [
            "롯데월드 홀더전용 페스티벌 (어트랙션 모두 이용 / 페스티벌 / 폐점후 나이트~새벽)",
            "롯데온라인 쇼핑 15% 할인권 (롯데홈쇼핑, 롯데ON)",
            "롯데그룹 유통사 상품 사은권",
          ],
        },
      ],
    };
  },
  mounted() {
    this.triggerMethod();
  },
  methods: {
    triggerMethod() {
      gsap.registerPlugin(ScrollTrigger);
      function animateFrom(elem, direction) {
        direction = direction || 1;
        let x = 0,
          y = direction * 100;
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

      gsap.utils.toArray(".ani").forEach((elem) => {
        hide(elem);
        ScrollTrigger.create({
          trigger: elem,
          onEnter: () => animateFrom(elem),
          onEnterBack: () => animateFrom(elem, -1),
          onLeave: () => hide(elem),
        });
      });
    },
  },
};
</script>

<style scoped lang="scss">
.content-wrap {
  position: relative;
  .mobile & {
    margin-top: -100px;
  }
  .utility-belly {
    position: absolute;
    top: -230px;
    right: 0;
    width: 281px;
    height: 319px;
    .mobile & {
      display: none;
    }
  }
}
.utility-list {
  .utility-item {
    display: flex;
    background: #480da7;
    border-radius: 50px;
    padding: 60px;
    .level {
      font-family: "Sandoll Odongtong", sans-serif;
      flex: 0 1 308px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 308px;
      height: 210px;
      font-size: 38px;
      line-height: 60px;
      text-align: center;
      color: $white;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 20px;
      .count {
        margin-left: 2px;
        font-size: 26px;
        line-height: 39px;
      }
    }
    &[class*="lv-"] {
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: -8px;
        left: 42px;
        width: 128px;
        height: 104px;
        z-index: 2;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        .mobile & {
          width: 100px;
          height: 82px;
          left: 10px;
        }
      }
    }
    &.lv-Belly {
      &::before {
        background-image: url("../../assets/images/utility/badge_1.svg");
      }
      .level {
        position: relative;
        background: radial-gradient(
            136.51% 135.95% at 111.85% 163.81%,
            #ffab2d 0%,
            rgba(255, 198, 87, 0) 100%
          ),
          linear-gradient(
            199.63deg,
            #f85e92 3.61%,
            #fc8abc 59.53%,
            #ffcbad 144.87%
          ),
          #f85e92;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 268px;
          height: 170px;
          background: url("../../assets/images/utility/belly_star.svg") center
            no-repeat;
          transform: translate(-50%, -50%);
        }
      }
    }
    &.lv-Legend {
      &::before {
        background-image: url("../../assets/images/utility/badge_2.svg");
      }
    }
    &.lv-Mega {
      &::before {
        background-image: url("../../assets/images/utility/badge_3.svg");
      }
    }
    &.lv-Super {
      &::before {
        background-image: url("../../assets/images/utility/badge_4.svg");
      }
    }
    &.lv-Surprise {
      &::before {
        background-image: url("../../assets/images/utility/badge_5.svg");
      }
    }
    &.lv-Friends {
      &::before {
        background-image: url("../../assets/images/utility/badge_6.svg");
      }
      .description {
        .desc {
          border: none;
          margin: 0;
          padding-top: 57px;
          .mobile & {
            padding-top: 0;
          }
        }
      }
    }
    .description {
      margin-left: 60px;
      .flag {
        display: inline-block;
        width: auto;
        height: 26px;
        padding: 0 15px;
        line-height: 25px;
        border: 1px solid #fc8abd;
        border-radius: 18px;
        font-size: 16px;
        color: #ff9fbb;
        .mobile & {
          font-size: 14px;
          line-height: 22px;
        }
      }
      .title {
        display: block;
        margin-top: 10px;
        font-size: 26px;
        line-height: 44px;
        color: $white;
        .mobile & {
          font-size: 22px;
          line-height: 33px;
        }
      }
      .desc {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.4);
        li {
          font-size: 18px;
          line-height: 28px;
          color: #ddd;
          & + li {
            margin-top: 5px;
          }
          .mobile & {
            font-size: 16px;
            line-height: 22px;
          }
        }
      }
    }
    & + .utility-item {
      margin-top: 35px;
    }
    .mobile & {
      min-height: 494px;
      flex-direction: column;
      padding: 25px 25px;
      .level {
        flex: none;
        width: 100%;
        height: 140px;
      }
      .description {
        margin: 25px 0 0 0;
      }
    }
  }
}

.notice {
  width: 100%;
  height: 102px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
  padding: 0 65px;
  font-size: 18px;
  line-height: 24px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  color: $white;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 47px;
    left: 54px;
    width: 4px;
    height: 4px;
    background: $white;
    border-radius: 100%;
    opacity: 1;
  }
  .mobile & {
    padding: 0 30px 0 39px;
    &::before {
      top: 36px;
      left: 27px;
    }
  }
}
</style>
