<template>
  <ClientOnly>
    <Teleport to="#afterApp">
      <transition
        :name="rootTransitionName"
        :duration="transitionDuartion"
      >
        <div
          class="components entry defaultmodal"
          :style="rootStyles"
          @click="closeModal"
        >
          <transition
            :name="contentTransitionName"
            :duration="transitionDuartion"
          >
            <slot v-if="show" />
          </transition>
        </div>
      </transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
export interface Props {
  closeOnClickOutside?: boolean;
  show: boolean;
  mask?: boolean;
  transition?: {
    rootName?: string;
    contentName?: string;
    duration?: number;
  };
}

const props = withDefaults(defineProps<Props>(), {
  closeOnClickOutside: false,
  show: false,
  mask: true,
  transition: () => ({
    rootName: '',
    contentName: '',
    duration: 2000,
  }),
});

const rootTransitionName = computed(
  () => props.transition.rootName || '',
);

const contentTransitionName = computed(
  () => props.transition.contentName || '',
);

const transitionDuartion = computed(
  () => props.transition.duration || 1500,
);

const isMasked = ref(false);

let timeoutRef: ReturnType<typeof setTimeout> | undefined;

watch(
  () => props.show,
  (show, prev) => {
    if (!show && prev) {
      if (timeoutRef) {
        clearTimeout(timeoutRef);
      }

      timeoutRef = setTimeout(() => {
        isMasked.value = false;
      }, transitionDuartion.value);
    }

    if (show) {
      isMasked.value = true;
    }
  },
  {
    immediate: true,
  },
);

const rootStyles = computed(() => {
  if (isMasked.value) {
    return [];
  }

  return [
    {
      backgroundColor: 'initial',
      width: 'auto',
      height: 'auto',
      minWidth: 'initial',
      minHeight: 'initial',
      top: 'initial',
      left: 'initial',
      filter: 'initial',
    },
  ];
});

const emit = defineEmits(['close']);

const closeModal = () => {
  if (props.closeOnClickOutside) {
    emit('close');
  }
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.components.entry.defaultmodal {
  display: block;
  width: 100%;
  min-width: 100%;
  top: 0;
  left: 0;
  min-height: 100vh;
  background-color: rgba(color.$black-1, 0.4);
  backdrop-filter: blur(15px);
  padding: 0;
  position: fixed;
  z-index: 9999;
  transition: background-color, backdrop-filter 0.3s ease-in-out;
}
</style>
