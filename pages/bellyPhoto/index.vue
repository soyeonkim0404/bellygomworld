<template>
  <div class="wrap">
    <h2 class="sub-title">BELLY PHOTO</h2>
    <div class="contents">
      <div class="section1">
        <InputSearch
            v-model="keyword"
            placeholder="#Number"
            @input="resetFetch"
        />
        <div class="filter" v-if="$mq === 'pc'">
          <div class="con-title">
            Filter
            <button type="button"
                    class="btn-reset"
                    @click="refreshFetch"
            >
              <img src="@/assets/images/ic_reset.svg" alt="" />
            </button>
          </div>
          <BellyPhotoFilter
              :list="filter"
              :filterChkList="filterChkList"
              @change="resetFetch"
          />
        </div>
        <button class="mobile-filter" v-if="$mq === 'mobile'" @click="mbFilter">
          <img src="@/assets/images/ic-mobile-filter.svg" alt="" />
        </button>
      </div>
      <div class="section2">
        <div class="top">

          <div class="total"><span>
                <animated-number
                    :value="pager.totalItems || 0"
                    :duration="500"
                    :formatValue="formatToPrice"
                />
          </span> Items</div>
          <div class="sort">
            <div class="toggle" v-if="$mq === 'pc'">
              <span>MY NFTs</span>
              <label class="switch">
                <input type="checkbox" @click="toggleNFT" />
                <span class="slider round" />
              </label>
            </div>
            <div class="select">
              <SelectBox
                  :items="orderBy.list"
                  :default="orderBy.list[0]"
                  @change="resetFetch"
                  v-model="orderBy.selected"
              />
            </div>
          </div>
        </div>
        <template v-if="myNFT">
          <!--my nft 토글 on :: 지갑연결이 안되어 있을 경우-->
          <div class="photo-box">
            <p class="desc" v-if="$store.getters.getLocale === 'ENG'">
              Please, Connect Kaikas wallet to see your Bellygom NFTs.
            </p>
            <p class="desc" v-else>
              보유 중인 벨리곰 NFT를 확인하려면 카이카스 지갑 연동이 필요해요!
            </p>
            <button class="btn-wallet">CONNECT WALLET</button>
          </div>
          <!--my nft 토글 on :: nft 노 존재-->
          <button class="connect-wallet">
            <img src="@/assets/images/ic-kaikas.svg" />
            OXA89...664
          </button>
          <div class="photo-box">
            <p class="desc" v-if="$store.getters.getLocale === 'ENG'">
              You don’t have any Bellygom NFT.
            </p>
            <p class="desc" v-else>
              보유하고 계신 Bellygom NFT가 존재하지 않습니다.
            </p>
            <a
              href="https://opensea.io/collection/bellygom-world-official"
              target="_blank"
              class="btn-wallet"
              ><img src="@/assets/images/belly-photo-detail-opensea.svg" />Buy
              on OpenSea</a
            >
          </div>
        </template>
        <template v-else>
          <template v-if="photoList.length === 0">
            <!--미 검색시 -->
            <div class="photo-box">
              <p class="desc" v-if="$store.getters.getLocale === 'ENG'">
                No Matching Bellygom Found.
              </p>
              <p class="desc" v-else>
                검색하신 조건의 벨리곰NFT를 찾지 못했습니다.
              </p>
            </div>
          </template>
          <template v-else>
              <transition-group
                  name="photo"
                  class="photo"
                  tag="ul"
                  v-if="photoList.length !== 0"
              >
                <li
                    v-for="(item, index) in data"
                    :key="index"
                    class="item"
                    @click="detailNft(item)"
                >
                  <span class="lank">Rank {{ item.rank }}</span>
                  <span class="image">
                  <img :src="item.image" :alt="item.id" />
                </span>
                  <span class="info">Bellygom #{{ item.id }}</span>
                  <span class="border" v-if="$mq === 'pc'"></span>
                </li>
              </transition-group>
          </template>
        </template>
      </div>
    </div>

    <div class="mobile-fix" v-show="$mq === 'mobile'">
      <p v-if="$store.getters.getLocale === 'ENG'">
        Check your own NFTs on the Chrome browser in PC.
      </p>
      <p v-else>MY NFT는 PC 크롬 브라우저에서 확인할 수 있습니다.</p>
    </div>

    <modal v-if="modalShow" @close="modalHide" class="detail-nft">
      <div slot="header"></div>
      <div slot="body">
        <div class="inner">
          <div class="nft-thumb">
            <img src="@/assets/images/belly-photo-detail.svg" class="thumb" />
            <div class="button-wrap">
              <button class="btn-opensea">
                <img src="@/assets/images/belly-photo-detail-opensea.svg" />
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
                  <span class="data">7777.00</span>
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

    <modal v-if="mbFilterShow" @close="mbFilterHide" class="mobile-filter">
      <div slot="header">
        <div class="modal-title">Filter</div>
      </div>
      <div slot="body">
        <BellyPhotoFilter :list="filterList" :filterChkList="filterChkList" />
      </div>
      <div slot="footer">
        <div class="fix-wrap">
          <button class="reset">
            <img src="@/assets/images/ic_24_refresh_w.svg" />
          </button>
          <button class="btn-done">DONE</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  name: "bellyPhoto",
  layout: "bellyPhoto",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      kaikas: "0x7c6C70AB930E5637f5F862629A67D47C3403cC34",
      modalShow: false,
      mbFilterShow: false,
      keyword: "",
      myNFT: false,
      filterList: [
        {
          title: "Background",
          list: [
            {
              value: "Color",
            },
            {
              value: "Nature",
            },
            {
              value: "Urban",
            },
            {
              value: "Space",
            },
            {
              value: "Fantasy",
            },
            {
              value: "Aura",
            },
          ],
        },
        {
          title: "Body",
          list: [
            {
              value: "Animal Print",
            },
            {
              value: "Steel",
            },
            {
              value: "Cyborg",
            },
            {
              value: "Jewel",
            },
            {
              value: "Golden",
            },
          ],
        },
        {
          title: "Clothes",
          list: [
            { value: "Category0000" },
            { value: "Category0001" },
            { value: "Hot heart sunglasses" },
            { value: "Category0003" },
            { value: "Category0004" },
            { value: "Category0005" },
            { value: "Category0006" },
            { value: "Category0007" },
            { value: "Category0008" },
            { value: "Category0009" },
            { value: "Category0010" },
            { value: "Category0011" },
            { value: "Category0012" },
          ],
        },
        {
          title: "Test0000",
          list: [
            {
              value: "test1",
            },
            {
              value: "test2",
            },
            {
              value: "test3",
            },
          ],
        },
      ],
      filterChkList: [],
      photoList: [
        {
          id: 1,
          lank: 10000,
          nft: "9999",
          flag: "Mega",
        },
        {
          id: 2,
          lank: 9999,
          nft: "8888",
          flag: "Belly",
        },
        {
          id: 3,
          lank: 1,
          nft: "1234",
          flag: "Holic",
        },
        {
          id: 4,
          lank: 100,
          nft: "4985",
          flag: "Super",
        },
        {
          id: 5,
          lank: 99,
          nft: "2945",
          flag: "Surprise",
        },
        {
          id: 6,
          lank: 34,
          nft: "2367",
          flag: "Friends",
        },
        {
          id: 7,
          lank: 3,
          nft: "0987",
          flag: "Friends",
        },
        {
          id: 8,
          lank: 980,
          nft: "3380",
          flag: "Holic",
        },
      ],
      modalSeq: "",
      selectValue: "",
      orderBy: {
        list: [
          { value: "1", kor: "랭킹 순", eng: "Highest Rank"},
          { value: "2", kor: "랭킹 역순", eng: "Lowest Rank" },
          { value: "3", kor: "번호 순", eng: "Ascending" },
          { value: "4", kor: "번호 역순", eng: "Descending" },
        ],
        selected: { value: "1", kor: "랭킹 순", eng: "Highest Rank"},
      },
      /*-----------------*/
      filter: {
        Background: {
          list: [
            "Angel",
            "Baby Pink",
            "Black",
            "Burgundy",
            "Combination",
            "Devil",
            "Dino",
            "Gashina",
            "Ghost",
            "Gray",
            "Green",
            "Heroine",
            "Ivory",
            "Khaki",
            "LALALAY",
            "Navy",
            "Neon Green",
            "Neon Light Green",
            "Neon Orange",
            "Neon Pink",
            "Neon Yellow",
            "Noir",
            "Orange",
            "Pajamas",
            "Pporappippam",
            "Siren",
            "Tail",
            "Turquoise",
            "Ultramarine",
            "Witch",
            "World Tour",
            "You can't sit with us",
          ],
          selected: [],
        },
        Wing: {
          list: [
            "None",
            "Angel Wings",
            "Angel Wings Black",
            "Devil Wings Black",
            "Devil Wings Red",
          ],
          selected: [],
        },
        Body: {
          list: ["Body", "Ghost Body"],
          selected: [],
        },
        Necklace: {
          list: [
            "None",
            "Combination Necklace",
            "Crown Necklace",
            "LALALAY Necklace",
            "Noir Necklace",
            "Pporappippam Necklace",
            "Siren Necklace",
            "Y Necklace",
            "You can't sit with us Necklace",
          ],
          selected: [],
        },
        Makeup: {
          list: [
            "Combination Makeup",
            "Dino Makeup",
            "Gashina Makeup",
            "Ghost Makeup",
            "Heroine Makeup",
            "LALALAY Makeup",
            "Noir Makeup",
            "Siren Makeup",
            "Tail Makeup",
            "Witch Makeup",
            "World Tour Makeup",
            "You can't sit with us Makeup",
            "pporappippam Makeup",
          ],
          selected: [],
        },
        Sticker: {
          list: ["None", "Pink heart sticker"],
          selected: [],
        },
        Dress: {
          list: [
            "Angel Costume",
            "Black Blazer Dress",
            "Black Knit",
            "Black Pajamas",
            "Blue Blazer Dress",
            "Blue Dress",
            "Blue Frill Dress",
            "Blue Pajamas",
            "Blue Polo Shirt",
            "Burgundy Polo Shirt",
            "Cardigan Dress",
            "Chain Leather Suit",
            "Combination Black Dress",
            "Combination Green Dress",
            "Combination Original Dress",
            "Combination Pink Dress",
            "Combination Purple Dress",
            "Combination Red Dress",
            "Denim Jacket",
            "Devil Costume",
            "Dino Costume",
            "Floral Pattern Dress",
            "Fur Crop Top",
            "Gashina Dress",
            "Ghost Costume",
            "Gray Frill Dress",
            "Gray Suit",
            "Green Blazer Dress",
            "Green Fur Jacket",
            "Green Knit",
            "Green Pajamas",
            "Heroine Black Dress",
            "Heroine Green Dress",
            "Heroine Original Dress",
            "Heroine Pink Dress",
            "Heroine Purple Dress",
            "Heroine Red Dress",
            "Initial Shirt",
            "Ivory Fur Jacket",
            "Ivory Knit",
            "Knit Sleeveless",
            "LALALAY Dress",
            "Lace Vest",
            "Leather Jacket",
            "Leather Turtleneck Suit",
            "Lemon Polo Shirt",
            "Noir Dress",
            "Original Frill Dress",
            "Pink Blazer Dress",
            "Pink Fur Jacket",
            "Pink Knit",
            "Pink Pajamas",
            "Pink Polo Shirt",
            "Polo Sweatshirt",
            "Pporappippam Dress",
            "Purple Blazer Dress",
            "Purple Frill Dress",
            "Purple Pajamas",
            "Rainbow Sweatshirt",
            "Red Blazer Dress",
            "Red Frill Dress",
            "Red Sunglasses Sleeveless",
            "Siren Dress",
            "Sky Polo Shirt",
            "Stained Blue Jacket",
            "Striped Coral Knit",
            "Striped Green Knit",
            "Striped Ivory Knit",
            "Striped Pink Knit",
            "TAIL Dress",
            "White Glitter Dress",
            "White Pajamas",
            "White Shirt",
            "Witch Cloak",
            "World Tour Black Dress",
            "World Tour Blue Dress",
            "World Tour Green Dress",
            "World Tour Original Dress",
            "World Tour Pink Dress",
            "World Tour Purple Dress",
            "Yellow Pajamas",
            "Yellow Polo Shirt",
            "You can't sit with us Dress",
          ],
          selected: [],
        },
        Eyes: {
          list: [
            "Combination Eyes",
            "Gashina Eyes",
            "Heroine Eyes",
            "LALALAY Eyes",
            "Noir Eyes",
            "Pink Eyes",
            "Pporappippam Eyes",
            "Siren Eyes",
            "Tail Blue Sky Eyes",
            "World Tour Eyes",
            "Yellow Eyes",
            "You can't sit with us Eyes",
          ],
          selected: [],
        },
        Lipline: {
          list: ["None", "Lipline"],
          selected: [],
        },
        Hair: {
          list: [
            "None",
            "Blonde Wavy Hair",
            "Bloned Hair",
            "Bobbed Hair",
            "Combination Hair",
            "Gashina Hair",
            "Half Bun Hair",
            "Heroine Hair",
            "LALALAY Twin tails",
            "Low Twin tail",
            "Noir Hair",
            "Pporappippam Hair",
            "Purple Pucca Hair",
            "Purple Twin tail",
            "Short Twin tail",
            "Siren Hair",
            "Tail Cat Mask with Hair",
            "Wavy Ponytail",
            "Witch Hair",
            "World Tour Hair",
            "You can't sit with us Hair",
          ],
          selected: [],
        },
        Earring: {
          list: [
            "None",
            "Combination Earring",
            "Flower Earring",
            "Gashina Earring",
            "Heroine Earring",
            "LALALAY Earring",
            "Pearl Earrings",
            "Porappippam Earring",
            "Purple Earrings",
            "Rainbow Earring",
            "Ruby Earring",
            "Siren Earring",
            "Tail Pin Earring",
            "World Tour Earring",
            "You can't sit with us Earring",
          ],
          selected: [],
        },
        Head: {
          list: [
            "None",
            "Angel Ring",
            "Beret",
            "Black Cat mask",
            "Black Headband",
            "Black Ribbon",
            "Butterfly Headband",
            "Cat Ears",
            "Circlet",
            "Crown",
            "Cyberpunk Mask",
            "Devil Horns",
            "Fire Ring",
            "Flower Hairpin",
            "Flower Headband",
            "Gashina Headband",
            "Kiss Headband",
            "LALALAY Headband",
            "Pearl Hairpin",
            "Pink Headband",
            "Purple Cat mask",
            "Rabbit Ears",
            "Red Crown",
            "Red Hat",
            "Siren Hair tie",
            "Veil",
            "Witch Hat",
            "You can't sit with us Ribbon",
          ],
          selected: [],
        },
        Kongz_R: {
          list: ["None", "Doo2 kongz"],
          selected: [],
        },
        Kongz_L: {
          list: ["None", "Strongmin kongz"],
          selected: [],
        },
      },
      data: [],
      page: 1,
      pager: {},
      pageSize: 40,
      loading: false,
    };
  },
  async fetch() {
    try {
      const filter = {};
      for (const [key, value] of Object.entries(this.filter)) {
        filter[key] = value.selected.join();
      }
      const { data: response } = await this.$axios.get("/apiBellyPhoto", {
        params: {
          ...filter,
          orderBy: this.orderBy.selected,
          keyword: this.keyword,
          page: this.page,
          pageSize: this.pageSize,
        },
      });
      console.log(response)
      this.pager = response.pager;
      this.data = this.data.concat(response.pageOfItems);
      this.page++;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    infiniteHandler() {
      if (this.pager.totalPages <= this.page) return;
      const contentHeight = document.querySelector("#app").offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      if (contentHeight - windowHeight * 3 > scrollY && !this.loading) return;
      this.$fetch();
    },
    resetFetch() {
      this.data = [];
      this.page = 1;
      this.$fetch();
    },
    refreshFetch() {
      console.log('리프레시')
      for (const [key, value] of Object.entries(this.filter)) {
        value.selected = [];
      }
      console.log(this.filter)
      this.data = [];
      this.page = 1;
      this.$fetch();
    },
    toggleNFT() {
      this.myNFT = !this.myNFT;
    },
    detailNft(item) {
      this.modalShow = true;
      this.modalSeq = item;
    },
    modalHide() {
      this.modalShow = false;
    },
    mbFilterHide() {
      this.mbFilterShow = false;
    },
    mbFilter() {
      this.mbFilterShow = true;
    },
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.infiniteHandler);
  },
  destroyed() {
    window.removeEventListener("scroll", this.infiniteHandler);
  },
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding-top: 110px;
  .mobile & {
    padding-top: 60px;
  }
  .sub-title {
    margin-top: 120px;
    text-align: center;
    font-family: "Sandoll Odongtong", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 104px;
    .mobile & {
      margin-top: 50px;
      font-size: 30px;
      line-height: 39px;
    }
  }
  .contents {
    display: flex;
    margin: 80px 0;
    .section1 {
      display: flex;
      width: 100%;
      max-width: 297px;
      height: 100%;
      flex-direction: column;
      .filter {
        background: #ffffff;
        margin-top: 20px;
        padding: 50px 0;
        border-radius: 30px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        .con-title {
          display: flex;
          justify-content: space-between;
          padding: 0 30px 25px;
          font-size: 20px;
          line-height: 26px;
          font-weight: 700;
          border-bottom: 1px solid #dddddd;
          .btn-reset {
            background: transparent;
            width: 24px;
            height: 24px;
          }
        }
      }
    }
    .section2 {
      display: flex;
      width: 100%;
      max-width: 939px;
      flex-direction: column;
      margin-left: 24px;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        .total {
          font-size: 20px;
          line-height: 26px;
          color: #555555;
          font-weight: 700;
          span {
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            color: #000000;
          }
        }
        .sort {
          display: flex;
          .toggle {
            display: inline-flex;
            align-items: center;
            span {
              font-size: 16px;
              line-height: 21px;
              color: #000000;
              font-weight: 700;
            }
            .switch {
              position: relative;
              display: inline-block;
              margin-left: 10px;
              width: 40px;
              height: 24px;
              box-sizing: border-box;
              input {
                display: none;
              }
              .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                -webkit-transition: 0.4s;
                transition: 0.4s;
                &::before {
                  position: absolute;
                  content: "";
                  height: 18px;
                  width: 18px;
                  left: 4px;
                  bottom: 3px;
                  background-color: #fff;
                  -webkit-transition: 0.4s;
                  transition: 0.4s;
                }
                &.round {
                  border-radius: 12px;
                  &::before {
                    border-radius: 50%;
                  }
                }
              }
            }
            input:checked + .slider {
              background-color: #4944e4;
            }
            input:focus + .slider {
            }
            input:checked + .slider:before {
              -webkit-transform: translateX(14px);
              -ms-transform: translateX(14px);
              transform: translateX(14px);
            }
          }
          .select {
            margin-left: 20px;
          }
        }
      }
      .photo {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-top: 20px;
        overflow: auto;

        .item {
          flex-direction: column;
          -webkit-box-pack: justify;
          justify-content: space-between;
          position: relative;
          cursor: pointer;
          border-radius: 30px;
          overflow: hidden;
          background: #fff;
          box-sizing: border-box;
          transition: 0.35s ease-in;
          &.photo-enter,
          &.photo-leave-to {
            opacity: 0;
          }
          &.photo-leave-to {
            transition-duration: 0s;
          }
          .lank {
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            position: absolute;
            top: 10px;
            left: 10px;
            background: #fff;
            padding: 15px;
            border-radius: 20px;
            font-size: 14px;
            color: #000;
          }
          .image {
            width: 100%;
            height: 297px;
            display: inline-block;
          }
          .info {
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 20px 30px 30px;
            -webkit-box-flex: 1;
            flex-grow: 1;
            color: #999;
            font-size: 14px;
            line-height: 18px;
            font-weight: 700;
          }
          .border {
            content: "";
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            border-radius: 30px;
            &:hover {
              transition: border 0.3s ease 0s;
              border: 4px solid #4944e4;
            }
          }
        }
      }
    }
    .mobile & {
      margin: 10px 0 0;
      padding: 0 20px 80px;
      width: 100%;
      flex-wrap: wrap;
      overflow: hidden;
      box-sizing: border-box;
      .section1 {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 100%;
        max-width: 100%;
        height: 40px;
        padding: 11px 0 11px 20px;
        margin: 0;
        box-sizing: border-box;
        vertical-align: middle;
        border-radius: 25px;
        border: none;
        background: #ffffff;
        box-shadow: 0 4px 10px rgb(0 0 0 / 3%);
        ::v-deep .input-search {
          width: calc(100% - 54px);
          height: 100%;
          input {
            height: 100%;
            padding: 0;
            box-shadow: none;
            border-radius: 0;
            font-size: 14px;
            line-height: 18px;
          }
          .icon {
            right: 10px;
          }
        }
        .mobile-filter {
          position: relative;
          width: 54px;
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: 0;
            width: 1px;
            height: 16px;
            background: rgba(0, 0, 0, 0.3);
            transform: translateY(-50%);
          }
          img {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
        }
      }
      .section2 {
        margin: 32px 0 0;
        max-width: 100%;
        .top {
          height: auto;
          .total {
            font-size: 14px;
            line-height: 18px;
          }
          .sort {
            .select {
              margin: 0;
              ::v-deep .customSelect {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                min-width: 94px;
                height: 24px;
                line-height: 24px;
                &.eng {
                  min-width: 126px;
                }
                .selected {
                  width: 100%;
                  padding: 0 25px 0 0;
                  background: none;
                  box-shadow: none;
                  font-size: 14px;
                  line-height: 18px;
                  &::before {
                    top: -2px;
                    right: 0;
                  }
                }
                .items {
                  margin-top: 0;
                  top: 30px;
                  padding: 17px 20px;
                  border-radius: 15px;
                  .item {
                    display: flex;
                    align-items: center;
                    height: 36px;
                    font-size: 14px;
                    line-height: 14px;
                  }
                  &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 0;
                    height: 0;
                    top: -7px;
                    left: 50%;
                    border-bottom: 9px solid #ffffff;
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    transform: translateX(-50%);
                  }
                }
              }
            }
          }
        }
        .photo {
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 10px;
          grid-row-gap: 20px;
          .item {
            border-radius: 20px;
            .lank {
              padding: 8px 10px;
              font-size: 12px;
            }
            .info {
              padding: 10px 15px;
            }
          }
        }
      }
    }
  }
}

[class^="btn-"] {
  background: #4944e4;
  color: #ffffff;
  border-radius: 20px;
}

.connect-wallet {
  position: relative;
  width: 208px;
  height: 52px;
  background: #fff;
  border-radius: 25px;
  margin-top: 20px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align: middle;
  }
  &::after {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    background: url("@/assets/images/ic-kaikas-close.svg") center no-repeat;
  }
}

.photo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 365px;
  margin-top: 20px;
  border: 2px dashed rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  .desc {
    display: block;
    font-size: 18px;
    line-height: 27px;
  }
  [class^="btn-"] {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 60px;
    margin-top: 28px;
    font-weight: 700;
    font-size: 20px;
    img {
      width: 22.5px;
      height: 22.5px;
      margin-right: 8.75px;
    }
  }
  .mobile & {
    height: auto;
    border: none;
    padding: 104px 0 0;
    margin: 0;
    .desc {
      text-align: center;
      font-size: 16px;
      line-height: 21px;
    }
  }
}

/*modal*/
.detail-nft {
  ::v-deep .modal-container {
    position: relative;
    width: 1170px;
    height: auto;
    padding: 40px;
    border-radius: 50px;
    .modal-body {
      .inner {
        display: flex;
        .nft-thumb {
          flex: 0 0 460px;
          width: 460px;
          .thumb {
            width: 460px;
            height: 460px;
            border-radius: 20px;
          }
          .btn-opensea {
            width: 100%;
            height: 80px;
            font-size: 24px;
            line-height: 36px;
            margin-top: 24px;
            img {
              width: 40px;
              height: 40px;
              object-fit: cover;
            }
          }
        }
        .nft-info {
          flex: 1 1 auto;
          margin-left: 40px;
          .top {
            [class^="flag-"] {
              display: inline-block;
              width: auto;
              height: 30px;
              padding: 4px 15px;
              border-radius: 15px;
              background: #ffffff;
              box-sizing: border-box;
              font-size: 14px;
              line-height: 22px;
              border: 2px solid;
              font-weight: 700;
              &[class*="Mega"] {
                border-color: #596aff;
                color: #596aff;
              }
              &[class*="Belly"] {
                border-color: #ff5290;
                color: #ff5290;
              }
              &[class*="Holic"] {
                border-color: #c03dfe;
                color: #c03dfe;
              }
              &[class*="Super"] {
                border-color: #ff9d43;
                color: #ff9d43;
              }
              &[class*="Surprise"] {
                border-color: #ff72e0;
                color: #ff72e0;
              }
              &[class*="Friends"] {
                border-color: #8988ff;
                color: #8988ff;
              }
            }
            .nft-title {
              margin-top: 10px;
              font-family: "Sandoll Odongtong", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 34px;
              line-height: 51px;
            }
          }
          .contents {
            display: block;
            margin: 30px 0 0;
            .tit {
              display: block;
              font-size: 18px;
              line-height: 27px;
              color: #555;
              font-weight: 700;
            }
            .number {
              display: flex;
              .col {
                flex: 0 0 50%;
                .data {
                  display: block;
                  margin-top: 5px;
                  font-size: 30px;
                  line-height: 45px;
                  color: #000;
                  font-weight: 700;
                }
              }
            }
            .property {
              margin-top: 30px;
              .list {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
                margin-top: 10px;
                li {
                  background: #f5f5f5;
                  border-radius: 20px;
                  padding: 20px;
                  .sub {
                    display: block;
                    font-size: 14px;
                    line-height: 21px;
                    color: #999;
                  }
                  .desc {
                    display: block;
                    margin-top: 5px;
                    font-size: 18px;
                    line-height: 27px;
                    font-weight: 700;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .mobile & {
    ::v-deep .modal-container {
      border-radius: 0;
      padding: 0;
      .modal-default-button {
        position: fixed;
      }
      .modal-body {
        padding: 0;
        .inner {
          flex-direction: column;
          .nft-thumb {
            flex: none;
            width: 100%;
            img {
              width: 100%;
              height: auto;
              border-radius: 0;
            }
            .button-wrap {
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100%;
              background: #ffffff;
              padding: 20px;
              box-sizing: border-box;
              box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
              .btn-opensea {
                margin-top: 0;
                font-size: 16px;
                line-height: 24px;
                height: 56px;
                img {
                  width: 20px;
                  height: 20px;
                }
              }
            }
          }
          .nft-info {
            flex: none;
            margin: 0;
            padding: 30px 20px 140px;
            .contents {
              padding: 0;
              .tit {
                font-size: 16px;
                line-height: 24px;
              }
              .number {
                .col {
                  .data {
                    font-size: 24px;
                    line-height: 36px;
                  }
                }
              }
              .property {
                .list {
                  li {
                    border-radius: 10px;
                    .desc {
                      font-size: 14px;
                      line-height: 21px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.mobile-fix {
  position: fixed;
  width: 100%;
  padding: 12px 10px;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  p {
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #555;
  }
}

.mobile-filter {
  ::v-deep .modal-container {
    .modal-default-button {
      position: fixed;
    }
    .modal-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      padding: 23px 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      background: #fff;
      z-index: 2;
      .modal-title {
        font-family: "Sandoll Odongtong", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 33px;
      }
    }
    .modal-body {
      padding: 80px 0 100px;
      .acc-filter {
        .list {
          .item {
            .contents {
              padding: 20px 20px;
              background: #fafafa;
              .check-list {
                max-height: 200px;
              }
            }
          }
        }
      }
    }
    .modal-footer {
      .fix-wrap {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background: #ffffff;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
        .reset {
          width: 56px;
          height: 56px;
          border-radius: 15px;
          background: #999999;
          img {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
        }
        .btn-done {
          width: calc(100% - 66px);
          height: 56px;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>
