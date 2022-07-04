<template>
  <div class="header">
    <div class="logo">
      <nuxt-link to="/">로고로고</nuxt-link>
    </div>
    <div class="menu">
      <nav class="gnb">
        <nuxt-link to="/news">뉴스</nuxt-link>
        <nuxt-link to="/roadmap">카테고리</nuxt-link>
        <nuxt-link to="/faq">에프에이큐</nuxt-link>
        <nuxt-link to="/utility">블라블라</nuxt-link>
      </nav>
      <ul class="sns">
        <li>
          <nuxt-link to="/">링크</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">링크</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
</style>
