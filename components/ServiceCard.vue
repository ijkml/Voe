<script setup lang="ts">
const props = defineProps<{
  id: string | number;
  image: string;
  link: string;
  class?: string;
}>();

const { t } = useI18n();

const { image, link, id, class: className } = toRefs(props);

const imageUrl = `url(${image.value})`;

function trans(part: string) {
  return t(`services.slides.${id.value}.${part}`);
}
</script>

<template>
  <div :class="className">
    <NuxtLink :to="localizeUrl(link)" class="services-card">
      <div class="card-img" />
      <div class="text">
        <h3 v-text="trans('title')" />
        <p v-text="trans('text')" />
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
$leading: 1.5em;

.slide-container {
  @apply py-2 px-1 sm:px-2;
}

.services-card {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  @apply w-85vw max-w-75 bg-zinc-1 dark:bg-zinc-8 h-85 relative
    rounded-xl transition duration-350 overflow-hidden flex flex-col
      focus:outline-none cursor-pointer dark:(ring-(1 zinc-5/20));
}

.card-img {
  @apply w-full h-49;

  &::after {
    @apply content-[''] absolute inset-0 w-full h-inherit
      transition-all duration-350 rounded-inherit;

    background: v-bind('imageUrl') center center / cover no-repeat;
  }
}

.text {
  @apply transition-all duration-350 w-full p-5 z-2
    filter bg-zinc-1 dark:bg-zinc-8 backdrop-blur-6
      rounded-b-inherit relative h-auto flex-grow-0
        select-none;
}

h3 {
  @apply mb-2 text-lg font-medium;
}

p {
  font-size: 0.95rem;
  transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
  line-height: $leading;
  min-height: $leading * 3;

  @media (hover: hover) and (min-width: 768px) {
    @apply line-clamp-3;

    line-height: $leading;
    max-height: $leading * 3;
  }
}

.services-card {
  &:hover {
    .card-img::after {
      @apply h-full opacity-90;
    }

    .text {
      @apply bg-opacity-70 dark:bg-opacity-85;
    }

    p {
      @media (hover: hover) and (min-width: 768px) {
        -webkit-line-clamp: 5;
        line-clamp: 5;
        max-height: $leading * 5;
        // max-height: 100%;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
