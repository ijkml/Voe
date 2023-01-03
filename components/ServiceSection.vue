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
          <ServiceCard v-bind="serv" />
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
</style>
