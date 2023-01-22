<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {
  blend: false,
});

interface Props {
  blend?: boolean;
}

const { blend } = toRefs(props);

const { y: scrolledHeight } = useWindowScroll();

const scrolled = ref(false);
const elevated = ref(false);

watchThrottled(
  scrolledHeight,
  (nv, ov) => {
    if (scrolledHeight.value < 400) {
      scrolled.value = false;
      elevated.value = false;
    } else {
      elevated.value = true;
      scrolled.value = nv > ov;
    }
  },
  { throttle: 150 }
);
</script>

<template>
  <header :class="{ blend, scrolled, elevated }">
    <div>
      <NuxtLink title="Voe" :to="localizeUrl('/')">
        <TheLogo class="the-logo" />
      </NuxtLink>

      <LazyTheHeaderNav />

      <div class="actions">
        <LanguageMenu tabindex="0" />

        <button title="Search" tabindex="0" class="search-button">
          <div class="i-carbon-search" />
        </button>

        <DarkToggle class="dark-toggle" />

        <SidenavButton class="sidenav-button" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.the-logo {
  --at-apply: h-25px w-auto;
}

header {
  --hide-scroll: translateY(0);
  --bg: $brand-pri;

  --at-apply: text-light-2 w-full top-0 z-16 visible bg-#371a66;

  will-change: transform, visibility;
  transform: var(--hide-scroll);

  transition-property: transform, visibility, background-color, backdrop-filter;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  @supports (
    (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
  ) {
    --at-apply: backdrop-filter backdrop-blur-4px;
  }

  &:not(.blend) {
    --at-apply: sticky bg-opacity-80;
  }

  &.blend {
    --at-apply: fixed bg-opacity-0;
  }

  &.scrolled {
    --hide-scroll: translateY(-101%);

    --at-apply: invisible;
  }

  &.elevated {
    --at-apply: bg-opacity-80;
  }

  > div {
    --at-apply: w-full max-w-screen-xl h-14 mx-auto items-center
      flex px-4 py-2px sm:(px-6) justify-between;
  }
}

.actions {
  --at-apply: flex gap-1.6 sm:gap-3 items-center;
}

.search-button {
  --at-apply: py-2 px-2.5 hidden sm:inline-flex justify-center
    rounded-md select-none bg-black bg-opacity-20
      transition duration-250 items-center;

  &:focus,
  &:focus-visible {
    --at-apply: outline-none;
  }

  div {
    --at-apply: transition duration-600 transform;
  }

  &:hover,
  &:focus-visible {
    --at-apply: bg-opacity-40;

    div {
      --at-apply: rotate-y-180;
    }
  }
}

.dark-toggle {
  --at-apply: hidden sm:inline-flex;
}

.main-nav {
  @apply hidden;
}

@media (min-width: 1000px) {
  .sidenav-button {
    display: none;
  }

  .main-nav {
  @apply flex items-center gap-2;
}
}
</style>
