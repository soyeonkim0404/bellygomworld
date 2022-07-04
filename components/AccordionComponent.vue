<template>
  <ul class="accordion-list">
    <li class="accordion-item" v-for="(item, index) in list" :key="index">
      <button class="accordion-title" @click="openCon(index)">
        <slot name="title" :item="item"></slot>
        <i :class="{ active: onContent.some((el) => index === el) }"></i>
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
            <div class="volume"><span>3.2</span> MB</div>
            <button class="btn-download">
              <em>PDF 다운받기</em>
            </button>
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
    border-top: 1px solid rgba(4, 0, 0, 0.3);
    .accordion-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      text-align: left;
      font-size: 26px;
      font-weight: 400;
      line-height: 28px;
      i {
        display: block;
        flex-shrink: 0;
        margin: 0 0 0 20px;
        width: 55px;
        height: 55px;
        background: url("assets/images/commons/icons_acd-up.svg") no-repeat
          center center / 55px;
        will-change: transform;
        transition: all 0.3s ease-in;
        &.active {
          transform: rotate(180deg);
        }
      }
    }
    .accordion-content {
      margin: 20px 0 0 0;
      .cont {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: url("assets/images/commons/icon_acd-content.svg") no-repeat
          top left / 55px;
        p {
          padding: 14px 14px 14px 65px;
          font-size: 26px;
          font-weight: 400;
          line-height: 27px;
        }
      }
      .download {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        .volume {
          font-size: 18px;
          font-weight: 400;
          line-height: 18px;
          color: rgba(0, 0, 0, 0.5);
        }
        .btn-download {
          margin: 0 0 0 20px;
          padding: 16px 15px 16px 55px;
          border-radius: 25px;
          background: url("assets/images/commons/icons_cloud-download.svg")
            no-repeat 15px / 30px #ff9fbb;
          em {
            font-size: 18px;
            font-weight: 400;
            line-height: 18px;
          }
        }
      }
    }
    &:last-child {
      border-bottom: 1px solid rgba(4, 0, 0, 0.3);
    }
  }
}
</style>
