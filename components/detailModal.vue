<template>
  <modal v-if="modalShow" @close="modalHide" class="detail-nft">
    <div slot="header"></div>
    <div slot="body">
      <div class="inner">
        <div class="nft-thumb">
          <img src="@/assets/images/belly-photo-detail.svg" class="thumb" />
          <div class="button-wrap">
            <button class="btn-opensea">
              <i class="icon" />
              View on OpenSea
            </button>
          </div>
        </div>
        <div class="nft-info">
          <div class="top">
            <span :class="`flag-${modalSeq.flag}`">{{ modalSeq.flag }}</span>
            <div class="nft-title">Bellygom #{{ modalSeq.nft }}</div>
          </div>
          <div class="contents">
            <div class="number">
              <div class="col">
                <span class="tit">Ranking</span>
                <span class="data">{{ modalSeq.lank }}</span>
              </div>
              <div class="col">
                <span class="tit">Score</span>
                <span class="data">7777</span>
              </div>
            </div>
            <div class="property">
              <span class="tit">Properties</span>
              <ul class="list">
                <li>
                  <span class="sub">Background</span>
                  <span class="desc">Ice Mountain Nature</span>
                </li>
                <li>
                  <span class="sub">Body</span>
                  <span class="desc">Aluminium Steel</span>
                </li>
                <li>
                  <span class="sub">Clothes</span>
                  <span class="desc">Black White Print Tshirt</span>
                </li>
                <li>
                  <span class="sub">Background</span>
                  <span class="desc">Ice Mountain Nature</span>
                </li>
                <li>
                  <span class="sub">Body</span>
                  <span class="desc">Aluminium Steel</span>
                </li>
                <li>
                  <span class="sub">Clothes</span>
                  <span class="desc">Black White Print Tshirt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div slot="footer"></div>
  </modal>
</template>

<script>
export default {
  name: "detailModal"
}
</script>

<style scoped>

</style>