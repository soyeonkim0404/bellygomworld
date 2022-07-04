<template>
  <div class="header">
    <div class="logo">
      <nuxt-link to="/">
        <img src="@/assets/images/commons/logo.svg" alt="logo" />
      </nuxt-link>
    </div>
    <div class="menu">
      <nav class="gnb">
        <a href="javascript:alert('comming soon');">GALLERY</a>
        <nuxt-link to="/news">NEWS</nuxt-link>
        <nuxt-link to="/roadmap">ROADMAP</nuxt-link>
        <nuxt-link to="/utility">UTILITY</nuxt-link>
        <nuxt-link to="/faq">FAQ</nuxt-link>
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
        <li>
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
      <!--      <div class="lang">
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langArr" :key="`lang-${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isShow: false,
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
  methods: {
    openLink(e) {
      this.isShow = !this.isShow;
      this.isShow
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
  height: 80px;
  padding: 0 60px;
  background: transparent;
  z-index: 999;
  .logo {
  }
  .menu {
    display: flex;
    .gnb {
      a {
      }
    }
    .sns {
      li {
        display: inline-flex;
        a {
        }
      }
    }
  }
}

.btn-link {
  width: 120px;
  height: 36px;
  padding: 8px 30px 8px 15px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 20px;
  color: $black;
  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background: url("../assets/images/commons/24_arrow.svg");
  }
  &.on {
    &::after {
    }
  }
}
.link-list {
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid $black;
  background: $white;
  li {
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    & + li {
      margin-top: 10px;
    }
  }
}
</style>
