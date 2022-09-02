<template>
  <div class="wrap">
    <h2 class="sub-title">BELLY PHOTO</h2>
    <div class="contents">
      <div class="section1">
        <InputSearch
          v-model="keyword"
          placeholder="Number"
          @input="inputFetch($event)"
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
                <img :src="item.image2" :alt="item.id" />
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
              <img :src="detailNftInfo.image2" class="thumb" />
            </span>
            <div class="button-wrap">
              <a
                :href="`https://opensea.io/assets/klaytn/0xce70eef5adac126c37c8bc0c1228d48b70066d03/${parseInt(
                  detailNftInfo.id
                )}`"
                target="_blank"
                class="btn-opensea"
              >
                <i class="icon" />View on OpenSea</a
              >
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
            "Mixgreen Gradient",
            "Star Fantasy",
            "Sky Urban",
            "Planet Fantasy",
            "Heart Gradient",
            "Vertical Gradient",
            "Beach Nature",
            "Point Gradient",
            "Simple Gradient",
            "Rocket Space",
            "Deep Givry",
            "Sundown Nature",
            "Basic Gradient",
            "Planet Space",
            "Ice Mountain Nature",
            "Mixpurple Gradient",
            "Mixyellow Gradient",
            "Fullmoon Urban",
            "Cloud Nature",
            "Desert Nature",
            "Square Gradient",
            "Castle Nature",
            "Neon Urban",
            "Scenery Nature",
            "Building Urban",
            "Tri Gradient",
            "Forest Nature",
            "Sunset Fantasy",
            "Random Gradient",
            "Balloon Fantasy",
            "Holic Gradient",
            "Saturn Space",
            "4tone Gradient",
            "Pink Gradient",
            "Mixpink Gradient",
            "Green Gradient",
            "Up Gradient",
            "Landscape Nature",
            "Sun Fantasy",
            "3tone Gradient",
            "Moon Space",
            "Circle Aura",
            "Bridge Urban",
            "Object Gradient",
            "Aurora",
            "Sky Fantasy",
            "Night Urban",
            "Castle Fantasy",
            "Wave Gradient",
            "Meteor Space",
            "Tree Fantasy",
            "Gradient",
            "Mountain Nature",
            "Candy Fantasy",
            "Rainbow Aura",
            "Ghost",
            "Hole Aura",
            "Techa Crystal Cave",
            "Outlaw Desert",
            "Witch",
            "Pink Aura",
            "Undercity Hidden Cave",
            "Undercity Crystal Cave",
            "Gashina",
            "Techa Spaceship Hallway",
            "Outlaw Desert Night",
            "Clown Gradient",
            "Belly Cloud",
          ],
          selected: [],
        },
        Body: {
          list: [
            "Belly Pink",
            "Pink Steel",
            "Giraffe",
            "Metalic Steel",
            "Stain Steel",
            "Woody Jewel",
            "Rough Steel",
            "Pearl Jewel",
            "Neon Jewel",
            "Pink Jewel",
            "Aluminium Steel",
            "Zebra",
            "Pattern Steel",
            "Purple Tiger",
            "Cattle",
            "Relic Steel",
            "Aqua Jewel",
            "Nacre Jewel",
            "Leopard",
            "Tiger",
          ],
          selected: [],
        },
        Clothes: {
          list: [
            "None",
            "Punk Jacket",
            "Skull Print Shirt",
            "Graffiti Hood",
            "Pastel Tshirt",
            "Black Bear Tshirt",
            "Heritage Pattern",
            "Black Space Tshirt",
            "Blue Print Tshirt",
            "Green Turtleneck",
            "Orange Padded Coat",
            "Rainbow Turtleneck",
            "Jacket",
            "Color Paint Hood",
            "Halloween Dress",
            "Space Pilot Suit",
            "White Fire Jacket",
            "Fusion Traditional",
            "Basic Tshirt",
            "Blue Jacket",
            "Blue Shirt",
            "Yellow Crop Tshirt",
            "Purple Uniform",
            "Orient Heritage",
            "Black White Print Tshirt",
            "Skeleton Hood",
            "Daily Dress",
            "Belly Tshirt",
            "Warrior",
            "Meeting Look",
            "RocknRoll Tshirt",
            "Baseball Jumper",
            "Lifestyle Print Tshirt",
            "Burgundy Tshirt",
            "Grey Print Hood",
            "2 Color ZipUp",
            "Pink Armor",
            "Black B Tshirt",
            "Gradient Uniform",
            "Red Leather Jacket",
            "Judge",
            "Punk Style ZipUp",
            "Normal Hood",
            "Print Sleeveless",
            "Pink Dress",
            "Black Heritage",
            "Cow Jacket",
            "Office Look",
            "Club Crop Tshirt",
            "Gradient Tshirt",
            "Black Print Hood",
            "Orient Traditional",
            "Korean Traditional",
            "Modern Traditional",
            "Trench Coat",
            "Bead Dress",
            "Neon Print Hood",
            "Purple Armor",
            "Opera Costume",
            "Blue Crystal Dress",
            "Darth Vader Suit",
            "Purple Crystal Dress",
            "Skull Pattern Hood",
            "Purple Padded Coat",
            "Rainbow Armor",
            "Windstopper",
            "Witch Cloak",
            "Gashina Dress",
            "Open Heart Purple",
            "Emblem See-through Shawl",
            "Clown Costume",
            "Viking Armor",
            "Cupid Gown",
            "Belly Pajamas",
          ],
          selected: [],
        },
        Head: {
          list: [
            "Cutie Cap",
            "None",
            "Pilot Cap",
            "Blue Shaggy Cut",
            "Circus Hat",
            "Orange Point Cut",
            "Slant Cap",
            "Yellow Root Cut",
            "Two Block Cut",
            "Motorcycle Cap",
            "Cooking Hat",
            "Brown Long",
            "Purple Short",
            "Old School",
            "Pink Bang",
            "Volume Short Cut",
            "Crystal Antler",
            "Dark Aqua",
            "Ponytail",
            "Indian",
            "Dark Long",
            "Stone Casque",
            "Cowboy",
            "Unbalance Cut",
            "Mystic Pastel",
            "Headphone",
            "Viking Casque",
            "Shaggytail",
            "Blue Ring",
            "Baseball Cap",
            "Rainbow Ring",
            "Under Cut",
            "Yellow Ring",
            "Traditional Crown",
            "Twintail",
            "Magician",
            "Witch Hat",
            "Purple Beanie",
            "Noble Hat",
            "Gold Crown",
            "Cyber Ring",
            "Battle Casque",
            "Winter Casque",
            "Crystal Queen",
            "Fashion Casque",
            "Beret Hat",
            "Hologram Visor",
            "Stone Crown",
            "Pastel Casque",
            "Gashina Headband",
            "Short Twintail Darkblue",
            "Deer Bone Mask",
            "Clown Hat",
            "Angel Ring",
            "Belly Sleep Mask",
          ],
          selected: [],
        },
        Acc: {
          list: [
            "King Chain",
            "None",
            "Crown Chain",
            "Skull Earring",
            "Gem Necklace",
            "Skull Sleep Mask",
            "Brown Mustache",
            "Belly Chain",
            "General Pole",
            "Bat Necklace",
            "Pixel Sunglasses",
            "Whistle Necklace",
            "Creature Necklace",
            "Mint Night Cloak",
            "Purple Headband",
            "Flake Necklace",
            "Black Mustache",
            "Circle Sunglasses",
            "Ski Goggles",
            "Rainbow Scarf",
            "Retro Glasses",
            "Pink Green Scarf",
            "Angel Pole",
            "Pink Eye Mask",
            "Butterfly Scarf",
            "Red Glasses",
            "Skull Chain",
            "Dollar Chain",
            "Pink Sunglasses",
            "Yellow Star Chain",
            "Star Glasses",
            "Check Scarf",
            "Funny Glasses",
            "Party Sunglasses",
            "Tube Necklace",
            "Retro Black Glasses",
            "Neon Mustache",
            "Bow Arrow",
            "Heart Earring",
            "Country Mustache",
            "Heart Sunglasses",
            "Gold Point Scarf",
            "Fashion Glasses",
            "Red Earring",
            "Gentle Mustache",
            "Pink Flower Cloak",
            "Cyber Sunglasses",
            "Sword",
            "Stone Necklace",
            "Laser Gun",
            "Pirate Eyepatch",
            "Skinny Glasses",
            "Purple Star Scarf",
            "Battle Pole",
            "Combat Pole",
            "Devil Horne",
            "Tri Pole",
            "King Pole",
            "Orient Earring",
            "Purple Ribbon Cloak",
            "Black Sunglasses",
            "Wing Earring",
            "Hot Heart Sunglasses",
            "Bomb",
            "Stone Gun",
            "Color Sunglasses",
            "Aqua Earring",
            "Green Leaf Scarf",
            "Bone Knife",
            "Yellow Bat Necklace",
            "Deer Horne",
            "Pink Heart Horne",
            "Red Horne",
            "Yellow Corn Horne",
            "Eye Patch",
            "Gashina Earring",
            "Techa Earrings",
            "Color Corn Horne",
            "Emblem Necklace",
            "Clown Balloon",
            "Cupid Bow",
          ],
          selected: [],
        },
        Special: {
          list: [
            "None",
            "Black",
            "Mint",
            "Green",
            "Pink",
            "Rainbow",
            "Secret",
            "Thunder",
            "Western",
            "Devil",
            "Skeleton",
            "Crocodile",
            "Future",
            "Iron",
            "Orient",
            "Rabbit",
            "Shark",
            "Peter",
            "Fairy",
            "Belly",
            "Viking",
            "White",
          ],
          selected: [],
        },
        Grade: {
          list: ["Friends",
            "Surprise",
            "Super",
            "Mega",
            "Holic",
            "Belly"],
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
    inputFetch($event) {
      if (!isNaN($event.data)) {
        this.resetFetch();
      }
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
    this.$store.dispatch("fetchMyDataArray");
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
          .pc & {
            flex: 0 0 460px;
            width: 460px;
            background: none;
          }
          span {
            display: inline-block;
            width: 100%;
            position: relative;
            padding-top: 100%;
            background: linear-gradient(
              238.96deg,
              #f9e2ee 27.25%,
              #fff9fc 100%
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
