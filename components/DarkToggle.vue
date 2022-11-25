<script setup lang="ts">
const colorMode = useColorMode();
const icon = ref(0);

function renderIcon() {
  icon.value = colorMode.value === 'light' ? 1 : 2;
}

function toggleDark() {
  if (icon.value === 0) {
    return;
  }

  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
  renderIcon();
}

onMounted(() => {
  renderIcon();
});
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <Transition name="fade" mode="out-in">
      <span v-if="icon === 0" class="i-carbon-ai-status-in-progress" />
      <span v-else-if="icon === 1" class="i-carbon-sun" />
      <span v-else class="i-carbon-moon" />
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
  @apply py-2 px-2.5 bg-black inline-flex place-items-center
    rounded-md bg-opacity-20;

  > span {
    @apply block transition duration-600 transform;
  }

  &:focus,
  &:focus-visible {
    @apply outline-none;
  }

  &:hover,
  &:focus-visible {
    @apply bg-opacity-40;

    > span {
      @apply rotate-y-180;
    }
  }
}
</style>
