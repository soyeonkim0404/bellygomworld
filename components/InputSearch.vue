<template>
  <span :class="{ 'input-search': true, disabled: disabled }">
    <input
      type="text"
      :value="value"
      v-on="listeners"
      :disabled="disabled"
      :placeholder="placeholder"
      maxlength="4"
      v-bind="$attrs"
    />
    <i class="icon" />
  </span>
</template>

<script>
export default {
  name: "InputSearch",
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true,
    },
    disabled: Boolean,
    placeholder: String,
    lazy: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "value",
    event: "formChange",
  },

  methods: {
    formChange(event) {
      const regex = /[^0-9]/g; // 숫자가 아닌 문자열을 선택하는 정규식
      event.target.value = event.target.value.replace(regex, "");
      if (event.target.maxLength !== -1) {
        event.target.value = event.target.value.slice(
          0,
          event.target.maxLength
        );
      }
      this.$emit("formChange", event.target.value);
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => {
          if (!this.lazy) {
            this.formChange(event);
          }
          this.$emit("input", event);
        },
        change: (event) => {
          if (this.lazy) {
            this.formChange(event);
          }
          this.$emit("change", event);
        },
      };
    },
  },
};
</script>

<style scoped lang="scss">
.input-search {
  position: relative;
  input {
    display: block;
    width: 100%;
    height: 50px;
    padding: 15px 30px 14px;
    margin: 0;
    box-sizing: border-box;
    vertical-align: middle;
    border-radius: 25px;
    border: none;
    background: #ffffff;
    color: #000;
    font-size: 16px;
    line-height: 21px;
    font-weight: 700;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
    outline: none;
    &:hover,
    &:focus {
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
  }
  &.searchIsBtn {
  }
  &.disabled {
    input {
    }
  }
  .icon {
    display: block;
    position: absolute;
    top: 50%;
    right: 30px;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    cursor: pointer;
    background: url("@/assets/images/ic_search.svg") center no-repeat;
    .mobile & {
      background: url("@/assets/images/ic_search_bk.svg") center no-repeat;
    }
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input:focus {
    font-size: 16px;
  }
}
@supports (-webkit-overflow-scrolling: touch) {
  /* CSS specific to iOS devices */
  input:focus {
    font-size: 16px !important;
  }
}
</style>
