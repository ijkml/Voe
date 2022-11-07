<script setup lang="ts">
</script>

<template>
  <div class="app-layout--default">
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.app-layout--default {
  @apply min-h-screen flex flex-col mx-auto
    max-w-screen-2xl relative;

  > footer {
    @apply mt-auto;
  }

  > main {
    @apply min-h-50;
  }

  > header {
    @apply max-w-screen-2xl;
  }
}
</style>
