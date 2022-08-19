<template>
  <div class="wrap">
    <h2 class="sub-title">BELLY PHOTO</h2>
    <div class="contents">
      <div class="left">
        <InputSearch v-model="keyword" placeholder="#Number" />
        <div class="filter" v-if="$mq === 'pc'">
          <div class="con-title">
            Filter
            <button type="button" class="btn-reset">
              <img src="@/assets/images/ic_reset.svg" alt="" />
            </button>
          </div>
          <BellyPhotoFilter :list="filterList" :filterChkList="filterChkList" />
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="total"><span>10,000</span> Items</div>
          <div class="sort">
            <div class="toggle">
              <span>MY NFTs</span>
              <label class="switch">
                <input type="checkbox" @click="toggleNFT" />
                <span class="slider round" />
              </label>
            </div>
            <div class="select">
              <SelectBox
                v-model="selectValue"
                :items="selectOption"
                :input_id="'sort'"
              />
            </div>
          </div>
        </div>
        <ul class="photo">
          <li
            v-for="(item, index) in photoList"
            :key="index"
            class="item"
            @click="detailNft(item.id)"
          >
            <span class="lank">Rank {{ item.lank }}</span>
            <span class="image"
              ><img src="@/assets/images/belly_photo_teest.svg"
            /></span>
            <span class="info">Bellygom #{{ item.nft }}</span>
            <span class="border"></span>
          </li>
        </ul>
      </div>
    </div>
    <!--    <photoModal />-->
  </div>
</template>

<script>
import photoModal from "@/pages/bellyPhoto/modal";
export default {
  name: "bellyPhoto",
  layout: "bellyPhoto",
  components: { photoModal },
  data() {
    return {
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
            { value: "Category0002" },
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
        },
        {
          id: 2,
          lank: 9999,
          nft: "8888",
        },
        {
          id: 3,
          lank: 1,
          nft: "1234",
        },
        {
          id: 4,
          lank: 100,
          nft: "4985",
        },
        {
          id: 5,
          lank: 99,
          nft: "2945",
        },
        {
          id: 6,
          lank: 34,
          nft: "2367",
        },
        {
          id: 7,
          lank: 3,
          nft: "0987",
        },
        {
          id: 8,
          lank: 980,
          nft: "3380",
        },
      ],
      selectValue: "",
      selectOption: [
        {
          kor: "랭킹 순",
          eng: "Highest Rank",
        },
        {
          kor: "랭킹 역순",
          eng: "Lowest Rank",
        },
        {
          kor: "번호순",
          eng: "Ascending",
        },
        {
          kor: "번호 역순",
          eng: "Descending",
        },
      ],
    };
  },
  methods: {
    toggleNFT() {
      this.myNFT = !this.myNFT;
    },
    detailNft() {},
  },
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding-top: 110px;
  .sub-title {
    margin-top: 120px;
    text-align: center;
    font-family: "Sandoll Odongtong", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 104px;
  }
  .contents {
    display: flex;
    margin: 80px 0;
    .left {
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
            width: 24px;
            height: 24px;
          }
        }
      }
    }
    .right {
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
              background-color: #101010;
            }
            input:focus + .slider {
              box-shadow: 0 0 1px #101010;
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
          .lank {
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            position: absolute;
            top: 10px;
            left: 10px;
            background: #fff;
            height: 40px;
            padding: 15px;
            border-radius: 20px;
            font-size: 14px;
            color: #000;
          }
          .image {
            width: 100%;
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
  }
}
</style>
