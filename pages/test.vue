<template>
  <div class="smy-warp">
    <transition-group name="list" class="list" tag="ul">
      <li v-for="item in data" :key="item.id" class="list-item">
        <div class="img">
          <svg
            width="288"
            height="288"
            viewBox="0 0 288 288"
            xmlns="http://www.w3.org/2000/svg"
            fadeout="https://thumb.sunmiya.club/1552.png"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#372F51" d="M0 0h288v288H0z"></path>
              <path
                d="M146.06 164.055c.074 0 .139.05.196.148a.71.71 0 0 1 .085.359v5.325a.565.565 0 0 0 .11.377c.082.111.18.167.293.167.114 0 .208-.056.281-.167a.669.669 0 0 0 .11-.377v-5.325c0-.14.029-.26.086-.359.057-.098.126-.148.207-.148h3.297c.09 0 .159.056.208.167a.84.84 0 0 1 .073.34v5.708c0 .206-.036.412-.11.618-.073.206-.17.391-.293.556a1.583 1.583 0 0 1-.427.402.966.966 0 0 1-.525.154h-5.825a.975.975 0 0 1-.519-.154 1.546 1.546 0 0 1-.433-.402 2.113 2.113 0 0 1-.293-.556 1.832 1.832 0 0 1-.11-.618v-5.708a.84.84 0 0 1 .073-.34c.049-.111.118-.167.207-.167h3.31zm-15.187 0c.187 0 .362.052.525.155.163.103.305.237.427.401.123.165.22.35.293.556.074.206.11.412.11.618v1.15a.838.838 0 0 1-.073.339c-.048.111-.118.167-.207.167h-3.297c-.082 0-.151-.05-.208-.149a.706.706 0 0 1-.085-.358v-.803a.606.606 0 0 0-.135-.358c-.081-.1-.175-.149-.28-.149a.303.303 0 0 0-.27.155.747.747 0 0 0-.11.365v3.756a.577.577 0 0 0 .099.37c.073.107.166.16.28.16.106 0 .198-.049.275-.147a.703.703 0 0 0 .14-.359v-.803a.854.854 0 0 1 .092-.358c.053-.099.12-.149.202-.149h3.297c.09 0 .159.056.207.167a.838.838 0 0 1 .073.34v1.15c0 .205-.036.411-.11.617-.073.206-.17.391-.293.556a1.58 1.58 0 0 1-.427.402.966.966 0 0 1-.525.154h-5.825a.975.975 0 0 1-.518-.154 1.547 1.547 0 0 1-.434-.402 2.113 2.113 0 0 1-.293-.556 1.832 1.832 0 0 1-.11-.618v-4.485c0-.206.037-.412.11-.618.073-.206.17-.39.293-.556.122-.164.267-.298.434-.401a.977.977 0 0 1 .518-.155h5.825zm28.429 0c.187 0 .362.052.525.155.163.103.305.237.428.401.121.165.22.35.293.556.073.206.11.412.11.618v1.248c0 .165-.054.338-.16.52a3.17 3.17 0 0 1-.341.48c.081.075.165.182.25.322.086.14.153.28.202.42.04.124.056.206.048.247v1.248c0 .206-.036.412-.11.618a2.132 2.132 0 0 1-.292.556 1.59 1.59 0 0 1-.428.402.965.965 0 0 1-.525.154h-6.9c-.089 0-.158-.056-.207-.167a.837.837 0 0 1-.073-.34v-6.931a.84.84 0 0 1 .073-.34c.049-.111.118-.167.208-.167h6.899zm-22.368 0c.074 0 .139.05.196.148a.71.71 0 0 1 .085.359v4.398c-.008.149.023.25.092.303.069.054.173.08.311.08h3.334c.09 0 .179.031.268.093.09.062.135.15.135.266v1.94a.39.39 0 0 1-.403.358H134.7a.973.973 0 0 1-.52-.154 1.552 1.552 0 0 1-.433-.402 2.132 2.132 0 0 1-.293-.556 1.835 1.835 0 0 1-.11-.618v-5.708a.84.84 0 0 1 .074-.34c.048-.111.118-.167.207-.167h3.31zm19.462 1.57h-.196c-.081 0-.134.02-.158.061a.49.49 0 0 0-.05.198v4.176c-.007.14 0 .237.025.29.025.054.086.08.183.08h.196c.114 0 .208-.055.28-.166a.669.669 0 0 0 .11-.377v-.531a.555.555 0 0 0-.097-.364.403.403 0 0 0-.269-.18h-.024v-1.569h.024a.383.383 0 0 0 .263-.179.639.639 0 0 0 .104-.365v-.53a.583.583 0 0 0-.104-.378c-.078-.111-.173-.166-.287-.166zm4.843-24.45c.293 0 .506.147.641.444.115.254.145.554.09.899l-.035.176-1.172 4.782c-.05.42.024.778.22 1.074.195.297.488.445.879.445.39 0 .763-.148 1.117-.445.295-.247.526-.536.694-.87l.094-.204 1.172-4.782a2.28 2.28 0 0 1 .568-1.075c.24-.254.486-.4.735-.436l.126-.009h12.381c.342 0 .568.167.678.5.092.278.11.561.059.847l-.04.173-4.25 17.125c-.147.618-.434 1.236-.86 1.853a8.812 8.812 0 0 1-1.503 1.668 7.661 7.661 0 0 1-1.905 1.205 5.16 5.16 0 0 1-1.813.456l-.257.007h-3.667v-.364c0-2.317-1.818-4.225-4.082-4.335l-.207-.005h-17.81l.037-.243.05-.242.88-3.447a3.02 3.02 0 0 1 .53-1.02c.225-.292.482-.456.772-.492l.126-.008h12.382c.293 0 .513.148.66.445.125.254.152.553.08.898l-.044.177-.623 2.41c-.05.42.037.778.256 1.074.22.296.525.445.916.445.415 0 .806-.167 1.173-.5a2.51 2.51 0 0 0 .672-.954l.06-.177.806-3.447c.049-.272-.037-.593-.256-.964-.196-.33-.449-.513-.76-.55l-.12-.006h-10.916c-.684 0-1.295-.154-1.832-.464a4 4 0 0 1-1.319-1.204 4.383 4.383 0 0 1-.695-1.668 3.938 3.938 0 0 1 .008-1.589l.065-.265 1.428-5.82c.098-.345.275-.685.531-1.018.225-.292.482-.457.772-.493l.126-.008h12.382zm48.431-.001c.684 0 1.294.155 1.832.463.537.31.977.711 1.319 1.205.342.495.573 1.05.696 1.668a4.3 4.3 0 0 1 .018 1.589l-.055.264-4.213 17.126a3.028 3.028 0 0 1-.53 1.019c-.225.292-.482.456-.772.492l-.126.008h-12.382c-.293 0-.507-.148-.641-.444-.116-.255-.146-.554-.09-.899l.035-.176 1.172-4.782c.049-.42-.025-.778-.22-1.075-.196-.296-.489-.445-.879-.445s-.763.149-1.117.445a2.733 2.733 0 0 0-.695.87l-.093.205-1.172 4.782c-.098.42-.287.778-.568 1.075-.24.254-.486.399-.735.435l-.126.01h-12.382c-.342 0-.567-.167-.677-.501a1.688 1.688 0 0 1-.059-.847l.04-.172 1.429-5.82c.146-.617.427-1.235.843-1.853a8.054 8.054 0 0 1 1.502-1.668 8.026 8.026 0 0 1 1.923-1.205 5.172 5.172 0 0 1 1.813-.456l.256-.007h10.917c.17 0 .366-.056.586-.167.22-.111.422-.241.605-.39.183-.148.341-.308.476-.481.107-.138.18-.269.217-.392l.02-.09.843-3.447c.122-.42.074-.797-.146-1.131-.22-.334-.538-.5-.952-.5-.391 0-.764.148-1.118.444-.303.255-.53.554-.682.9l-.069.175-.586 2.41c-.122.42-.318.778-.586 1.075-.23.254-.47.4-.718.435l-.124.01h-12.382c-.343 0-.568-.167-.678-.5a1.692 1.692 0 0 1-.059-.848l.04-.172.843-3.448c.147-.617.434-1.235.861-1.853a8.508 8.508 0 0 1 1.52-1.668 8.025 8.025 0 0 1 1.923-1.205 5.173 5.173 0 0 1 1.813-.456l.257-.007h21.833zm-84.25-.014c.341 0 .567.167.677.5.092.279.11.561.058.848l-.04.172-4.483 18.18a4.358 4.358 0 0 0-2.173 3.541l-.006.23v.364h-12.277c-.293 0-.507-.149-.64-.445-.116-.254-.146-.554-.09-.899l.034-.176 3.993-16.273c.206-.834.036-1.277-.509-1.329l-.114-.005h-.55c-.415 0-.805.167-1.171.5a2.51 2.51 0 0 0-.673.953l-.06.178-3.92 15.976c-.098.42-.287.778-.568 1.075-.24.254-.486.4-.735.435l-.125.01h-8.572c-.294 0-.508-.149-.642-.445-.115-.254-.145-.554-.09-.899l.036-.176 3.92-16.05c.121-.42.066-.785-.166-1.094-.232-.308-.519-.463-.86-.463-.538 0-.971.167-1.301.5a2.688 2.688 0 0 0-.608.924l-.07.207-3.92 15.976c-.097.42-.287.778-.567 1.075-.241.254-.486.4-.736.435l-.125.01H75.965c-.342 0-.568-.167-.678-.5a1.689 1.689 0 0 1-.058-.848l.04-.172 4.213-17.125c.146-.618.433-1.236.86-1.854a8.502 8.502 0 0 1 1.521-1.667 8.016 8.016 0 0 1 1.923-1.205 5.17 5.17 0 0 1 1.813-.457l.257-.007h39.563zm18.379.014c.293 0 .506.149.64.445.116.254.145.554.09.899l-.034.176-4.343 17.61h-14.507l4.343-17.61c.098-.346.275-.686.531-1.02.225-.291.482-.456.772-.492l.126-.008h12.382zM128.044 116c.608 0 1.15.137 1.628.412.478.275.868.632 1.173 1.071.303.44.51.934.618 1.482.109.55.098 1.1-.032 1.648l-.75 3.064c-.086.308-.244.61-.471.906-.229.297-.495.445-.798.445h-11.006c-.26 0-.456-.132-.587-.395-.13-.264-.14-.582-.032-.956l.521-2.142c.043-.373-.027-.691-.212-.955-.184-.264-.45-.395-.797-.395-.37 0-.717.148-1.042.444a2.173 2.173 0 0 0-.652 1.005l-.749 3.065a.974.974 0 0 0 .033.428c.043.154.103.296.18.428.075.132.178.247.308.346.13.099.282.148.456.148h9.704a3.3 3.3 0 0 1 1.644.412c.489.275.885.632 1.189 1.071.304.44.51.934.618 1.483a3.83 3.83 0 0 1-.032 1.647l-1.27 5.173c-.087.308-.244.61-.472.906-.228.297-.494.445-.798.445H115.41c-.26 0-.45-.132-.57-.395-.12-.264-.136-.582-.049-.956l1.042-4.25c.043-.373-.022-.692-.195-.956-.174-.263-.435-.395-.782-.395h-13.285c-.304 0-.505-.149-.602-.445a1.516 1.516 0 0 1-.017-.906l2.019-8.27c.13-.549.385-1.098.765-1.648.38-.548.83-1.043 1.352-1.482a7.143 7.143 0 0 1 1.71-1.071 4.51 4.51 0 0 1 1.839-.412h19.407zm-15.76 15.255c.26 0 .456.132.586.396.13.263.14.582.032.955l-.781 3.23a2.032 2.032 0 0 1-.505.955c-.25.263-.504.395-.765.395H99.845c-.304 0-.505-.148-.602-.445a1.516 1.516 0 0 1-.017-.906l.782-3.229c.086-.307.244-.61.472-.906.228-.297.493-.445.798-.445h11.006zM146.507 116c.26 0 .45.132.57.395.119.264.135.583.049.956l-3.485 14.2c-.109.375-.065.71.13 1.006.196.296.478.444.847.444.37 0 .716-.148 1.042-.444.326-.297.543-.631.651-1.005l3.485-14.201c.086-.373.255-.692.504-.956.25-.263.505-.395.766-.395h11.006c.303 0 .504.148.602.445.098.296.103.599.016.906l-3.777 15.222c-.13.55-.386 1.099-.765 1.648a7.824 7.824 0 0 1-1.335 1.482c-.51.44-1.075.797-1.694 1.071a4.503 4.503 0 0 1-1.84.412h-19.406c-.608 0-1.151-.137-1.629-.412a3.718 3.718 0 0 1-1.188-1.07 3.756 3.756 0 0 1-.635-1.483 3.824 3.824 0 0 1 .033-1.648l3.777-15.222c.086-.307.244-.61.472-.906.228-.297.493-.445.798-.445h11.006zm42.428 0c.608 0 1.15.138 1.628.412.478.275.868.632 1.172 1.07.305.44.51.935.62 1.483.108.55.097 1.1-.033 1.648l-3.745 15.222c-.087.308-.244.61-.472.906-.228.297-.494.445-.798.445h-11.006c-.26 0-.45-.132-.57-.395-.12-.264-.136-.582-.049-.956l3.485-14.2c.108-.374.065-.709-.13-1.006-.196-.296-.478-.444-.847-.444h-.652c-.304 0-.51.07-.618.214-.11.143-.217.4-.326.774l-3.582 14.662a2.033 2.033 0 0 1-.504.956c-.25.263-.505.395-.766.395h-11.006c-.304 0-.505-.148-.602-.445a1.513 1.513 0 0 1-.016-.906l4.558-18.484c.087-.307.244-.61.472-.906.228-.297.494-.445.798-.445h22.99z"
                opacity="0.1"
                fill="#FFF"
              ></path>
            </g>
          </svg>
          <img :src="item.image" alt="" />
        </div>
        번호 : {{ item.id }}<br />
        랭킹 : {{ item.rank }}<br />
        {{ item.name }}
      </li>
    </transition-group>

    <div class="filter">
      {{ pager.totalItems }}
      <button @click="$fetch">Add</button>
      <select v-model="orderBy.selected" @change="resetFetch">
        <option
          v-for="item in orderBy.list"
          :key="item.value"
          :value="item.value"
        >
          {{ item.label }}
        </option>
      </select>
      {{ keyword }}
      <input v-model="keyword" type="text" @input="resetFetch" />
      <div v-for="(value, name, index) in filter" :key="index">
        <hr />
        <h3>{{ name }}</h3>
        <div class="check-wrap">
          <label v-for="check in value.list" :key="check">
            <input
              v-model="value.selected"
              type="checkbox"
              :value="check"
              @change="resetFetch"
            />
            <span>{{ check }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestsPage',
  data() {
    return {
      filter: {
        Background: {
          list: [
            'Angel',
            'Baby Pink',
            'Black',
            'Burgundy',
            'Combination',
            'Devil',
            'Dino',
            'Gashina',
            'Ghost',
            'Gray',
            'Green',
            'Heroine',
            'Ivory',
            'Khaki',
            'LALALAY',
            'Navy',
            'Neon Green',
            'Neon Light Green',
            'Neon Orange',
            'Neon Pink',
            'Neon Yellow',
            'Noir',
            'Orange',
            'Pajamas',
            'Pporappippam',
            'Siren',
            'Tail',
            'Turquoise',
            'Ultramarine',
            'Witch',
            'World Tour',
            "You can't sit with us",
          ],
          selected: [],
        },
        Wing: {
          list: [
            'None',
            'Angel Wings',
            'Angel Wings Black',
            'Devil Wings Black',
            'Devil Wings Red',
          ],
          selected: [],
        },
        Body: {
          list: ['Body', 'Ghost Body'],
          selected: [],
        },
        Necklace: {
          list: [
            'None',
            'Combination Necklace',
            'Crown Necklace',
            'LALALAY Necklace',
            'Noir Necklace',
            'Pporappippam Necklace',
            'Siren Necklace',
            'Y Necklace',
            "You can't sit with us Necklace",
          ],
          selected: [],
        },
        Makeup: {
          list: [
            'Combination Makeup',
            'Dino Makeup',
            'Gashina Makeup',
            'Ghost Makeup',
            'Heroine Makeup',
            'LALALAY Makeup',
            'Noir Makeup',
            'Siren Makeup',
            'Tail Makeup',
            'Witch Makeup',
            'World Tour Makeup',
            "You can't sit with us Makeup",
            'pporappippam Makeup',
          ],
          selected: [],
        },
        Sticker: {
          list: ['None', 'Pink heart sticker'],
          selected: [],
        },
        Dress: {
          list: [
            'Angel Costume',
            'Black Blazer Dress',
            'Black Knit',
            'Black Pajamas',
            'Blue Blazer Dress',
            'Blue Dress',
            'Blue Frill Dress',
            'Blue Pajamas',
            'Blue Polo Shirt',
            'Burgundy Polo Shirt',
            'Cardigan Dress',
            'Chain Leather Suit',
            'Combination Black Dress',
            'Combination Green Dress',
            'Combination Original Dress',
            'Combination Pink Dress',
            'Combination Purple Dress',
            'Combination Red Dress',
            'Denim Jacket',
            'Devil Costume',
            'Dino Costume',
            'Floral Pattern Dress',
            'Fur Crop Top',
            'Gashina Dress',
            'Ghost Costume',
            'Gray Frill Dress',
            'Gray Suit',
            'Green Blazer Dress',
            'Green Fur Jacket',
            'Green Knit',
            'Green Pajamas',
            'Heroine Black Dress',
            'Heroine Green Dress',
            'Heroine Original Dress',
            'Heroine Pink Dress',
            'Heroine Purple Dress',
            'Heroine Red Dress',
            'Initial Shirt',
            'Ivory Fur Jacket',
            'Ivory Knit',
            'Knit Sleeveless',
            'LALALAY Dress',
            'Lace Vest',
            'Leather Jacket',
            'Leather Turtleneck Suit',
            'Lemon Polo Shirt',
            'Noir Dress',
            'Original Frill Dress',
            'Pink Blazer Dress',
            'Pink Fur Jacket',
            'Pink Knit',
            'Pink Pajamas',
            'Pink Polo Shirt',
            'Polo Sweatshirt',
            'Pporappippam Dress',
            'Purple Blazer Dress',
            'Purple Frill Dress',
            'Purple Pajamas',
            'Rainbow Sweatshirt',
            'Red Blazer Dress',
            'Red Frill Dress',
            'Red Sunglasses Sleeveless',
            'Siren Dress',
            'Sky Polo Shirt',
            'Stained Blue Jacket',
            'Striped Coral Knit',
            'Striped Green Knit',
            'Striped Ivory Knit',
            'Striped Pink Knit',
            'TAIL Dress',
            'White Glitter Dress',
            'White Pajamas',
            'White Shirt',
            'Witch Cloak',
            'World Tour Black Dress',
            'World Tour Blue Dress',
            'World Tour Green Dress',
            'World Tour Original Dress',
            'World Tour Pink Dress',
            'World Tour Purple Dress',
            'Yellow Pajamas',
            'Yellow Polo Shirt',
            "You can't sit with us Dress",
          ],
          selected: [],
        },
        Eyes: {
          list: [
            'Combination Eyes',
            'Gashina Eyes',
            'Heroine Eyes',
            'LALALAY Eyes',
            'Noir Eyes',
            'Pink Eyes',
            'Pporappippam Eyes',
            'Siren Eyes',
            'Tail Blue Sky Eyes',
            'World Tour Eyes',
            'Yellow Eyes',
            "You can't sit with us Eyes",
          ],
          selected: [],
        },
        Lipline: {
          list: ['None', 'Lipline'],
          selected: [],
        },
        Hair: {
          list: [
            'None',
            'Blonde Wavy Hair',
            'Bloned Hair',
            'Bobbed Hair',
            'Combination Hair',
            'Gashina Hair',
            'Half Bun Hair',
            'Heroine Hair',
            'LALALAY Twin tails',
            'Low Twin tail',
            'Noir Hair',
            'Pporappippam Hair',
            'Purple Pucca Hair',
            'Purple Twin tail',
            'Short Twin tail',
            'Siren Hair',
            'Tail Cat Mask with Hair',
            'Wavy Ponytail',
            'Witch Hair',
            'World Tour Hair',
            "You can't sit with us Hair",
          ],
          selected: [],
        },
        Earring: {
          list: [
            'None',
            'Combination Earring',
            'Flower Earring',
            'Gashina Earring',
            'Heroine Earring',
            'LALALAY Earring',
            'Pearl Earrings',
            'Porappippam Earring',
            'Purple Earrings',
            'Rainbow Earring',
            'Ruby Earring',
            'Siren Earring',
            'Tail Pin Earring',
            'World Tour Earring',
            "You can't sit with us Earring",
          ],
          selected: [],
        },
        Head: {
          list: [
            'None',
            'Angel Ring',
            'Beret',
            'Black Cat mask',
            'Black Headband',
            'Black Ribbon',
            'Butterfly Headband',
            'Cat Ears',
            'Circlet',
            'Crown',
            'Cyberpunk Mask',
            'Devil Horns',
            'Fire Ring',
            'Flower Hairpin',
            'Flower Headband',
            'Gashina Headband',
            'Kiss Headband',
            'LALALAY Headband',
            'Pearl Hairpin',
            'Pink Headband',
            'Purple Cat mask',
            'Rabbit Ears',
            'Red Crown',
            'Red Hat',
            'Siren Hair tie',
            'Veil',
            'Witch Hat',
            "You can't sit with us Ribbon",
          ],
          selected: [],
        },
        Kongz_R: {
          list: ['None', 'Doo2 kongz'],
          selected: [],
        },
        Kongz_L: {
          list: ['None', 'Strongmin kongz'],
          selected: [],
        },
      },
      orderBy: {
        list: [
          { value: '1', label: '랭킹 순' },
          { value: '2', label: '랭킹 역순' },
          { value: '3', label: '번호 순' },
          { value: '4', label: '번호 역순' },
        ],
        selected: '1',
      },
      data: [],
      page: 1,
      keyword: '',
      pager: {},
    }
  },
  async fetch() {
    const filter = {}
    for (const [key, value] of Object.entries(this.filter)) {
      filter[key] = value.selected.join()
    }
    const { data: response } = await this.$axios.get('/api2', {
      params: {
        ...filter,
        orderBy: this.orderBy.selected,
        keyword: this.keyword,
        page: this.page,
        pageSize: 10,
      },
    })
    this.pager = response.pager
    this.data = this.data.concat(response.pageOfItems)
    this.page++
  },
  methods: {
    resetFetch() {
      this.data = []
      this.page = 1
      this.$fetch()
    },
  },
}
</script>
<style scoped lang="scss">
.smy-warp {
  display: flex;
  align-items: flex-start;
  .list {
    position: relative;
    flex: 0 0 50%;
    // display: flex;
    .list-item {
      display: inline-block;
      width: 100px;
      position: relative;
      transition: all 0.8s 0s ease;
      .img {
        position: relative;
        padding-top: 100%;
        svg,
        img {
          position: absolute;
          object-fit: contain;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
      }
    }
    .list-enter,
    .list-leave-to {
      opacity: 0;
      //  transform: translateY(30px);
    }

    .list-leave-to {
      transition-duration: 0s;
    }
  }
}
h3 {
  font-size: 30px;
}
.check-wrap {
  display: flex;
  flex-wrap: wrap;
  line-height: 30px;
  label {
    margin-right: 20px;
  }
}
</style>
