<template>
  <div class="sub-wrap">
    <div class="title-wrap">
      <h1>FAQ</h1>
      <p class="sub">
        아직 벨리곰에게 궁금한 게 많다면<br v-show="$mq === 'mobile'" />
        FAQ 내용을 확인해 보세요!<br v-show="$mq === 'pc'" />
        벨리곰 NFT 궁금증을 모두 해결해 드립니다.
      </p>
    </div>
    <div class="content">
      <div class="inner">
        <div class="content-wrap">
          <AccordionComponent :list="list">
            <template #title="{ item }"> {{ item.title }} </template>
            <template #cont="{ item }">
              {{ item.cont }}
            </template>
          </AccordionComponent>
        </div>
      </div>
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
      faqList: [
        {
          title: "벨리곰 NFT는 어떤 블록체인을 이용해?",
          cont: "다운받기 눌러봐!  더 상세하게 설명해줄게!",
        },
        {
          title: "카이카스 지갑은 어떻게 만드는거야?",
          cont: "다운받기 눌러봐!  더 상세하게 설명해줄게!",
        },
        {
          title: "오픈씨는 어떻게 이용하는거야?",
          cont: "다운받기 눌러봐!  더 상세하게 설명해줄게!",
        },
        {
          title: "Klip 지갑으로 민팅 할 수 있어?",
          cont: "다운받기 눌러봐!  더 상세하게 설명해줄게!",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.content {
  .mobile & {
    padding: 107px 20px 150px;
  }
}
</style>
