<template>
  <div class="wrap">
    <h2 class="sub-title">BELLY PHOTO</h2>
    <div class="contents">
      <div class="left">
        <InputSearch v-model="keyword" placeholder="#Number" />
        <div class="filter">
          <div class="con-title">
            Filter
            <button type="button" class="btn-reset">
              <img src="@/assets/images/ic_reset.svg" alt="" />
            </button>
          </div>
          <AccordionComponent :list="filterList">
            <template #title="{ item }">
              {{ item.title }}
            </template>
            <template #cont="{ item }">
              <ul class="check-list">
                <li v-for="(list, index) in item.list" :key="index">
                  <InputCheckbox
                    v-model="filterChkList"
                    :value="list.value"
                    :disabled="list.disabled"
                  >
                    {{ list.value }}
                  </InputCheckbox>
                </li>
              </ul>
            </template>
          </AccordionComponent>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="total"><span>10,000</span> Items</div>
          <div class="sort">
            <div class="toggle">
              <span>MY NFTs</span>
            </div>
            <div class="select"></div>
          </div>
        </div>
        <ul class="photo">
          <li v-for="(item, index) in photoList" :key="index" class="item">
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
  </div>
</template>

<script>
export default {
  name: "bellyPhoto",
  layout: "bellyPhoto",
  data() {
    return {
      keyword: "",
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
              value: "Color",
            },
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
            { value: "Category0000" },
            { value: "Category0000" },
            { value: "Category0000" },
            { value: "Category0000" },
            { value: "Category0000" },
            { value: "Category0000" },
            { value: "Category0000" },
            { value: "Category0000" },
            { value: "Category0000" },
            { value: "Category0000" },
            { value: "Category0000" },
            { value: "Category0000" },
          ],
        },
        {
          title: "Test0000",
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
          title: "Test1111",
          list: [
            {
              value: "Color",
            },
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
      ],
      filterChkList: [],
      photoList: [
        {
          lank: 10000,
          nft: "9999",
        },
        {
          lank: 9999,
          nft: "8888",
        },
        {
          lank: 1,
          nft: "1234",
        },
        {
          lank: 100,
          nft: "4985",
        },
        {
          lank: 99,
          nft: "2945",
        },
        {
          lank: 34,
          nft: "2367",
        },
        {
          lank: 3,
          nft: "0987",
        },
        {
          lank: 980,
          nft: "3380",
        },
      ],
    };
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
        ::v-deep .accordion-list {
          .accordion-item {
            .title {
              position: relative;
              padding: 27px 30px 26px;
              font-size: 16px;
              line-height: 21px;
              border-radius: 0;
              border-bottom: 1px solid #dddddd;
              &::before {
                content: none;
              }
              &::after {
                content: "";
                display: block;
                position: absolute;
                top: 50%;
                right: 30px;
                width: 24px;
                height: 24px;
                transform: translateY(-50%);
                background: url("@/assets/images/ic_plus.svg") center no-repeat;
              }
              &.active {
                &::after {
                  background: url("@/assets/images/ic_minus.svg") center
                    no-repeat;
                }
              }
            }
            .accordion-content {
              .cont {
                border-radius: 0;
                padding: 25px 20px 25px 32.5px;
                border-bottom: 1px solid #dddddd;
                p {
                  max-height: 382px;
                  padding: 0;
                  border: none;
                  font-size: 0;
                  overflow-y: auto;
                  &::before {
                    content: none;
                  }
                  .check-list {
                    li {
                      display: flex;
                      height: 24px;
                      & + li {
                        margin-top: 20px;
                      }
                    }
                  }
                }
              }
            }
            & + .accordion-item {
              margin-top: 0;
            }
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
          .toggle {
            span {
            }
          }
          .select {
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
