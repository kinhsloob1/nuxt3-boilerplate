<template>
  <div class="components entry productimageprice" v-bind="$attrs">
    <img
      v-if="imageSrc"
      class="image"
      :src="imageSrc"
      :alt="`${name || 'Product'} Image`"
    />
    <h6 v-if="name" class="name">
      {{ name }}
    </h6>
    <span v-if="price" class="price">
      {{ price }}
    </span>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  name?: string;
  imageSrc: string;
  price: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.components.entry.productimageprice {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 10px 25px;
  background-color: color.$ash-5;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  > * {
    display: inline-flex;
  }

  > .image {
    padding: 4px 10px;
    width: 80px;
    height: 100px;
    object-fit: scale-down;
  }

  > .name {
    width: 100%;
    margin: 0;
    text-align: center;
    flex-wrap: wrap;
    white-space: normal;
    font-size: 13px;
    color: color.$black-1;
    justify-content: center;
    font-family: CamptonSemiBold, Verdana, Geneva, Tahoma, sans-serif;
  }

  > .price {
    width: 100%;
    margin-top: 8px;
    text-align: center;
    flex-wrap: nowrap;
    font-size: 13px;
    color: color.$blue;
    justify-content: center;
    font-family: Campton, Verdana, Geneva, Tahoma, sans-serif;
  }
}
</style>
