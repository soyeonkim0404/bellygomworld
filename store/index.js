import Vuex from "vuex";
import myNft from "@/server-middleware/myNft.json";

const store = () =>
  new Vuex.Store({
    state: {
      locale: "KOR",
      connect: "no-connect",
      klaytnAddress: "",
      klaytnAddressLast: "",
      myNft: [],
    },
    getters: {
      getLocale(state) {
        return state.locale;
      },
      getConnect(state) {
        return state.connect;
      },
      getMyNftData(state) {
        return state.myNftData;
      },
      getFilter(state) {
        return state.filter;
      },
      getOderBy(state) {
        return state.orderBy;
      },
      getKeyword(state) {
        return state.keyword;
      },
      getPage(state) {
        return state.page;
      },
      getPager(state) {
        return state.pager;
      },
      getPageSize(state) {
        return state.pageSize;
      },
      getData(state) {
        return state.data;
      },
      getKlaytnAddress(state) {
        return state.klaytnAddress;
      },
      getKlaytnAddressLast(state) {
        return state.klaytnAddressLast;
      },
    },
    mutations: {
      setENG(state) {
        document.cookie = "b_locale=ENG;";
        state.locale = "ENG";
      },
      setKOR(state) {
        document.cookie = "b_locale=KOR;";
        state.locale = "KOR";
      },
      setConnect(state) {
        state.connect = "is-connect";
      },
      setNoConnect(state) {
        state.connect = "no-connect";
      },
      setMyNft(state, payload) {
        state.myNft = payload;
      },
      setKlaytnAddress(state, payload) {
        state.klaytnAddress = payload;
        state.klaytnAddressLast = payload.slice(-3, payload.length);
      },
    },
    actions: {
      async fetchMyWallet({ commit, dispatch }) {
        if (
          window.klaytn.networkVersion === undefined ||
          window.klaytn.networkVersion === "loading"
        ) {
          window.location.reload();
          location.reload();
          return;
        }

        try {
          const klaytn = window.klaytn; //크롬에 깔린 카이카스 확장프로그램 안에는 klaytn 이 내장되어있다.
          const accounts = await klaytn.enable(); //카이카스 로그인

          let nftTokenIdArray = [];
          const contractInstance = window.caver.contract.create(
            myNft,
            "0x141637b601d0fc907c0acb8ae5060ee22bb7b3f6"
          ); //컨트렉트 매니저 객체 생성
          let countNFT = await contractInstance.methods
            .balanceOf(klaytn.selectedAddress)
            .call();
          for (let i = 0; i < countNFT; i++) {
            nftTokenIdArray.push(
              await contractInstance.methods
                .tokenOfOwnerByIndex(klaytn.selectedAddress, i)
                .call()
            );
          }
          console.log("nftTokenIdArray", nftTokenIdArray);

          nftTokenIdArray = nftTokenIdArray.map((el) => {
            return el.padStart(4, "0");
          });
          commit("setKlaytnAddress", klaytn.selectedAddress);
          commit("setMyNft", nftTokenIdArray);
          commit("setConnect");
        } catch (err) {
          console.log(err);
        }
      },
      async callMyNftData({ commit, getters, dispatch }) {
        if (getters.getConnect === "is-connect") {
          if (window.confirm("지갑연결을 해제하시겠습니까?")) {
            commit("setNoConnect");
            commit("setMyNft", []);
          }
        } else {
          if (window.confirm("지갑연결을 하시겠습니까?")) {
            try {
              dispatch("fetchMyWallet");
            } catch (err) {
              console.log(err);
              alert(
                "Kaikas 지갑이 설치되어 있지 않습니다.\n크롬에서 Kaikas 확장 프로그램을 설치해주세요!"
              );
              window.open(
                "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi"
              );
            }
          }
        }
      },
    },
  });

export default store;
