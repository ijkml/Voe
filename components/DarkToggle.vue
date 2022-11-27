<script setup lang="ts">
import type { BasicColorSchema } from '@vueuse/core';

interface Props {
  still?: boolean;
}

const props = defineProps<Props>();

const { still } = toRefs(props);

const icon = ref(0);

function renderIcon(theme: BasicColorSchema) {
  icon.value = theme === 'light' ? 1 : 2;
}

onMounted(() => {
  getTheme().then((theme) => {
    renderIcon(theme);
  });
});

watch(colorMode, (val) => {
  renderIcon(val);
});
</script>

<template>
  <button class="!outline-none" :class="{ still }" @click="switchTheme">
    <Transition name="fade" mode="out-in">
      <span v-if="icon === 1" class="i-carbon-sun" />
      <span v-else-if="icon === 2" class="i-carbon-moon" />
      <span v-else class="i-carbon-ai-status-in-progress" />
    </Transition>
  </button>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  --at-apply: py-2 px-2.5 bg-black inline-flex place-items-center rounded-md
    bg-opacity-20;

  > span {
    --at-apply: block transition duration-300 transform;
  }

  &:focus,
  &:focus-visible {
    --at-apply: outline-none;
  }

  &:hover,
  &:focus-visible {
    --at-apply: bg-opacity-40;

    &:not(.still) > span {
      --at-apply: rotate-y-180;
    }
  }
}
</style>
