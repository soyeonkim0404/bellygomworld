<template>
  <div id="main">
    <div class="inner">
      <client-only>
        <div class="wrapper">
          <div class="bubble">
            <img
              class="b-1"
              src="@/assets/images/main/img_bellyship_bubble_01.svg"
              alt=""
            />
            <img
              class="b-2"
              src="@/assets/images/main/img_bellyship_bubble_02.svg"
              alt=""
            />
            <img
              class="b-3"
              src="@/assets/images/main/img_bellyship_bubble_03.svg"
              alt=""
            />
            <img
              class="b-4"
              src="@/assets/images/main/img_bellyship_bubble_04.svg"
              alt=""
            />
          </div>
          <full-page ref="fullpage" :options="options" id="fullpage">
            <section class="section">
              <video id="mainBelly" loop muted data-autoplay playsinline>
                <source src="@/assets/media/belly.mp4" type="video/mp4" />
              </video>
            </section>
            <div class="cloud-wrapper ignore" :class="{ moved: cloudMoved }">
              <div class="obj">
                <img
                  src="@/assets/images/main/img_keyvisual_l1_rides_01.png"
                  class="no-ani"
                />
                <img
                  src="@/assets/images/main/img_keyvisual_l1_bellygom_02.png"
                  class="l1"
                />
                <img
                  src="@/assets/images/main/img_keyvisual_l2.png"
                  class="l2"
                />
                <img
                  src="@/assets/images/main/img_keyvisual_l3.png"
                  class="l3"
                />
                <img
                  src="@/assets/images/main/img_keyvisual_l4.png"
                  class="l4"
                />
                <img
                  src="@/assets/images/main/img_keyvisual_l5_ghost.png"
                  class="l5"
                />
              </div>
            </div>
            <section class="section">
              <div class="second">
                <img src="@/assets/images/main/img_keyvisual_02.png" />
                <div class="sec-cloud">
                  <img src="@/assets/images/main/img_keyvisual_cloud.png" />
                </div>
                <img src="@/assets/images/main/sky_cat.png" class="sky-cat" />
              </div>
            </section>
            <section class="section">
              <div class="slide" data-anchor="slide1">
                <div class="contents">
                  <img
                    src="@/assets/images/main/getbelly&road_info_motion.png"
                    class="roads"
                  />
                  <div class="text-con">
                    <template v-if="$store.getters.getLocale === 'ENG'">
                      <div class="item nm1">
                        <span class="sale">1st Whitelist Sale</span>
                        <span class="date">2022.08.17</span>
                        <span class="date">8:00 pm</span>
                      </div>
                      <div class="item nm2">
                        <span class="sale">2nd Whitelist Sale</span>
                        <span class="date">2022.08.17</span>
                        <span class="date">10:00 pm</span>
                      </div>
                      <div class="item nm3">
                        <span class="sale">Public Sale</span>
                        <span class="date">2022.08.18</span>
                        <span class="date">8:00 pm</span>
                      </div>
                    </template>
                    <template v-else>
                      <div class="item nm1">
                        <span class="sale">1차 화이트리스트 세일</span>
                        <span class="date">2022.08.17</span>
                        <span class="date">8:00 pm</span>
                      </div>
                      <div class="item nm2">
                        <span class="sale">2차 화이트리스트 세일</span>
                        <span class="date">2022.08.17</span>
                        <span class="date">10:00 pm</span>
                      </div>
                      <div class="item nm3">
                        <span class="sale">퍼블릭 세일</span>
                        <span class="date">2022.08.18</span>
                        <span class="date">8:00 pm</span>
                      </div>
                    </template>
                  </div>
                  <div class="info-pop-area">
                    <button
                      class="info-btn"
                      @click="
                        showInfo();
                        sendGaEvent('gb_icon', 'GB');
                      "
                    />
                    <img
                      src="@/assets/images/main/img_get_arrow_motion.svg"
                      id="arrowMotion"
                    />
                  </div>
                  <!--motion object-->
                  <img
                    src="@/assets/images/main/img_get_pinkballoon_motion.svg"
                    id="pinkballoon"
                  />
                  <img
                    src="@/assets/images/main/img_get_blueballoon_motion.svg"
                    id="blueballoon"
                  />
                </div>
              </div>
              <div class="slide" data-anchor="slide2">
                <div class="contents">
                  <img
                    src="@/assets/images/main/getbelly&road_ko_2_motion.png"
                    class="roads"
                  />
                  <!--motion object-->
                  <img
                    src="@/assets/images/main/img_getroad_pinkplane_motion.svg"
                    id="pinkplane"
                  />
                  <img
                    src="@/assets/images/main/img_getroad_blueplane_motion.svg"
                    id="blueplane"
                  />
                  <img
                    src="@/assets/images/main/img_getroad_cloud1_motion.svg"
                    id="cloud1"
                  />
                  <img
                    src="@/assets/images/main/img_getroad_cloud2_motion.svg"
                    id="cloud2"
                  />
                  <img
                    src="@/assets/images/main/img_getroad_cloud3_motion.svg"
                    id="cloud3"
                  />
                  <img
                    src="@/assets/images/main/img_getroad_cloud4_motion.svg"
                    id="cloud4"
                  />
                </div>
              </div>
              <div class="slide" data-anchor="slide3">
                <div class="contents">
                  <img
                    src="@/assets/images/main/getbelly&road_ko_3_motion.png"
                    class="roads"
                  />
                  <div class="text-con">
                    <button
                      class="item2 nm1"
                      @click="
                        roadModal2();
                        sendGaEvent('br_rd2_more', 'BR');
                      "
                    >
                      <img src="@/assets/images/main/img_road_balloon02.png" />
                      <div class="txt">
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
                    <button
                      class="item2 nm2"
                      @click="
                        roadModal1();
                        sendGaEvent('br_rd1_more', 'BR');
                      "
                    >
                      <img src="@/assets/images/main/img_road_balloon01.png" />
                      <div class="txt">
                        <span class="road">ROAD 1</span>
                        <template v-if="$store.getters.getLocale === 'ENG'">
                          <div class="title">
                            Bellygom<br />
                            Emerges!
                          </div>
                        </template>
                        <template v-else>
                          <div class="title">
                            벨리곰이<br />
                            나타나다
                          </div>
                        </template>
                        <span class="more">more</span>
                      </div>
                    </button>
                    <button
                      class="item2 nm3"
                      @click="
                        roadModal3();
                        sendGaEvent('br_rd3_more', 'BR');
                      "
                    >
                      <img src="@/assets/images/main/img_road_balloon03.png" />
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
                  <!--motion object-->
                  <img
                    src="@/assets/images/main/img_road_cloud1.svg"
                    id="load-cloud1"
                  />
                  <img
                    src="@/assets/images/main/img_road_cloud2.svg"
                    id="load-cloud2"
                  />
                  <img
                    src="@/assets/images/main/img_road_cloud3.svg"
                    id="load-cloud3"
                  />
                </div>
              </div>
            </section>
            <section class="section bellyship-special">
              <div class="bellyship">
                <template v-if="$store.getters.getLocale === 'ENG'">
                  <div class="belly-heart">
                    <span class="h-1">
                      <img
                        src="@/assets/images/main/img_heartballoon_01_en.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-2">
                      <img
                        src="@/assets/images/main/img_heartballoon_02_en.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-3">
                      <img
                        src="@/assets/images/main/img_heartballoon_03_en.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-4">
                      <img
                        src="@/assets/images/main/img_heartballoon_04_en.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-5">
                      <img
                        src="@/assets/images/main/img_heartballoon_05_en.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-6">
                      <img
                        src="@/assets/images/main/img_heartballoon_06_en.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-7">
                      <img
                        src="@/assets/images/main/img_heartballoon_07_en.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-8">
                      <img
                        src="@/assets/images/main/img_heartballoon_08_en.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-9">
                      <img
                        src="@/assets/images/main/img_heartballoon_09_en.svg"
                        alt=""
                      />
                    </span>
                  </div>
                </template>
                <template v-else>
                  <div class="belly-heart">
                    <span class="h-1">
                      <img
                        src="@/assets/images/main/img_heartballoon_01.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-2">
                      <img
                        src="@/assets/images/main/img_heartballoon_02.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-3">
                      <img
                        src="@/assets/images/main/img_heartballoon_03.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-4">
                      <img
                        src="@/assets/images/main/img_heartballoon_04.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-5">
                      <img
                        src="@/assets/images/main/img_heartballoon_05.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-6">
                      <img
                        src="@/assets/images/main/img_heartballoon_06.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-7">
                      <img
                        src="@/assets/images/main/img_heartballoon_07.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-8">
                      <img
                        src="@/assets/images/main/img_heartballoon_08.svg"
                        alt=""
                      />
                    </span>
                    <span class="h-9">
                      <img
                        src="@/assets/images/main/img_heartballoon_09.svg"
                        alt=""
                      />
                    </span>
                  </div>
                </template>
              </div>
            </section>
            <section class="section fp-auto-height">
              <template v-if="$store.getters.getLocale === 'ENG'">
                <div class="common-util">
                  <div class="head-title">
                    <span class="label">
                      Bellygom Super Surprise Package Season 1
                    </span>
                    <h3>An Amazing Experience for<br />Bellygom's Friends</h3>
                    <p class="desc">
                      <span
                        ><strong>Eligibility</strong> All Bellygom NFT holders
                        are eligible</span
                      >
                      <span><strong>The Plan</strong> It's a one-off</span>
                    </p>
                  </div>
                  <div class="content">
                    <ul>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_01_eng.png"
                            alt=""
                          />
                        </span>
                        <strong>Exciting<br />Lotte World</strong>
                        <p>
                          Lotte World invites you to Bellygom World<br />
                          this October.(Partners allowed entry)
                        </p>
                      </li>

                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_02_eng.png"
                            alt=""
                          />
                        </span>
                        <strong>Global Collab<br />NFTs</strong>
                        <p>
                          Given only to Bellygom NFT holders, global<br />
                          top tier collaboration NFT.<br />
                          Come get your voxel art Bellygom NFT.
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_03_eng.png"
                            alt=""
                          />
                        </span>
                        <strong>Limited Edition<br />Bellygom Merch</strong>
                        <p>
                          Encounter the limited edition numbered action figures
                          for all holders in the real world.<br />
                          (Only for NFT holders of 5 or more)
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_04_eng.png"
                            alt=""
                          />
                        </span>
                        <strong>Invincible<br />Coupon</strong>
                        <p>
                          Get more special discounts on Bellygom's<br />
                          meticulously curated products in reality.
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_05_eng.png"
                            alt=""
                          />
                        </span>
                        <strong>Belly pass</strong>
                        <p>
                          For Bellygom holders who don't want to wait,<br />
                          we will provide seasonal "No Queues<br />
                          Bellygom Pass"
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_06_eng.png"
                            alt=""
                          />
                        </span>
                        <strong>Live Commerce</strong>
                        <p>
                          There’ll be special Bellygom discounts<br />
                          on a live shopping show for holders only.
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_07_eng.png"
                            alt=""
                          />
                        </span>
                        <strong>Hotel Discounts</strong>
                        <p>
                          Always receive up to 15% discounts<br />
                          at Lotte affiliated hotels.<br />
                          (*Signiel, Lotte Hotel, Lotte City Hotel, L7)
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_08_eng.png"
                            alt=""
                          />
                        </span>
                        <strong>Membership Club</strong>
                        <p>
                          Receive 10x more L.POINT than Lotte Home<br />
                          Shopping regular members. Get shopping<br />
                          coupons (by age group) every month.
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_09_eng.png"
                            alt=""
                          />
                        </span>
                        <strong>Joy of 5,000won</strong>
                        <p>
                          Get up to 5,000 L.POINT or<br />
                          Lotte GRS mobile coupons each month.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="level-belly">
                  <div class="head-title">
                    <span class="label">
                      Bellygom Super Surprise Package Season 1
                    </span>
                    <h3>More Belly, More Surprise</h3>
                    <p class="sub-txt">
                      Regularly Updated Belly Benefits, Only with Belly NFTs
                    </p>
                  </div>
                  <div class="level-list">
                    <div class="belly-dung">
                      <img
                        src="@/assets/images/main/img_bellyship_belly.png"
                        alt="둥둥"
                      />
                    </div>
                    <div class="box belly">
                      <div class="tit"><span>Belly</span> Bellyship</div>
                      <p class="sub">
                        The Most Exclusively Astonishing Experience of<br />
                        the Bellygom Universe!
                      </p>
                      <ul class="benefit-list">
                        <li>
                          Bellygom Signiel Platinum Package(Premier City View
                          Scenic Bath Room + Lounge access and Breakfast tickets
                          for 2 persons + 1 Valet Service + Swimming Pool &
                          Fitness Center Access)
                        </li>
                        <li>
                          Bellygom World Premium Package (Lotte Hotel World
                          Voucher + Attractions Pass)
                        </li>
                        <li>
                          Bellygom Holders Exclusive Live Commerce Ticket +
                          Belly Discount Coupon
                        </li>
                        <li>
                          Bellygom Cinema Premium Package (2 Lotte Cinema
                          Charlotte Tickets + 2 Sweet combo Drinks)
                        </li>
                      </ul>
                      <span class="condition">
                        Eligibility: Belly Tier NFT Holders
                      </span>
                      <span class="condition">
                        The Plan: Lotte Signiel (2x per season)
                        *Transferable<span class="divider">｜</span>Bellygom
                        World (2x per season)<span class="divider">｜</span
                        >Cinema (4x per season)
                      </span>
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                    <div class="box holic">
                      <div class="tit"><span>Holic</span> Bellyship</div>
                      <p class="sub">A Magical Two-day Trip with Bellygom!</p>
                      <ul class="benefit-list">
                        <li>
                          Bellygom World Premium Package (Lotte Hotel World
                          Voucher + Attractions Pass)
                        </li>
                        <li>
                          Bellygom Holders Exclusive Live Commerce Ticket +
                          Holic Discount Coupon
                        </li>
                        <li>
                          Bellygom Cinema Premium Package (2 Lotte Cinema
                          Charlotte Tickets)
                        </li>
                      </ul>
                      <span class="condition">
                        Eligibility: Holic Tier NFT Holders
                      </span>
                      <span class="condition">
                        The Plan: Bellygom World (2x per season)<span
                          class="divider"
                          >｜</span
                        >Cinema (4x per season)
                      </span>
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                    <div class="box mega">
                      <div class="tit"><span>Mega</span> Bellyship</div>
                      <p class="sub">Bellygom's Surprising Comfort!</p>
                      <ul class="benefit-list">
                        <li>
                          Bellygom Holders Exclusive Live Commerce Ticket + Mega
                          Discount Coupon
                        </li>
                        <li>
                          Bellygom Cinema Premium Package (2 Lotte Cinema
                          Charlotte Tickets)
                        </li>
                      </ul>
                      <span class="condition">
                        Eligibility: Mega Tier NFT Holders
                      </span>
                      <span class="condition">
                        The Plan: Cinema (3x per season)
                      </span>
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                    <div class="box super">
                      <div class="tit"><span>Super</span> Bellyship</div>
                      <p class="sub">
                        For Belly friends who want to experience more fun, more
                        often!
                      </p>
                      <ul class="benefit-list">
                        <li>
                          Bellygom Holders Exclusive Live Commerce Ticket +
                          Super Discount Coupon
                        </li>
                        <li>
                          Bellygom Cinema Package (2 Lotte Cinema Tickets)
                        </li>
                      </ul>
                      <span class="condition">
                        Eligibility: Super Tier NFT Holders
                      </span>
                      <span class="condition">
                        The Plan: Cinema (3x per season)
                      </span>
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                    <div class="box surprise">
                      <div class="tit"><span>Surprise</span> Bellyship</div>
                      <p class="sub">
                        My Very Own Private Secret Shopping Experience!
                      </p>
                      <ul class="benefit-list">
                        <li>
                          Bellygom Holders Exclusive Live Commerce Ticket +
                          Surprise Discount Coupon
                        </li>
                        <li>
                          Bellygom Cinema Package (2 Lotte Cinema Tickets)
                        </li>
                      </ul>
                      <span class="condition">
                        Eligibility: Surprise Tier NFT Holders
                      </span>
                      <span class="condition">
                        The Plan: Cinema (2x per season)
                      </span>
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                    <div class="box friend">
                      <div class="tit"><span>Friends</span> Bellyship</div>
                      <p class="sub">Double the Fun with Friends!</p>
                      <ul class="benefit-list">
                        <li>
                          Bellygom Holders Exclusive Live Commerce Ticket +
                          Friends Discount Coupon
                        </li>
                        <li>
                          Bellygom Cinema Package (2 Lotte Cinema Tickets)
                        </li>
                      </ul>
                      <span class="condition">
                        Eligibility: Friends Tier NFT Holders
                      </span>
                      <span class="condition"
                        >The Plan: Cinema (1x per season)</span
                      >
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="season">
                  <p>* Some benefits are transferable as airdrop NFTs</p>
                </div>
                <div class="nft-wrap">
                  <!--nft 슬라이더-->
                  <div class="loop-text2">
                    <div class="text">
                      <span>&nbsp &middot &nbsp NFT BELLYGOM</span>
                    </div>
                  </div>
                  <div class="nft-image-loop">
                    <div class="image-item">
                      <img
                        src="@/assets/images/main/img_NFT_01_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_02_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_03_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_04_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_05_en.png"
                        alt=""
                        class="nft-img"
                      />
                    </div>
                    <div class="image-item">
                      <img
                        src="@/assets/images/main/img_NFT_01_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_02_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_03_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_04_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_05_en.png"
                        alt=""
                        class="nft-img"
                      />
                    </div>
                    <div class="image-item">
                      <img
                        src="@/assets/images/main/img_NFT_01_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_02_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_03_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_04_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_05_en.png"
                        alt=""
                        class="nft-img"
                      />
                    </div>
                    <div class="image-item">
                      <img
                        src="@/assets/images/main/img_NFT_01_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_02_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_03_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_04_en.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_05_en.png"
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
                      <li class="half-end">
                        <img
                          src="@/assets/images/main/img_parteners_logo_sandbox.png"
                          alt=""
                          style="width: 470px"
                        />
                      </li>
                      <li class="half-start">
                        <img
                          src="@/assets/images/main/img_parteners_logo__groundx.png"
                          alt=""
                          style="width: 470px"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/images/main/img_parteners_logo_sunmiya.png"
                          alt=""
                          style="width: 300px"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/images/main/img_parteners_logo_happier_town.png"
                          alt=""
                          style="width: 307px"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/images/main/img_parteners_logo_mimyo.png"
                          alt=""
                          style="width: 196px"
                        />
                      </li>
                      <!--                    <li>
                        <img
                            src="@/assets/images/main/img_parteners_logo_sandbox.png"
                            alt=""
                            style="width: 230px"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/images/main/img_parteners_logo_stepn.png"
                          alt=""
                          style="width: 239px"
                        />
                      </li>
                      <li></li>-->
                    </ul>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="common-util">
                  <div class="head-title">
                    <span class="label">
                      벨리곰 슈퍼 서프라이즈 패키지 시즌 1
                    </span>
                    <h3>
                      벨리곰의 친구들 모두가<br />누릴 수 있는 놀라운 경험!
                    </h3>
                    <p class="desc">
                      <span
                        ><strong>자격요건</strong> 모든 벨리곰 NFT 홀더
                        대상</span
                      >
                      <span><strong>운영플랜</strong> 1회 진행</span>
                    </p>
                  </div>
                  <div class="content">
                    <ul>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_01.png"
                            alt=""
                          />
                        </span>
                        <strong>익사이팅 롯데월드</strong>
                        <p>
                          롯데월드에서 10월에 펼쳐지는 벨리곰의 세계로<br />
                          여러분을 초대합니다.(동반인 입장가능)
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_02.png"
                            alt=""
                          />
                        </span>
                        <strong>글로벌 콜라보 NFT</strong>
                        <p>
                          오직 벨리곰 홀더분들에게만 드리는<br />
                          글로벌 탑티어 콜라보레이션 NFT,<br />
                          복셀 형태 벨리곰 NFT를 받아보세요.
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_03.png"
                            alt=""
                          />
                        </span>
                        <strong>한정판 넘버링 피규어</strong>
                        <p>
                          홀더분들에게만 드리는 한정판 넘버링 피규어로<br />
                          현실 세계에서도 벨리곰을 만나보세요.<br />
                          (단, 5개 이상 NFT 보유 홀더)
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_04.png"
                            alt=""
                          />
                        </span>
                        <strong>무적 할인권</strong>
                        <p>
                          꼼꼼하게 선정한 벨리곰 현실 상품들을<br />
                          더 특별하게 할인받아 Get하세요.
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_05.png"
                            alt=""
                          />
                        </span>
                        <strong>벨리 패스</strong>
                        <p>
                          기다리기 싫어하는 벨리곰 홀더분들에게 시즌 별<br />
                          ‘줄 안서는 벨리 패스’를 제공합니다.
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_06.png"
                            alt=""
                          />
                        </span>
                        <strong>라이브 커머스 혜택</strong>
                        <p>
                          라이브 쇼핑 방송에서 벨리곰 홀더분들에게만<br />
                          특별 할인 혜택을 제공합니다.
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_07.png"
                            alt=""
                          />
                        </span>

                        <strong>호텔 할인</strong>
                        <p>
                          롯데 계열 호텔 최대 15% 혜택을 상시 제공합니다.<br />
                          (*시그니엘, 롯데호텔, 롯데시티호텔, L7)
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_08.png"
                            alt=""
                          />
                        </span>
                        <strong>벨리곰 멤버십 클럽</strong>
                        <p>
                          롯데홈쇼핑 일반 회원 대비<br />
                          10배의 L.POINT 적립과 매월 지급되는 연령별<br />
                          쇼핑 쿠폰을 받아보세요.
                        </p>
                      </li>
                      <li>
                        <span class="img-wrap">
                          <img
                            src="@/assets/images/main/img__bubble_09.png"
                            alt=""
                          />
                        </span>
                        <strong>5,000원의 행복</strong>
                        <p>
                          매월 5,000 L.POINT 또는<br />
                          롯데GRS(식음료 교환권) 모바일 5,000원<br />
                          쿠폰을 제공합니다.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="level-belly">
                  <div class="head-title">
                    <span class="label">
                      벨리곰 슈퍼 서프라이즈 패키지 시즌 1
                    </span>
                    <h3>More Belly, More Surprise</h3>
                    <p class="sub-txt">
                      계속 업데이트 될, NFT만으로 누릴 수 있는 Belly Benefit
                    </p>
                  </div>
                  <div class="level-list">
                    <div class="belly-dung">
                      <img
                        src="@/assets/images/main/img_bellyship_belly.png"
                        alt="둥둥"
                      />
                    </div>
                    <div class="box belly">
                      <div class="tit"><span>Belly</span> Bellyship</div>
                      <p class="sub">
                        아무나 가질 수 없는<br />
                        벨리곰 유니버스의 가장 놀라운 경험!
                      </p>
                      <ul class="benefit-list">
                        <li>
                          벨리곰 시그니엘 플래티넘 패키지 (프리미어 시티뷰
                          시닉베스 룸 + 라운지 2인 + 조식 2인 + 발렛 1회 +
                          수영장 & 피트니스 이용권)
                        </li>
                        <li>
                          벨리곰 월드 프리미엄 패키지 (롯데호텔 월드 숙박권 +
                          어트랙션 패스권)
                        </li>
                        <li>
                          벨리곰 홀더 전용 라이브 커머스 입장권 + ‘벨리 할인권’
                        </li>
                        <li>
                          벨리곰 시네마 프리미엄 패키지 (롯데 시네마 샤롯데 2매
                          + 스위트콤보, 음료 2개)
                        </li>
                      </ul>
                      <span class="condition">
                        자격요건: 벨리급 NFT 소유자
                      </span>
                      <span class="condition">
                        운영플랜: 시그니엘 시즌 내 2회(양도 가능)<span
                          class="divider"
                          >｜</span
                        >월드 시즌 내 2회<span class="divider">｜</span>시네마
                        시즌 내 4회</span
                      >
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                    <div class="box holic">
                      <div class="tit"><span>Holic</span> Bellyship</div>
                      <p class="sub">벨리곰과 함께하는 마법같은 1박 2일!</p>
                      <ul class="benefit-list">
                        <li>
                          벨리곰 월드 프리미엄 패키지 (롯데호텔 월드 숙박권 +
                          어트랙션 패스권)
                        </li>
                        <li>
                          벨리곰 홀더 전용 라이브 커머스 입장권 + ‘홀릭 할인권’
                        </li>
                        <li>
                          벨리곰 시네마 프리미엄 패키지 (롯데 시네마 샤롯데 2매)
                        </li>
                      </ul>
                      <span class="condition">
                        자격요건: 홀릭급 NFT 소유자
                      </span>
                      <span class="condition">
                        운영플랜: 월드 시즌 내 2회<span class="divider">｜</span
                        >시네마 시즌 내 4회
                      </span>
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                    <div class="box mega">
                      <div class="tit"><span>Mega</span> Bellyship</div>
                      <p class="sub">벨리곰이 선사하는 깜짝 놀랄 편안함!</p>
                      <ul class="benefit-list">
                        <li>
                          벨리곰 홀더 전용 라이브 커머스 입장권 + ‘메가 할인권’
                        </li>
                        <li>
                          벨리곰 시네마 프리미엄 패키지 (롯데 시네마 샤롯데 2매
                          + 스위트콤보, 음료 2개)
                        </li>
                      </ul>
                      <span class="condition">
                        자격요건: 메가급 NFT 소유자
                      </span>
                      <span class="condition">
                        운영플랜: 시네마 시즌 내 3회
                      </span>
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                    <div class="box super">
                      <div class="tit"><span>Super</span> Bellyship</div>
                      <p class="sub">
                        더 자주, 더 많이 경험하고 싶은 벨리친구들을 위해!
                      </p>
                      <ul class="benefit-list">
                        <li>
                          벨리곰 홀더 전용 라이브 커머스 입장권 + ‘슈퍼 할인권’
                        </li>
                        <li>벨리곰 시네마 패키지 (롯데 시네마 관람권 2매)</li>
                      </ul>
                      <span class="condition">
                        자격요건: 슈퍼급 NFT 소유자
                      </span>
                      <span class="condition">
                        운영플랜: 시네마 시즌 내 3회
                      </span>
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                    <div class="box surprise">
                      <div class="tit"><span>Surprise</span> Bellyship</div>
                      <p class="sub">프라이빗한 나만의 비밀 쇼핑 경험!</p>
                      <ul class="benefit-list">
                        <li>
                          벨리곰 홀더 전용 라이브 커머스 입장권 + ‘서프라이즈
                          할인권’
                        </li>
                        <li>벨리곰 시네마 패키지 (롯데 시네마 관람권 2매)</li>
                      </ul>
                      <span class="condition">
                        자격요건: 서프라이즈급 NFT 소유자
                      </span>
                      <span class="condition">
                        운영플랜: 시네마 시즌 내 2회
                      </span>
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                    <div class="box friend">
                      <div class="tit"><span>Friends</span> Bellyship</div>
                      <p class="sub">친구와 함께하면 즐거움이 두배!</p>
                      <ul class="benefit-list">
                        <li>
                          벨리곰 홀더 전용 라이브 커머스 입장권 + ‘프렌즈
                          할인권’
                        </li>
                        <li>벨리곰 시네마 패키지 (롯데 시네마 관람권 2매)</li>
                      </ul>
                      <span class="condition">
                        자격요건: 프렌즈급 NFT 소유자
                      </span>
                      <span class="condition"
                        >운영플랜: 시네마 시즌 내 1회
                      </span>
                      <div class="hide-mark">
                        <img
                          src="@/assets/images/main/img_lock.svg"
                          alt=""
                          class="lock"
                        />
                        <p>Comming Soon!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="season">
                  <p>* 일부 혜택은 NFT로 에어드랍되어 양도 가능합니다.</p>
                </div>
                <div class="nft-wrap">
                  <!--nft 슬라이더-->
                  <div class="loop-text2">
                    <div class="text">
                      <span>&nbsp &middot &nbsp NFT BELLYGOM</span>
                    </div>
                  </div>
                  <div class="nft-image-loop">
                    <div class="image-item">
                      <img
                        src="@/assets/images/main/img_NFT_01.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_02.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_03.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_04.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_05.png"
                        alt=""
                        class="nft-img"
                      />
                    </div>
                    <div class="image-item">
                      <img
                        src="@/assets/images/main/img_NFT_01.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_02.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_03.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_04.png"
                        alt=""
                        class="nft-img"
                      />
                      <img
                        src="@/assets/images/main/img_NFT_05.png"
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
                      <li class="half-end">
                        <img
                          src="@/assets/images/main/img_parteners_logo_sandbox.png"
                          alt=""
                          style="width: 470px"
                        />
                      </li>
                      <li class="half-start">
                        <img
                          src="@/assets/images/main/img_parteners_logo__groundx.png"
                          alt=""
                          style="width: 470px"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/images/main/img_parteners_logo_sunmiya.png"
                          alt=""
                          style="width: 300px"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/images/main/img_parteners_logo_happier_town.png"
                          alt=""
                          style="width: 307px"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/images/main/img_parteners_logo_mimyo.png"
                          alt=""
                          style="width: 196px"
                        />
                      </li>
                      <!--                    <li>
                        <img
                            src="@/assets/images/main/img_parteners_logo_sandbox.png"
                            alt=""
                            style="width: 230px"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/images/main/img_parteners_logo_stepn.png"
                          alt=""
                          style="width: 239px"
                        />
                      </li>
                      <li></li>-->
                    </ul>
                  </div>
                </div>
              </template>
            </section>
            <section class="section fp-auto-height">
              <Footer />
            </section>
            <div
              class="main-char ignore"
              :class="charClass"
              :style="{ transform: charTop, '-webkit-transform': charTop }"
              ref="mainChar"
            >
              <div class="fall">
                <img src="../assets/images/char-fall.webp" type="image/webp" />
              </div>
              <div class="stand">
                <img src="@/assets/images/char-stand.png" />
              </div>
              <div class="walk">
                <img src="../assets/images/char-walk.webp" type="image/webp" />
              </div>
              <div class="end">
                <img src="@/assets/images/char-end.png" />
              </div>
            </div>
          </full-page>
        </div>
        <div class="main-char-ending">
          <div class="fall">
            <img src="@/assets/images/char-fall.webp" type="image/webp" />
          </div>
        </div>
      </client-only>
    </div>

    <!--민팅 팝업-->
    <modal
      v-if="mintingModal"
      @mintModal="mintModal"
      @close="closemintModal"
      class="mint-modal"
    >
      <div slot="header"></div>
      <div slot="body">
        <div class="mint">
          <div class="tit">
            벨리곰 NFT 민팅! 시작합니다!<br />
            지금 벨리곰 민팅하러 GOGO
          </div>
          <p>Hurry Up! Go to Bellygom NFT minting site right now</p>
          <a href="https://bellygom.launchpad.xclusive.market/" target="_blank">
            Minting Now
            <img src="@/assets/images/main/ic_24_arrow_down.png" />
          </a>
        </div>
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
          <span class="notice"
            ><strong>홀더와 함께 만드는 Road 4!!!</strong></span
          >
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
          </ul>
          <div class="list-title">2nd Whitelist (Competition)</div>
          <ul class="road-list">
            <li>Remaining - 4,000</li>
            <li>Per Transaction - 2</li>
          </ul>
          <div class="list-title">Public Sale</div>
          <ul class="road-list">
            <li>Remaining - 3,500</li>
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
                The remaining quantity of the 1st whitelist sale will be
                reallocated to the 2nd whitelist sale.
              </li>
              <li>
                And what's left of the 2nd whitelist sale will be reallocated to
                the public sale.
              </li>
              <li>
                The reserved 500 pieces allocated to the team will be utilized
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
          </ul>
          <div class="list-title">2차 경쟁 화이트리스트 세일</div>
          <ul class="road-list">
            <li>수량 4,000개</li>
            <li>트랜잭션당 2개</li>
          </ul>
          <div class="list-title">3차 퍼블릭 세일</div>
          <ul class="road-list">
            <li>수량 3,500개</li>
            <li>트랜잭션당 5개</li>
          </ul>
          <div class="notice">
            <strong>공통 해당 사항</strong>
            <ul class="notice-list">
              <li>민팅가격은 추후 공지됩니다.</li>
              <li>
                민팅 확정라운드는 Favor, Klay / 나머지 라운드는 Klay로
                진행됩니다.
              </li>
              <li>
                1차 확정 화이트리스트 미판매 물량은 2차 화이트리스트 세일로
                이전됩니다.
              </li>
              <li>
                2차 경쟁 화이트리스트 미판매 물량은 3차 퍼블릭 세일로
                이전됩니다.
              </li>
              <li>
                팀 물량 500개는 파트너쉽, 이벤트 등 기타 목적으로 활용됩니다.
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
    <modal
      v-if="showStoryModal"
      @storyModal="storyModal"
      @close="closeStoryModal"
      class="story-modal"
    >
      <div slot="header"></div>
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
              <h3>
                1만 개의<br />
                신비로운 힘이 생긴 벨리곰!
              </h3>
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
                1만 개의<br />
                신비로운 능력을 얻은 벨리곰은<br />
                어떤 서프라이즈를 가져다 줄까?
              </h3>
            </div>
          </div>
          <div class="indicator">
            <div class="indi" @click="currIndi = 1">
              <img
                v-if="currIndi === 1"
                src="@/assets/images/main/img_storybook_bookmark_on.png"
              />
              <img
                v-else
                src="@/assets/images/main/img_storybook_bookmark_off.png"
              />
            </div>
            <div class="indi" @click="currIndi = 2">
              <img
                v-if="currIndi === 2"
                src="@/assets/images/main/img_storybook_bookmark_on.png"
              />
              <img
                v-else
                src="@/assets/images/main/img_storybook_bookmark_off.png"
              />
            </div>
            <div class="indi" @click="currIndi = 3">
              <img
                v-if="currIndi === 3"
                src="@/assets/images/main/img_storybook_bookmark_on.png"
              />
              <img
                v-else
                src="@/assets/images/main/img_storybook_bookmark_off.png"
              />
            </div>
            <div class="indi" @click="currIndi = 4">
              <img
                v-if="currIndi === 4"
                src="@/assets/images/main/img_storybook_bookmark_on.png"
              />
              <img
                v-else
                src="@/assets/images/main/img_storybook_bookmark_off.png"
              />
            </div>
          </div>
          <div class="arrow">
            <span
              class="prev"
              :class="{ on: currIndi > 1 }"
              @click="storySlidePrev()"
            ></span>
            <span
              class="next"
              :class="{ on: currIndi < 4 }"
              @click="storySlideNext()"
            ></span>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "IndexPage",
  layout: "default",
  components: { Footer },
  data() {
    return {
      mintingModal: false,
      showStoryModal: false,
      currIndi: 1,
      showInf: false,
      showRoad1: false,
      showRoad2: false,
      showRoad3: false,
      scrollToTop: true,
      cloudMoved: false,
      charClass: "s0",
      footClass: "",
      charTop: "translate(-50%,-100%)",
      options: {
        keyboardScrolling: false,
        animateAnchor: false,
        scrollingSpeed: 1500,
        licenseKey: "H68K9-OX8AH-GK457-17J28-VGRRP",
        scrollBar: false,
        navigation: false,
        scrollOverflow: true,
        normalScrollElements: ".modal-container",
        scrollHorizontally: true,
        scrollHorizontallyKey:
          "YmVsbHlnb20ud29ybGRfaktDYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1NFN6",
        anchors: [
          "getBelly",
          "falling",
          "bellyRoad",
          "bellyShip",
          "level-belly",
          "footer",
        ],
        afterResize: (width, height) => {
          // alert("The sections have finished resizing");
          this.$refs.fullpage.api.rebuild();
        },
        afterLoad: (origin, destination, direction) => {
          this.$refs.fullpage.api.setAllowScrolling(true);
          // console.log("afterLoad");
          if (destination.index === 0) {
            this.charTop = "0px";
            this.cloudMoved = false;
          } else {
            this.cloudMoved = true;
          }

          if (destination.index === 2) {
            this.charClass = "s2";
          }
        },
        onLeave: (origin, destination, direction) => {
          this.$refs.fullpage.api.setAllowScrolling(false);
          // console.log("onLeave");
          if (destination.index === 0) {
            this.charClass = "s0";
          } else if (destination.index === 1) {
            this.charClass = "s1";
          } else if (destination.index === 3) {
            this.charClass = "s3";
          }
          console.log("위치 destination", destination.index);
          document.querySelectorAll(".anchor-nav li a").forEach(function (nav) {
            nav.classList.remove("active");
          });
          if (destination.index === 0) {
            this.cloudMoved = false;
            document.querySelector(".top-btn").style.opacity = 0;
            document.querySelector(".story-modal-btn").classList.remove("up");
            //document.querySelector(".mint-modal-btn").classList.remove("up");
          } else {
            document.querySelector(".top-btn").style.opacity = 1;
            document.querySelector(".story-modal-btn").classList.add("up");
            //document.querySelector(".mint-modal-btn").classList.add("up");
          }
          const charHeight = (window.innerWidth * 0.375) / 2;
          if (destination.index === 0) {
            this.charTop = "translate(-50%,-100%)";
          } else if (destination.index === 1) {
            document
              .querySelector(".anchor-nav li:first-child a")
              .classList.add("active");
            const t =
              window.innerHeight * 1 + window.innerHeight / 2 - charHeight;
            this.charTop = "translate(-50%," + t + "px)";
          } else if (destination.index === 2) {
            document
              .querySelector(".anchor-nav li:nth-child(2) a")
              .classList.add("active");
            const t =
              window.innerHeight * 3 -
              (window.innerWidth / 16) * 9 * 0.28 -
              charHeight;
            this.charTop = "translate(-50%," + t + "px)";
          } else if (destination.index === 3) {
            document
              .querySelector(".anchor-nav li:nth-child(3) a")
              .classList.add("active");
            console.log(document.querySelector(".bellyship").offsetHeight);
            const t =
              window.innerHeight * 4 - window.innerHeight * 0.6 - charHeight;
            this.charTop = "translate(-50%," + -t + "px)";
          }

          if (destination.index === 4) {
            document
              .querySelector(".anchor-nav li:nth-child(3) a")
              .classList.add("active");
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
          // console.log("afterSlideLoad");
          if (destination.anchor === "slide1") {
            this.charClass = "slide1";
          } else if (destination.anchor === "slide2") {
            this.charClass = "slide2";
          } else if (destination.anchor === "slide3") {
            this.charClass = "slide3";
          }
        },
        afterRender: function () {
          // console.log("afterRender");
        },
        afterReBuild: function () {},
        afterResponsive: function (isResponsive) {},
        onScrollOverflow: function (section, slide, position, direction) {
          // console.log(section, slide, position, direction);
        },
      },
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 700,
        disableOnInteraction: false,
        autoplay: {
          delay: 1000,
        },
      },
    };
  },
  created() {
    this.$nuxt.$on("scrollLock", (data) => {
      this.$refs.fullpage.api.setAllowScrolling(data);
    });
    this.$nuxt.$on("faqModal", () => {
      this.faqModal();
    });
    this.$nuxt.$on("storyModal", () => {
      this.storyModal();
    });
  },
  mounted() {
    if (this.$mq === "mobile") {
      this.$router.push({ path: "/m" });
    }
    let locale = this.getCookie("b_locale");

    if (this.$store.getters.getConnect === "is-connect") {
      this.$store.commit("setConnect");
      this.$store.dispatch("fetchMyWallet");
    } else {
      this.$store.commit("setNoConnect");
      this.$store.commit("setMyNft", []);
    }

    if (locale && locale === "KOR") {
      this.$store.commit("setKOR");
    } else {
      this.$store.commit("setENG");
    }
  },
  methods: {
    roadModal1() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showRoad1 = true;
    },
    roadModal2() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showRoad2 = true;
    },
    roadModal3() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showRoad3 = true;
    },
    showInfo() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showInf = true;
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
    storyModal() {
      this.currIndi = 1;
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.showStoryModal = true;
    },
    closeStoryModal() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.showStoryModal = false;
    },
    storySlideNext() {
      this.currIndi++;
      if (this.currIndi > 4) this.currIndi = 4;
    },
    storySlidePrev() {
      this.currIndi--;
      if (this.currIndi < 1) this.currIndi = 1;
    },
    mintModal() {
      this.$refs.fullpage.api.setAllowScrolling(false);
      this.mintingModal = true;
    },
    closemintModal() {
      this.$refs.fullpage.api.setAllowScrolling(true);
      this.mintingModal = false;
    },
    sendGaEvent(eventName, event_category) {
      console.log(eventName + "|||||||" + event_category);
      gtag("event", eventName, {
        event_category: event_category,
      });
    },
  },
};
</script>
<style>
#main {
  background: #ceedff;
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
.cloud-wrapper .obj {
  position: absolute;
  transition: transform 0.5s ease-in-out;
  -webkit-transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100vh;
  left: 0;
  bottom: 0;
  transform: translateY(0);
  -webkit-transform: translateY(0);
}
.cloud-wrapper.moved .obj {
  transform: translateY(-100%);
  -webkit-transform: translateY(-100%);
}
.section-2 {
  z-index: 1;
}

.main-char-ending {
  max-width: 700px;
  overflow: hidden;
  border-radius: 40%;
  pointer-events: none;
  position: fixed;
  top: 30%;
  left: 50%;
  width: 40%;
  z-index: -1;
  transform: translate3d(-50%, -200%, 0);
  -webkit-transform: translate3d(-50%, -200%, 0);
  transition: 0.7s 0s ease-in-out;
  -webkit-transition: 0.7s 0s ease-in-out;
  opacity: 0;
}
.fp-viewing-bellyShip .main-char-ending {
  opacity: 1;
  transition: 2s 1.5s ease-in-out;
  -webkit-transition: 2s 1.5s ease-in-out;
  z-index: 3;
  transform: translate3d(-50%, 0%, 0);
  -webkit-transform: translate3d(-50%, 0%, 0);
}
.fp-viewing-level-belly .main-char-ending {
  animation: down 0.5s ease;
}
@keyframes down {
  0% {
    transform: translate3d(-50%, 0%, 0);
    -webkit-transform: translate3d(-50%, 0%, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-50%, 50%, 0);
    -webkit-transform: translate3d(-50%, 50%, 0);
    opacity: 0;
  }
}

.main-char {
  overflow: hidden;
  border-radius: 40%;
  pointer-events: none;
  position: fixed;
  top: 0px;
  left: 50%;
  width: 37.5%;
  z-index: 1;
  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);
  transition: transform 1.5s ease-in-out;
  -webkit-transition: -webkit-transform 1.5s ease-in-out;
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
  /*background-image: url("@/assets/images/walk-sprites-h.png");*/
}
.fp-controlArrow.fp-prev,
.fp-controlArrow.fp-next {
  display: none;
}

/*slide 1 pink balloon*/

@keyframes pinkballoon {
  0% {
    transform: translateY(5px) rotate(16deg);
  }
  100% {
    transform: translateY(20px) rotate(-16deg);
  }
}

@keyframes blueballoon {
  0% {
    transform: translateY(5px) rotate(-8deg);
  }
  100% {
    transform: translateY(20px) rotate(8deg);
  }
}

@keyframes pinkplane {
  0% {
    transform: translateX(-70px) translateY(-10px);
    opacity: 1;
  }
  30% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  85% {
    transform: translateX(200px) translateY(-50px);
    opacity: 0.75;
  }
  100% {
    transform: translateX(200px) translateY(-50px);
    opacity: 0;
  }
}

@keyframes blueplane {
  0% {
    transform: translateX(-50px) translateY(-10px);
    opacity: 1;
  }
  30% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  85% {
    transform: translateX(150px) translateY(-70px);
    opacity: 0.75;
  }
  100% {
    transform: translateX(150px) translateY(-70px);
    opacity: 0;
  }
}

@keyframes cloud {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
}

@keyframes cloud2 {
  0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

#pinkballoon {
  width: 6%;
  z-index: 9;
  position: absolute;
  top: 12%;
  left: 16%;
  transform: rotate(-8deg);
  -webkit-animation: pinkballoon 3s infinite alternate ease-in-out;
  animation: pinkballoon 3s infinite alternate ease-in-out;
}

#blueballoon {
  width: 3%;
  z-index: 9;
  position: absolute;
  top: 35%;
  right: 10%;
  transform: rotate(4deg);
  -webkit-animation: blueballoon 3s infinite alternate ease-in-out;
  animation: blueballoon 3s infinite alternate ease-in-out;
}

#arrowMotion {
  width: 20%;
  z-index: 9;
  position: absolute;
  top: -15%;
  left: 43%;
  -webkit-animation: cloud2 1s infinite alternate ease-in-out;
  animation: cloud2 1s infinite alternate ease-in-out;
}

#pinkplane {
  width: 4.5%;
  z-index: 9;
  position: absolute;
  top: 34%;
  left: 45%;
  -webkit-animation: pinkplane 6s 0.5s linear infinite;
  animation: pinkplane 6s 0.5s linear infinite;
}

#blueplane {
  width: 3.15%;
  height: auto;
  z-index: 9;
  position: absolute;
  top: 25%;
  left: 53%;
  -webkit-animation: blueplane 6s 0.5s linear infinite;
  animation: blueplane 6s 0.5s linear infinite;
}

#cloud1 {
  width: 9.5%;
  z-index: 9;
  position: absolute;
  top: 35%;
  left: 10%;
  -webkit-animation: cloud2 2s infinite alternate ease-in-out;
  animation: cloud2 2s infinite alternate ease-in-out;
}

#cloud2 {
  width: 11.9%;
  z-index: 9;
  position: absolute;
  top: 13%;
  left: 28%;
  -webkit-animation: cloud 2s infinite alternate ease-in-out;
  animation: cloud 2s infinite alternate ease-in-out;
}

#cloud3 {
  width: 9.8%;
  z-index: 9;
  position: absolute;
  top: 41%;
  left: 53%;
  -webkit-animation: cloud2 2s infinite alternate ease-in-out;
  animation: cloud2 2s infinite alternate ease-in-out;
}

#cloud4 {
  width: 13.1%;
  z-index: 9;
  position: absolute;
  top: 24%;
  left: 75%;
  -webkit-animation: cloud 2s infinite alternate ease-in-out;
  animation: cloud 2s infinite alternate ease-in-out;
}

#load-cloud1 {
  width: 10.95%;
  z-index: 9;
  position: absolute;
  top: 8%;
  left: 11%;
  -webkit-animation: cloud 2s infinite alternate ease-in-out;
  animation: cloud 2s infinite alternate ease-in-out;
}

#load-cloud2 {
  width: 8.4%;
  z-index: 9;
  position: absolute;
  top: 34%;
  right: 9%;
  -webkit-animation: cloud2 2s infinite alternate ease-in-out;
  animation: cloud2 2s infinite alternate ease-in-out;
}

#load-cloud3 {
  width: 9.5%;
  z-index: 9;
  position: absolute;
  top: 11%;
  right: 1%;
  -webkit-animation: cloud 2s infinite alternate ease-in-out;
  animation: cloud 2s infinite alternate ease-in-out;
}

@keyframes cat {
  0% {
    transform: translateY(0) rotate(10deg);
  }
  25% {
    transform: translateY(-20px) rotate(10deg);
  }
  75% {
    transform: translateY(-80px) rotate(-10deg);
  }
  100% {
    transform: translateY(-100px) rotate(-10deg);
  }
}

.sky-cat {
  width: 222px;
  position: absolute;
  top: 60%;
  left: 65%;
  transform-origin: top left;
  -webkit-animation: cat 2.5s infinite alternate ease-in-out;
  animation: cat 2.5s infinite alternate ease-in-out;
}

.cloud-wrapper .obj .l1 {
  position: absolute;
  width: 225px;
  height: auto;
  right: -90px;
  bottom: 22.5%;
  transform-origin: left top;
  -webkit-animation: mainBelly 3s infinite ease-in-out;
  animation: mainBellyIn 3s infinite ease-in-out;
}

@keyframes mainBellyIn {
  0% {
    transform: translateX(100%) translateY(150%);
  }
  60% {
    transform: translateX(0) translateY(0);
  }
  75% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(100%) translateY(150%);
  }
}

.cloud-wrapper .obj .l2 {
  position: absolute;
  width: 100%;
  right: 0;
  bottom: -10%;
  -webkit-animation: moveUpTo 1.5s infinite alternate linear;
  animation: moveUpTo 1.5s infinite alternate linear;
}
.cloud-wrapper .obj .l3 {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -13%;
  -webkit-animation: moveDownTo 1.5s infinite alternate linear;
  animation: moveDownTo 1.5s infinite alternate linear;
}
.cloud-wrapper .obj .l4 {
  position: absolute;
  width: 1050px;
  bottom: -317px;
  right: 10%;
  -webkit-animation: moveDownTo 1.5s infinite alternate linear;
  animation: moveDownTo 1.5s infinite alternate linear;
}
.cloud-wrapper .obj .l5 {
  position: absolute;
  width: 215px;
  right: 21%;
  bottom: -106px;
}
.cloud-wrapper .obj .no-ani {
  position: absolute;
  width: 282px;
  right: 0;
  bottom: 22.5%;
}

@keyframes moveUpTo {
  0% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes moveDownTo {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(30px);
  }
}

.section .slide .contents:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #ceedff 0%,
    rgba(206, 237, 255, 0) 89.15%
  );
}
</style>
