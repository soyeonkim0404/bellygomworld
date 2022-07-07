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
              class="utility-item"
            >
              <div class="level">
                {{ item.level }} <br />
                {{ item.count }}
              </div>
              <div class="description">
                <div class="title">
                  <span>{{ item.flag }}</span>
                  {{ item.title }}
                </div>
                <ul class="desc">
                  <li v-for="(list, idx) in item.list" :key="idx">
                    {{ list }}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.content-wrap {
  position: relative;
  .utility-belly {
    position: absolute;
    top: 0;
    right: 0;
    width: 281px;
    height: 319px;
    z-index: 3;
  }
}
.utility-list {
  .utility-item {
    display: flex;
    background: #480da7;
    border-radius: 50px;
    padding: 60px;
    .level {
      flex: 0 1 308px;
      width: 308px;
    }
    .description {
      margin-left: 60px;
      .title {
        font-size: 26px;
        color: $white;
        span {
          display: block;
          font-size: 16px;
        }
      }
      .desc {
        li {
          font-size: 18px;
          color: #d2d2d2;
        }
      }
    }
    & + .utility-item {
      margin-top: 35px;
    }
  }
}
</style>
