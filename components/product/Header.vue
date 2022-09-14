<template>
  <div class="components entry productheader">
    <nuxt-link to="/">
      <icon
        class="logo"
        data="~assets/svgs/icons/logo-name.svg"
        original
      />
    </nuxt-link>

    <div class="search-wrapper">
      <v-select
        v-model="searchIn"
        class="search-dropdown"
        input-id="subject"
        :options="searchInList"
        placeholder=""
        :taggable="false"
        :clearable="false"
        :select-on-key-codes="[188, 13]"
      />
      <input
        type="text"
        name="search"
        placeholder="Search for anything"
      />
      <span class="search-icon-wrapper">
        <icon class="icon" data="~assets/svgs/icons/search.svg" />
      </span>
    </div>

    <div class="ctas">
      <nuxt-link
        v-for="cta in ctas"
        :key="cta.name"
        :to="cta.url"
        :class="cta.classes"
        exact-active-class="active"
      >
        {{ cta.name }}
      </nuxt-link>
    </div>
    <button
      v-if="!isMobileNavOpen"
      class="open-nav"
      title="Open menu"
      @click.prevent="openMobileNav"
    >
      <icon class="icon" data="~assets/svgs/icons/bars.svg" />
    </button>

    <DefaultModal v-bind="modalProps" @close="closeMobileNav">
      <div
        class="mobile-nav"
        :style="{ transitionDuration: cssTransitionDuartion }"
      >
        <div class="header">
          <span class="text"></span>
          <button
            class="close-nav"
            title="Close menu"
            @click.prevent="closeMobileNav"
          >
            <icon class="icon" data="~assets/svgs/icons/close.svg" />
          </button>
        </div>
        <div class="ctas">
          <nuxt-link
            v-for="cta in ctas"
            :key="cta.name"
            :to="cta.url"
            :class="cta.classes"
            exact-active-class="active"
          >
            {{ cta.name }}
          </nuxt-link>
        </div>
      </div>
    </DefaultModal>
  </div>
</template>

<script setup lang="ts">
import { Props as ModalProps } from '../default/Modal.vue';

const ctas = ref([
  {
    url: '/',
    classes: ['signin'],
    name: 'Sign In',
  },
]);

const searchIn = ref('All');
const searchInList = ref(['All', 'Item 1', 'Item 2']);

const isMobileNavOpen = ref(false);
const openMobileNav = () => {
  isMobileNavOpen.value = true;
};
const closeMobileNav = () => {
  isMobileNavOpen.value = false;
};

const transitionDuartion = ref(500);
const modalProps = computed<ModalProps>(() => {
  const mask = isMobileNavOpen.value;

  return {
    mask,
    show: mask,
    transition: {
      contentName: 'slide-left',
      duration: transitionDuartion.value,
    },
    closeOnClickOutside: true,
  };
});

const cssTransitionDuartion = computed(() => {
  const secs = useLoadashRound(transitionDuartion.value / 1000, 1);
  return `${secs}s`;
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.components.entry.productheader {
  display: flex;
  width: 100%;
  max-width: breakpoint.$xl;
  background-color: color.$white-1;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  * {
    font-family: CamptonLight, Verdana, Geneva, Tahoma, sans-serif;
  }

  :deep() {
    .logo {
      width: 200px;
      height: 70px;
    }

    > .search-wrapper {
      display: inline-flex;
      margin: 0 auto;
      width: auto;
      height: 40px;
      padding: 1px;
      border: none;
      border-radius: 12px;
      background-color: color.$white-1;
      align-items: center;
      box-shadow: 0px 0px 39px 3px rgba(0, 0, 0, 0.06);

      > .search-dropdown {
        display: inline-block;
        width: 80px;
        height: 100%;
        border-radius: 12px;
        border-top-right-radius: initial;
        border-bottom-right-radius: initial;
        background-color: #fff6ed;

        > .vs__dropdown-toggle {
          padding: 0;
          height: 100%;

          > .vs__selected-options {
            display: inline-flex;
            align-items: center;
            flex-wrap: nowrap;
            max-width: calc(100% - 20px);

            > .vs__selected,
            > .vs__search {
              margin-top: initial;
              font-family: CamptonLight, Verdana, Geneva, Tahoma,
                sans-serif;
              font-size: 14px;
              white-space: nowrap;
            }
          }

          > .vs__actions {
            padding-top: initial;
          }
        }

        * {
          --vs-controls-color: #c0bfbf;
          --vs-border-color: transparent;

          --vs-dropdown-bg: #{color.$white-1};
          --vs-dropdown-color: #{color.$black-1};
          --vs-dropdown-option-color: #{color.$black-1};

          --vs-selected-bg: #{color.$main};
          --vs-selected-color: #c0bfbf;

          --vs-search-input-color: #{color.$black-1};

          --vs-dropdown-option--active-bg: #fff6ed;
          --vs-dropdown-option--active-color: #{color.$black-1};
          --vs-controls-size: 0.5;
        }
      }

      > input {
        width: 300px;
        display: inline-flex;
        height: 100%;
        border: none;
        padding: 5px 10px;
        margin: initial;
        outline: initial;
      }

      > .search-icon-wrapper {
        display: inline-flex;
        width: 26px;
        height: 26px;
        background-color: #dcecff;
        color: rgba(#0077ff, 0.5);
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        cursor: pointer;
        transition: box-shadow 0.3s ease-in-out;

        > .icon {
          width: 12px;
          height: 12px;
          transition: transform 0.3s ease-in-out;
        }

        &:hover {
          box-shadow: 1px 1px 5px 0 rgba(gray, 0.2);

          > .icon {
            transform: scale(1.1);
          }
        }
      }
    }

    > .ctas {
      margin-left: auto;

      @include breakpoint.respond-below(md) {
        display: none;
      }

      > * {
        padding: 8px 20px;
        font-size: 15px;
        text-decoration: initial;
        color: color.$black-1;
        background-color: initial;
        outline: initial;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &.signin {
          background-color: color.$light-yellow-1;

          &:hover {
            background-color: color.$light-yellow;
          }
        }

        &:hover:not(.signin),
        &.active:not(.signin) {
          background-color: color.$ash-3;
        }
      }
    }

    > .open-nav {
      display: none;
      width: 23px;
      height: 23px;
      color: color.$black-1;
      margin-left: auto;

      @include breakpoint.respond-below(md) {
        display: inline-flex;
      }

      > .icon {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  background-color: color.$white-1;
  width: 350px;
  max-width: 100%;
  height: auto;
  padding: 15px 20px;
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 15px;

  > * {
    display: flex;
    width: 100%;
  }

  > .header {
    justify-content: space-between;

    > .close-nav {
      width: 23px;
      height: 23px;

      > .icon {
        width: 100%;
        height: 100%;
      }
    }
  }

  > .ctas {
    margin-top: 30px;
    flex-direction: column;

    > * {
      padding: 8px 20px;
      font-size: 15px;
      text-decoration: initial;
      color: color.$black-1;
      background-color: initial;
      outline: initial;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:not(:first-child) {
        margin-top: 20px;
      }

      &.signin {
        background-color: color.$light-yellow-1;

        &:hover {
          background-color: color.$light-yellow;
        }
      }

      &:hover:not(.signin),
      &.active:not(.signin) {
        background-color: color.$ash-3;
      }
    }
  }
}
</style>
