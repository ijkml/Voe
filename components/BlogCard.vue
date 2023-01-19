<script setup lang="ts">
import type { BlogCard } from '@/types';

const props = defineProps<BlogCard>();

const { date, image, link, text, title } = toRefs(props);

const imageUrl = `url(${image.value})`;
</script>

<template>
  <NuxtLink v-lazy-pix:bg :to="localizeUrl(link)" class="blog-card">
    <div>
      <h3 v-text="title" />
      <div class="dated" v-text="date" />
      <p class="peekaboo" v-text="text" />
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
$line-no: 3;
$pad-top: 1rem;
$line-ht: 1.3rem;
$elem-ht: ($line-ht * $line-no) + $pad-top;
$overlay: hsla(263, 60%, 20%, 0.088);

.img-y {
  // --card-image: v-bind('imageUrl');
}

.blog-card {
  @apply flex justify-center overflow-hidden rounded-xl items-end
    transition-all duration-400 min-h-80 ease-in-out text-light-1
      relative focus:outline-none bg-brand-pri-dark max-w-90 mx-auto
        md:(max-w-100) ring-(1 zinc-5/25);

  &::after {
    @apply w-full h-full top-0 left-0 absolute z-0 transition-inherit
      rounded-inherit filter content-[''];

    background: linear-gradient($overlay, $overlay),
      #210123 var(--card-image) bottom center / cover no-repeat;
  }

  > div {
    @apply z-1 relative w-full bg-black/70 p-4 rounded-b-inherit
      transition-inherit;

    margin-bottom: -$elem-ht;
  }
}

h3 {
  @apply text-lg font-semibold;
}

.dated {
  @apply text-xs font-mono block mt-2 text-zinc-2;
}

.peekaboo {
  font-size: 0.88rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $line-no;
  line-clamp: $line-no;
  padding-top: $pad-top;
  line-height: $line-ht;
  min-height: $elem-ht;

  @apply overflow-hidden invisible transition max-w-50ch
    duration-500 transform translate-y-full;
}

.blog-card {
  &:hover,
  &:focus-visible {
    &::after {
      @apply sepia-75 brightness-40;
    }

    > div {
      @apply mb-0;
    }

    .peekaboo {
      @apply delay-150 visible translate-y-0;
    }
  }
}
</style>
