<template>
  <div class="wrap">
    <h2 class="sub-title">BELLY PHOTO</h2>
    <div class="contents">
      <div class="section1">
        <InputSearch
          v-model="keyword"
          placeholder="Number"
          @input="resetFetch"
        />
        <div class="filter" v-if="$mq === 'pc'">
          <div class="con-title">
            Filter
            <button type="button" class="btn-reset" @click="refreshFetch">
              <img src="@/assets/images/ic_reset.svg" alt="" />
            </button>
          </div>
          <BellyPhotoFilter :list="filter" @change="resetFetch" />
        </div>
        <button class="mobile-filter" v-if="$mq === 'mobile'" @click="mbFilter">
          <img src="@/assets/images/ic-mobile-filter.svg" alt="" />
        </button>
      </div>
      <div class="section2">
        <div class="top">
          <div class="total">
            <template v-if="!$store.state.connect && myNFT">
              <span>0</span>
            </template>
            <template v-else>
              <span>
                <animated-number
                  :value="pager.totalItems || 0"
                  :duration="500"
                  :formatValue="formatToPrice"
                />
              </span>
            </template>
            Items
          </div>
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

        <button
          v-if="$store.state.connect && myNFT"
          class="connect-wallet"
          @click="resetWallet"
        >
          <img src="@/assets/images/ic-kaikas.svg" alt="kaikas" />
          <span class="first">{{ $store.state.klaytnAddress }}</span>
          <span class="last">{{ $store.state.klaytnAddressLast }}</span>
        </button>

        <!-- 지갑연동 버튼// -->

        <transition name="photo" mode="out-in">
          <div v-if="myNFT && !$store.state.connect" class="photo-box">
            <p class="desc" v-if="$store.getters.getLocale === 'ENG'">
              Please, Connect Kaikas wallet to see your Bellygom NFTs.
            </p>
            <p class="desc" v-else>
              보유 중인 벨리곰 NFT를 확인하려면 카이카스 지갑 연동이 필요해요!
            </p>
            <button class="btn-wallet" @click="findMyNFT">
              CONNECT WALLET
            </button>
          </div>
          <!-- //지갑연동 버튼 -->

          <!-- My NFT 없음// -->
          <div
            v-else-if="myNFT && $store.state.myNft.length === 0"
            class="no-nft"
          >
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
          </div>
          <!-- //My NFT 없음 -->

          <!-- list// -->
          <ul class="photo" v-else-if="data.length">
            <li
              v-for="item in data"
              :key="item.id"
              class="photo-item"
              @click="detailNft(item)"
            >
              <span class="rank">Rank {{ item.rank }}</span>
              <span class="image">
                <img :src="item.image" :alt="item.id" />
              </span>
              <span class="info">Bellygom #{{ item.id }}</span>
              <span class="border" v-if="$mq === 'pc'"></span>
            </li>
          </ul>
          <!-- //list -->

          <!-- no-data// -->
          <div v-else class="photo-box">
            <p class="desc" v-if="$store.getters.getLocale === 'ENG'">
              No Matching Bellygom Found.
            </p>
            <p class="desc" v-else>
              검색하신 조건의 벨리곰NFT를 찾지 못했습니다.
            </p>
          </div>
          <!-- //no-data -->
        </transition>
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
            <span>
              <img :src="detailNftInfo.image" class="thumb" />
            </span>
            <div class="button-wrap">
              <button class="btn-opensea">
                <i class="icon" />
                View on OpenSea
              </button>
            </div>
          </div>
          <div class="nft-info">
            <div class="top">
              <span :class="`flag-${detailNftInfo.grade}`">{{
                detailNftInfo.grade
              }}</span>
              <div class="nft-title">Bellygom #{{ detailNftInfo.id }}</div>
            </div>
            <div class="contents">
              <div class="number">
                <div class="col">
                  <span class="tit">Ranking</span>
                  <span class="data">{{ detailNftInfo.rank }}</span>
                </div>
                <div class="col">
                  <span class="tit">Score</span>
                  <span class="data">{{ detailNftInfo.score }}</span>
                </div>
              </div>
              <div class="property">
                <span class="tit">Properties</span>
                <ul class="list">
                  <li>
                    <span class="sub">Background</span>
                    <span class="desc">{{ detailNftInfo.Background }}</span>
                  </li>
                  <li>
                    <span class="sub">Body</span>
                    <span class="desc">{{ detailNftInfo.Body }}</span>
                  </li>
                  <li>
                    <span class="sub">Clothes</span>
                    <span class="desc">{{ detailNftInfo.Clothes }}</span>
                  </li>
                  <li>
                    <span class="sub">Head</span>
                    <span class="desc">{{ detailNftInfo.Head }}</span>
                  </li>
                  <li>
                    <span class="sub">Acc</span>
                    <span class="desc">{{ detailNftInfo.Acc }}</span>
                  </li>
                  <li>
                    <span class="sub">Special</span>
                    <span class="desc">{{ detailNftInfo.Special }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>

    <modal v-if="mbFilterShow" @close="mbModalClose" class="mobile-filter">
      <div slot="header">
        <div class="modal-title">Filter</div>
      </div>
      <div slot="body">
        <BellyPhotoFilter :list="filter" @change="resetFetch" />
      </div>
      <div slot="footer">
        <div class="fix-wrap">
          <button class="reset" @click="refreshFetch">
            <img src="@/assets/images/ic_24_refresh_w.svg" />
          </button>
          <button class="btn-done" @click="mbModalDone">DONE</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
import myNft from "@/server-middleware/myNft.json";
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
      connectNft: false,
      keyword: "",
      myNFT: false,
      filterChkList: [],
      modalSeq: "",
      orderBy: {
        list: [
          { value: "1", kor: "랭킹 순", eng: "Highest Rank" },
          { value: "2", kor: "랭킹 역순", eng: "Lowest Rank" },
          { value: "3", kor: "번호 순", eng: "Ascending" },
          { value: "4", kor: "번호 역순", eng: "Descending" },
        ],
        selected: "1",
      },
      filter: {
        Background: {
          list: [
            "Basic Gradient",
            "Gradient",
            "Green Gradient",
            "Heart Gradient",
            "Holic Gradient",
            "Mixgreen Gradient",
            "Mixpink Gradient",
            "Mixpurple Gradient",
            "Object Gradient",
            "Pink Gradient",
            "Point Gradient",
            "Random Gradient",
            "Simple Gradient",
            "Square Gradient",
            "Tri Gradient",
            "Up Gradient",
            "Vertical Gradient",
            "Wave Gradient",
            "Castle Nature",
            "Deep Givry",
            "Meteor Space",
            "Mixyellow Gradient",
            "Sun Fantasy",
            "3tone Gradient",
            "4tone Gradient",
            "Beach Nature",
            "Cloud Nature",
            "Desert Nature",
            "Ice Mountain Nature",
            "Landscape Nature",
            "Sundown Nature",
            "Mountain Nature",
            "Forest Nature",
            "Scenery Nature",
            "Bridge Urban",
            "Fullmoon Urban",
            "Night Urban",
            "Building Urban",
            "Neon Urban",
            "Sky Urban",
            "Star Fantasy",
            "Sunset Fantasy",
            "Tree Fantasy",
            "Sky Fantasy",
            "Planet Fantasy",
            "Candy Fantasy",
            "Castle Fantasy",
            "Balloon Fantasy",
            "Rocket Space",
            "Saturn Space",
            "Planet Space",
            "Moon Space",
            "Pink Aura",
            "Rainbow Aura",
            "Circle Aura",
            "Hole Aura",
            "Aurora",
          ],
          selected: [],
        },
        Body: {
          list: [
            "Belly Pink",
            "Giraffe",
            "Purple Tiger",
            "Zebra",
            "Cattle",
            "Tiger",
            "Leopard",
            "Metalic Steel",
            "Aluminium Steel",
            "Stain Steel",
            "Pattern Steel",
            "Rough Steel",
            "Relic Steel",
            "Pink Steel",
            "Pearl Jewel",
            "Pink Jewel",
            "Woody Jewel",
            "Aqua Jewel",
            "Neon Jewel",
            "Nacre Jewel",
          ],
          selected: [],
        },
        Clothes: {
          list: [
            "Basic Tshirt",
            "Blue Print Tshirt",
            "Belly Tshirt",
            "Pastel Tshirt",
            "Skeleton Hood",
            "Black Bear Tshirt",
            "Black Heritage",
            "Black Space Tshirt",
            "Black White Print Tshirt",
            "Burgundy Tshirt",
            "Black B Tshirt",
            "Lifestyle Print Tshirt",
            "Gradient Tshirt",
            "Jacket",
            "Meeting Look",
            "RocknRoll Tshirt",
            "Club Crop Tshirt",
            "Yellow Crop Tshirt",
            "Blue Shirt",
            "Skull Print Shirt",
            "Normal Hood",
            "Black Print Hood",
            "Grey Print Hood",
            "Neon Print Hood",
            "Skull Pattern Hood",
            "Green Turtleneck",
            "Color Paint Hood",
            "Graffiti Hood",
            "Rainbow Turtleneck",
            "Orange Padded Coat",
            "Punk Style ZipUp",
            "2 Color ZipUp",
            "Baseball Jumper",
            "Blue Jacket",
            "Cow Jacket",
            "Punk Jacket",
            "Red Leather Jacket",
            "White Fire Jacket",
            "Daily Dress",
            "Pink Dress",
            "Bead Dress",
            "Halloween Dress",
            "Purple Padded Coat",
            "School Look",
            "Trench Coat",
            "Fusion Traditional",
            "Gradient Uniform",
            "Heritage Pattern",
            "Judge",
            "Korean Traditional",
            "Modern Traditional",
            "Office Look",
            "Opera Costume",
            "Orient Heritage",
            "Orient Traditional",
            "Purple Crystal Dress",
            "Print Sleeveless",
            "Purple Uniform",
            "Warrior",
            "Pink Armor",
            "Purple Armor",
            "Windstopper",
            "Darth Vader Suit",
            "Blue Crystal Dress",
            "Rainbow Armor",
            "Space Pilot Suit",
          ],
          selected: [],
        },
        Head: {
          list: [
            "None",
            "Volume Short Cut",
            "Under Cut",
            "Pink Bang",
            "Blue Shaggy Cut",
            "Crystal Queen",
            "Dark Aqua",
            "Dark Blue Point",
            "Dark Long",
            "Brown Long",
            "Orange Point Cut",
            "Ponytail",
            "Old School",
            "Shaggytail",
            "Purple Short",
            "Twintail",
            "Two Block Cut",
            "Yellow Root Cut",
            "Unbalance Cut",
            "Mystic Pastel",
            "Circus Hat",
            "Cowboy",
            "Fashion Casque",
            "Magician",
            "Baseball Cap",
            "Cutie Cap",
            "Motorcycle Cap",
            "Purple Beanie",
            "Crystal Antler",
            "Slant Cap",
            "Cooking Hat",
            "Headphone",
            "Pilot Cap",
            "Noble Hat",
            "Witch Hat",
            "Indian",
            "Battle Casque",
            "Pastel Casque",
            "Stone Casque",
            "Villain Casque",
            "Viking Casque",
            "Winter Casque",
            "Stone Crown",
            "Gold Crown",
            "Traditional Crown",
            "Blue Ring",
            "Cyber Ring",
            "Yellow Ring",
            "Rainbow Ring",
          ],
          selected: [],
        },
        Acc: {
          list: [
            "Check Scarf",
            "Green Leaf Scarf",
            "Butterfly Scarf",
            "Pink Green Scarf",
            "Purple Star Scarf",
            "Gold Point Scarf",
            "Rainbow Scarf",
            "Belly Chain",
            "Crown Chain",
            "King Chain",
            "Skull Chain",
            "Yellow Star Chain",
            "Dollar Chain",
            "Bat Necklace",
            "Creature Necklace",
            "Flake Necklace",
            "Gem Necklace",
            "Stone Necklace",
            "Tube Necklace",
            "Whistle Necklace",
            "Black Sunglasses",
            "Circle Sunglasses",
            "Color Sunglasses",
            "Cyber Sunglasses",
            "Fashion Glasses",
            "Funny Glasses",
            "Heart Sunglasses",
            "Hot Heart Sunglasses",
            "Party Sunglasses",
            "Pink Eye Mask",
            "Pink Sunglasses",
            "Pirate Eyepatch",
            "Pixel Sunglasses",
            "Red Glasses",
            "Retro Black Glasses",
            "Retro Glasses",
            "Ski Goggles",
            "Skinny Glasses",
            "Skull Sleep Mask",
            "Star Glasses",
            "Purple Headband",
            "Mint Night Cloak",
            "Purple Ribbon Cloak",
            "Warm Heart Cloak",
            "Aqua Earring",
            "Heart Earring",
            "Orient Earring",
            "Red Earring",
            "Skull Earring",
            "Wing Earring",
            "Black Mustache",
            "Brown Mustache",
            "Country Mustache",
            "Gentle Mustache",
            "Neon Mustache",
            "Sword",
            "Bomb",
            "Bow Arrow",
            "Laser Gun",
            "Stone Gun",
            "General Pole",
            "Combat Pole",
            "Tri Pole",
            "Battle Pole",
            "Angel Pole",
            "King Pole",
            "Pink Flower Cloak",
            "Red Horne",
            "Yellow Corn Horne",
            "Color Corn Horne",
            "Deer Horne",
            "Pink Heart Horne",
            "Devil Horne",
          ],
          selected: [],
        },
        Special: {
          list: [
            "White Angel Wing",
            "Black Angel Wing",
            "Gold Angel Wing",
            "Small Bat Wing",
            "Big Bat Wing",
            "Purple Point Wing",
            "Black Armor",
            "Green Armor",
            "Mint Armor",
            "Pink Armor",
            "Orient Armor",
            "Western Armor",
            "Crocodile",
            "Mint Footprint",
            "Future Armor",
            "Peter Pan",
            "Skeleton",
            "Shark",
            "Rabbit",
            "Iron Belly",
            "Thunder Hammer",
            "Rainbow Water",
            "Secret Witch",
            "Devil",
          ],
          selected: [],
        },
        Grade: {
          list: ["Belly", "Holic", "Mega", "Super", "Surprise", "Friends"],
          selected: [],
        },
      },
      data: [],
      page: 1,
      pager: {},
      pageSize: 40,
      loading: false,
      detailNftInfo: {},
      myNftId: [],
    };
  },
  fetchDelay: 0,
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
          id: this.myNFT ? this.$store.state.myNft.join() : "All",
        },
      });
      this.pager = response.pager;
      this.data = this.data.concat(response.pageOfItems);
      this.page++;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async findMyNFT() {
      await this.$store.dispatch("callMyNftData");
      await this.resetFetch();
    },
    resetWallet() {
      this.$store.dispatch("callMyNftData");
      this.resetFetch();
    },
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
      for (const [key, value] of Object.entries(this.filter)) {
        value.selected = [];
      }
      this.resetFetch();
      this.$nuxt.$emit("closeFilter");
    },
    toggleNFT() {
      this.myNFT = !this.myNFT;
      this.resetFetch();
    },
    detailNft(item) {
      this.modalShow = true;
      this.modalSeq = item;
      this.detailNftInfo = item;
      document.body.style.overflow = "hidden";
    },
    mbModalDone() {
      this.mbFilterShow = false;
    },
    mbModalClose() {
      this.refreshFetch();
      this.mbFilterShow = false;
    },
    modalHide() {
      this.modalShow = false;
      document.body.style.overflow = "";
    },
    mbFilter() {
      this.mbFilterShow = true;
    },
    formatToPrice(value) {
      const num = Number(value).toFixed(0);
      return `${Number(num).toLocaleString()}`;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.infiniteHandler);
    window.addEventListener("scroll", this.topBtn);

    this.$nuxt.$on("fetchWallet", async () => {
      this.data = [];
      this.page = 1;
      await this.$fetch();
    });
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
            transform: rotate(0deg);
            &:focus {
              transform: rotate(360deg);
              transition: transform 0.8s ease 0s;
            }
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
        transition: opacity 0.3s ease-in 0s;
        &.photo-enter,
        &.photo-leave-to {
          opacity: 0;
        }

        &.photo-leave-to {
          transition-duration: 0s;
        }
        .photo-item {
          flex-direction: column;
          -webkit-box-pack: justify;
          justify-content: space-between;
          position: relative;
          cursor: pointer;
          border-radius: 30px;
          overflow: hidden;
          background: #fff;
          box-sizing: border-box;
          //&.photo-leave-to,
          //&.photo-leave-active {
          //  opacity: 0;
          //  //transform: translateY(-30px);
          //}
          //&.photo-leave-active {
          //  transition-delay: 0s;
          //}
          .rank {
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
            background: linear-gradient(
              238.96deg,
              #f9e2ee 27.25%,
              #fff9fc 98.56%
            );
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
            white-space: nowrap;
            display: inline-block;
          }
          .sort {
            .select {
              margin: 0;
              ::v-deep .customSelect {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                width: 94px;
                height: 24px;
                line-height: 24px;
                &.eng {
                  width: 126px;
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
          .photo-item {
            box-sizing: border-box;
            border-radius: 20px;
            .image {
              position: relative;
              width: 100%;
              height: auto;
              &:after {
                display: block;
                content: "";
                padding-bottom: 100%;
                background: linear-gradient(
                  238.96deg,
                  #f9e2ee 27.25%,
                  #fff9fc 98.56%
                );
              }
              img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            .rank {
              padding: 8px 10px;
              font-size: 12px;
              z-index: 2;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 208px;
  height: 52px;
  background: #fff;
  border-radius: 25px;
  margin-top: 20px;
  span {
    display: inline-block;
    font-family: "Sandoll GothicNeoRound", sans-serif;
    font-size: 18px;
    &.first {
      width: 95px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.last {
    }
  }
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
    .modal-default-button {
      &::before {
        width: 48px;
        height: 48px;
        background-size: 100%;
      }
    }
    .modal-body {
      .inner {
        display: flex;
        .nft-thumb {
          flex: 0 0 460px;
          width: 460px;
          background: linear-gradient(
            238.96deg,
            #f9e2ee 27.25%,
            #fff9fc 98.56%
          );
          .pc & {
            background: none;
          }
          span {
            display: inline-block;
            position: relative;
            padding-top: 100%;
            background: linear-gradient(
              238.96deg,
              #f9e2ee 27.25%,
              #fff9fc 98.56%
            );
            overflow: hidden;
            .pc & {
              width: 460px;
              height: 460px;
              border-radius: 20px;
            }
            .thumb {
              position: absolute;
              object-fit: contain;
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
            }
          }
          .btn-opensea {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 80px;
            font-size: 24px;
            line-height: 36px;
            margin-top: 24px;
            img {
              width: 40px;
              height: 40px;
              object-fit: cover;
              margin-right: 3px;
            }
            .icon {
              width: 40px;
              height: 40px;
              background: url("@/assets/images/belly-photo-detail-opensea.svg")
                center no-repeat;
              margin-right: 3px;
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
              padding: 3px 15px 4px;
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
                &:nth-child(2) {
                  padding-left: 20px;
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
                border-radius: 15px;
                .icon {
                  width: 20px;
                  height: 20px;
                  background: url("@/assets/images/ic_20_opensea_round.svg")
                    center no-repeat;
                  margin-right: 4px;
                }
              }
            }
          }
          .nft-info {
            flex: none;
            margin: 0;
            padding: 30px 20px 140px;
            .top {
              .nft-title {
                font-size: 26px;
                line-height: 39px;
              }
            }
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
                    padding: 15px;
                    border-radius: 10px;
                    .desc {
                      max-width: 80%;
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
            transform: rotate(0deg);
          }
          &:focus {
            img {
              transform: rotate(360deg);
              transition: transform 0.8s ease 0s;
            }
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
