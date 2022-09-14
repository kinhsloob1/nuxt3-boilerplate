<template>
  <div class="components entry badgedservicenote" v-bind="$attrs">
    <span v-if="badge" class="badge" :style="badge.style">
      {{ badge.text }}
    </span>
    <h1 v-if="title" class="title">
      {{ title }}
    </h1>
    <span v-if="description" class="description">
      {{ description }}
    </span>
    <slot :data="{ ...props, ...$attrs }">
      <div v-if="isValidServices" class="services">
        <div
          v-for="(service, index) of services"
          :key="index"
          class="service"
        >
          <h3 class="heading">
            {{ service.heading }}
          </h3>
          <span class="note">
            {{ service.note }}
          </span>
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { StyleValue } from 'vue';

export interface Props {
  badge?: {
    style: StyleValue;
    text?: string;
  };
  title?: string;
  description?: string;
  services?: {
    heading: string;
    note: string;
  }[];
}

const props = defineProps<Props>();
const isValidServices = computed(() => {
  return (
    isArray(props.services) &&
    props.services.length > 0 &&
    !props.services.find(
      (service) => !service || !service.heading || !service.note,
    )
  );
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.components.entry.badgedservicenote {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;

  > .badge {
    padding: 4px 10px;
    font-family: CamptonLight, Campton, Verdana, Geneva, Tahoma,
      sans-serif;
    white-space: nowrap;
    font-size: 14px;
    border-radius: 4px;
  }

  > .title {
    display: inline-flex;
    max-width: 100%;
    flex-wrap: wrap;
    text-align: left;
  }

  > .description {
    width: 100%;
    margin-top: 10px;
    text-align: left;
    font-family: CamptonLight, Verdana, Geneva, Tahoma, sans-serif;
  }

  .services {
    display: flex;
    padding-left: 30px;
    flex-direction: column;
    margin-top: 10px;
    overflow: hidden;

    > .service {
      display: flex;
      width: 100%;
      flex-direction: column;

      > .heading {
        font-family: CamptonSemiBold, Verdana, Geneva, Tahoma,
          sans-serif;
        margin: 0;
        margin-top: 20px;
      }

      > .note {
        width: 100%;
        margin-top: 10px;
        text-align: left;
        font-family: CamptonLight, Verdana, Geneva, Tahoma, sans-serif;
      }
    }
  }
}
</style>
