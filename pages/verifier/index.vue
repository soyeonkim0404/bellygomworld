<template>
  <div class="wrap">
    <div class="contents">
      <img
        src="@/assets/images/discord_holder_logo.svg"
        alt="logo"
        class="logo"
      />
      <button type="button" class="btn-sign" @click="connectKaikas">
        SIGN
      </button>
      <!-- <button type="button" class="btn-sign" @click="showHolder">홀더</button> -->
      <!--modal-->
      <modal v-if="holderModal" @close="closeHolder" class="modal">
        <div slot="body">
          <div class="holder">
            <template v-if="nftNum !== 0">
              <p class="desc">
                반갑습니다! 벨리곰 NFT 홀더들이<br />
                커뮤니티에서 기다리고 있어요!
              </p>
              <p class="desc eng">
                Welcome! The Bellygom NFT Holders Community Has Been<br />Expecting
                You!
              </p>
              <div class="box">
                <span class="name">Wallet Address</span>
                <span class="token">{{ wallet_addr }}</span>
              </div>
              <div class="box nft">
                <span class="name">No. of Bellygom NFTs Owned</span>
                <span class="num">{{ nftNum }}</span>
              </div>
              <a
                href="https://discord.com/channels/990785690579128340/990806087936671755"
                target="_blank"
                class="btn"
                >Enter the Community</a
              >
            </template>
            <template v-else>
              <p class="desc">
                홀더가 아닙니다. <br />
                벨리곰 NFT 구매 후 인증이 가능합니다.
              </p>
              <p class="desc eng">
                Sorry, you're currently not a Bellygom NFT holder.<br />
                Please try again after buying one.
              </p>
              <div class="box">
                <span class="name">Wallet Address</span>
                <span class="token">{{ wallet_addr }}</span>
              </div>
              <div class="box nft">
                <span class="name">No. of Bellygom NFTs Owned</span>
                <span class="num">0</span>
              </div>
              <a
                href="https://opensea.io/collection/bellygom-world-official"
                target="_blank"
                class="btn"
                >Buy a Bellygom NFT</a
              >
            </template>
          </div>
        </div>
      </modal>
    </div>
    <div class="mobile">
      <div class="inner">
        <div class="info">
          <img src="@/assets/images/notice_device.svg" alt="notice_device" />
          <div class="txt">
            <strong>
              벨리곰 NFT 홀더 인증은<br />
              PC에서만 가능합니다.
            </strong>
            <p>Chrome 브라우저로 접속해 주세요.</p>
            <span>
              Bellygom NFT holder-verification supports<br />
              Chrome on Windows and Mac.
            </span>
          </div>
        </div>
        <div class="box">
          <span class="kor">
            벨리곰 커뮤니티에서
            <br />
            새로운 소식과 벨리곰 팬을 만나보세요!!
          </span>
          <span class="eng">Join Bellygom NFT Discord community!!</span>
          <a
            href="https://discord.com/channels/990785690579128340/990806087936671755"
            target="_blank"
            class="link"
          >
            Discord Join
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: "clean",
  data() {
    return {
      wallet_addr: null,
      holderModal: false,
      nftNum: 0,
      discord_user_id: null,
    };
  },
  mounted() {
    this.kaikasConnetVerifier();
  },
  methods: {
    async kaikasConnetVerifier() {
      if (!window.klaytn) {
        // alert(
        //   "Kaikas 지갑이 설치되어 있지 않습니다.\n크롬에서 Kaikas 확장 프로그램을 설치해주세요!"
        // );
        // window.open(
        //   "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi"
        // );
        return;
      } else {
        // console.log(window.klaytn.networkVersion);
        // console.log(window.klaytn.networkVersion==='loading'); 처음에 kaikas 못불러오면 로딩뜰때도있음
        if (
          window.klaytn.networkVersion === undefined ||
          window.klaytn.networkVersion === "loading"
        ) {
          window.location.reload();
          location.reload();
          return;
        } else {
          this.getName();
          return;
        }
      }
    },
    async getName() {
      const code = this.$route.query.code;
      //if (code === null) return;
      const url = `${process.env.VUE_API_URL}/get_user_id`; // 디코에 post TODO 주소처리
      // console.log(url);
      //디스코드 인증센터
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code,
          }),
        });

        const userData = await res.json();
        this.discord_user_id = userData.userID;
      } catch (error) {
        console.log(error);
      }
    },
    showHolder() {
      this.holderModal = true;
    },
    closeHolder() {
      this.holderModal = false;
    },

    async connectKaikas() {
      try {
        const klaytn = await window.klaytn; //크롬에 깔린 카이카스 확장프로그램 안에는 klaytn 이 내장되어있다.
        const accounts = await klaytn.enable(); //카이카스 로그인
        this.wallet_addr = accounts[0];
      } catch (err) {
        alert(
          "Kaikas 지갑이 설치되어 있지 않습니다.\n크롬에서 Kaikas 확장 프로그램을 설치해주세요!"
        );
        window.open(
          "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi"
        );
      }
      this.signatureHandler();
    },

    async signatureHandler() {
      console.log(this.discord_user_id);
      try {
        const caver = await window.caver;
        const sig = await caver.klay.sign(
          "BellyGom Holder Verify",
          this.wallet_addr
        );
        const v = `0x` + sig.substring(2).substring(128, 130);
        const r = `0x` + sig.substring(2).substring(0, 64);
        const s = `0x` + sig.substring(2).substring(64, 128);
        const signature = [v, r, s];

        const url = `${process.env.VUE_API_URL}/api_discord_connect`; //TODO
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wallet_addr: this.wallet_addr,
            discord_user_id: this.discord_user_id,
            signature,
          }),
        });

        const resData = await res.json();
        console.log("resData", resData);
        if (this.discord_user_id === undefined) {
          alert(
            "홀더 인증에 실패하였습니다.\n브라우저 닫은 뒤, 다시 디스코드 링크를 클릭해 접속해주세요."
          );
          return;
        }
        if (resData.code === 200) {
          this.nftNum = resData.count;
          this.holderModal = true;
        } else if (resData.code === -1) {
          this.nftNum = 0;
          this.holderModal = true;
        } else {
          alert(
            "홀더 인증에 실패하였습니다.\n브라우저 닫은 뒤, 다시 디스코드 링크를 클릭해 접속해주세요."
          );
        }
      } catch (error) {
        alert(
          "홀더 인증에 실패하였습니다.\n브라우저 닫은 뒤, 다시 디스코드 링크를 클릭해 접속해주세요."
        );
      }
    },
  },
};
</script>

<style scoped lang="scss">
.contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background: url("@/assets/images/discode_holder_bg.jpeg") center center /
    cover no-repeat;
  box-sizing: border-box;
  overflow-x: hidden;

  .logo {
    width: 660px;
  }
}

[class*="btn"] {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 260px;
  max-width: 100%;
  height: 80px;
  margin: 50px auto 0;
  padding: 24px 65px;
  background: #4944e4;
  border-radius: 20px;
  font-size: 22px;
  line-height: 33px;
  color: #ffffff;
  font-weight: 700;
}

.modal {
  ::v-deep .modal-container {
    position: relative;
    width: 640px;
    border-radius: 50px;
    padding: 108px 40px 60px 40px;

    .modal-default-button {
      &::before {
        width: 48px;
        height: 48px;
        background: url("@/assets/images/discode_holder_pop_close.svg")
          no-repeat center;
      }
    }
  }
}

.holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .desc {
    text-align: center;
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    &.eng {
      font-size: 18px;
      font-weight: normal;
      line-height: 28px;
      color: #999;
      margin-top: 10px;
    }
  }

  .box {
    width: 100%;
    margin-top: 30px;
    background: #f4f4f4;
    border-radius: 20px;
    padding: 35px 68px;

    span {
      display: block;
      font-size: 18px;
      line-height: 27px;
      text-align: center;
      font-weight: 700;

      & + span {
        margin-top: 15px;
      }
    }

    .name {
      color: #999999;
    }

    .num {
      margin-top: 5px;
      font-size: 40px;
      line-height: 60px;
    }

    &.nft {
      padding: 35px 68px 16px;
    }
  }
}

.mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .contents {
    display: none;
  }

  .mobile {
    display: block;

    .inner {
      width: 100%;
      min-height: 100vh;
      background-image: none;
      background-color: #ffffff;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 90px 20px 30px;
      flex-direction: column;
      box-sizing: border-box;

      .info {
        flex: 1 1 100%;

        img {
          display: block;
          width: 178px;
          margin: 0 auto;
        }

        .txt {
          margin-top: 30px;
          text-align: center;

          strong {
            font-family: "Sandoll Odongtong", sans-serif;
            font-weight: 400;
            font-size: 24px;
            line-height: 36px;
            color: #000000;
          }

          p {
            margin-top: 5px;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            font-weight: 700;
          }

          span {
            display: block;
            margin-top: 20px;
            font-size: 14px;
            line-height: 14px;
            color: #7a7a7a;
            font-weight: 700;
          }
        }
      }

      .box {
        flex: 0 0 100%;
        width: 100%;
        position: relative;
        background-color: #f3f6ff;
        border-radius: 20px;
        margin-top: 30px;
        padding: 30px;
        box-sizing: border-box;
        background-image: url("@/assets/images/discode_logo.svg");
        background-size: 105px 86px;
        background-position: right 70px;
        background-repeat: no-repeat;

        .kor {
          display: block;
          font-size: 14px;
          line-height: 1.5;
          color: #0a1b53;
          font-weight: 700;
        }

        .eng {
          display: block;
          font-size: 14px;
          line-height: 1.5;
          color: #0a1b53;
          opacity: 0.4;
          font-weight: 400;
          margin-top: 12px;
        }

        .link {
          display: block;
          color: #0a1b53;
          font-size: 14px;
          line-height: 1.5;
          margin-top: 20px;
          text-decoration: underline;
          text-underline-position: under;
        }
      }
    }
  }
}
</style>
