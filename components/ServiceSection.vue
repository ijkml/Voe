<script setup lang="ts">
import type { Swiper as SwiperInstance, SwiperOptions } from 'swiper/types';
import services from '@data/services';

const options: SwiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 19.2,
  // rewind: true,
  breakpoints: {
    600: {
      spaceBetween: 24,
    },
  },
};

const arrows = [
  {
    label: 'Previous slide',
    path: 'M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z',
    class: 'splide__arrow--prev',
    dir: 'prev',
  },
  {
    label: 'Next slide',
    path: 'M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z',
    class: 'splide__arrow--next',
    dir: 'next',
  },
] as const;

const zSwiper = ref<SwiperInstance | null>(null);

function getSwiper(instance: SwiperInstance) {
  zSwiper.value = instance || null;
}

const progress = ref('0%');
const progressBarWidth = refThrottled(progress, 150);

const disabled = reactive({
  next: true,
  prev: false,
});

function updateArrows(swiper: SwiperInstance) {
  disabled.prev = swiper.isBeginning;
  disabled.next = swiper.isEnd;
}

function updateProgress(swiper: SwiperInstance, prog: number) {
  const pcent = prog * 100;
  progress.value = `${pcent <= 1 ? 1 : pcent}%`;
  updateArrows(swiper);
}

function slide(dir: 'next' | 'prev') {
  if (!zSwiper.value) {
    return;
  }

  if (dir === 'next') {
    zSwiper.value.slideNext();
  } else {
    zSwiper.value.slidePrev();
  }
}
</script>

<template>
  <section>
    <LazyClientOnly>
      <Swiper
        v-bind="options"
        aria-hidden="true"
        @swiper="getSwiper"
        @progress="updateProgress"
      >
        <SwiperSlide v-for="serv in services" :key="serv.id" class="w-auto">
          <ServiceCard class="slide-container" v-bind="serv" />
        </SwiperSlide>
      </Swiper>

      <div class="splide__arrows">
        <div class="slider-progress">
          <div class="slider-progress-bar" />
        </div>
        <div class="slider-arrows">
          <button
            v-for="arr in arrows"
            :key="arr.label"
            :aria-label="arr.label"
            class="splide__arrow"
            :class="[arr.class]"
            :disabled="disabled[arr.dir]"
            @click="slide(arr.dir)"
          >
            <svg viewBox="0 0 32 32">
              <path :d="arr.path" />
            </svg>
          </button>
        </div>
      </div>
    </LazyClientOnly>

    <div class="sr-only">
      <ServiceCard
        v-for="serv in services"
        :key="serv.id"
        class="sr-only"
        v-bind="serv"
      />
    </div>
  </section>
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
