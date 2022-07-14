<template>
  <div class="sub-wrap">
    <div class="title-wrap">
      <h1>NEWS</h1>
      <template v-if="$store.getters.getLocale === 'ENG'">
        <p class="sub">
          "Of the 10,000 extraordinary Bellygom's, you'll have the unique
          opportunity to obtain your very own rare Bellygom. <br />
          So, be sure to check the Whitelist and Public Sale schedules in
          beforehand :)"
        </p>
      </template>
      <template v-else>
        <p class="sub">
          10,000개의 벨리곰 중 오직 나만의 벨리곰을 가질 수 있는 기회가
          찾아옵니다. <br />
          화이트리스트 세일과 퍼블릭 세일 일정<br v-show="$mq === 'mobile'" />
          미리미리 체크하기!
        </p>
      </template>
    </div>
    <div class="content">
      <div class="inner">
        <div class="content-wrap">
          <template v-if="$store.getters.getLocale === 'ENG'">
            <h2>Bellygom Minting Day</h2>
          </template>
          <template v-else>
            <h2>벨리곰 민팅 데이</h2>
          </template>
          <ul class="new-list">
            <li v-for="(item, index) in sale" :key="index">
              <div class="box">
                <div class="tit" :class="item.titleColor">
                  <!-- class-type: purple -->
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    <p>{{ item.enTitle }}</p>
                  </template>
                  <template v-else>
                    <p>{{ item.title }}</p>
                  </template>
                </div>
                <div class="cont">
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    <div class="date">{{ item.enDate }}</div>
                  </template>
                  <template v-else>
                    <div class="date">{{ item.date }}</div>
                  </template>
                  <div class="time">{{ item.time }}</div>
                  <div class="info">
                    <p class="value">{{ item.volume }} <em>pcs</em></p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="caution">
            <div class="d-list">
              <div
                class="wrap"
                v-for="(item, index) in caution.sale"
                :key="index"
              >
                <template v-if="$store.getters.getLocale === 'ENG'">
                  <p>{{ item.enTitle }}</p>
                </template>
                <template v-else>
                  <p>{{ item.title }}</p>
                </template>
                <ul>
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    <li v-for="(list, index) in item.lists" :key="index">
                      {{ list.enLi }}
                    </li>
                  </template>
                  <template v-else>
                    <li v-for="(list, index) in item.lists" :key="index">
                      {{ list.li }}
                    </li>
                  </template>
                </ul>
              </div>
            </div>
            <div class="c-list">
              <div class="wrap">
                <div class="c-tit">
                  <i class="icon-caution"></i>
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    <p>Common Applicable Matters</p>
                  </template>
                  <template v-else>
                    <p>공통 해당 사항</p>
                  </template>
                </div>
                <ul>
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    <li v-for="(item, index) in caution.lists" :key="index">
                      {{ item.enLi }}
                    </li>
                  </template>
                  <template v-else>
                    <li
                      v-for="(item, index) in caution.lists"
                      :key="index"
                      v-html="item.li"
                    ></li>
                  </template>
                </ul>
              </div>
            </div>
          </div>
          <template v-if="$store.getters.getLocale === 'ENG'">
            <h2>Bellygom Minting Preparation Tips</h2>
          </template>
          <template v-else>
            <h2>벨리곰 민팅 준비 팁</h2>
          </template>
          <div class="tip">
            <template v-if="$store.getters.getLocale === 'ENG'">
              <div class="step discord">
                <div class="label">
                  <span>Step. 1</span>
                </div>
                <dl>
                  <dt>Check the Discord news</dt>
                  <dd>
                    The fastest way to get news on Bellygom NFTs is through the
                    Discord channel.
                  </dd>
                </dl>
              </div>
              <i class="icon-arrow"></i>
              <div class="step kaikas">
                <div class="label">
                  <span>Step. 2</span>
                </div>
                <dl>
                  <dt>Create Kaikas wallet</dt>
                  <dd>
                    Have your wallet ready.<br />
                    You can participate in minting events only with a Kaikas
                    wallet.
                  </dd>
                </dl>
              </div>
            </template>
            <template v-else>
              <div class="step discord">
                <div class="label">
                  <span>Step 1</span>
                </div>
                <dl>
                  <dt>디스코드 소식 확인하기</dt>
                  <dd>
                    벨리곰 NFT 소식은 디스코드 채널을 통해 <br />
                    가장 빠르게 확인할 수 있습니다.
                  </dd>
                </dl>
              </div>
              <i class="icon-arrow"></i>
              <div class="step kaikas">
                <div class="label">
                  <span>Step 2</span>
                </div>
                <dl>
                  <dt>카이카스 지갑 생성하기</dt>
                  <dd>
                    지갑을 미리 준비해두세요.<br v-show="$mq === 'mobile'" />
                    카이카스(Kaikas) 지갑으로 민팅에<br
                      v-show="$mq === 'mobile'"
                    />
                    참여할 수 있습니다.
                  </dd>
                </dl>
              </div>
            </template>
          </div>
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
      sale: [
        {
          title: "1차 화이트리스트 세일",
          enTitle: "1st Whitelist sale",
          volume: "3,000",
          date: "8월 9일",
          enDate: "Aug 09",
          time: "20:00",
        },
        {
          title: "2차 화이트리스트 세일",
          enTitle: "2nd Whitelist sale",
          volume: "3,000",
          date: "8월 9일",
          enDate: "Aug 09",
          time: "20:00",
        },
        {
          title: "퍼블릭 세일",
          enTitle: "Public sale",
          titleColor: "purple",
          volume: "2,900",
          date: "8월 10일",
          enDate: "Aug 10",
          time: "20:00 ",
        },
      ],
      caution: {
        sale: [
          {
            title: "1차 화이트리스트(경쟁)",
            enTitle: "1st Whitelist (Competition)",
            lists: [
              {
                li: "선미야클럽, 스마일미야, 해피어타운, 김형석프로덕션, 닉플레이스 중 1개 이상 NFT 홀더 (신청자에 한함)",
                enLi: "One or more NFT holders of Sunmiya Club, Smilemiya, HappierTown, Kim Hyung-Seok Productions, and Nick Place (Applicants only)",
              },
            ],
          },
          {
            title: "2차 화이트리스트(확정)",
            enTitle: "2nd Whitelist (Guaranteed)",
            lists: [
              {
                li: "트위터, 벨리곰 디스코드 채널 참여 이벤트를 통해 추첨 및 대상자 확정",
                enLi: "Twitter and Bellygom Discord Channel Participation Event to Draw and Select Winners",
              },
            ],
          },
          {
            title: "퍼블릭 세일",
            enTitle: "Public sale",
            lists: [
              {
                li: "선착순 판매, 참여자격 제한 없음",
                enLi: "No restrictions on participation",
              },
            ],
          },
        ],
        lists: [
          {
            li: "지갑당 2개 구매 가능",
            enLi: "You can purchase 2 pieces per wallet",
          },
          {
            li: "화이트리스트 신청 및 선정 관련 상세 일정은 <a href='https://discord.gg/TDYtz2fcSN' target='_blank' class='underline'>디스코드</a>, <a href='https://twitter.com/bellygom' target='_blank' class='underline'>트위터</a>를 통해 사전 공지될 예정입니다.",
            enLi: "Detailed schedule for whitelist application and selection criteria will be announced in advance, on Discord and Twitter.",
          },
          {
            li: "민팅가격에 대한 자세한 사항은 디스코드 > 화이트리스트 채널에서 확인할 수 있습니다.",
            enLi: "Details on the minting price can be found in the Discord > Whitelist channel.",
          },
          {
            li: "팀물량으로 제외된 1,100개는 파트너십, 이벤트, 경매 등의 용도로 활용됩니다.",
            enLi: "The 1,100 pieces excluded (for the team) will be used in partnerships, events, auctions, etc.",
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.content-wrap {
  .mobile & {
    margin-top: 60px;
  }
}
.new-list {
  display: flex;
  margin: 50px 0 0 0;
  justify-content: space-between;
  align-items: center;
  li {
    flex: 0 0 404px;
    width: 404px;
    box-sizing: border-box;
    .box {
      position: relative;
      max-height: 409px;
      background: #ffffff;
      border-radius: 50px;
      overflow: hidden;
      .tit {
        padding: 34px 26px 26px 26px;
        background: radial-gradient(
            136.51% 135.95% at 111.85% 163.81%,
            #ffab2d 0%,
            rgba(255, 198, 87, 0) 100%
          ),
          linear-gradient(
            199.63deg,
            #f85e92 3.61%,
            #fc8abc 92.9%,
            #ffcbad 144.87%
          ),
          #f85e92;
        p {
          text-align: center;
          font-size: 26px;
          font-weight: 400;
          line-height: 44px;
          color: #ffffff;
        }
        &.purple {
          background: linear-gradient(
              274.48deg,
              rgba(255, 108, 223, 0.2) 2.62%,
              rgba(141, 87, 255, 0.2) 85.65%
            ),
            #8d57ff;
        }
      }
      .cont {
        padding: 60px 30px 34px 30px;
        text-align: center;
        .date {
          font-size: 55px;
          font-weight: 700;
          line-height: 59px;
        }
        .time {
          margin: 20px 0 0 0;
          font-size: 26px;
          font-weight: 400;
          line-height: 20px;
        }
        .info {
          margin: 50px 0 0 0;
          padding: 20px 40px 20px 40px;
          background-color: #f8f8f8;
          border-radius: 20px;
          .value {
            font-size: 22px;
            font-weight: 700;
            line-height: 37px;
            text-align: center;
          }
        }
      }
    }
    & + li {
      margin-left: 24px;
    }
  }
  .mobile & {
    display: block;
    margin: 25px 0 0 0;
    li {
      flex: none;
      width: 100%;
      margin-top: 25px;
      .box {
        .tit {
          p {
            font-size: 20px;
            line-height: 20px;
          }
        }
        .cont {
          padding: 30px 25px 25px 25px;
          .date {
            font-size: 45px;
            line-height: 63px;
          }
          .time {
            margin: 10px 0 0 0;
            font-size: 18px;
            line-height: 19px;
          }
          .info {
            margin: 30px 0 0 0;
            padding: 24px 40px 23px 40px;
            .value {
              font-size: 18px;
              line-height: 19px;
            }
          }
        }
      }
      & + li {
        margin-left: 0;
      }
    }
  }
}

.caution {
  margin: 40px 0 0 0;
  padding: 50px 60px 50px 60px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  .d-list {
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    .wrap {
      & + .wrap {
        margin: 25px 0 0 0;
      }
      p {
        font-weight: 700;
      }
      ul {
        margin: 5px 0 0 0;
        li {
          padding: 0 0 0 6px;
          position: relative;
          &:before {
            content: "";
            display: block;
            position: absolute;
            top: 13px;
            left: -4px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #ffffff;
          }
          & + li {
            margin: 5px 0 0 0;
          }
        }
      }
    }
    & + .c-list {
      margin: 30px 0 0 0;
      padding: 30px 0 0 0;
      border-top: 1px solid rgba(255, 255, 255, 0.25);
    }
  }
  .c-list {
    color: #ffffff;
    .c-tit {
      display: flex;
      align-items: center;
      i.icon-caution {
        display: block;
        width: 18px;
        height: 18px;
        background-image: url("../../assets/images/news/ic_caution.svg");
        background-repeat: no-repeat;
        background-size: 18px;
      }
      p {
        font-weight: 700;
        padding: 0 0 0 5px;
        font-size: 16px;
        line-height: 26px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    ul {
      margin: 6px 0 0 0;
      li {
        position: relative;
        padding: 0 0 0 10px;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: rgba(255, 255, 255, 0.8);
        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 9px;
          left: 0;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.8);
        }
        & + li {
          margin: 5px 0 0 0;
        }
      }
    }
  }
  & + h2 {
    margin: 100px 0 0 0;
  }
  .mobile & {
    padding: 40px 30px 30px 30px;
    .d-list {
      font-size: 16px;
      line-height: 22px;
      .wrap {
        & + .wrap {
          margin: 30px 0 0 0;
        }
        ul {
          margin: 10px 0 0 0;
          li {
            &:before {
              top: 7px;
            }
            & + li {
              margin: 7px 0 0 0;
            }
          }
        }
      }
      & + .c-list {
        margin: 20px 0 0 0;
        padding: 20px 0 0 0;
      }
    }
    .c-list {
      .c-tit {
        i.icon-caution {
          width: 16px;
          height: 16px;
          background-size: 16px;
        }
        p {
          font-size: 14px;
          line-height: 15px;
        }
      }
      ul {
        margin: 10px 0 0 0;
        li {
          font-size: 14px;
          line-height: 22px;
          &:before {
            top: 8px;
          }
        }
      }
    }
    & + h2 {
      margin: 80px 0 0 0;
    }
  }
}

.tip {
  display: grid;
  grid-template-columns: 1fr 61px 1fr;
  gap: 0 40px;
  margin: 50px 0 0 0;
  padding: 60px;
  background-color: #ffffff;
  border-radius: 50px;
  .step {
    padding: 0 170px 0 0;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 170px 170px;
    &.discord {
      background-image: url("../../assets/images/news/img_news_tip_discord.svg");
    }
    &.kaikas {
      background-image: url("../../assets/images/news/img_news_tip_kaikas.svg");
    }
    .label {
      display: inline-block;
      padding: 7px 22px 5px 22px;
      background-color: #480da7;
      border-radius: 92px;
      span {
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        color: #ffffff;
      }
    }
    dl {
      margin: 20px 0 0 0;
      padding-right: 25px;
      box-sizing: border-box;
      dt {
        font-weight: 700;
        font-size: 26px;
        line-height: 44px;
      }
      dd {
        margin: 5px 0 0 0;
        font-size: 18px;
        line-height: 29px;
      }
    }
  }
  i.icon-arrow {
    display: block;
    margin: 0 0 40px 0;
    align-self: end;
    width: 60px;
    height: 60px;
    background-image: url("../../assets/images/news/ic_arrow_right.svg");
  }
  .mobile & {
    display: block;
    margin-top: 25px;
    padding: 40px 25px;
    .step {
      width: 100%;
      text-align: center;
      padding-right: 0;
      padding-bottom: 150px;
      background-position: center bottom;
      .label {
        padding: 11px 22px 9px 22px;
        span {
          font-size: 14px;
          line-height: 15px;
        }
      }
      dl {
        padding-right: 0;
        margin: 30px 0 0 0;
        dt {
          font-size: 20px;
          line-height: 20px;
        }
        dd {
          margin: 10px 0 0 0;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }
    i.icon-arrow {
      background-image: url("../../assets/images/news/ic_arrow_down.svg");
      margin: 20px auto;
    }
  }
}

::v-deep .underline {
  display: inline-block;
  font-weight: 700;
  text-decoration: underline;
  text-underline-position: under;
}
</style>
