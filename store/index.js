import Vuex from "vuex";
import myNft from "@/server-middleware/myNft.json";

const store = () =>
  new Vuex.Store({
    state: {
      locale: "KOR",
      connect: false,
      klaytnAddress: "",
      klaytnAddressLast: "",
      myNft: [],
    },
    getters: {
      getLocale(state) {
        return state.locale;
      },
      getMyNft(state) {
        return state.myNft;
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
        state.connect = true;
      },
      setNoConnect(state) {
        state.connect = false;
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
      async fetchMyDataArray({ commit }) {
        let nftTokenIdArray = [];
        const contractInstance = window.caver.contract.create(
          myNft,
          "0xce70eef5adac126c37c8bc0c1228d48b70066d03"
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

        nftTokenIdArray = nftTokenIdArray.map((el) => {
          return el.padStart(4, "0");
        });
        console.log("mynft", klaytn.selectedAddress);
        commit("setKlaytnAddress", klaytn.selectedAddress);
        commit("setMyNft", nftTokenIdArray);
        commit("setConnect");
      },
      async fetchMyWallet({ dispatch }, payload) {
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
          console.log(accounts);
          setTimeout(async () => {
            await dispatch("fetchMyDataArray");
          }, 800);
        } catch (err) {
          console.log(err);
        }
      },
      async callMyNftData({ commit, getters, dispatch, state }) {
        if (state.connect) {
          if (window.confirm("지갑연결을 해제하시겠습니까?")) {
            commit("setMyNft", []);
            commit("setNoConnect");
          }
        } else {
          if (window.confirm("지갑연결을 하시겠습니까?")) {
            try {
              commit("setMyNft", []);
              await dispatch("fetchMyWallet");
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
