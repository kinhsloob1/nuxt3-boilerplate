<template>
  <div class="components entry horizontalscroller" v-bind="$attrs">
    <div class="slider" :class="{ 'dont-pause': !pauseOnHover }">
      <div ref="itemsEl" class="items">
        <slot v-for="item in items" :item="item" />
      </div>
      <div class="items">
        <slot v-for="item in items" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Props<T = any> = {
  items: T[];
  gutter?: number;
  friction?: number;
  pauseOnHover?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  gutter: 30,
  friction: 5,
  pauseOnHover: true,
});

const gutterWidth = computed(() => `${props.gutter}px`);

const animationDuration = computed(
  () => `${props.items.length * props.friction}s`,
);

const itemsEl = ref<HTMLElement | undefined>();
const itemsWidth = ref(0);

useResizeObserver(itemsEl, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  itemsWidth.value = width;
});

const marqueEndTranslate = computed(
  () => `-${itemsWidth.value + props.gutter}px`,
);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;
@use '@/assets/scss/_animations.scss' as animation;

.components.entry.horizontalscroller {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 10px 15px;
  background-color: transparent;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: auto;
  transition: all 0.3s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  :deep() {
    > .slider {
      display: flex;
      flex-wrap: nowrap;
      flex-wrap: nowrap;
      min-width: 100%;
      animation: marquee 5s infinite;
      animation-timing-function: linear;
      animation-duration: v-bind(animationDuration);

      &:not(.dont-pause) {
        &:hover {
          animation: initial;
        }
      }

      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }

        100% {
          transform: translateX(v-bind(marqueEndTranslate));
        }
      }

      > .items {
        display: flex;
        min-width: 100%;
        flex-wrap: nowrap;
        flex-shrink: 0;

        &:not(:first-child) {
          margin-left: v-bind(gutterWidth);
        }

        > * {
          display: inline-flex;
          flex-shrink: 0;

          &:not(:first-child) {
            margin-left: v-bind(gutterWidth);
          }
        }
      }
    }
  }
}
</style>
