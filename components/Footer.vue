<template>
  <footer>
    <div class="inner">
      <div class="footer-logo">
        <img src="@/assets/images/footer_logo.svg" alt="footer-logo" />
      </div>
      <div class="footer-contents">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <ul class="footer-list">
            <li>CEO Lee, Wan Shin</li>
            <li>
              Address: (Yangpyeongdong 5-ga) 10 Yangpyeong-ro 21-gil
              Yeongdeungpo-gu, Seoul
            </li>
            <li>Privacy Policy Manager: Shin, Sung Bin</li>
          </ul>
          <ul class="footer-list">
            <li>Hosting Service Provider: Woori Home Shopping</li>
            <li>Affiliates & Inquiry : master@lotteimall.com</li>
            <li>
              Business Inquiry :&nbsp;
              <a href="mailto:business@bellygom.world">
                business@bellygom.world
              </a>
            </li>
            <li>
              <nuxt-link to="/terms" target="_blank">
                Terms of Service
              </nuxt-link>
            </li>
          </ul>
        </template>
        <template v-else>
          <ul class="footer-list">
            <li>대표 이완신</li>
            <li>주소: 서울특별시 영등포구 양평로21길10(양평동5가)</li>
            <li>개인정보 보호책임자: 신성빈</li>
          </ul>
          <ul class="footer-list">
            <li>호스팅 서비스 사업자: (주)우리홈쇼핑</li>
            <li>제휴 및 문의 : master@lotteimall.com</li>
            <li>
              사업문의 :&nbsp;
              <a href="mailto:business@bellygom.world">
                business@bellygom.world
              </a>
            </li>
            <li><nuxt-link to="/terms" target="_blank">이용약관</nuxt-link></li>
          </ul>
        </template>

        <p class="copyright">
          <span>Copyright Ⓒ</span>
          <span class="logo">
            <img
              src="@/assets/images/img_footer_logo_bellygom.svg"
              alt="footer-logo"
            />
          </span>
          <span>All rights reserved.</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
footer {
  clear: both;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 1000px;
  padding: 70px 20px;
  background: #34343d;
  box-sizing: border-box;
  .inner {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .footer-logo {
      flex: 0 0 163px;
      width: 163px;
      height: auto;
      img {
        position: relative;
      }
    }
    .footer-contents {
      flex: 1 1 auto;
      padding-left: 158px;
      .footer-list {
        li {
          position: relative;
          display: inline-flex;
          font-size: 16px;
          line-height: 25px;
          color: $white;
          box-sizing: border-box;
          padding-right: 15px;
          margin-right: 15px;
          white-space: nowrap;
          a {
            text-decoration: underline;
            text-underline-position: under;
          }
          &::after {
            content: "";
            display: inline-block;
            position: absolute;
            top: 3px;
            right: 0;
            width: 1px;
            height: 18px;
            background: rgba(255, 255, 255, 0.2);
            box-sizing: border-box;
            vertical-align: middle;
          }
          &:last-child {
            &::after {
              display: none;
            }
          }
        }
        & + .footer-list {
          margin-top: 10px;
        }
      }
      .copyright {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 35px;
        font-size: 16px;
        color: #9e9e9e;
        word-break: break-all;
        .logo {
          display: inline-block;
          margin: -4px 5px 0;
          width: 90px;
          height: 26px;
          img {
            position: relative;
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
  .mobile & {
    display: block;
    padding: 40px 20px 65px;
    .footer-logo {
      flex: none;
      width: 129px;
    }
    .footer-contents {
      flex: none;
      padding-left: 0;
      margin-top: 30px;
      .footer-list {
        margin: 0;
        li {
          display: block;
          margin-top: 8px;
          font-size: 14px;
          line-height: 22px;
          & + li {
            margin-left: 0;
            padding-left: 0;
            &::before {
              content: none;
            }
          }
        }
      }
      .copyright {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}
</style>
