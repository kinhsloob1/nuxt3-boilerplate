<template>
  <div
    class="components entry snippetspacey"
    :style="computedStyle"
  />
</template>

<script setup lang="ts">
export interface Props {
  width?: string | number;
  height: string | number;
  [key: string]: string | number | undefined;
}

const props = defineProps<Props>();
const computedStyle = computed(() => {
  const width = props.width
    ? isString(props.width)
      ? props.width
      : `${props.width}px`
    : '100%';

  const height = isString(props.height)
    ? props.height
    : `${props.height}px`;

  return {
    ...props,
    width,
    height,
  };
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.components.entry.snippetspacey {
  display: flex;
  width: 100%;
}
</style>
