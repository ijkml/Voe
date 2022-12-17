<script setup lang="ts">
type AppColorScheme = 'dark' | 'light';

const props = defineProps<{
  still?: boolean;
}>();

const { still } = toRefs(props);

const icon = ref<0 | 1 | 2>(0);

const colorMode = useColorMode();

function renderIcon(theme: AppColorScheme) {
  icon.value = theme === 'light' ? 1 : 2;
}

function switchTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}

onMounted(() => {
  renderIcon(colorMode.preference as AppColorScheme);
});

watch(colorMode, () => {
  renderIcon(colorMode.preference as AppColorScheme);
});

const preferredColor = usePreferredColorScheme();

watch(preferredColor, (pref) => {
  colorMode.preference = pref === 'light' ? 'light' : 'dark';
});
</script>

<template>
  <button
    title="Change theme"
    class="!outline-none"
    :class="{ still }"
    tabindex="0"
    @click="switchTheme"
  >
    <Transition name="fade" mode="out-in">
      <span v-if="icon === 1" class="i-carbon-sun" />
      <span v-else-if="icon === 2" class="i-carbon-moon" />
      <span v-else class="i-carbon-smoothing" />
    </Transition>
  </button>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  --at-apply: py-2 px-2.5 bg-black inline-flex place-items-center rounded-md
    bg-opacity-20;

  > span {
    --at-apply: block transition duration-600 transform;
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
