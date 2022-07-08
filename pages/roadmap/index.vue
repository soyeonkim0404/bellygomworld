<template>
  <div class="sub-wrap bubble">
    <div class="title-wrap">
      <h1>ROADMAP</h1>
      <p class="sub">
        독보적인 NFT 이미지 사업권 부여부터, 메타버스, 웹툰, 게임까지 이어지는
        즐거운 여정!<br />
        벨리곰은 더 많은 서프라이즈를 만들어 갑니다.
      </p>
      <span class="roadmap-belly">
        <img
          src="../../assets/images/roadmap/img_roadmap_bellygom01.svg"
          alt="로드맵 밸리"
        />
      </span>
    </div>
    <div class="content">
      <div class="inner">
        <div class="content-wrap">
          <div
            v-for="(item, index) in roadMap"
            :key="index"
            :class="item.phase ? `deco-${item.phase}` : ''"
            class="con"
          >
            <div
              :class="{
                item: true,
                ani: true,
                emphasis: item.emphasis,
                phase: item.phase,
                complete: item.complete,
              }"
            >
              <span class="complete-badge" v-if="item.complete">
                <span class="date">{{ item.completeDate }}</span>
              </span>
              <span class="phase-title" v-if="item.phase">
                PHASE {{ item.phase }}
              </span>
              <template v-if="$i18n.locale === 'ENG'">
                <span class="tit" v-if="item.engTitle">{{
                  item.engTitle
                }}</span>
                <p class="desc" v-if="item.engDesc" v-html="item.engDesc"></p>
              </template>
              <template v-else>
                <span class="tit" v-if="item.title">{{ item.title }}</span>
                <p class="desc" v-if="item.desc" v-html="item.desc"></p>
              </template>
            </div>
          </div>
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
      roadMap: [
        {
          phase: 1,
          title: "벨리곰이 나타나다",
          desc: "2022년 8월, 벨리곰 NFT가 발행됩니다. <br>홀더들을 위한 놀라운 혜택이 시작됩니다.",
          engTitle: "Bellygom Emerges!",
          engDesc:
            "In August 2022, Bellygom NFTs will be released. <br>A breathtaking journey full of rewards begins.",
          complete: false,
          order: 1,
        },
        {
          desc: "크립토파티에 깜짝 등장",
          engDesc: "Surprise Appearance <br> at Crypto Party",
          complete: true,
          completeDate: "2022.06",
          order: 2,
        },
        {
          desc: "벨리곰 커뮤니티의 시작",
          engDesc: "The start of <br>the Bellygom community",
          complete: true,
          completeDate: "2022.07",
          order: 3,
        },
        {
          desc: "완판 기념! 벨리곰의 <br/> 축하 세레머니 start!",
          engDesc: "Sold Out' commemoration! <br>Bellygom's festivities begin!",
          complete: false,
          order: 6,
        },
        {
          desc: "모든 홀더들을 위한 <br> 깜짝 혜택 I 공개",
          engDesc: "Surprise Rewards <br>Unveiled for All Holders",
          complete: false,
          order: 5,
        },
        {
          desc: "리빌 이후 <br> 레어리티 & 랭킹  공개",
          engDesc: "Rarity & Ranking revealed <br>after minting",
          complete: false,
          order: 4,
        },
        {
          phase: 2,
          title: "벨리곰이 놀래키다",
          desc: "벨리곰을 더 많은 사람들이 좋아하고 알 수 있도록 <br>방방곳곳 서프라이즈한 일들을 벌이고 다닙니다.",
          engTitle: "Bellygom surprises!",
          engDesc:
            "Perform 'Surprise!' events all over the place so that <br>more people get to know and like Bellygom.",
          complete: false,
          order: 7,
        },
        {
          desc: "전국 방방곳곳에서 <br>‘벨리 페스티벌’ 개최",
          engDesc: "Hold ‘Belly Festivals’ <br>all over the country",
          complete: false,
          order: 8,
        },
        {
          desc: "벨리곰과 함께 누리는 <br>벨리 패스 공개",
          engDesc: "Unveil the Belly Pass <br>you can have fun with Bellygom",
          complete: false,
          order: 9,
        },
        {
          desc: "한정판 홀더 굿즈 제작 및 증정",
          engDesc:
            "Production and presentation <br>of limited-edition holder's merch",
          complete: false,
          order: 12,
        },
        {
          desc: "벨리곰 친구들 & 홀더들의 <br>프라이빗 아지트 공개",
          engDesc: "Private hideout of Bellygom <br>friends & holders revealed",
          complete: false,
          order: 11,
        },
        {
          desc: "벨리곰 X 탑티어 IP와 <br>콜라보레이션",
          engDesc: "Bellygom X Top Tier <br>IP Collaboration",
          complete: false,
          emphasis: true,
          order: 10,
        },
        {
          desc: "홀더들만을 위한 <br>시크릿 라방 ON AIR",
          engDesc: "Secret live broadcast ON AIR <br>for holders only",
          complete: false,
          order: 13,
        },
        {
          desc: "모든 홀더들을 위한 <br>깜짝 혜택 II 업그레이드",
          engDesc: "Surprise rewards <br>for all holders - Upgrade II",
          complete: false,
          order: 14,
        },
        {
          desc: "2차 창작이 가능한 <br>벨리곰 NFT 에어드랍",
          engDesc: "Bellygom NFT 2nd airdrop",
          complete: false,
          emphasis: true,
          order: 15,
        },
        {
          desc: "벨리곰 친구들 및 랜드 NFT <br>에어드랍",
          engDesc: "Bellygom Friends and Land <br>NFT Airdrop",
          complete: false,
          emphasis: true,
          order: 18,
        },
        {
          phase: 3,
          title: "벨리월드가 열리다",
          desc: "벨리곰과 친구들의 메타버스가 열립니다.",
          engTitle: "Open BellyWorld!",
          engDesc: "Bellygom and Friends metaverse opens.",
          complete: false,
          order: 17,
        },
        {
          desc: "크리에이터 스튜디오 대여 <br>&양성 프로그램 오픈",
          engDesc: "Creator studio rental & training <br>program open",
          complete: false,
          order: 16,
        },
        {
          desc: "벨리곰과 친구들, <br>메타버스 세상으로 이주",
          engDesc: "Bellygom and friends <br>migrate to the metaverse world",
          complete: false,
          emphasis: true,
        },
        {
          desc: "벨리월드 속 벨리곰과 <br>친구들(아바타) 활동시작",
          engDesc:
            "Bellygom and friends (avatars) <br>activities in Bellyworld begin",
          complete: false,
        },
        {
          desc: "벨리월드 속 작곡가 김형석과 <br>친구들의 음악 콘서트 개최",
          engDesc:
            "Music concert with Composer <br>Hyung Seok Kim and friends in Belly World",
          complete: false,
        },
        {
          desc: "벨리곰 토크노믹스로 <br>생태계 구축",
          engDesc: "Build an Ecosystem with Bellygom <br>Tokenomics",
          complete: false,
        },
        {
          desc: "벨리월드 첫번째 프로젝트 <br>깜짝 테마곡 만들기",
          engDesc:
            "BellyWorld's 1st project - <br>Create a surprise theme song",
          complete: false,
          emphasis: true,
        },
        {
          desc: "벨리월드 두번째 프로젝트 <br>깜짝 웹툰 만들기",
          engDesc: "BellyWorld's 2nd project - <br>Create a surprise webtoon",
          complete: false,
          emphasis: true,
        },
        {
          desc: "벨리월드 세번째 프로젝트 <br>깜짝 게임 만들기",
          engDesc: "BellyWorld 3rd Project - <br>Create a surprise game",
          complete: false,
          emphasis: true,
        },
        {
          desc: "벨리곰과 친구들 X 홀더가 <br>함께 만드는 로드맵 2.0으로 GO!",
          engDesc:
            "GO! with Roadmap 2.0 created <br>by Bellygom and Friends X Holder!",
          complete: false,
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
.title-wrap {
  .roadmap-belly {
    position: absolute;
    bottom: -6px;
    left: 170px;
    width: 230px;
    height: 300px;
    z-index: 3;
    .mobile & {
      bottom: -60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.content-wrap {
  display: grid;
  gap: 60px 24px;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  .pc & {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
  .con {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 50%;
      left: -24px;
      width: 24px;
      border-top: 2px dashed #ffffff;
      opacity: 0.3;
      transform: translateY(-50%);
      .mobile & {
        border-top: none;
        border-left: 2px dashed #ffffff;
        bottom: -30px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &:first-child {
      &::before {
        display: none;
      }
    }
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 160px;
    box-sizing: border-box;
    border-radius: 20px;
    font-size: 18px;
    text-align: center;
    background: #480da7;
    color: $white;
    .tit {
    }
    .desc {
      line-height: 28px;
    }
    &.phase {
      background: transparent;
      .phase-title {
        font-family: "Sandoll Odongtong", sans-serif;
        font-size: 18px;
        line-height: 18px;
      }
      .tit {
        margin-top: 5px;
        font-size: 26px;
      }
      .desc {
        margin-top: 10px;
        color: $white;
        opacity: 0.7;
      }
    }
    &.complete {
      background: #5c40d4;
      position: relative;
      .complete-badge {
        position: absolute;
        top: 0;
        right: 20px;
        width: 90px;
        height: 90px;
        background: url("../../assets/images/roadmap/img_roadmap_done.svg")
          center no-repeat;
        .date {
          font-size: 12px;
          line-height: 13px;
          color: #ffffff;
          transform: rotate(-45deg);
          display: block;
          position: absolute;
          top: 20px;
          left: 20px;
          opacity: 0.4;
          font-family: "Sandoll Odongtong", sans-serif;
        }
      }
    }
    &.emphasis {
      border: 5px solid transparent;
      background-image: linear-gradient(#480da7, #480da7),
        linear-gradient(to right, #f85e92, #fc8abc, #ffcbad);
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
  }
  .deco-2 {
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -80px;
      left: 0;
      width: 414px;
      height: 170px;
      background: url("../../assets/images/roadmap/deco.svg") center no-repeat;
      opacity: 1;
      transform: none;
      border: none;
      .mobile & {
        width: calc(100% + 40px);
        height: 146px;
        margin-left: -20px;
        background-size: 98%;
        border: none;
        transform: translateX(-43%);
        bottom: 0;
        top: -70px;
      }
    }
  }
  .deco-3 {
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 404px;
      height: 398px;
      background: url("../../assets/images/roadmap/deco_2.svg") center no-repeat;
      transform: translate(-50%, -50%);
      z-index: 2;
      opacity: 1;
      border: none;
      .mobile & {
        width: calc(100% + 40px);
        height: 334px;
        margin-left: -20px;
        background-size: 98%;
        transform: translate(-46%, -30%);
        border: none;
      }
    }
  }
  .mobile & {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1, 1fr);
    gap: 20px 0;
    z-index: 10;
    .item {
      width: 100%;
    }
  }
}
</style>
