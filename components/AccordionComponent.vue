<template>
  <ul class="accordion-list">
    <li class="accordion-item" v-for="(item, index) in list" :key="index">
      <button
        v-if="$mq === 'pc'"
        :class="{ title: true, active: onContent.some((el) => index === el) }"
        @click="
          openCon(index);
          sendGaEvent('bf_faq' + parseInt(item.faqIndex), 'BF');
        "
      >
        <slot name="title" :item="item"></slot>
      </button>

      <button
        v-if="$mq === 'mobile'"
        :class="{ title: true, active: onContent.some((el) => index === el) }"
        @click="
          openCon(index);
          sendGaEvent('M_bf_faq' + parseInt(item.faqIndex), 'BF');
        "
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
    sendGaEvent(eventName, event_category) {
      console.log(eventName + "|||||||" + event_category);
      gtag("event", eventName, {
        event_category: event_category,
      });
    },
  },
};
</script>

<style scoped lang="scss">
/*accordion*/
.accordion-list {
  .accordion-item {
    .title {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      text-align: left;
      font-size: 26px;
      line-height: 28px;
      padding: 45px 84px 45px 40px;
      border-radius: 40px;
      color: $black;
      background: $white;
      font-weight: 700;
      white-space: nowrap;
      &::before {
        content: "";
        display: inline-block;
        width: 44px;
        height: 44px;
        background: url("@/assets/images/commons/ic_Q.svg") center no-repeat;
        margin-right: 10px;
        .mobile & {
        }
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 39px;
        right: 40px;
        width: 44px;
        height: 44px;
        background: url("assets/images/commons/icons_acd-down.svg") no-repeat
          center center;
        will-change: transform;
        transition: all 0.3s ease-in;
      }
      &.active {
        border-radius: 40px 40px 0 0;
        &::after {
          transform: rotate(180deg);
          top: 35px;
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
          padding: 45px 0 45px 54px;
          font-size: 26px;
          font-weight: 400;
          line-height: 44px;
          border-top: 2px solid #eee;
          &::before {
            content: "";
            display: inline-block;
            position: absolute;
            top: 45px;
            left: 44px;
            width: 44px;
            height: 44px;
            background: url("@/assets/images/commons/ic_A.svg") center no-repeat;
          }
        }
        .pdf {
          display: block;
          margin-top: 10px;
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
