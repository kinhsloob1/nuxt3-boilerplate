<template>
  <div class="components entry legalbuttons" v-bind="$attrs">
    <nuxt-link
      to="/terms-and-conditions"
      class="link"
      exact-active-class="active"
    >
      Terms & Conditions
    </nuxt-link>
    <nuxt-link
      to="/privacy-policy"
      class="link"
      exact-active-class="active"
    >
      Privacy Policy
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.components.entry.legalbuttons {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 10px 15px;
  background-color: color.$main-light-1;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  > * {
    display: inline-flex;
    color: color.$ash-2;
    font-family: CamptonSemiBold, Verdana, Geneva, Tahoma, sans-serif;
    transition: all 0.3 ease-in-out;
  }

  > .link {
    white-space: nowrap;
    flex-wrap: nowrap;
    font-size: 20px;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: initial;

    &.active {
      background-color: color.$main-1;
      color: color.$main;
    }

    &:not(:first-child) {
      margin-top: 20px;
    }
  }
}
</style>
