<template>
  <div class="sub-wrap">
    <div class="main-faq">
      <AccordionComponent :list="list">
        <template #title="{ item }"> {{ item.title }} </template>
        <template #cont="{ item }">
          {{ item.cont }}
        </template>
      </AccordionComponent>
    </div>
  </div>
</template>

<script>
import AccordionComponent from "~/components/AccordionComponent";

export default {
  name: "index",
  layout: "defalut",
  components: { AccordionComponent },
  data() {
    return {
      list: [
        {
          title: "아코디언1",
          cont: "김소연김소연김소연김소연김소연김소연김소연김소연김소연김소연김소연김소연김소연김소연",
        },
        {
          title: "아코디언2",
          cont: "박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검박보검",
        },
        {
          title: "아코디언3",
          cont: "송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강송강",
        },
        {
          title: "아코디언4",
          cont: "공유공유공유공유공유공유공유공유공유공유공유공유공유공유공유공유공유공유",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
