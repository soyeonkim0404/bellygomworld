<template>
  <div id="main">
    <div class="inner">
      <client-only>
        <full-page ref="fullpage" :options="options" id="fullpage">
          <section class="section">
            <img
              src="/power_saving.png"
              alt=""
              style="object-fit: cover; width: 100%; height: 100%"
            />
            <video
              ref="mainBelly"
              id="mainBelly"
              loop
              muted
              data-autoplay
              playsinline
              preload="auto"
            >
              <source
                src="@/assets/media/m_belly.mp4"
                type="video/mp4"
                poster="/power_saving.png"
              />
            </video>
          </section>
          <div
            class="cloud-wrapper ignore"
            @click="videoPlay()"
            :class="{ moved: cloudMoved }"
          >
            <img src="@/assets/m_images/main/img_keyvisual_01.png" />
          </div>
          <section class="section">
            <div class="second">
              <img src="@/assets/m_images/main/img_keyvisual_02.png" />
              <div class="sec-cloud">
                <img src="@/assets/m_images/main/img_keyvisual_cloud.png" />
              </div>
            </div>
          </section>
          <section class="section">
            <div class="slide fp-noscroll" data-anchor="slide1">
              <div class="contents">
                <img
                  class="roads"
                  src="@/assets/m_images/main/getbelly_road_ko_1.png"
                />
                <div class="text-con">
                  <div
                    v-swiper:mySwiper="swiperOption"
                    class="swiper-container cloud"
                  >
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="item">
                          <img
                            src="@/assets/m_images/main/cloud_01.png"
                            alt=""
                          />
                          <div class="txt">
                            <span
                              class="sale"
                              v-if="$store.getters.getLocale === 'ENG'"
                              >1st Whitelist Sale</span
                            >
                            <span class="sale" v-else
                              >1차 화이트리스트 세일</span
                            >
                            <span class="date">2022.08.17</span>
                            <span class="date">8:00 pm</span>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="item">
                          <img
                            src="@/assets/m_images/main/cloud_02.png"
                            alt=""
                          />
                          <div class="txt">
                            <span
                              class="sale"
                              v-if="$store.getters.getLocale === 'ENG'"
                              >2nd Whitelist Sale</span
                            >
                            <span class="sale" v-else
                              >2차 화이트리스트 세일</span
                            >
                            <span class="date">2022.08.17</span>
                            <span class="date">10:00 pm</span>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="item">
                          <img
                            src="@/assets/m_images/main/cloud_03.png"
                            alt=""
                          />
                          <div class="txt">
                            <span
                              class="sale"
                              v-if="$store.getters.getLocale === 'ENG'"
                              >Public Sale</span
                            >
                            <span class="sale" v-else>퍼블릭 세일</span>
                            <span class="date">2022.08.18</span>
                            <span class="date">8:00 pm</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- pagination -->
                    <div
                      class="swiper-pagination swiper-pagination-1"
                      slot="pagination"
                    ></div>
                  </div>
                </div>
                <button
                  class="info-btn"
                  @click="
                    showInfo();
                    sendGaEvent('M_' + 'gb_icon', 'GB');
                  "
                />
              </div>
            </div>
            <div class="slide fp-noscroll" data-anchor="slide2">
              <div class="contents">
                <img
                  class="roads"
                  src="@/assets/m_images/main/getbelly_road_ko_2.png"
                />
              </div>
            </div>
            <div class="slide fp-noscroll" data-anchor="slide3">
              <div class="contents">
                <img
                  class="roads"
                  src="@/assets/m_images/main/getbelly_road_ko_3.png"
                />
                <div class="text-con">
                  <div
                    v-swiper:mySwiper2="swiperOption2"
                    class="swiper-container"
                  >
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <button
                          class="item2"
                          @click="
                            roadModal1();
                            sendGaEvent('M_' + 'br_rd1_more', 'BR');
                          "
                        >
                          <img
                            src="@/assets/m_images/main/img_road_balloon01.png"
                          />
                          <div class="txt">
                            <span class="road">ROAD 1</span>
                            <div
                              v-if="$store.getters.getLocale === 'ENG'"
                              class="title"
                            >
                              Bellygom<br />
                              Emerges!
                            </div>
                            <div v-else class="title">
                              벨리곰이<br />
                              나타나다
                            </div>
                            <span class="more">more</span>
                          </div>
                        </button>
                      </div>
                      <div class="swiper-slide">
                        <button
                          class="item2"
                          @click="
                            roadModal2();
                            sendGaEvent('M_' + 'br_rd2_more', 'BR');
                          "
                        >
                          <img
                            src="@/assets/m_images/main/img_road_balloon02.png"
                          />
                          <div class="txt road2">
                            <span class="road">ROAD 2</span>
                            <template v-if="$store.getters.getLocale === 'ENG'">
                              <div class="title">
                                Bellygom<br />
                                Surprises!
                              </div>
                            </template>
                            <template v-else>
                              <div class="title">
                                벨리곰이<br />
                                놀래키다
                              </div>
                            </template>
                            <span class="more">more</span>
                          </div>
                        </button>
                      </div>
                      <div class="swiper-slide">
                        <button
                          class="item2"
                          @click="
                            roadModal3();
                            sendGaEvent('M_' + 'br_rd3_more', 'BR');
                          "
                        >
                          <img
                            src="@/assets/m_images/main/img_road_balloon03.png"
                          />
                          <div class="txt">
                            <span class="road">ROAD 3</span>
                            <template v-if="$store.getters.getLocale === 'ENG'">
                              <div class="title">
                                BellyWorld<br />
                                Opening
                              </div>
                            </template>
                            <template v-else>
                              <div class="title">
                                벨리월드가<br />
                                열리다
                              </div>
                            </template>
                            <span class="more">more</span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <!-- pagination -->
                    <div
                      class="swiper-pagination swiper-pagination-2"
                      slot="pagination"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section">
            <div class="bellyship">
              <template v-if="$store.getters.getLocale === 'ENG'">
                <img
                  src="@/assets/m_images/main/img_bellyship_top_en.png"
                  alt=""
                  class="b_top"
                />
                <!--                <div class="b_mid">
                <div class="common-util">
                  <div class="title">
                    <span class="label">Bellygom Super Surprise Package Season 1</span>
                    <h3>An Amazing Experience<br/>for Bellygom's Friends</h3>
                    <ul class="desc">
                      <li>
                        <strong>Eligibility</strong> All Bellygom NFT holders are eligible
                      </li>
                      <li>
                        <strong>The Plan</strong> It's a one-off
                      </li>
                    </ul>
                  </div>
                  <div class="content">
                    <ul>
                      <li>
                        <span class="img-wrap">
                          <img src="@/assets/m_images/main/img__bubble_01_eng.png" alt="">
                        </span>
                        <strong>Exciting<br/>Lotte World</strong>
                        <p>Lotte World invites you to Bellygom World this October. (feat. Family, Friends, Loved ones)</p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img src="@/assets/m_images/main/img__bubble_02_eng.png" alt="">
                        </span>
                        <strong>Limited Edition<br/>Bellygom Merch</strong>
                        <p>Encounter the limited edition numbered action figures for all holders in the real world.</p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img src="@/assets/m_images/main/img__bubble_03_eng.png" alt="">
                        </span>
                        <strong>Global Collab NFTs</strong>
                        <p>Receive global top tier collaboration airdrop NFTs only for Bellygom holders.</p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img src="@/assets/m_images/main/img__bubble_04_eng.png" alt="">
                        </span>
                        <strong>Invincible Coupon</strong>
                        <p>Get more special discounts on Bellygom's meticulously curated products in reality.</p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img src="@/assets/m_images/main/img__bubble_05_eng.png" alt="">
                        </span>
                        <strong>Belly pass</strong>
                        <p>For Bellygom holders who don't want to wait, we will provide seasonal "No Queues Bellygom Pass"</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="b_mid">
                  <img
                    src="@/assets/m_images/main/img_bellyship_middle_en.png"
                    alt=""
                    class="b_mid"
                  />
                  <a
                    href="https://discord.gg/bellygom"
                    target="_blank"
                    class="button eng"
                    >discord</a
                  >
                </div>-->
                <div class="level-belly">
                  <div class="box belly">
                    <div class="tit"><span>Belly</span> Bellyship</div>
                    <p class="sub">
                      The Most Exclusively Astonishing Experience of the
                      Bellygom Universe!
                    </p>
                    <ul class="benefit-list">
                      <li>
                        Bellygom Signiel Premium Package (Premium Room + Club +
                        Valet) <span class="red">*Transferable</span>
                      </li>
                      <li>
                        Bellygom World Premium Package (Lotte World Hotel
                        Voucher + Magic Pass)
                      </li>
                      <li>
                        Bellygom Shopping Premium Package (Live Commerce Tickets
                        for Holders Only + Surprise Discounts)
                      </li>
                      <li>
                        Bellygom Cinema Premium Package (2 Lotte Cinema
                        Charlotte Tickets + 2 Sweet combo Drinks)
                      </li>
                    </ul>
                    <span class="condition">
                      Eligibility: 30 Holders｜Belly Tier NFT Holders or Holders
                      of 500+ Bellygom NFTs
                    </span>
                    <span class="condition">
                      The Plan: Lotte Signiel (twice a year)
                      *Transferable｜Belly World (twice a year)｜Shopping (four
                      times a year)｜Cinema (four times a year)
                    </span>
                  </div>
                  <div class="box holic">
                    <div class="tit"><span>Holic</span> Bellyship</div>
                    <p class="sub">A Magical Two-day Trip with Bellygom!</p>
                    <ul class="benefit-list">
                      <li>
                        Bellygom World Premium Package (Lotte World Hotel
                        Voucher + Magic Pass)
                      </li>
                      <li>
                        Bellygom Shopping Premium Package (Live Commerce Tickets
                        for Holders Only + Surprise Discounts)
                      </li>
                      <li>
                        Bellygom Cinema Premium Package (2 Lotte Cinema
                        Charlotte Tickets + 2 Sweet combo Drinks)
                      </li>
                    </ul>
                    <span class="condition">
                      Eligibility: 100 Holders｜Holic Tier NFT Holders or
                      Holders of 300+ Bellygom NFTs
                    </span>
                    <span class="condition">
                      The Plan: Belly World (twice a year)｜Shopping (twice a
                      year)｜Cinema (four times a year)
                    </span>
                  </div>
                  <div class="box mega">
                    <div class="tit"><span>Mega</span> Bellyship</div>
                    <p class="sub">Bellygom's Surprising Comfort!</p>
                    <ul class="benefit-list">
                      <li>
                        Bellygom Shopping Premium Package (Live Commerce Tickets
                        for Holders Only + Surprise Discounts)
                      </li>
                      <li>
                        Bellygom Cinema Premium Package (2 Lotte Cinema
                        Charlotte Tickets + 2 Sweet combo Drinks)
                      </li>
                    </ul>
                    <span class="condition">
                      Eligibility: 500 Holders｜Mega Tier NFT Holders
                    </span>
                    <span class="condition">
                      The Plan: Shopping (twice a year)｜Cinema (four times a
                      year)
                    </span>
                  </div>
                  <div class="box super">
                    <div class="tit"><span>Super</span> Bellyship</div>
                    <p class="sub">
                      For Belly friends who want to experience more fun, more
                      often!
                    </p>
                    <ul class="benefit-list">
                      <li>
                        Bellygom Shopping Premium Package (Live Commerce Tickets
                        for Holders Only + Surprise Discounts)
                      </li>
                      <li>Bellygom Cinema Package (2 Lotte Cinema Tickets)</li>
                    </ul>
                    <span class="condition">
                      Eligibility: 1,500 Holders｜Super Tier NFT Holders
                    </span>
                    <span class="condition">
                      The Plan: Shopping (twice a year)｜Cinema (four times a
                      year)
                    </span>
                  </div>
                  <div class="box surprise">
                    <div class="tit"><span>Surprise</span> Bellyship</div>
                    <p class="sub">
                      My Very Own Private Secret Shopping Experience!
                    </p>
                    <ul class="benefit-list">
                      <li>
                        Bellygom Shopping Premium Package (Live Commerce Tickets
                        for Holders Only + Surprise Discounts)
                      </li>
                      <li>Bellygom Cinema Package (2 Lotte Cinema Tickets)</li>
                    </ul>
                    <span class="condition">
                      Eligibility: 3,500 Holders｜Surprise Tier NFT Holders
                    </span>
                    <span class="condition">
                      The Plan: Shopping (once a year)｜Cinema (twice a year)
                    </span>
                  </div>
                  <div class="box friend">
                    <div class="tit"><span>Friends</span> Bellyship</div>
                    <p class="sub">Double the Fun with Friends!</p>
                    <ul class="benefit-list">
                      <li>Bellygom Cinema Package (2 Lotte Cinema Tickets)</li>
                    </ul>
                    <span class="condition">
                      Eligibility: 4,370 Holders｜Friends Tier NFT Holders
                    </span>
                    <span class="condition"
                      >The Plan: Cinema (twice a year)</span
                    >
                  </div>
                </div>
                <div class="season">
                  <strong
                    >Bellygom Super Surprise<br />
                    Package - Season 1</strong
                  >
                  <div class="tit">
                    More Belly,<br />
                    More Surprise<br />
                    Regularly Updated<br />
                    Belly Benefits,<br />
                    Only with Belly NFTs
                  </div>
                  <p>
                    * Some benefits are<br />
                    transferable as airdrop NFTs
                  </p>
                </div>
              </template>
              <template v-else>
                <img
                  src="@/assets/m_images/main/img_bellyship_top.png"
                  alt=""
                  class="b_top"
                />
                <div class="common-util">
                    <div class="title">
                    <span class="label">
                      벨리곰 슈퍼 서프라이즈 패키지 시즌 1
                    </span>
                      <h3>벨리곰의 친구들 모두가<br/>누릴 수 있는 놀라운 경험!</h3>
                      <ul class="desc">
                        <li>
                          <strong>자격요건</strong> 모든 벨리곰 NFT 홀더 대상
                        </li>
                        <li>
                          <strong>운영플랜</strong> 1회 진행
                        </li>
                      </ul>
                    </div>
                    <div class="content">
                      <ul>
                        <li>
                        <span class="img-wrap">
                          <img src="@/assets/m_images/main/img__bubble_01.png" alt="">
                        </span>
                          <strong>익사이팅 롯데월드</strong>
                          <p>롯데월드에서 10월 펼쳐지는 벨리곰의<br/>세계에 여러분을 초대합니다.<br/>(feat. 가족, 친구, 연인)</p>
                        </li>
                        <li>
                        <span class="img-wrap">
                          <img src="@/assets/m_images/main/img__bubble_02.png" alt="">
                        </span>
                          <strong>한정판 넘버링 피규어</strong>
                          <p>홀더분들에게만 드리는 한정판 넘버링<br/>피규어를 현실 세계에서도 만나보세요.</p>
                        </li>
                        <li>
                        <span class="img-wrap">
                          <img src="@/assets/m_images/main/img__bubble_03.png" alt="">
                        </span>
                          <strong>글로벌 콜라보 NFT</strong>
                          <p>오직 벨리곰 홀더분들만에게만 에어드랍<br/>해드리는 글로벌 탑티어 콜라보레이션 NFT를<br/>에어드랍 받아보세요.</p>
                        </li>
                        <li>
                        <span class="img-wrap">
                          <img src="@/assets/m_images/main/img__bubble_04.png" alt="">
                        </span>
                          <strong>무적 할인권</strong>
                          <p>벨리곰의 꼼꼼하게 선정한 현실 상품들을<br/>더 특별하게 할인받아 Get하세요.</p>
                        </li>
                        <li>
                        <span class="img-wrap">
                          <img src="@/assets/m_images/main/img__bubble_05.png" alt="">
                        </span>
                          <strong>벨리 패스</strong>
                          <p>기다리기 싫어하는 벨리곰 홀더분들에게<br/>시즌 별 ‘줄 안서는 벨리 패스’를 제공해드립니다.</p>
                        </li>
                      </ul>
                    </div>

                </div>
                <div class="b_mid">
                <!--                <div class="b_mid">
                  <img
                      src="@/assets/m_images/main/img_bellyship_middle.png"
                      alt=""
                  />
                  <a href="https://discord.gg/bellygom" target="_blank" class="button">discord</a>
                </div>-->
                <div class="level-belly">
                  <div class="box belly">
                    <div class="tit"><span>Belly</span> Bellyship</div>
                    <p class="sub">
                      아무나 가질 수 없는<br />
                      벨리곰 유니버스의 가장 놀라운 경험!
                    </p>
                    <ul class="benefit-list">
                      <li>
                        벨리곰 시그니엘 프리미엄 패키지(프리미엄룸 + 클럽 +
                        발렛) <span class="red">* 양도가능</span>
                      </li>
                      <li>
                        벨리곰 월드 프리미엄 패키지(롯데월드 숙박권 +
                        매직패스권)
                      </li>
                      <li>
                        벨리곰 쇼핑 프리미엄 패키지(홀더 전용 라이브 커머스
                        입장권 + 깜짝 할인)
                      </li>
                      <li>
                        벨리곰 시네마 프리미엄 패키지(롯데 시네마 샤롯데 2매
                        +<br />
                        스위트콤보, 음료 2개)
                      </li>
                    </ul>
                    <span class="condition">
                      자격요건: 30명｜벨리급 NFT 소유자 or 벨리곰 NFT 500개 이상
                      소유자
                    </span>
                    <span class="condition">
                      운영플랜: 시그니엘 연 2회(양도 가능)｜월드 연 2회｜쇼핑 연
                      4회｜ 시네마 연 4회
                    </span>
                  </div>
                  <div class="box holic">
                    <div class="tit"><span>Holic</span> Bellyship</div>
                    <p class="sub">벨리곰과 함께하는 마법같은 1박 2일!</p>
                    <ul class="benefit-list">
                      <li>
                        벨리곰 월드 프리미엄 패키지(롯데월드 숙박권 +
                        매직패스권)
                      </li>
                      <li>
                        벨리곰 쇼핑 프리미엄 패키지(홀더 전용 라이브 커머스
                        입장권 + 깜짝 할인)
                      </li>
                      <li>
                        벨리곰 시네마 프리미엄 패키지(롯데 시네마 샤롯데 2매 +
                        스위트콤보, 음료 2개)
                      </li>
                    </ul>
                    <span class="condition">
                      자격요건: 100명｜홀릭급 NFT 소유자 or 벨리곰 NFT 300개
                      이상 소유자
                    </span>
                    <span class="condition">
                      운영플랜: 월드 연 2회｜쇼핑 연 2회｜시네마 연 4회
                    </span>
                  </div>
                  <div class="box mega">
                    <div class="tit"><span>Mega</span> Bellyship</div>
                    <p class="sub">벨리곰이 선사하는 깜짝 놀랄 편안함!</p>
                    <ul class="benefit-list">
                      <li>
                        벨리곰 쇼핑 프리미엄 패키지(홀더 전용 라이브 커머스
                        입장권 + 깜짝 할인)
                      </li>
                      <li>
                        벨리곰 시네마 프리미엄 패키지(롯데 시네마 샤롯데 2매 +
                        스위트콤보, 음료 2개)
                      </li>
                    </ul>
                    <span class="condition">
                      자격요건: 500명｜메가급 NFT 소유자
                    </span>
                    <span class="condition">
                      운영플랜: 쇼핑 연 2회｜시네마 연 4회
                    </span>
                  </div>
                  <div class="box super">
                    <div class="tit"><span>Super</span> Bellyship</div>
                    <p class="sub">
                      더 자주, 더 많이 경험하고 싶은 벨리친구들을 위해!
                    </p>
                    <ul class="benefit-list">
                      <li>
                        벨리곰 쇼핑 프리미엄 패키지(홀더 전용 라이브 커머스
                        입장권 + 깜짝 할인)
                      </li>
                      <li>벨리곰 시네마 패키지(롯데 시네마 관람권 2매)</li>
                    </ul>
                    <span class="condition">
                      자격요건: 1,500명｜슈퍼급 NFT 소유자
                    </span>
                    <span class="condition">
                      운영플랜: 쇼핑 연 2회｜시네마 연 4회
                    </span>
                  </div>
                  <div class="box surprise">
                    <div class="tit"><span>Surprise</span> Bellyship</div>
                    <p class="sub">프라이빗한 나만의 비밀 쇼핑 경험!</p>
                    <ul class="benefit-list">
                      <li>
                        벨리곰 쇼핑 프리미엄 패키지(홀더 전용 라이브 커머스
                        입장권 + 깜짝 할인)
                      </li>
                      <li>벨리곰 시네마 패키지(롯데 시네마 관람권 2매)</li>
                    </ul>
                    <span class="condition">
                      자격요건: 3,500명｜서프라이즈급 NFT 소유자
                    </span>
                    <span class="condition">
                      운영플랜: 쇼핑 연 1회｜시네마 연 2회
                    </span>
                  </div>
                  <div class="box friend">
                    <div class="tit"><span>Friends</span> Bellyship</div>
                    <p class="sub">친구와 함께하면 즐거움이 두배!</p>
                    <ul class="benefit-list">
                      <li>벨리곰 시네마 패키지 (롯데 시네마 관람권 2매)</li>
                    </ul>
                    <span class="condition">
                      자격요건: 4,370명｜프렌즈급 NFT 소유자
                    </span>
                    <span class="condition">운영플랜: 시네마 연 2회 </span>
                  </div>
                </div>
                <div class="season">
                  <strong
                    >벨리곰 슈퍼 서프라이즈<br />
                    패키지 시즌 1
                  </strong>
                  <div class="tit">
                    More Belly,<br />
                    More Surprise<br />
                    계속 업데이트 될,<br />
                    NFT만으로 누릴 수 있는<br />
                    Belly Benefit
                  </div>
                  <p>
                    * 일부 혜택은 NFT로 에어드랍되어<br />
                    양도 가능합니다.
                  </p>
                </div>
              </template>
              <div class="nft-wrap">
                <!--nft 슬라이더-->
                <div class="loop-text2">
                  <div class="text">
                    <span>&nbsp &middot &nbsp NFT BELLYGOM</span>
                  </div>
                </div>
                <div
                  class="nft-image-loop"
                  v-if="$store.getters.getLocale === 'ENG'"
                >
                  <div class="image-item">
                    <img
                      src="@/assets/m_images/main/img_NFT_01_en.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_02_en.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_03_en.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_04_en.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_05_en.png"
                      alt=""
                      class="nft-img"
                    />
                  </div>
                  <div class="image-item">
                    <img
                      src="@/assets/m_images/main/img_NFT_01_en.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_02_en.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_03_en.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_04_en.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_05_en.png"
                      alt=""
                      class="nft-img"
                    />
                  </div>
                </div>
                <div class="nft-image-loop" v-else>
                  <div class="image-item">
                    <img
                      src="@/assets/m_images/main/img_NFT_01.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_02.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_03.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_04.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_05.png"
                      alt=""
                      class="nft-img"
                    />
                  </div>
                  <div class="image-item">
                    <img
                      src="@/assets/m_images/main/img_NFT_01.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_02.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_03.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_04.png"
                      alt=""
                      class="nft-img"
                    />
                    <img
                      src="@/assets/m_images/main/img_NFT_05.png"
                      alt=""
                      class="nft-img"
                    />
                  </div>
                </div>

                <div class="loop-text">
                  <div class="text">
                    <span>&nbsp &middot &nbsp NFT BELLYGOM</span>
                  </div>
                </div>

                <div class="partners">
                  <div class="title">PARTNERS</div>
                  <ul class="list">
                    <li class="full sandbox">
                      <img
                          src="@/assets/images/main/img_parteners_logo_sandbox.png"
                          alt=""
                          style="width: 228px"
                      />
                    </li>
                    <li class="full ground">
                      <img
                          src="@/assets/images/main/img_parteners_logo__groundx.png"
                          alt=""
                          style="width: 255px"
                      />
                    </li>
                    <li class="flex-end">
                      <img
                        src="@/assets/images/main/img_parteners_logo_sunmiya.png"
                        alt=""
                        style="width: 127px"
                      />
                    </li>
                    <li class="flex-start">
                      <img
                        src="@/assets/images/main/img_parteners_logo_happier_town.png"
                        alt=""
                        style="width: 131px"
                      />
                    </li>
                    <li>
                      <img
                        src="@/assets/images/main/img_parteners_logo_mimyo.png"
                        alt=""
                        style="width: 83px"
                      />
                    </li>
                    <li></li>
                    <!--                    <li>
                      <img
                          src="@/assets/images/main/img_parteners_logo_sandbox.png"
                          alt=""
                          style="width: 97px"
                      />
                    </li>
                    <li>
                      <img
                        src="@/assets/images/main/img_parteners_logo_stepn.png"
                        alt=""
                        style="width: 101px"
                      />
                    </li>
                    -->
                  </ul>
                </div>
              </div>
            </div>
            <div class="main-char-ending">
              <div class="fall">
                <img src="@/assets/m_images/char-fall.webp" type="image/webp" />
              </div>
            </div>
          </section>
          <section class="section fp-auto-height">
            <footer>
              <div class="inner">
                <div
                  class="footer-logo"
                  v-if="$store.getters.getLocale === 'ENG'"
                >
                  <img
                    src="@/assets/m_images/main/footer_logo_en.svg"
                    alt="footer-logo"
                  />
                </div>
                <div class="footer-logo" v-else>
                  <img
                    src="@/assets/m_images/main/footer_logo.svg"
                    alt="footer-logo"
                  />
                </div>
                <div class="footer-contents">
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    <ul class="footer-list">
                      <li>CEO Lee, Wan Shin</li>
                      <li>
                        Address: (Yangpyeongdong 5-ga) 10 Yangpyeong-ro 21-gil
                        Yeongdeungpo-gu, Seoul
                      </li>
                      <li>Privacy Policy Manager: Shin, Sung Bin</li>
                    </ul>
                    <ul class="footer-list">
                      <li>Hosting Service Provider: Woori Home Shopping</li>
                      <li>Affiliates & Inquiry: master@lotteimall.com</li>
                      <li>
                        <nuxt-link to="/m/terms" target="_blank">
                          Terms of Service
                        </nuxt-link>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <ul class="footer-list">
                      <li>대표 이완신</li>
                      <li>주소: 서울특별시 영등포구 양평로21길10(양평동5가)</li>
                      <li>개인정보 보호책임자: 신성빈</li>
                    </ul>
                    <ul class="footer-list">
                      <li>호스팅 서비스 사업자: (주)우리홈쇼핑</li>
                      <li>제휴 및 문의: master@lotteimall.com</li>
                      <li>
                        <nuxt-link to="/m/terms" target="_blank"
                          >이용약관</nuxt-link
                        >
                      </li>
                    </ul>
                  </template>

                  <p class="copyright">
                    Copyright Ⓒ
                    <span class="logo">
                      <img
                        src="@/assets/m_images/img_footer_logo_bellygom.svg"
                        alt="footer-logo"
                      />
                    </span>
                    All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </section>
          <div
            class="main-char ignore"
            :class="charClass"
            :style="{ top: charTop }"
            ref="mainChar"
          >
            <div class="fall">
              <img src="@/assets/m_images/char-fall.webp" type="image/webp" />
            </div>
            <div class="stand">
              <img src="@/assets/m_images/char-stand.png" />
            </div>
            <div class="walk">
              <img src="@/assets/m_images/char-walk.webp" type="image/webp" />
            </div>
            <div class="end">
              <img src="@/assets/m_images/char-end.png" />
            </div>
          </div>
        </full-page>
      </client-only>
    </div>

    <!--민팅 팝업-->
    <modal
      v-if="mintingModal"
      @mintModal="mintModal"
      @close="closemintModal"
      class="mint-modal"
    >
      <div slot="body">
        <!--        <div class="mint">
          <img src="@/assets/m_images/main/minting_popup_img.png" />
        </div>-->
      </div>
    </modal>

    <!-- MODAL-->
    <modal v-if="showRoad1" @close="closeRoad1" class="road-modal">
      <div slot="header">
        <span class="sub">ROAD 1</span>
        <template v-if="$store.getters.getLocale === 'ENG'">
          <div class="title">Bellygom Emerges!</div>
        </template>
        <template v-else>
          <div class="title">벨리곰이 나타나다</div>
        </template>
      </div>
      <div slot="body">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <ul class="road-list">
            <li>Surprise Appears in <strong>Crypto Party</strong></li>
            <li>The start of the <strong>Bellygom community</strong></li>
            <li><strong>Rarity & Ranking</strong> Revealed After Reveal</li>
            <li><strong>Surprise Offer</strong> Revealed for All Holders</li>
            <li>
              <strong>Sold out celebration!</strong> Bellygom's celebration
              ceremony Start~
            </li>
          </ul>
        </template>
        <template v-else>
          <ul class="road-list">
            <li><strong>크립토파티</strong>에 깜짝 등장</li>
            <li><strong>벨리곰 커뮤니티</strong>의 시작</li>
            <li>리빌 이후 <strong>레어리티&랭킹</strong> 공개</li>
            <li>모든 홀더들을 위한 깜짝 <strong>혜택</strong> 공개</li>
            <li><strong>완판 기념!</strong> 벨리곰의 축하 세레머니 START~</li>
          </ul>
        </template>
      </div>
    </modal>
    <modal v-if="showRoad2" @close="closeRoad2" class="road-modal">
      <div slot="header">
        <span class="sub">ROAD 2</span>
        <template v-if="$store.getters.getLocale === 'ENG'">
          <div class="title">Bellygom Surprises!</div>
        </template>
        <template v-else>
          <div class="title">벨리곰이 놀래키다</div>
        </template>
      </div>
      <div slot="body">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <ul class="road-list">
            <li>Surprise <strong>Belly Festival</strong> held</li>
            <li>Fast!!! <strong>Belly Pass</strong> with Bellygom</li>
            <li>Global Project <strong>Collab NFT Airdrop</strong></li>
            <li>
              The second operation is possible!
              <strong>Bellygom NFT Airdrop</strong>
            </li>
            <li><strong>Creator</strong> Studio, training program open</li>
          </ul>
        </template>
        <template v-else>
          <ul class="road-list">
            <li>깜짝 <strong>벨리 페스티벌</strong> 개최</li>
            <li>벨리곰과 빠르게!!! <strong>벨리패스</strong></li>
            <li>글로벌 프로젝트와 <strong>콜라보 NFT 에어드랍</strong></li>
            <li>2차 창작 가능! <strong>벨리곰 NFT 에어드랍</strong></li>
            <li><strong>크리에이터</strong> 스튜디오, 양성 프로그램 오픈</li>
          </ul>
        </template>
      </div>
    </modal>
    <modal v-if="showRoad3" @close="closeRoad3" class="road-modal">
      <div slot="header">
        <span class="sub">ROAD 3</span>
        <template v-if="$store.getters.getLocale === 'ENG'">
          <div class="title">BellyWorld Opening!</div>
        </template>
        <template v-else>
          <div class="title">벨리월드가 열리다</div>
        </template>
      </div>
      <div slot="body">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <ul class="road-list">
            <li>
              Bellygom and friends migrate to the
              <strong>metaverse world</strong>
            </li>
            <li>Belly World's <strong>Land NFT, Airdrop</strong></li>
            <li>Belly World <strong>Big Celebrity Concert</strong> held</li>
            <li>
              Making a surprise <strong>theme song</strong> for Belly World's
              1st project (feat. ?)
            </li>
            <li>
              Making a surprise <strong>webtoon</strong> for Belly World's 2nd
              project (feat. ?)
            </li>
            <li>
              Belly World 3rd Project Make a surprise <strong>game</strong>
            </li>
          </ul>
        </template>
        <template v-else>
          <ul class="road-list">
            <li>벨리곰과 친구들, <strong>메타버스 세상</strong>으로 이주</li>
            <li>벨리월드 <strong>랜드 NFT 에어드랍</strong></li>
            <li>벨리월드 <strong>빅 셀럽 콘서트</strong> 개최</li>
            <li>
              벨리월드 첫 번째 프로젝트 깜짝 <strong>테마곡</strong> 만들기
              (feat. ?)
            </li>
            <li>
              벨리월드 두 번째 프로젝트 깜짝 <strong>웹툰</strong> 만들기 (feat.
              ?)
            </li>
            <li>벨리월드 세 번째 프로젝트 깜짝 <strong>게임</strong> 만들기</li>
          </ul>
        </template>
        <template v-if="$store.getters.getLocale === 'ENG'">
          <span class="notice"
            ><strong>Road 4 made with holder!!!</strong></span
          >
        </template>
        <template v-else>
          <span class="notice">홀더와 함께 만드는 Road 4!!!</span>
        </template>
      </div>
    </modal>
    <modal v-if="showInf" @close="closeInf" class="info-modal">
      <div slot="header">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <span class="sub">To get Belly News,</span>
          <div class="title">Visit the Discord Channel ASAP!</div>
        </template>
        <template v-else>
          <span class="sub">벨리곰 NFT 소식은?</span>
          <div class="title">
            디스코드 채널을 통해<br />
            가장 빠르게 확인할 수 있습니다.
          </div>
        </template>
      </div>
      <div slot="body">
        <template v-if="$store.getters.getLocale === 'ENG'">
          <div class="list-title">1st Whitelist (Guaranteed)</div>
          <ul class="road-list">
            <li>Remaining - 2,000</li>
            <li>Per Wallet - 1</li>
          </ul>
          <div class="list-title">2nd Whitelist (Competition)</div>
          <ul class="road-list">
            <li>Remaining - 3,000</li>
            <li>Per Transaction - 2</li>
          </ul>
          <div class="list-title">Public Sale</div>
          <ul class="road-list">
            <li>Remaining - 3,900</li>
            <li>Per Transaction - 5</li>
          </ul>
          <div class="notice">
            <strong>General Terms of Use</strong>
            <ul class="notice-list">
              <li>Minting price will be announced soon.</li>
              <li>
                For the confirmed minting round, Favor & Klay will be used. Klay
                will also be used in all other rounds.
              </li>
              <li>
                Unsold quantity from the 1st & 2nd Whitelist Sales will be
                transferred to the Public Sale.
              </li>
              <li>
                The reserved 1,100 pieces allocated to the team will be utilized
                in partnerships, events, etc.
              </li>
              <li>
                Details on minting price can be found on Discord > mint-belly or
                announcements channel.
              </li>
              <li>
                Detailed schedule for whitelist application and selection
                criteria will be announced in advance, on
                <a
                  class="underline"
                  href="https://discord.gg/bellygom"
                  target="_blank"
                  >Discord</a
                >
                and
                <a
                  class="underline"
                  href=" https://twitter.com/bellygom"
                  target="_blank"
                  >Twitter</a
                >.
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <div class="list-title">1차 확정 화이트리스트 세일</div>
          <ul class="road-list">
            <li>수량 2,000개</li>
            <li>지갑당 1개</li>
          </ul>
          <div class="list-title">2차 경쟁 화이트리스트 세일</div>
          <ul class="road-list">
            <li>수량 3,000개</li>
            <li>트랜잭션당 2개</li>
          </ul>
          <div class="list-title">3차 퍼블릭 세일</div>
          <ul class="road-list">
            <li>수량:3,900개</li>
            <li>트랜잭션당 5개</li>
          </ul>
          <div class="notice">
            <strong>공통 해당 사항</strong>
            <ul class="notice-list">
              <li>민팅가격은 추후 공지 됩니다.</li>
              <li>
                민팅 확정라운드는 Favor, Klay / 나머지 라운드는 Klay로
                진행됩니다.
              </li>
              <li>
                1,2차 화이트리스트 미판매 물량은 퍼블릭 세일로 이전됩니다.
              </li>
              <li>
                팀 물량 1,100개는 파트너쉽, 이벤트 등 기타 목적으로 활용됩니다.
              </li>
              <li>
                민팅가격에 대한 자세한 사항은 디스코드 > mint-belly or
                announcements 채널에서 확인할 수 있습니다.
              </li>
              <li>
                화이트리스트 신청 및 선정 관련 상세 일정은
                <a
                  class="underline"
                  href="https://discord.gg/bellygom"
                  target="_blank"
                  >디스코드</a
                >,
                <a
                  class="underline"
                  href="https://twitter.com/bellygom"
                  target="_blank"
                  >트위터</a
                >를 통해 사전 공지될 예정입니다.
              </li>
            </ul>
          </div>
        </template>
      </div>
    </modal>

    <!--STORY MODAL-->
    <modal v-if="showStoryModal" @close="closeStoryModal" class="story-modal">
      <div slot="header">STORY<br />BOOK</div>
      <div slot="body">
        <div class="story">
          <div id="st_1" class="box" :class="{ on: currIndi === 1 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom01.png"
              class="left-img"
            />
            <template v-if="$store.getters.getLocale === 'ENG'">
              <div class="txt eng">
                <h3>
                  Bellygom was born in a Haunted House. Here's how it happened…
                </h3>
                <p>
                  One day, a little boy who visited the haunted house
                  accidentally dropped a bubble gumball. In it, this cute
                  Bellygom was born.<br />
                  <br />
                  Bellygom likes to bring excitement to people by surprising
                  them. However, due to Belly's insatiable appetite and cuteness
                  overload, Bellygom is kicked out, as that image does not fit
                  the haunted house.
                </p>
              </div>
            </template>
            <template v-else>
              <div class="txt">
                <h3>벨리곰, 유령의 집에서 태어나다</h3>
                <p class="first">
                  어느 날, 유령의 집에 놀러 온 꼬마가 흘린 풍선껌, 그 속에서
                  커여운 벨리곰이 탄생했다.
                </p>
                <p>
                  벨리곰은 사람들을 놀래키며 행복을 주는 일을 좋아하지만, 넘치는
                  식탐과 귀여운 외모가 유령의 집에 어울리지 않는다며 쫓겨나게
                  된다.
                </p>
              </div>
            </template>
          </div>
          <div id="st_2" class="box" :class="{ on: currIndi === 2 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom02.png"
              class="left-img"
            />
            <div class="txt eng" v-if="$store.getters.getLocale === 'ENG'">
              <h3>Soon, Bellygom moves into Belly Villa.</h3>
              <p>
                Bellygom continues to surprise people here and there, despite
                having been banished from the haunted house. Although, people
                aren't as responsive to Bellygom's pranks as they used to
                be...<br /><br />
                When Bellygom - wandering aimlessly, down in the dumps - sat on
                a box for a moment and was deep in thought, a cute little kitty
                emerged from the box! Feeling excited again, at the sight of
                this miracle, Bellygom adopts Kitty and they move into Belly
                Villa together.
              </p>
            </div>
            <div class="txt" v-else>
              <h3>벨리빌라에 입주하다</h3>
              <p class="first">
                유령의 집에서 쫓겨난 후 벨리곰은 서프라이즈를 계속하지만
                사람들은 예전만큼 벨리곰의 장난에 반응하지 않는다.
              </p>
              <p>
                풀이 죽어 떠돌던 벨리곰이 잠시 박스 위에 앉아 고민에 잠겨있던
                순간, 박스 속에서 등장한 꼬냥이!
              </p>
              <p>
                귀여운 꼬냥이의 모습에 다시 행복을 느낀 벨리곰은 꼬냥이를 따라가
                벨리빌라에 입주한다.
              </p>
            </div>
          </div>
          <div id="st_3" class="box" :class="{ on: currIndi === 3 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom03.png"
              class="left-img"
            />
            <div class="txt eng" v-if="$store.getters.getLocale === 'ENG'">
              <h3>Bellygom now has 10,000 mysterious powers!</h3>
              <p>
                One day, Bellygom finds a vending machine, in front of the
                villa, with a strange vibe. The gluttonous Bellygom takes a
                gumball from the vending machine and begins chewing... Suddenly,
                there's a transformation in Belly's body, resulting in 10,000
                unique surprise-powers!
              </p>
            </div>
            <div class="txt" v-else>
              <h3>1만 개의 신비로운 힘이 생긴 벨리곰!</h3>
              <p class="first">
                어느 날, 벨리곰은 벨리빌라 앞에서 신비로운 기운이 느껴지는
                자판기를 발견한다.
              </p>
              <p>
                식탐 많은 벨리곰이 자판기 속 껌을 꺼내어 씹기 시작하자, 1만 개의
                서프라이즈 능력이 생겨나는데...
              </p>
            </div>
          </div>
          <div id="st_4" class="box" :class="{ on: currIndi === 4 }">
            <img
              src="@/assets/images/main/img_storybook_bellygom04.png"
              class="left-img"
            />
            <div class="txt eng" v-if="$store.getters.getLocale === 'ENG'">
              <h3>
                Oh, Bellygom - now with 10,000 mysterious abilities - what kinds
                of surprises will you bring to the people?
              </h3>
            </div>
            <div class="txt" v-else>
              <h3>
                1만 개의 신비로운 능력을 얻은 벨리곰은 어떤 서프라이즈를 가져다
                줄까?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <!--FAQ MODAL-->
    <modal v-if="showModal" @close="closeModal" class="faq-modal">
      <div slot="header">
        <h2 class="title">FAQ</h2>
      </div>
      <div slot="body">
        <div class="content">
          <div class="inner">
            <div class="content-wrap">
              <AccordionComponent :list="faqList">
                <template #title="{ item }">
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    {{ item.engTitle }}
                  </template>
                  <template v-else>
                    {{ item.title }}
                  </template>
                </template>
                <template #cont="{ item }">
                  <template v-if="$store.getters.getLocale === 'ENG'">
                    {{ item.engCont }}
                  </template>
                  <template v-else>
                    {{ item.cont }}
                  </template>
                  <span class="pdf" v-if="item.pdf">
                    <button
                      @click="
                        downloadPdf(item.pdf, $store.getters.getLocale);
                        sendGaEvent('M_' + 'bf_faq' + item.pdf + '_file', 'BR');
                      "
                      class="pdf-btn"
                    >
                      <span>
                        <img
                          src="@/assets/images/main/ic_download.png"
                          alt=""
                        />PDF Download
                      </span>
                    </button>
                  </span>
                </template>
              </AccordionComponent>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "IndexPage",
  layout: "default",
  data() {
    return {
      mintingModal: true,
      showModal: false,
      showStoryModal: false,
      currIndi: 1,
      mySwiper: null,
      mySwiper2: null,
      showInf: false,
      showRoad1: false,
      showRoad2: false,
      showRoad3: false,
      scrollToTop: true,
      cloudMoved: false,
      charClass: "s0",
      footClass: "",
      charTop: "-100%",
      options: {
        controlArrows: false,
        loopHorizontal: false,
        verticalCentered: false,
        keyboardScrolling: false,
        css3: true,
        scrollingSpeed: 1500,
        licenseKey: "H68K9-OX8AH-GK457-17J28-VGRRP",
        scrollBar: false,
        navigation: false,
        scrollOverflow: true,
        normalScrollElements:
          ".modal-container, .swiper-container, #mobile-gnb",
        scrollHorizontally: true,
        scrollHorizontallyKey:
          "YmVsbHlnb20ud29ybGRfaktDYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1NFN6",
        anchors: ["getBelly", "falling", "bellyRoad", "bellyShip", "footer"],
        afterResize: (width, height) => {
          // alert("The sections have finished resizing");
          this.$refs.fullpage.api.rebuid();
        },
        afterLoad: (origin, destination, direction) => {
          this.$refs.fullpage.api.setAllowScrolling(true);
          console.log("afterLoad");
          if (destination.index === 0) {
            this.charTop = "-50%";
            this.cloudMoved = false;
            document.querySelector(".top-btn").style.display = "none";
          } else {
            this.cloudMoved = true;
            document.querySelector(".top-btn").style.display = "block";
          }

          if (destination.index === 2) {
            this.charClass = "s2";
          }
        },
        onLeave: (origin, destination, direction) => {
          this.$refs.fullpage.api.setAllowScrolling(false);
          console.log("onLeave");
          if (destination.index === 0) {
            this.charClass = "s0";
          } else if (destination.index === 1) {
            this.charClass = "s1";
          } else if (destination.index === 3) {
            this.charClass = "s3";
          }

          if (destination.index === 0) {
            this.cloudMoved = false;
          }

          if (destination.index === 0) {
            this.charTop = "0px";
          } else if (destination.index === 1) {
            this.charTop =
              window.innerHeight * 1 + window.innerHeight / 2 + "px";
          } else if (destination.index === 2) {
            this.charTop =
              window.innerHeight * 3 -
              (window.innerWidth / 16) * 9 * 0.75 +
              "px";
          } else if (destination.index === 3) {
            this.charTop =
              window.innerHeight * 4 - window.innerHeight * 3 + "px";

            //this.textLoop();
          }

          if (destination.index === 4) {
            document.getElementById("fixed").style.display = "none";
          } else {
            setTimeout(() => {
              document.getElementById("fixed").style.display = "block";
            }, 1000);
          }
        },
        onSlideLeave: (section, origin, destination) => {
          this.$refs.fullpage.api.setAllowScrolling(false);
          if (destination.anchor === "slide2") {
            this.charClass = "slide2";
          }
        },
        afterSlideLoad: (direction, origin, destination) => {
          this.$refs.fullpage.api.setAllowScrolling(true);
          console.log("afterSlideLoad");
          if (destination.anchor === "slide1") {
            this.charClass = "slide1";
            this.mySwiper.autoplay.start();
          } else if (destination.anchor === "slide2") {
            this.charClass = "slide2";
          } else if (destination.anchor === "slide3") {
            this.charClass = "slide3";
            this.mySwiper2.autoplay.start();
          }
        },
        afterRender: function () {
          console.log("afterRender");
        },
        afterReBuild: function () {},
        afterResponsive: function (isResponsive) {},
        onScrollOverflow: function (section, slide, position, direction) {
          console.log(section, slide, position, direction);
        },
      },
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 700,
        disableOnInteraction: false,
        pagination: {
          el: ".swiper-pagination-1",
        },
        /*autoplay: {
          delay: 2000,
        },*/
      },
      swiperOption2: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 700,
        disableOnInteraction: false,
        pagination: {
          el: ".swiper-pagination-2",
        },
        /* autoplay: {
          delay: 2000,
        },*/
      },
      faqList: [
        {
          title: "벨리곰 NFT는 어떤 블록체인을 이용해?",
          engTitle: "What blockchain does Bellygom NFT use?",
          cont: "벨리곰 NFT는 클레이튼(Klaytn) 블록체인을 이용하고 있어!",
          engCont: "Bellygom NFT uses the Klaytn blockchain!",
          faqIndex: 1,
        },
        {
          title: "카이카스 지갑은 어떻게 만드는거야?",
          engTitle: "How do I make a Kaikas Wallet?",
          cont: "다운받기 눌러봐! 더 상세하게 설명해줄게!",
          engCont:
            "Download the PDF file for a detailed step-by-step guide on creating a Kaikas Wallet.",
          pdf: 2,
          faqIndex: 2,
        },
        {
          title: "오픈씨는 어떻게 이용하는거야?",
          engTitle: "How do I use opensea?",
          cont: "다운받기 눌러봐!  더 상세하게 설명해줄게!",
          engCont:
            "Download the PDF file for a detailed step-by-step guide on using OpenSea.",
          pdf: 3,
          faqIndex: 3,
        },
        {
          title: "Klip 지갑으로 민팅 할 수 있어?",
          engTitle: "Can I mint with a Klip wallet?",
          cont: "카이카스 지갑만 지원하고 있어!",
          engCont: "For now, only Kaikas wallets are supported.",
          faqIndex: 4,
        },
        {
          title: "Klip 지갑으로 전송 시, 벨리곰 NFT를 확인할 수 있어?",
          engTitle:
            "Can I check the Bellygom NFT when transferring to my Klip wallet?",
          cont: "확인할 수 없어! 카이카스 지갑을 이용해줘!",
          engCont: "Can't confirm! Please use Kaikas wallet!",
          faqIndex: 5,
        },
        {
          title: "2차 판매 수수료가 있어?",
          engTitle: "Are there any secondary sales fees?",
          cont: "2차 판매 수수료는 7.5%야!",
          engCont: "Secondary sales commission is 7.5%!",
          faqIndex: 9,
        },
        {
          title: "벨리곰NFT는 저작권 활용할 수 있어?",
          engTitle: "Can Bellygom NFTs be copyrighted?",
          cont: "Road1에는 소유권만 인정하고 있어. 그렇지만 Road2에는 NFT 사업권을 사용할 수 있어!",
          engCont:
            "Road1 only recognizes ownership. However, you can use NFT licenses for Road2!",
          faqIndex: 10,
        },
      ],
    };
  },
  created() {
    this.$nuxt.$on("scrollLock", (data) => {
      this.$refs.fullpage.api.setAllowScrolling(data);
    });
    this.$nuxt.$on("storyModal", () => {
      this.storyModal();
    });
    this.$nuxt.$on("faqModal", () => {
      this.faqModal();
    });
  },
  mounted() {
    let locale = this.getCookie("b_locale");
    if (locale && locale === "KOR") {
      this.$store.commit("setKOR");
    } else {
      this.$store.commit("setENG");
    }
  },
  methods: {
    getCookie(name) {
      let matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    roadModal1() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showRoad1 = true;
      history.pushState(null, null, location.href);
      window.onpopstate = () => {
        this.$refs.fullpage.api.setAllowScrolling(true);
        this.showRoad1 = false;
      };
    },
    roadModal2() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showRoad2 = true;
      history.pushState(null, null, location.href);
      window.onpopstate = () => {
        this.$refs.fullpage.api.setAllowScrolling(true);
        this.showRoad2 = false;
      };
    },
    roadModal3() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showRoad3 = true;
      history.pushState(null, null, location.href);
      window.onpopstate = () => {
        this.$refs.fullpage.api.setAllowScrolling(true);
        this.showRoad3 = false;
      };
    },
    showInfo() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showInf = true;
      history.pushState(null, null, location.href);
      window.onpopstate = () => {
        this.$refs.fullpage.api.setAllowScrolling(true);
        this.showInf = false;
      };
    },
    faqModal() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showModal = true;
      history.pushState(null, null, location.href);
      window.onpopstate = () => {
        this.$refs.fullpage.api.setAllowScrolling(true);
        this.showModal = false;
      };
    },
    storyModal() {
      this.currIndi = 1;
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showStoryModal = true;
      history.pushState(null, null, location.href);
      window.onpopstate = () => {
        this.$refs.fullpage.api.setAllowScrolling(true);
        this.showStoryModal = false;
      };
    },
    closeRoad1() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showRoad1 = false;
    },
    closeRoad2() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showRoad2 = false;
    },
    closeRoad3() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showRoad3 = false;
    },
    closeInf() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showInf = false;
    },
    videoPlay() {
      this.$refs.mainBelly.play();
    },
    closeModal() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showModal = false;
    },
    closeStoryModal() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showStoryModal = false;
    },
    mintModal() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.mintingModal = true;
    },
    closemintModal() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.mintingModal = false;
    },
    storySlideNext() {
      this.currIndi++;
      if (this.currIndi > 4) this.currIndi = 4;
    },
    storySlidePrev() {
      this.currIndi--;
      if (this.currIndi < 1) this.currIndi = 1;
    },
    sendGaEvent(eventName, event_category) {
      console.log(eventName + "|||||||" + event_category);
      gtag("event", eventName, {
        event_category: event_category,
      });
    },
    /*textLoop() {
      let wrapWidth = document.querySelector(".loop-holder").offsetWidth;
      console.log(wrapWidth);
      const ele = document.querySelector(".loop-holder .loop-holder__text");
      gsap.to(ele, {
        duration: 5,
        repeat: -1,
        ease: "none",
        x: "+=500",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % 500),
        },
      });
    },*/
  },
};
</script>
<style scoped lang="scss">
#main {
  background: #ceedff;
}

.slide {
  width: 100vw;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  ::v-deep .fp-tableCell {
    position: relative;
    img {
      bottom: 0;
      width: 100%;
      height: auto;
    }
  }
  .contents {
    width: 100%;
    position: relative;
    height: 100%;
    transform: translate3d(0, 0, 0);
    .text-con {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -80%);
      .item {
        .txt {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 90%;
          transform: translate(-50%, -55%);
          text-align: center;
          .sale {
            display: block;
            font-size: 14px;
            line-height: 21px;
            color: #555;
          }
          .date {
            display: block;
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            line-height: 31px;
            color: $black;
            margin-top: 15px;
            & + .date {
              margin-top: 0;
            }
          }
        }
      }
      .item2 {
        .txt {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          transform: translate(-50%, -50%);
          .road {
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: $white;
          }
          .title {
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            margin-top: 15px;
            font-size: 26px;
            line-height: 33px;
            color: $white;
          }
          .more {
            display: block;
            font-family: "Sandoll Odongtong", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            margin-top: 20px;
            text-decoration: underline;
            text-underline-position: under;
            color: $white;
          }
          &.road2 {
            transform: translate(-50%, -60%);
          }
        }
      }
    }
  }
}

#mainBelly {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  z-index: 3;
}

.info-btn {
  position: absolute;
  width: 34%;
  height: 16%;
  bottom: 10%;
  left: 3%;
}

.ending {
  position: relative;
  .top {
  }
  .bottom {
    img {
    }
  }
  .txt {
    img {
    }
    &.eng {
    }
  }
  img {
  }
}
.second {
  position: relative;
  .sec-cloud {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    img {
      object-fit: contain;
    }
  }
}
</style>
<style>
.section-1 {
  z-index: 2;
}
.cloud-wrapper {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;

  height: 0;
}
.cloud-wrapper.moved {
  padding-top: -10%;
}
.cloud-wrapper > img {
  position: absolute;
  transition: transform 0.5s ease-in-out;
  -webkit-transition: transform 0.5s ease-in-out;
  width: 100%;
  top: 0;
  transform: translateY(-69%);
  -webkit-transform: translateY(-69%);
}
.cloud-wrapper.moved > img {
  transform: translateY(-100%);
  -webkit-transform: translateY(-100%);
}
.section-2 {
  z-index: 1;
}
.main-char-ending {
  overflow: hidden;
  border-radius: 40%;
  pointer-events: none;
  position: fixed;
  top: 0px;
  left: 50%;
  width: 100%;
  z-index: 1;
  transform: translate3d(-50%, -100%, 0);
  -webkit-transform: translate3d(-50%, -100%, 0);
  transition: transform 0.5s ease-in-out;
  -webkit-transition: -webkit-transform 0.5s ease-in-out;
}
.fp-completely.active .main-char-ending {
  transform: translate3d(-50%, 0%, 0);
  -webkit-transform: translate3d(-50%, 0%, 0);
}
.main-char {
  overflow: hidden;
  border-radius: 40%;
  pointer-events: none;
  position: fixed;
  top: 0px;
  left: 50%;
  width: 100%;
  z-index: 1;
  transform: translate3d(-50%, -53%, 0);
  -webkit-transform: translate3d(-50%, -53%, 0);
  transition: top 1.5s ease-in-out;
  -webkit-transition: top 1.5s ease-in-out;
}
.main-char > div {
  display: none;
}
.main-char.s0 .fall {
  display: block;
}
.main-char.s1 .fall {
  display: block;
}
.main-char.s2 .stand {
  display: block;
}
.main-char.slide1 .stand {
  display: block;
}
.main-char.slide2 .walk {
  display: block;
}
.main-char.slide3 .stand {
  display: block;
}
.main-char.s3 .fall {
  display: block;
}

.road-img {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 18%;
  /* height: 30%; */
  z-index: 3;
  transform: translateX(-50%);
  transition: left 1s ease-in-out;
  -webkit-transition: left 1s ease-in-out;
}
.road-img.slide1 {
  left: 110%;
}
.road-img.slide3 {
  left: -10%;
}
.walk {
  width: auto;
  height: 100%;
  background-size: auto 100%;
  /*background-image: url("@/assets/m_images/walk-sprites-h.png");*/
}

.fp-controlArrow.fp-prev,
.fp-controlArrow.fp-next {
  display: none;
}
.roads {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.slide1-cloud-img {
  padding: 10%;
  width: 80%;
}
.swiper-container {
  padding: 20px 0;
}

.swiper-container.cloud {
  padding: 20px 0 40px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
.swiper-pagination {
  position: absolute;
  bottom: 0 !important;
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-item: flex-end;
}
.swiper-pagination-bullet {
  width: 8px;
  margin: 0px 3px;
  height: 8px;
  background: #000000 !important;
  border-radius: 4px;
}
.swiper-pagination-bullet-active {
  background: #000 !important;
  width: 20px !important;
  border-radius: 4px !important;
}
</style>
