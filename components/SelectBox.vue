<template>
  <span class="select-inner">
    <select v-bind:id="input_id" v-on:input="updateValue($event.target.value)">
      <option v-for="(item, index) in items" :value="index">
        <template v-if="$store.getters.getLocale === 'ENG'">
          {{ item.eng }}
        </template>
        <template v-else>
          {{ item.kor }}
        </template>
      </option>
    </select>
  </span>
</template>
<script>
export default {
  name: "SelectBox",
  data() {
    return {};
  },
  props: ["value", "items", "input_id"],
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.select-inner {
  position: relative;
  display: block;
  background: $white;
  border-radius: 25px;
  select {
    position: relative;
    width: auto;
    height: 50px;
    padding: 15px 50px 14px 20px;
    min-width: auto;
    border: none;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 16px;
    line-height: 21px;
    outline: none !important;
    color: #000;
    font-family: "Sandoll GothicNeoRound", sans-serif;
    font-weight: 700;
    option {
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    width: 20px;
    height: 20px;
    background: url("@/assets/images/ic_24_arrow_down.svg") no-repeat center;
    transform: translateY(-50%);
  }
}
</style>
