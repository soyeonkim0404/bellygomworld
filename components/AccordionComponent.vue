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
          <!--          <div class="download">
            <a href="javascript:alert('작업중');" class="btn-download"
              >PDF Download</a
            >
          </div>-->
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
    /*sendGaEvent(eventName, event_category) {
      console.log(eventName + "|||||||" + event_category);
      gtag("event", eventName, {
        event_category: event_category,
      });
    },*/
  },
};
</script>

<style scoped lang="scss">
/*accordion*/
.accordion-list {
  .accordion-item {
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
      padding: 54px 40px 53px;
      border-radius: 40px;
      color: $black;
      background: $white;
      &::before {
        content: "Q.";
        display: inline-block;
        margin-right: 20px;
        font-size: 32px;
        font-family: "Sandoll Odongtong", sans-serif;
        color: #ff5290;
        .mobile & {
          font-size: 26px;
        }
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 44px;
        right: 40px;
        width: 48px;
        height: 48px;
        background: url("assets/images/commons/icons_acd-down.svg") no-repeat
          center center / 48px;
        will-change: transform;
        transition: all 0.3s ease-in;
      }
      &.active {
        border-radius: 40px 40px 0 0;
        &::after {
          transform: rotate(180deg);
          .mobile & {
            top: 6px;
          }
        }
      }
    }
    .accordion-content {
      .cont {
        padding: 0 40px;
        background: $white;
        border-radius: 0 0 40px 40px;
        will-change: transform;
        p {
          padding: 40px 0;
          font-size: 26px;
          font-weight: 400;
          line-height: 27px;
          border-top: 1px solid #bbb;
          &::before {
            content: "A.";
            display: inline-block;
            margin-right: 20px;
            font-size: 32px;
            color: #686df4;
            font-family: "Sandoll Odongtong", sans-serif;
            font-weight: 400;
          }
        }
        .mobile & {
          padding: 40px 40px;
          p {
            position: relative;
            padding-left: 45px;
            &::before {
              content: "A.";
              display: block;
              position: absolute;
              top: 3px;
              left: 0;
              margin-right: 20px;
              font-size: 26px;
              font-family: "Sandoll Odongtong", sans-serif;
              font-weight: 400;
            }
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
          .mobile & {
            font-size: 16px;
            &::before {
              margin-right: 13px;
            }
          }
        }
      }
    }
    & + .accordion-item {
      margin-top: 20px;
    }
  }
}
</style>
