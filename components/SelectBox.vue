<template>
  <div
    :class="{
      customSelect: true,
      eng: $store.getters.getLocale === 'ENG' && $mq === 'mobile',
    }"
  >
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <template v-if="!selected">
        <template v-if="$store.getters.getLocale === 'ENG'">
          {{ dft.eng }}
        </template>
        <template v-else>{{ dft.kor }}</template>
      </template>
      <template v-else>
        <template v-if="$store.getters.getLocale === 'ENG'">
          {{ selected.eng }}
        </template>
        <template v-else>
          {{ selected.kor }}
        </template>
      </template>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="
          selected = item;
          dft = '';
          open = false;
          $emit('input', selected);
        "
        :class="{
          item: true,
          sel:
            selected.kor === item.kor ||
            selected.eng === item.eng ||
            dft.kor === item.kor ||
            dft.eng === item.eng,
        }"
      >
        <template v-if="$store.getters.getLocale === 'ENG'">{{
          item.eng
        }}</template>
        <template v-else>{{ item.kor }}</template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectBox",
  data() {
    return {
      selected: "",
      dft: this.default,
      open: false,
    };
  },
  props: ["items", "default"],
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>
<style lang="scss" scoped>
.customSelect {
  position: relative;
  width: 165px;
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
    padding: 15px 35px 14px 20px;
    box-shadow: 0 4px 10px rgb(0 0 0 / 3%);
    &:before {
      content: "";
      position: absolute;
      top: 15px;
      right: 15px;
      width: 20px;
      height: 20px;
      background: url("@/assets/images/ic_24_arrow_down.svg") no-repeat center;
      transition: all 0.5s ease-in-out;
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
    padding: 15px 20px 14px 20px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0 4px 10px rgb(0 0 0 / 3%);
    margin-top: 10px;
    .item {
      color: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      user-select: none;
      font-size: 16px;
      line-height: 50px;
      font-weight: 700;
      &.sel {
        color: $black;
      }
      &:hover {
      }
    }
  }
}

.selectHide {
  display: none;
}
</style>
