<template>
  <div
    :class="{
      customSelect: true,
      eng: $store.getters.getLocale === 'ENG' && $mq === 'mobile',
    }"
  >
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="
          selected = $store.getters.getLocale === 'ENG' ? item.eng : item.kor;
          open = false;
          $emit('input', selected);
        "
        class="item"
      >
        <template v-if="$store.getters.getLocale === 'ENG'">
          {{ item.eng }}
        </template>
        <template v-else>
          {{ item.kor }}
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectBox",
  data() {
    return {
      selected:
        this.$store.getters.getLocale === "ENG"
          ? this.default.eng
          : this.default.kor,
      open: false,
    };
  },
  props: ["value", "items", "default"],
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>
<style lang="scss" scoped>
.customSelect {
  position: relative;
  width: auto;
  min-width: 165px;
  text-align: left;
  outline: none;
  height: 50px;
  line-height: 50px;
  .selected {
    position: relative;
    font-family: "Sandoll GothicNeoRound", sans-serif;
    font-weight: 700;
    background: $white;
    font-size: 16px;
    line-height: 21px;
    border-radius: 25px;
    color: $black;
    cursor: pointer;
    user-select: none;
    padding: 15px 50px 14px 20px;
    box-shadow: 0 4px 10px rgb(0 0 0 / 3%);
    &:before {
      content: "";
      position: absolute;
      top: 15px;
      right: 15px;
      width: 20px;
      height: 20px;
      background: url("@/assets/images/ic_24_arrow_down.svg") no-repeat center;
    }
    &.open {
      &:before {
        transform: rotate(180deg);
      }
    }
  }
  .items {
    background: $white;
    border-radius: 25px;
    padding: 15px 50px 14px 20px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0 4px 10px rgb(0 0 0 / 3%);
    margin-top: 10px;
    .item {
      color: $black;
      cursor: pointer;
      user-select: none;
      font-size: 16px;
      line-height: 50px;
      &:hover {
      }
    }
  }
}

.selectHide {
  display: none;
}
</style>
