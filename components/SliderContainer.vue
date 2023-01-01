<script setup lang="ts">
import type { Options as SplideOptions } from '@splidejs/vue-splide';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

import services from '@/i18n/copy/services';

const splideOptions: SplideOptions = {
  rewind: false,
  pagination: false,
  focus: 0,
  omitEnd: true,
  perMove: 1,
  autoWidth: true,
  gap: '24px',
  // drag: 'free',
  // snap: true,
  // padding: '1rem',
};

const progressBarWidth = ref('0%');

function updateProgress(splide: typeof Splide) {
  const end = splide.Components.Controller.getEnd() + 1;
  const rate = Math.min((splide.index + 1) / end, 1);
  progressBarWidth.value = `${String(100 * rate)}%`;
}
</script>

<template>
  <div>
    <Splide
      :options="splideOptions"
      :has-track="false"
      aria-label="Services that go far beyond the ordinary"
      @splide:mounted="updateProgress"
      @splide:move="updateProgress"
    >
      <SplideTrack>
        <SplideSlide v-for="serv in services" :key="serv.title">
          <div class="slide-container">
            <NuxtLink :to="serv.link" class="services-card">
              <img loading="lazy" :src="serv.image" :alt="serv.alt" />
              <div class="text">
                <h3 v-text="serv.title" />
                <p v-text="serv.text" />
              </div>
            </NuxtLink>
          </div>
        </SplideSlide>
      </SplideTrack>

      <div class="splide__arrows">
        <div class="slider-progress">
          <div class="slider-progress-bar" />
        </div>

        <div class="slider-arrows">
          <button class="splide__arrow splide__arrow--prev">
            <svg viewBox="0 0 32 32">
              <path d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" />
            </svg>
          </button>
          <button class="splide__arrow splide__arrow--next">
            <svg viewBox="0 0 32 32">
              <path d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" />
            </svg>
          </button>
        </div>
      </div>
    </Splide>
  </div>
</template>

<style lang="scss">
@use '@splidejs/vue-splide/css/core';
</style>

<style scoped lang="scss">
.splide__arrows {
  @apply hidden flex items-center justify-end px-8 py-2 gap-16 mt-4;
}

.slider-progress {
  @apply h-1 rounded-full overflow-hidden mx-auto
    w-full max-w-200 bg-zinc-3 dark:bg-zinc-8;

  &-bar {
    transition: transform 400ms ease;
    transform: scaleX(v-bind(progressBarWidth));
    transform-origin: left;

    @apply bg-violet-9 dark:bg-violet-7 h-full
      rounded-inherit w-full;
  }
}

.slider-arrows {
  @apply hidden md:(gap-3 inline-flex items-center);
}

.splide__arrow {
  @apply rounded p-1 ring-(1 brand-pri/50) transition
    dark:(ring-brand-sec/45) focus:outline-none bg-zinc-5/5;

  svg {
    @apply h-5 w-5 fill-brand-pri transition
      dark:(fill-brand-sec);
  }

  &:disabled {
    @apply opacity-40;
  }

  &:not(:disabled) {
    &:hover,
    &:focus-visible {
      @apply ring-2;
    }
  }
}
.slide-container {
  @apply p-2;
}

.services-card {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  @apply h-85 rounded-xl overflow-hidden block
    relative focus:outline-none cursor-pointer
      dark:(ring-(1 zinc-5/20)) w-85vw max-w-75;

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
