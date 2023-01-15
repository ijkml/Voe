<script setup lang="ts">
import services from '@/i18n/copy/services';

const progress = ref('0%');
const progressBarWidth = refThrottled(progress, 250);

function updateProgress(prog: number) {
  const pcent = prog * 100;
  progress.value = `${pcent < 2 ? 2 : pcent}%`;
}

const options = {
  slidesPerView: 'auto',
  spaceBetween: 19.2,
  modules: [SwiperNavigation],
  navigation: {
    nextEl: '.splide__arrow--next',
    prevEl: '.splide__arrow--prev',
    disabledClass: 'disabled',
  },
  breakpoints: {
    600: {
      spaceBetween: 24,
    },
  },
};
</script>

<template>
  <Swiper
    v-bind="options"
    @progress="(_: any, prog: number) => updateProgress(prog)"
  >
    <SwiperSlide v-for="serv in services" :key="serv.title" class="w-auto">
      <ServiceCard v-bind="serv" />
    </SwiperSlide>

    <div class="splide__arrows">
      <div class="slider-progress">
        <div class="slider-progress-bar" />
      </div>

      <div class="slider-arrows">
        <button
          aria-label="Previous slide"
          class="splide__arrow splide__arrow--prev"
        >
          <svg role="img" viewBox="0 0 32 32">
            <path d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" />
          </svg>
        </button>
        <button
          aria-label="Next slide"
          class="splide__arrow splide__arrow--next"
        >
          <svg role="img" viewBox="0 0 32 32">
            <path d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" />
          </svg>
        </button>
      </div>
    </div>
  </Swiper>
</template>

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

  &:disabled,
  &.disabled {
    @apply opacity-40;
  }

  &:not(:disabled):not(.disabled) {
    &:hover,
    &:focus-visible {
      @apply ring-2;
    }
  }
}
</style>
