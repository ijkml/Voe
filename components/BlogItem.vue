<script setup lang="ts">
import type { BlogItem } from '@/types';

const props = defineProps<BlogItem>();

const { date, image, link, text, title } = toRefs(props);
const imageUrl = `url(${image.value})`;
</script>

<template>
  <NuxtLink :to="link" class="blog-card">
    <div>
      <h3 v-text="title" />
      <div class="dated" v-text="date" />
      <p class="peekaboo" v-text="text" />
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.blog-card {
  --card-image: v-bind('imageUrl');
}
</style>
