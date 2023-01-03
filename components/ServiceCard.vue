<script setup lang="ts">
import type { ServicesCard } from '@/types';

const props = defineProps<ServicesCard>();

const { image, link, text, title } = toRefs(props);
</script>

<template>
  <div class="slide-container">
    <NuxtLink :to="link" class="services-card">
      <img loading="lazy" :src="image" alt="" />
      <div class="text">
        <h3 v-text="title" />
        <p v-text="text" />
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.slide-container {
  @apply p-2;
}

.services-card {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  @apply h-85 rounded-xl overflow-hidden block
    relative focus:outline-none cursor-pointer
      dark:(ring-(1 zinc-5/20)) w-85vw max-w-75;
}

img {
  @apply rounded-inherit w-full object-cover object-center
      transform transition duration-300 h-full;
}

.text {
  @apply w-full h-auto absolute z-1 left-0 bottom-0 p-5 filter
      transition-all duration-300 bg-zinc-1/85 dark:bg-zinc-8/95
        backdrop-blur-6;
}

h3 {
  @apply mb-2 text-lg font-medium;
}

p {
  @apply text-0.95rem transition-all;

  @media (hover: hover) and (min-width: 768px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    overflow: hidden;
  }
}

.services-card {
  &:hover,
  &:focus-visible {
    img {
      @apply scale-125;
    }

    .text {
      @apply pb-10;

      p {
        -webkit-line-clamp: 8;
        line-clamp: 8;
      }
    }
  }
}
</style>
