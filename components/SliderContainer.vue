<script setup lang="ts">
import type { Options as SplideOptions } from '@splidejs/vue-splide';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

import takeoff from '@img/airport-takeoff.webp?url';
import lounge from '@img/airport-lounge.webp?url';
import terminal from '@img/airport-terminal.webp?url';

const splideOptions: SplideOptions = {
  rewind: false,
  pagination: false,
  focus: 0,
  omitEnd: true,
  autoWidth: true,
  // drag: 'free',
  // snap: true,
  gap: '24px',
  padding: '1rem',
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
      aria-label="My Favorite Images"
      @splide:mounted="updateProgress"
      @splide:move="updateProgress"
      @splide:dragged="updateProgress"
    >
      <SplideTrack>
        <SplideSlide v-for="i in 6" :key="i">
          <div class="slide-container">
            <a class="atrraction-card">
              <img :src="terminal" alt="" />
              <div class="text">
                <h3>Heading Heading {{ i }}</h3>
                <p>
                  Our infinitely reconfigurable feature set is unparalleled in
                  the industry, but our vertical, customized efficient,
                  user-centric TQM and non-complex use is usually considered an
                  amazing achievement.
                </p>
              </div>
            </a>
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
  @apply flex items-center justify-end
    px-8 py-2 gap-16 mt-4;
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
  @apply gap-3 inline-flex items-center;
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

.atrraction-card {
  @apply w-78 h-95 rounded-xl overflow-hidden block
    relative focus:outline-none cursor-pointer;

  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  img {
    @apply rounded-inherit w-full mb-1px object-cover
      transform transition duration-300;
  }

  .text {
    @apply w-full h-auto absolute z-1 bottom-0
      left-0 bg-zinc-1 p-5 transition-all duration-300;
  }

  h3 {
    @apply mb-2 text-lg font-medium;
  }

  p {
    @apply text-0.95rem;
  }

  &:hover,
  &:focus-visible {
    img {
      @apply scale-125;
    }

    .text {
      @apply pb-10;
    }
  }
}
</style>
