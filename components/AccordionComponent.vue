<template>
  <ul class="accordion-list">
    <li class="accordion-item" v-for="(item, index) in list" :key="index">
      <button
        :class="{ title: true, active: onContent.some((el) => index === el) }"
        @click="openCon(index)"
      >
        <slot name="title" :item="item"></slot>
      </button>
      <div
        class="accordion-content"
        v-if="onContent.some((el) => index === el)"
      >
        <div class="cont">
          <p>
            <slot name="cont" :item="item"></slot>
          </p>
          <div class="download">
            <a href="#" download class="btn-download">PDF Download</a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AccordionComponent",
  props: ["list"],
  data() {
    return {
      onContent: [],
    };
  },
  methods: {
    openCon(index) {
      if (this.onContent.some((el) => el === index)) {
        this.onContent = [];
      } else {
        this.onContent = [];
        this.onContent.push(index);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.accordion-list {
  .accordion-item {
    padding: 40px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    .title {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      text-align: left;
      font-size: 26px;
      font-weight: 400;
      line-height: 28px;
      color: $white;
      &::before {
        content: "Q.";
        display: inline-block;
        margin-right: 20px;
        font-size: 32px;
        color: $white;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 48px;
        height: 48px;
        background: url("assets/images/commons/icons_acd-down.svg") no-repeat
          center center / 48px;
        will-change: transform;
        transition: all 0.3s ease-in;
      }
      &.active {
        &::after {
          transform: rotate(180deg);
        }
      }
    }
    .accordion-content {
      margin: 42px 0 0 0;
      .cont {
        padding: 40px 60px;
        background: #5515bc;
        border-radius: 30px;
        will-change: transform;
        transition: all 0.3s ease-in;
        p {
          font-size: 26px;
          font-weight: 400;
          line-height: 27px;
          color: $white;
          &::before {
            content: "A.";
            display: inline-block;
            margin-right: 20px;
            font-size: 32px;
            color: $white;
          }
        }
      }
      .download {
        display: block;
        margin-top: 20px;
        .btn-download {
          font-size: 22px;
          line-height: 37px;
          text-decoration: underline;
          text-underline-position: under;
          color: $white;
          &::before {
            content: "";
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 20px;
            vertical-align: middle;
            background: url("assets/images/commons/akar-icons_cloud-download.svg")
              center no-repeat;
          }
        }
      }
    }
    &:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }
    .mobile & {
      padding: 35px 0;
      .title {
        padding-right: 63px;
        font-size: 18px;
        line-height: 28px;
      }
      .cont {
        p {
          font-size: 18px;
          line-height: 28px;
        }
      }
    }
  }
}
</style>
