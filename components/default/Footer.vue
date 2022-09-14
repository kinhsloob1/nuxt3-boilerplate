<template>
  <div class="components entry defaultfooter">
    <section class="main">
      <ClientOnly>
        <div
          class="section info"
          :class="{
            expanded: expandedFooterKey === 'products',
            'can-wrap': wrapFooter,
          }"
        >
          <component
            :is="sectionComponent"
            class="title"
            @click="expandFooterKey('products')"
          >
            <span class="text"> Products </span>
            <icon
              class="icon"
              data="~assets/svgs/icons/caret-down.svg"
            />
          </component>
          <div class="ctas">
            <nuxt-link to="/"> Hire Artisans </nuxt-link>
            <nuxt-link to="/"> Shop Interior Decor Items </nuxt-link>
            <nuxt-link to="/"> Hire Truck </nuxt-link>
          </div>
        </div>
        <div
          class="section info"
          :class="{
            expanded: expandedFooterKey === 'resources',
            'can-wrap': wrapFooter,
          }"
        >
          <component
            :is="sectionComponent"
            class="title"
            @click="expandFooterKey('resources')"
          >
            <span class="text"> Resources </span>
            <icon
              class="icon"
              data="~assets/svgs/icons/caret-down.svg"
            />
          </component>
          <div class="ctas">
            <nuxt-link to="/contact-us"> Pricing </nuxt-link>
            <nuxt-link to="/contact-us"> Support </nuxt-link>
            <nuxt-link to="/"> Blog </nuxt-link>
          </div>
        </div>
        <div
          class="section info"
          :class="{
            expanded: expandedFooterKey === 'contact',
            'can-wrap': wrapFooter,
          }"
        >
          <component
            :is="sectionComponent"
            class="title"
            @click="expandFooterKey('contact')"
          >
            <span class="text"> Contact </span>
            <icon
              class="icon"
              data="~assets/svgs/icons/caret-down.svg"
            />
          </component>
          <div class="ctas">
            <a href="mailto:hello@mydecortrade.com">
              hello@mydecortrade.com
            </a>
            <a href="tel:+234901617821"> +234901617821 </a>
            <span> Address 1 </span>
            <span> Address 2 </span>
          </div>
        </div>
      </ClientOnly>
      <div class="section platform">
        <icon
          class="logo"
          data="~assets/svgs/icons/logo-name.svg"
          original
        />
        <span class="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Tincidunt augue interdum velit euismod.
        </span>
      </div>
    </section>
    <section class="socials">
      <span class="country">
        <icon
          class="icon"
          data="~assets/svgs/icons/nigeria.svg"
          original
        />
        <span class="text"> Nigeria </span>
      </span>

      <div class="ctas">
        <a href="https://twitter.com" target="_blank"> Twitter </a>
        <a href="https://facebook.com" target="_blank"> Facebook </a>
        <a href="https://youtube.com" target="_blank"> Youtube </a>
        <a href="https://instagram.com" target="_blank">
          Instagram
        </a>
      </div>
    </section>
    <section class="legal">
      <span class="trademark"> © {{ year }} mydecortrade </span>

      <div class="ctas">
        <nuxt-link to="/privacy-policy" target="_blank">
          Privacy Policy
        </nuxt-link>
        <nuxt-link to="/terms-and-conditions" target="_blank">
          Terms and Conditions
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const year = ref(new Date().getFullYear());

const yearInterval = setInterval(() => {
  year.value = new Date().getFullYear();
}, 1000);

onBeforeUnmount(() => {
  if (yearInterval) {
    clearInterval(yearInterval);
  }
});

const grid = useGrid();
const wrapFooter = computed(() => !grid.lg);

const expandedFooterKey = ref('products');
const sectionComponent = computed(() =>
  wrapFooter.value ? 'button' : 'h2',
);

const expandFooterKey = (
  key: 'products' | 'resources' | 'contact',
) => {
  if (expandedFooterKey.value === key) {
    expandedFooterKey.value = '';
  } else {
    expandedFooterKey.value = key;
  }
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.components.entry.defaultfooter {
  display: flex;
  width: 100%;
  max-width: breakpoint.$xl;
  flex-direction: column;
  background-color: color.$white-1;
  margin-top: 30px;
  padding: 0 20px;

  * {
    font-family: CamptonLight, Verdana, Geneva, Tahoma, sans-serif;
  }

  :deep() {
    > * {
      display: flex;
      width: 100%;
      justify-content: space-between;

      &:not(:first-child) {
        margin-top: 20px;
      }
    }

    > .main {
      margin-bottom: 20px;

      @include breakpoint.respond-below(lg) {
        flex-wrap: wrap;
      }

      > .section {
        max-width: 23%;
        display: flex;
        flex-direction: column;

        @include breakpoint.respond-below(lg) {
          max-width: 100%;
          width: 100%;

          &:not(:first-child) {
            margin-top: 20px;
          }
        }

        > * {
          display: flex;
          width: 100%;
          justify-content: flex-start;

          &:not(:first-child) {
            margin-top: 20px;
          }
        }

        &.info {
          > .title {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin: 0;

            > .text {
              display: inline-flex;
              font-family: CamptonSemiBold, Campton, Verdana, Geneva,
                Tahoma, sans-serif;
              font-size: 18px;
            }

            > .icon {
              display: none;
              width: 20px;
              height: 20px;
              transition: transform 0.3s ease-in-out;
            }
          }

          > .ctas {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            transition: all 0.3s ease-in-out;

            > * {
              display: flex;
              width: 100%;
              padding: 8px 0;
              font-size: 15px;
              text-decoration: initial;
              color: color.$black-1;
              background-color: initial;
              outline: initial;
              transition: all 0.3s ease-in-out;
            }
          }

          &.can-wrap {
            position: relative;
            overflow: hidden;

            > .title {
              padding: 10px 0;
              background-color: color.$white-1;
              z-index: 2;

              > .icon {
                display: inline-flex;
              }
            }

            > .ctas {
              z-index: 1;
              overflow: hidden;
              transform: translateY(-200%);
              position: absolute;
            }

            &.expanded {
              > .ctas {
                position: initial;
                transform: translateY(0%);
              }
            }
          }

          &.expanded {
            > .title {
              > .icon {
                transform: rotate(180deg);
              }
            }
          }
        }

        &.platform {
          @include breakpoint.respond-below(lg) {
            margin-top: 30px;
          }

          > .logo {
            width: 150px;
            height: 50px;
            transform: translateY(-12px);
          }

          > .details {
            margin-top: initial;
          }
        }
      }
    }

    > .socials,
    > .legal {
      border-top: 1px solid color.$ash-3;
      padding-top: 20px;

      @include breakpoint.respond-below(sm) {
        flex-wrap: wrap;
      }

      > * {
        display: inline-flex;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: flex-start;
      }

      > .ctas {
        justify-content: flex-end;

        @include breakpoint.respond-below(sm) {
          flex-wrap: wrap;
          width: 100%;
          margin-top: 10px;
          justify-content: flex-start;
        }

        @include breakpoint.respond-below(sl) {
          width: 100%;
          margin-top: 20px;
          justify-content: space-between;
        }

        > * {
          display: flex;
          padding: 8px 10px;
          font-size: 15px;
          text-decoration: initial;
          color: color.$black-1;
          background-color: initial;
          outline: initial;
          border-radius: 8px;
          transition: all 0.3s ease-in-out;

          &:not(:first-child) {
            margin-left: 20px;
          }

          &:hover {
            background-color: color.$ash-3;
          }

          @include breakpoint.respond-below(sm) {
            &:first-child {
              padding-left: 0;
            }
          }

          @include breakpoint.respond-below(sl) {
            width: 48%;

            margin-left: initial;

            &:first-child {
              padding-left: 10px;
            }

            &:not(:first-child) {
              margin-left: initial;
            }

            &:nth-child(n + 3) {
              margin-top: 20px;
            }
          }
        }
      }
    }

    > .socials {
      > .country {
        > .icon {
          width: 18px;
          height: 18px;
        }

        > .text {
          display: inline-flex;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
