<template>
  <div class="header">
    <div class="logo">
      <nuxt-link :to="localePath('/')">
        <img src="@/assets/images/commons/logo.svg" alt="logo" />
      </nuxt-link>
    </div>
    <div class="menu">
      <nav class="gnb">
        <a href="javascript:alert('comming soon');">GALLERY</a>
        <nuxt-link :to="localePath('/news')">NEWS</nuxt-link>
        <nuxt-link :to="localePath('/roadmap')">ROADMAP</nuxt-link>
        <nuxt-link :to="localePath('/utility')">UTILITY</nuxt-link>
        <nuxt-link :to="localePath('/faq')">FAQ</nuxt-link>
      </nav>
      <ul class="sns">
        <li>
          <a href="#">
            <img src="@/assets/images/commons/ic_mall.svg" alt="mall" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/commons/ic_wallet.svg" alt="wallet" />
          </a>
        </li>
        <li class="linked">
          <button type="button" class="btn-link" @click="openLink">
            <img src="@/assets/images/commons/ic_link.svg" alt="link" />
          </button>
          <ul class="link-list" v-if="this.isShow">
            <li v-for="(item, index) in linkList" :key="index">
              <a :href="item.url">{{ item.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="lang">
        <button class="btn-lang" @click="openLang">{{ $i18n.locale }}</button>
        <div class="lang-list" v-if="this.showLang">
          <nuxt-link
            v-for="localeCode in $i18n.localeCodes"
            :key="localeCode"
            :exact="true"
            :to="switchLocalePath(localeCode)"
            @click.native="openLang"
          >
            {{ localeCode }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isShow: false,
      showLang: false,
      linkList: [
        {
          url: "https://www.naver.com/",
          name: "Discord",
        },
        {
          url: "https://www.naver.com/",
          name: "Telegram",
        },
        {
          url: "https://www.naver.com/",
          name: "twitter",
        },
        {
          url: "https://www.naver.com/",
          name: "YouTube",
        },
        {
          url: "https://www.naver.com/",
          name: "Opensea",
        },
        {
          url: "https://www.naver.com/",
          name: "Instagram",
        },
      ],
    };
  },
  asyncData({ req }) {
    let browserLang = req.headers["accept-language"]
      .split(",")[0]
      .toLocaleLowerCase()
      .substring(0, 2);
    return { lang: browserLang };
  },
  methods: {
    openLink(e) {
      this.isShow = !this.isShow;
      this.isShow
        ? e.target.classList.add("on")
        : e.target.classList.remove("on");
    },
    openLang(e) {
      this.showLang = !this.showLang;
      this.showLang
        ? e.target.classList.add("on")
        : e.target.classList.remove("on");
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  padding: 0 60px;
  background: transparent;
  z-index: 999;
  .logo {
  }
  .menu {
    display: flex;
    .gnb {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      a {
        display: block;
        font-size: 18px;
        color: $white;
        padding: 0 15px;
      }
    }
    .sns {
      margin-left: 35px;
      li {
        display: inline-flex;
        position: relative;
        a {
          width: 48px;
          height: 48px;
          display: block;
        }
        .btn-link {
          padding: 0;
          width: 48px;
          height: 48px;
          display: block;
        }
        .link-list {
          display: block;
          position: absolute;
          top: 50px;
          left: 50%;
          padding: 10px 15px;
          border-radius: 10px;
          background: $white;
          transform: translateX(-50%);
          li {
            font-size: 14px;
            line-height: 20px;
            text-align: left;
            & + li {
              margin-top: 5px;
            }
            a {
              width: auto;
              height: auto;
            }
          }
        }
      }
    }
    .lang {
      position: relative;
      margin-left: 15px;
      .btn-lang {
        width: auto;
        padding: 12px 15px;
        background: $white;
        border-radius: 25px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        color: $black;
        font-size: 18px;
      }
      .lang-list {
        display: block;
        position: absolute;
        top: 50px;
        left: 50%;
        padding: 10px 15px;
        border-radius: 10px;
        background: $white;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
