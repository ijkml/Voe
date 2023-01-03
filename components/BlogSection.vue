<script setup lang="ts">
import blog from '@/i18n/copy/blog';
</script>

<template>
  <div class="top-cont">
    <BlogCard v-for="bl in blog" :key="bl.title" v-bind="bl" />
  </div>
</template>

<style scoped lang="scss">
.top-cont {
  @apply grid grid-cols-1 gap-6 md:gap-8;
}

@media (min-width: 400px) and (max-width: 519.9px) {
  .blog-card {
    @apply w-full max-w-full min-h-60;
  }
}

@media (min-width: 520px) and (max-width: 991.9px) {
  .top-cont {
    @apply grid-cols-2;
  }
}

@media (min-width: 992px) {
  .top-cont {
    @apply grid-cols-3;
  }
}
</style>
