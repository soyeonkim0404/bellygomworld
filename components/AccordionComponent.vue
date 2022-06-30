<template>
  <ul class="accordion-list">
    <li class="accordion-item" v-for="(item, index) in list" :key="index">
      <button class="accordion-title" @click="openCon(index)">
        <slot name="title" :item="item"></slot>
      </button>
      <div
        class="accordion-content"
        v-if="onContent.some((el) => index === el)"
      >
        <div class="cont">
          <slot name="cont" :item="item"></slot>
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

<style scoped></style>
