import Vuex from 'vuex'
import myNft from "@/server-middleware/myNft.json";

const store = () => new Vuex.Store({

  state: {
    locale: 'KOR',
    connect: 'no-connect',
    myNftData: [],
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
          "Combination Hair",-
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
    orderBy: {
      list: [
        { value: "1", kor: "랭킹 순", eng: "Highest Rank"},
        { value: "2", kor: "랭킹 역순", eng: "Lowest Rank" },
        { value: "3", kor: "번호 순", eng: "Ascending" },
        { value: "4", kor: "번호 역순", eng: "Descending" },
      ],
      selected: { value: "1", kor: "랭킹 순", eng: "Highest Rank"},
    },
    keyword: "",
  },
  getters: {
    getLocale (state) {
      return state.locale;
    },
    getConnect (state) {
      return state.connect;
    },
    getMyNftData (state) {
      return state.myNftData;
    }
  },
  mutations: {
    setENG (state) {
      document.cookie = "b_locale=ENG;";
      state.locale = 'ENG';
    },
    setKOR (state) {
      document.cookie = "b_locale=KOR;";
       state.locale = 'KOR';
    },
    setConnect (state) {
      document.cookie = "b_connect=is-connect";
      state.connect = 'is-connect';
    },
    setNoConnect (state) {
      document.cookie = "b_connect=no-connect";
      state.connect = 'no-connect';
    },
    setMyNftData(state, payload){
      state.myNftData = payload;
    },
    setRefreshMyNftData(state){
      state.myNftData = [];
    },
  },
  actions: {
    async callMyNftData ({commit, state}) {
      try {
        console.log('dfdsdfsfd')
        const klaytn = window.klaytn; //크롬에 깔린 카이카스 확장프로그램 안에는 klaytn 이 내장되어있다.
        const accounts = await klaytn.enable(); //카이카스 로그인
        let nftTokenIdArray = [];
        console.log(myNft);
        const contractInstance = window.caver.contract.create(myNft, "0x141637b601d0fc907c0acb8ae5060ee22bb7b3f6"); //컨트렉트 매니저 객체 생성
        let countNFT = await contractInstance.methods.balanceOf(klaytn.selectedAddress).call()
        for (let i = 0; i < countNFT; i++){
          nftTokenIdArray.push(await contractInstance.methods.tokenOfOwnerByIndex(klaytn.selectedAddress, i).call());
        }

        const filter = {};
        for (const [key, value] of Object.entries(state.filter)) {
          filter[key] = value.selected.join();
        }
        const { data: response } = await this.$axios.get("/apiBellyPhoto", {
          params: {
            ...filter,
            orderBy: state.selected,
            keyword: state.keyword,
            page: '1',
            pageSize: '10000',
          },
        });
        const myNftArray = [];
        console.log('아이디',nftTokenIdArray)
        nftTokenIdArray.forEach((item)=>{
          myNftArray.push(response.pageOfItems.filter((e)=>{
            return e.id == item.padStart(4, '0');
          }));
        })
        console.log('마이nft데이터',myNftArray)
        commit('setMyNftData',myNftArray);
        commit("setConnect");
      } catch (e) {
        console.log(e)
      }
    }
  }
})

export default store