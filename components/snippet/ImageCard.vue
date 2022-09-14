<template>
  <div class="components entry snippetimagecard" v-bind="$attrs">
    <span class="image">
      <v-lazy-image :src="imageSrc" alt="" />
    </span>
    <span class="text">
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  imageSrc: string;
  text: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.components.entry.snippetimagecard {
  display: inline-flex;
  background-color: color.$white-1;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(color.$white-1, 0.9);
  border: 2px solid color.$white-1;
  box-shadow: inset 0px 0px 21px rgba(136, 93, 42, 0.19);
  border-radius: 10px;
  padding: 10px;

  :deep() {
    > * {
      display: inline-flex;
    }

    > .image {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: color.$ash-4;
      justify-content: center;
      flex-shrink: 0;

      > img {
        width: 90%;
        height: 90%;
        object-fit: scale-down;
      }
    }

    > .text {
      margin-left: 15px;
      font-size: 14px;
      flex-wrap: wrap;
      text-align: left;
    }
  }
}
</style>
