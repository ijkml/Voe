<script setup lang="ts">
const voeStats = [
  {
    figure: 500,
    suffix: 'k+',
    title: 'flights',
  },
  {
    figure: 0,
    suffix: '',
    title: 'crashes',
  },
  {
    figure: 250,
    suffix: '',
    title: 'destinations',
  },
  {
    figure: 10.1,
    suffix: 'M+',
    title: 'passengers',
  },
];
</script>

<template>
  <div class="voe-stats">
    <StatBox v-for="stat in voeStats" v-bind="stat" :key="stat.title" />
  </div>
</template>

<style scoped lang="scss">
.voe-stats {
  @apply mt-12 p-2 grid gap-4;

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  > div {
    @apply p-2 text-center;

    justify-self: center;
  }

  :deep(.num) {
    @apply text-4xl font-serif font-semibold slashed-zero;
  }

  :deep(.txt) {
    @apply text-sm mt-2 uppercase font-medium;
  }
}
</style>
