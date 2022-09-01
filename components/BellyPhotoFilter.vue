<template>
  <div class="acc-filter">
    <ul class="list">
      <li class="item" v-for="(value, name, index) in list" :key="index">
        <button
          :class="{
            title: true,
            active: onContent.some((el) => index === el),
          }"
          @click="openCon(index, value)"
        >
          {{ name }}
        </button>
        <div class="contents" v-if="onContent.some((el) => index === el)">
          <ul class="check-list">
            <li v-for="check in value.list" :key="check">
              <InputCheckbox
                v-model="value.selected"
                :value="check"
                :disabled="list.disabled"
                @change="changeInput(index, value)"
              >
                {{ check }}
              </InputCheckbox>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BellyPhotoFilter",
  props: ["list"],
  data() {
    return {
      onContent: [],
    };
  },
  created() {
    this.createdOpenCon();
    this.$nuxt.$on("closeFilter", () => {
      this.onContent = [];
    });
  },
  mounted() {},
  methods: {
    createdOpenCon() {
      let i = 0;
      for (const key in this.list) {
        if (this.list[key].selected.length > 0) {
          this.onContent.push(i);
        }
        i++;
      }
    },
    openCon(index) {
      const findIndex = this.onContent.findIndex((el) => el === index);
      if (findIndex === -1) {
        this.onContent.push(index);
      } else {
        this.onContent.splice(findIndex, 1);
      }
    },
    changeInput(index, value) {
      const findIndex = this.onContent.findIndex((el) => el === index);
      if (value.selected.length > 0) {
      }
      this.$emit("change");
    },
  },
};
</script>

<style scoped lang="scss">
.acc-filter {
  .list {
    .item {
      .title {
        position: relative;
        width: 100%;
        padding: 27px 30px 26px;
        font-size: 16px;
        line-height: 21px;
        border-radius: 0;
        border-bottom: 1px solid #dddddd;
        text-align: left;
        font-weight: 700;
        color: #000;
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          right: 30px;
          width: 24px;
          height: 24px;
          transform: translateY(-50%);
          background: url("@/assets/images/ic_plus.svg") center no-repeat;
        }
        &.active {
          &::after {
            background: url("@/assets/images/ic_minus.svg") center no-repeat;
          }
        }
      }
      .contents {
        padding: 25px 20px 25px 32.5px;
        border-bottom: 1px solid #dddddd;
        .check-list {
          max-height: 342px;
          overflow-y: auto;
          li {
            display: flex;
            height: 24px;
            & + li {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
