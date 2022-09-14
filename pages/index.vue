<template>
  <div class="pages entry index">
    <div class="hero main">
      <div class="details">
        <h1 class="title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Chidimma
        </h1>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Tincidunt augue interdum velit euismod.
        </div>
        <div class="ctas">
          <button class="contact">Contact Us</button>
        </div>
      </div>
      <div class="image">
        <SnippetImageCard
          class="floating-card left"
          image-src="assets/images/pngs/man.png?url"
          text="Mr. Thomas is done painting your room"
        />
        <v-lazy-image
          src="~assets/images/pngs/painter-girl.png?url"
          alt="Painting Lady"
        />
        <SnippetImageCard
          class="floating-card right"
          image-src="assets/images/pngs/bell.png?url"
          text="Your Wall Curtains hasbeen sent for delivery"
        />
      </div>
    </div>
    <SnippetSpaceY height="50px" />
    <h1 class="heading">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore.
    </h1>
    <SnippetSpaceY height="50px" />
    <div class="hero products">
      <div class="products">
        <v-lazy-image
          class="bg-image"
          src="~assets/images/pngs/delivery-lady.png?url"
          alt="Products"
        />
        <HorizontalScroller
          :items="productsHeroData.products"
          :gutter="30"
          :friction="5"
          :pause-on-hover="true"
          class="list"
        >
          <template #default="{ item }">
            <ProductImagePrice v-bind="item" class="product" />
          </template>
        </HorizontalScroller>
      </div>
      <BadgedServiceNote class="service" v-bind="productsHeroData" />
    </div>
    <SnippetSpaceY height="100px" />
    <div class="hero booking">
      <BadgedServiceNote class="service" v-bind="bookingHeroData" />
      <div class="booking">
        <v-lazy-image
          class="bg-image"
          src="~assets/images/pngs/delivery-guy-1.png?url"
          alt="Book Truck"
        />
        <div class="card">
          <div class="header">
            <h4 class="title">Truck Booking</h4>
            <span class="badge"> LARGE STRUCK</span>
          </div>
          <div class="body">
            <div
              v-for="action of truckBookingDataActions"
              :key="action.note"
              class="action"
              :class="{ complete: action.isComplete }"
            >
              <p>{{ action.note }}</p>
              <span class="date">
                {{ formattedDateTime(action.date) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SnippetSpaceY height="100px" />
    <div class="hero artisan">
      <div class="artisan">
        <v-lazy-image
          class="bg-image"
          src="~assets/images/pngs/painter-lady.png?url"
          alt="Products"
        />
        <div class="list">
          <div class="product"></div>
        </div>
      </div>
      <BadgedServiceNote class="service" v-bind="artisanHeroData">
        <SnippetSpaceY height="20px" />
        <div class="tabs">
          <button
            v-for="tab in artisanHeroData.tabs"
            :key="tab"
            class="tab"
            :class="{ active: tab === artisanHeroData.activeTab }"
            @click="artisanHeroData.activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>
        <SnippetSpaceY height="50px" />
        <transition name="fade" mode="out-in">
          <div :key="artisanHeroData.activeTab" class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Tincidunt augue interdum velit euismod.
          </div>
        </transition>
      </BadgedServiceNote>
    </div>
    <SnippetSpaceY height="100px" />
    <div class="hero cards">
      <icon class="left-design" data="~assets/svgs/icons/logo.svg" />
      <div class="container">
        <h1 class="heading">Creating Happiness With Every Design</h1>
        <span class="description">
          Come join us as we set out to achieve this happiness
          spreading experience
        </span>
        <div class="cards">
          <div
            v-for="(card, index) in cardsHeroList"
            :key="index"
            class="card"
          >
            <v-lazy-image class="image" :src="card.imageSrc" />
            <div class="body">
              <h2 class="title">{{ card.title }}</h2>
              <span class="description">
                {{ card.description }}
              </span>
              <div class="ctas">
                <button class="register">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero quality">
      <div class="container">
        <SnippetSpaceY height="100px" />
        <div class="data">
          <h2 class="title">Quality Items</h2>
          <span class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Tincidunt augue interdum velit euismod.
          </span>
          <div class="ctas">
            <button class="shop">Start Shopping</button>
          </div>
        </div>
        <SnippetSpaceY height="100px" />
      </div>
      <v-lazy-image
        class="image"
        src="~assets/images/pngs/cushion-lamp-vest.png?url"
        alt="Painter"
      />
    </div>
    <SnippetSpaceY height="100px" />
    <div class="get-mobile">
      <div class="data">
        <h2 class="title">
          Download our mobile application and start exploring
        </h2>
        <span class="badge"> Coming Soon!</span>
      </div>
      <v-lazy-image
        class="image"
        src="~assets/images/pngs/mydecortrade-mobile.png?url"
        alt="Mobile"
      />
    </div>
    <SnippetSpaceY height="100px" />
  </div>
</template>

<script setup lang="ts">
import painterGuyPng from 'assets/images/pngs/painter-guy.png';
import artisanGirlPng from 'assets/images/pngs/artisan-girl-1.png';
import artisansPng from 'assets/images/pngs/artisans-1.png';
import curtainPng from 'assets/images/pngs/curtain.png';
import chandelierPng from 'assets/images/pngs/chandelier.png';
import paintingPng from 'assets/images/pngs/painting.png';

definePageMeta({});

useHead({
  title: 'Home',
});

const formattedDateTime = (date: Date | string): string => {
  return new Date(date).toLocaleString('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
};

const productsHeroData = ref({
  badge: {
    text: 'STORE',
    style: {
      border: '1px solid #FF623C',
      backgroundColor: '#FECCC0',
      color: '#FF623C',
    },
  },
  title: 'Shop Best Items',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
  services: [
    {
      heading: 'Lorem ipsum dolor sit amet',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
    },
    {
      heading: 'Lorem ipsum dolor sit amet',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
    },
    {
      heading: 'Lorem ipsum dolor sit amet',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
    },
  ],
  products: [
    {
      name: 'Gold Curtain',
      price: '₦30,000',
      imageSrc: curtainPng,
    },
    {
      name: 'Gold Chandelier',
      price: '₦30,000',
      imageSrc: chandelierPng,
    },
    {
      name: 'Abstract Painting',
      price: '₦30,000',
      imageSrc: paintingPng,
    },
    {
      name: 'Curtain',
      price: '₦30,000',
      imageSrc: curtainPng,
    },
  ],
});

const bookingHeroData = ref({
  badge: {
    text: 'HIRE TRUCKS',
    style: {
      border: '1px solid #005EE1',
      backgroundColor: '#DBEAFF',
      color: '#005EE1',
    },
  },
  title: 'Shop Best Items',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
  services: [
    {
      heading: 'Lorem ipsum dolor sit amet',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
    },
    {
      heading: 'Lorem ipsum dolor sit amet',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
    },
    {
      heading: 'Lorem ipsum dolor sit amet',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
    },
  ],
});

const truckBookingDataActions = ref([
  {
    note: 'Items Picked Up At 12 Raymond Street, Surulere',
    date: '2022-08-16 14:00:00',
    isComplete: false,
  },
  {
    note: 'Items Dropped At 15 Ibile Street, Yaba',
    date: '2022-08-16 15:00:00',
    isComplete: false,
  },
]);

const artisanHeroData = ref({
  badge: {
    text: 'HIRE ARTISAN',
    style: {
      border: '1px solid ',
      backgroundColor: '#FFF1EE',
      color: '#C56A86',
    },
  },
  title: 'Hire An Artisan',
  description: '',
  activeTab: 'Painters',
  tabs: [
    'Painters',
    'Carpenters',
    'Interior Decorators',
    'Interior Decorator',
    'Carpenter',
  ],
});

const cardsHeroList = ref([
  {
    title: 'Become one of our artisans',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
    imageSrc: painterGuyPng,
  },
  {
    title: 'Become one of our artisans',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
    imageSrc: artisanGirlPng,
  },
  {
    title: 'Become one of our artisans',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod.',
    imageSrc: artisansPng,
  },
]);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.pages.entry.index {
  display: flex;
  width: 100%;
  background-color: color.$white-1;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  :deep() {
    > * {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      max-width: breakpoint.$xl;
      padding: 0 20px;
    }

    > .hero.main {
      justify-content: space-between;
      align-items: center;

      @include breakpoint.respond-below(md) {
        flex-wrap: wrap;
      }

      > * {
        display: inline-flex;
      }

      > .details {
        width: 50%;
        flex-direction: column;

        > .title {
          max-width: 80%;
          font-size: 40px;
          font-family: CamptonBold, Campton, Verdana, Geneva, Tahoma,
            sans-serif;
        }

        > .description {
          margin-top: 10px;
          font-family: CamptonLight, Verdana, Geneva, Tahoma,
            sans-serif;
          max-width: 80%;
        }

        > .ctas {
          display: flex;
          width: 100%;

          > .contact {
            padding: 15px 30px;
            background-color: color.$main;
            border-radius: 7px;
            color: color.$white-1;
            border: none;
            margin-top: 30px;
            cursor: pointer;
            outline: initial;
            transition: all 0.3s ease-in-out;

            &:hover {
              background-color: rgba(color.$main, 0.5);
            }
          }
        }
      }

      > .image {
        width: 47%;
        position: relative;
        flex-grow: 1;

        > * {
          z-index: 1;
        }

        > .floating-card {
          position: absolute;
          z-index: 2;
          width: auto;
          max-width: 220px;

          &.left {
            left: -140px;
            top: 40%;
          }

          &.right {
            right: 0;
            bottom: 35px;
          }
        }

        > img {
          width: 100%;
          height: auto;
          object-fit: scale-down;
          pointer-events: none;
          user-select: none;
        }
      }

      @include breakpoint.respond-below(lg) {
        > .image {
          margin-top: 20px;

          > .floating-card {
            &.left {
              left: -50px;
            }
          }
        }
      }

      @include breakpoint.respond-below(md) {
        > .details,
        > .image {
          width: 100%;
        }

        > .image {
          margin-top: 20px;

          > .floating-card {
            &.left {
              left: 20px;
            }
          }
        }
      }
    }

    > .heading {
      display: flex;
      width: 80%;
      padding: 0;
      margin-top: 30px;
      font-family: CamptonSemiBold, Campton, Verdana, Geneva, Tahoma,
        sans-serif;
    }

    > .hero {
      justify-content: space-between;
      align-items: flex-start;

      @include breakpoint.respond-below(md) {
        flex-wrap: wrap;
      }

      &.products,
      &.booking,
      &.artisan {
        > * {
          display: inline-flex;
          width: 45%;

          @include breakpoint.respond-below(md) {
            width: 100%;

            &:not(:first-child) {
              margin-top: 30px;
            }
          }
        }

        > .products,
        > .booking,
        > .artisan {
          position: relative;
          height: 600px;
          border-radius: 15px;
          overflow: hidden;

          > * {
            z-index: 2;
          }

          > .bg-image {
            display: inline-flex;
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
            pointer-events: none;
            user-select: none;
          }
        }

        > .products {
          align-items: center;

          > .list {
            display: flex;
            height: auto;
            padding-left: 20px;

            > .slider {
              > .items {
                > .product {
                  flex-shrink: 0;
                  width: 150px;
                }
              }
            }
          }
        }

        > .booking {
          justify-content: center;
          align-items: flex-end;

          > .card {
            margin-bottom: 20px;
            background-color: rgba(color.$white-1, 0.94);
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            width: calc(100% - 60px);
            height: auto;
            flex-wrap: wrap;

            > * {
              display: flex;
              width: 100%;
            }

            > .header {
              justify-content: space-between;
              align-items: center;
              padding: 10px 20px;
              background-color: color.$white-1;

              > .title {
                margin: 0;
              }

              > .badge {
                padding: 4px 10px;
                font-family: CamptonLight, Campton, Verdana, Geneva,
                  Tahoma, sans-serif;
                white-space: nowrap;
                font-size: 12px;
                border-radius: 4px;
                background-color: color.$light-blue;
                color: color.$blue;
              }
            }

            > .body {
              flex-wrap: wrap;
              padding: 15px 20px;

              > .action {
                display: flex;
                flex-direction: column;

                &:not(:first-child) {
                  margin-top: 40px;
                }

                > p {
                  margin: 0;
                  font-size: 13px;
                }

                > .date {
                  font-family: CamptonThin, Campton, Verdana, Geneva,
                    Tahoma, sans-serif;
                  white-space: nowrap;
                  font-size: 13px;
                }
              }
            }
          }
        }

        > .artisan {
          height: 500px;
        }
      }

      &.artisan {
        > .service {
          .tabs {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: flex-start;

            > .tab {
              outline: initial;
              padding: 6px 15px;
              color: color.$black-1;
              background-color: initial;
              border-radius: 8px;
              overflow: hidden;
              border: 1px solid color.$black-1;
              margin: 10px 10px 0 0;
              cursor: pointer;
              transition: all 0.3s ease-in-out;

              &:hover:not(.active) {
                background-color: rgba(color.$black-1, 0.1);
              }

              &.active {
                background-color: color.$black-1;
                color: color.$white-1;
              }
            }
          }
        }
      }

      &.cards {
        max-width: initial;
        background-color: color.$light-pink;
        padding: {
          top: 50px;
          bottom: 50px;
        }
        justify-content: center;
        position: relative;

        > * {
          display: flex;
          z-index: 2;
        }

        > .left-design {
          width: 200px;
          height: 200px;
          color: rgba(color.$main, 0.2);
          transform: rotate(-60deg);
          position: absolute;
          left: -40px;
          top: 10px;
        }

        > .container {
          width: 100%;
          max-width: breakpoint.$xl;
          flex-direction: column;
          align-items: center;

          > .heading {
            display: flex;
            width: 100%;
            max-width: 600px;
            flex-wrap: wrap;
            text-align: left;
            align-items: center;
            text-align: center;
            font-size: 40px;
            font-family: CamptonSemiBold, Campton, Verdana, Geneva,
              Tahoma, sans-serif;
          }

          > .description {
            width: 100%;
            max-width: 400px;
            margin-top: 10px;
            text-align: center;
            font-family: CamptonLight, Verdana, Geneva, Tahoma,
              sans-serif;
          }

          > .cards {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: stretch;
            margin-top: 50px;

            @include breakpoint.respond-below(md) {
              flex-wrap: wrap;
            }

            > .card {
              display: inline-flex;
              width: 30%;
              flex-direction: column;
              align-items: space-between;

              @include breakpoint.respond-below(md) {
                width: 45%;

                &:nth-child(n + 3) {
                  margin-top: 20px;
                }
              }

              @include breakpoint.respond-below(sm) {
                width: 100%;

                &:not(:first-child) {
                  margin-top: 20px;
                }
              }

              > .image {
                width: 100%;
                height: auto;
                display: flex;
                border-radius: 15px;
                overflow: hidden;
                object-fit: cover;
              }

              > .body {
                display: flex;
                width: 100%;
                margin-top: 10px;
                text-align: center;
                flex-direction: column;
                align-items: center;

                > .title {
                  max-width: 80%;
                  font-size: 25px;
                  font-family: CamptonSemiBold, Campton, Verdana,
                    Geneva, Tahoma, sans-serif;
                  margin: 0;
                  text-align: center;
                }

                > .description {
                  display: flex;
                  max-width: 80%;
                  font-size: 13px;
                  margin-top: 10px;
                  font-family: CamptonLight, Verdana, Geneva, Tahoma,
                    sans-serif;
                  width: 100%;
                }

                > .ctas {
                  display: flex;
                  width: 100%;
                  justify-content: center;
                  margin-top: 20px;

                  > .register {
                    padding: 10px 30px;
                    border: 1px solid color.$main;
                    border-radius: 5px;
                    color: color.$main;
                    background-color: color.$main-light;
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;

                    &:hover {
                      background-color: rgba(color.$main, 0.2);
                    }
                  }
                }
              }
            }
          }
        }
      }

      &.quality {
        max-width: initial;
        background-color: color.$white-1;
        padding: {
          top: 0;
          bottom: 0;
        }
        justify-content: center;
        position: relative;

        @include breakpoint.respond-below(md) {
          flex-wrap: wrap;
          position: static;
        }

        > * {
          display: flex;
          z-index: 1;
        }

        > .container {
          width: 100%;
          max-width: breakpoint.$xl;
          flex-direction: column;
          align-items: flex-start;

          > .data {
            display: flex;
            max-width: 40%;
            width: auto;
            margin-top: 10px;
            text-align: left;
            flex-direction: column;
            align-items: flex-start;

            @include breakpoint.respond-below(md) {
              max-width: 100%;
            }

            > .title {
              max-width: 100%;
              font-size: 35px;
              font-family: CamptonSemiBold, Campton, Verdana, Geneva,
                Tahoma, sans-serif;
              margin: 0;
              text-align: left;
            }

            > .description {
              display: flex;
              max-width: 80%;
              font-size: 13px;
              margin-top: 20px;
              font-family: CamptonLight, Verdana, Geneva, Tahoma,
                sans-serif;
              width: 100%;
            }

            > .ctas {
              display: flex;
              width: 100%;
              justify-content: flex-start;
              margin-top: 20px;

              > .shop {
                padding: 15px 30px;
                background-color: color.$main;
                border-radius: 4px;
                color: color.$white-1;
                border: none;
                margin-top: 20px;
                cursor: pointer;
                outline: initial;
                transition: all 0.3s ease-in-out;

                &:hover {
                  background-color: rgba(color.$main, 0.5);
                }
              }
            }
          }
        }

        > .image {
          width: 54%;
          height: auto;
          right: 0;
          top: 0;
          z-index: 2;
          position: absolute;

          @include breakpoint.respond-below(md) {
            width: 100%;
            position: static;
            margin-top: 20px;
          }
        }
      }
    }

    > .get-mobile {
      background-color: color.$blue;
      border-radius: 18px;
      overflow: hidden;
      padding: 20px 30px;
      justify-content: space-between;
      height: 300px;
      overflow: hidden;

      @include breakpoint.respond-below(lg) {
        flex-wrap: wrap;
        justify-content: center;
        height: 400px;
      }

      > .data {
        display: flex;
        max-width: 45%;
        width: auto;
        margin-top: 10px;
        text-align: left;
        flex-direction: column;
        align-items: flex-start;

        @include breakpoint.respond-below(lg) {
          max-width: 100%;
          width: 100%;
          align-items: center;
        }

        > .title {
          max-width: 100%;
          font-size: 35px;
          font-family: CamptonSemiBold, Campton, Verdana, Geneva,
            Tahoma, sans-serif;
          margin: 0;
          color: color.$white-1;
          letter-spacing: 1px;
          text-align: left;

          @include breakpoint.respond-below(lg) {
            text-align: center;
          }
        }

        > .badge {
          display: inline-flex;
          margin-top: 20px;
          padding: 4px 10px;
          font-family: CamptonLight, Campton, Verdana, Geneva, Tahoma,
            sans-serif;
          white-space: nowrap;
          font-size: 12px;
          border-radius: 4px;
          background-color: color.$light-blue;
          color: color.$blue;
        }
      }

      > .image {
        width: 40%;
        height: 620px;
        flex-shrink: 0;
        margin-top: 10px;
        object-fit: scale-down;

        @include breakpoint.respond-below(lg) {
          width: 100%;
          height: 300px;
          object-fit: contain;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
