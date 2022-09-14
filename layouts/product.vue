<template>
  <div class="layouts entry product">
    <ProductHeader />
    <NuxtPage />
    <DefaultFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: 'MyDecorTradeHQ | %s',
  title: 'Welcome',
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.layouts.entry.product {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-content: flex-start;
  background-color: color.$white-1;
}
</style>
