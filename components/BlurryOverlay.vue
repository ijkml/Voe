<template>
  <Transition name="fade">
    <div
      v-show="navIsOpen"
      class="nav-overlay"
      tabindex="-100"
      aria-hidden="true"
    />
  </Transition>
</template>

<style lang="scss" scoped>
.nav-overlay {
  --at-apply: fixed h-full w-full backdrop-filter overflow-hidden z-16
    bg-black/50 top-0 left-0 backdrop-blur-0.088rem;
}
</style>
