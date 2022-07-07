<template>
  <footer>
    <div class="footer-logo">
      <img src="../assets/images/commons/footer_logo.svg" alt="footer-logo" />
    </div>
    <div class="footer-contents">
      <ul class="footer-list">
        <li>(주)우리 홈쇼핑</li>
        <li>대표 이완신</li>
        <li>서울특별시 영등포구 양평로21길10(양평동5가)</li>
      </ul>
      <ul class="footer-list">
        <li>사업자번호 117-81-33400</li>
        <li>제휴문의 bellygom@bellygom.com</li>
        <li><a href="#">이용조건</a></li>
      </ul>

      <p class="copyright">Copyright Ⓒ (주)우리홈쇼핑. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
footer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 70px 320px;
  background: #252157;
  box-sizing: border-box;
  .footer-logo {
    flex: 0 0 163px;
    width: 163px;
    height: auto;
  }
  .footer-contents {
    flex: 1 1 auto;
    padding-left: 158px;
    .footer-list {
      li {
        display: inline-flex;
        font-size: 16px;
        line-height: 25px;
        color: $white;
        box-sizing: border-box;
        a {
          text-decoration: underline;
          text-underline-position: under;
        }
        & + li {
          padding-left: 15px;
          &::before {
            content: "";
            display: inline-block;
            margin-right: 15px;
            width: 1px;
            height: 18px;
            background: rgba(255, 255, 255, 0.2);
            box-sizing: border-box;
            vertical-align: middle;
          }
        }
      }
      & + .footer-list {
        margin-top: 10px;
      }
    }
    .copyright {
      margin-top: 35px;
      font-size: 16px;
      color: #9e9e9e;
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
