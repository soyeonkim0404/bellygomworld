<template>
  <label
    :class="{
      'input-checkbox': true,
      'all-check': allCheck,
      checked: checkedEvt,
      disabled: disabled || dataDisabled,
    }"
  >
    <input
      type="checkbox"
      :checked="checkedEvt"
      :disabled="disabled || dataDisabled"
      v-bind="$attrs"
      v-on="listeners"
    />
    <template>
      <i class="icon"></i>
    </template>
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: "InputCheckbox",
  inheritAttrs: false,
  props: {
    checked: {
      type: [Boolean, Array],
    },
    disabled: Boolean,
    value: String,
    dataDisabled: Boolean, //data에서 내려준 disabled
  },
  model: {
    prop: "checked",
    event: "formChange",
  },
  data() {
    return {
      allCheck: false,
    };
  },
  computed: {
    checkboxType() {
      return typeof this.checked === "boolean";
    },
    checkedEvt() {
      if (this.checkboxType) {
        return this.checked;
      }
      return this.checked.some((el) => el === this.value);
    },
    listeners() {
      return {
        ...this.$listeners,
        change: (event) => {
          if (this.checkboxType) {
            this.$emit("change", event);
            this.$emit("formChange", event.target.checked);
          } else {
            const idx = this.checked.indexOf(this.value);
            if (idx === -1) {
              this.checked.push(this.value);
            } else {
              this.checked.splice(idx, 1);
            }
            this.$emit("change", event);
            this.$emit("formChange", this.checked);
          }
        },
      };
    },
  },
};
</script>

<style scoped lang="scss">
.input-checkbox {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 39px;
  cursor: pointer;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-block;
    transform: translateY(-50%);
    margin-right: 8px;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px auto;
    background-image: url("@/assets/images/ic_checkbox_off.svg");
  }
  span {
    font-size: 16px;
    line-height: 21px;
    color: #000;
  }
  &.checked {
    .icon {
      background-image: url("@/assets/images/ic_checkbox_on.svg");
    }
  }
  &.disabled {
  }
}
</style>
