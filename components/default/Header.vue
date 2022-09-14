<template>
  <div class="components entry defaultheader">
    <nuxt-link to="/">
      <icon
        class="logo"
        data="~assets/svgs/icons/logo-name.svg"
        original
      />
    </nuxt-link>

    <div class="ctas">
      <nuxt-link
        v-for="cta in ctas"
        :key="cta.name"
        :to="cta.url"
        :class="cta.classes || []"
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
import { Props as ModalProps } from './Modal.vue';

const ctas = ref([
  {
    url: '/contact-us',
    classes: [],
    name: 'Contact Us',
  },
  {
    url: '/privacy-policy',
    classes: [],
    name: 'Privacy Policy',
  },
  {
    url: '/',
    classes: ['signin'],
    name: 'Sign In',
  },
]);

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

.components.entry.defaultheader {
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
