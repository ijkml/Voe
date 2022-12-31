<script setup lang="ts">
import LoadingSvg from '@icons/loading.svg?component';
import whyVoe from '@/i18n/copy/whyVoe';

const isSearching = ref(false);
function searchAction() {
  if (isSearching.value) {
    return;
  }

  isSearching.value = true;
  setTimeout(() => {
    isSearching.value = false;
  }, 3581);
}

const today = new Date();
const staleDate = new Date();
staleDate.setDate(today.getDate() - 30);

function creatInputDate(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

const minDate = creatInputDate(staleDate);
const maxDate = creatInputDate(today);
</script>

<template>
  <div>
    <section class="ze-hero" aria-labelledby="screamer">
      <h1 id="screamer" class="font-serif">Fly with peace of mind</h1>
    </section>

    <section
      class="ze-section ze-search-overlap"
      aria-labelledby="find-ur-flight"
    >
      <div>
        <h2 id="find-ur-flight" class="font-serif">Find your flight</h2>
        <form>
          <div class="info-input-cont">
            <VInput
              class="info-input"
              label="Destination / Airline"
              placeholder="Enter destination or flight number"
            />
            <VInput
              class="info-input"
              type="date"
              :min="minDate"
              :max="maxDate"
              label="Flight Date"
              placeholder="Enter arrival or departure date"
            />
          </div>
          <VButton
            class="search-button"
            :class="{ loading: isSearching }"
            tabindex="0"
            type="submit"
            @click.prevent="searchAction"
          >
            <span>Search</span>
            <LoadingSvg class="icon" />
          </VButton>
        </form>
      </div>
    </section>

    <section class="ze-section ze-stats-info" aria-labelledby="find-covid-info">
      <div>
        <div class="covid-info">
          <div class="img" role="img" title="A woman wearing a mask" />
          <div class="text">
            <div>
              <h2 id="find-covid-info">
                Find out everything you need to know about the safety measures
                implemented to safeguard travellers against COVID-19.
              </h2>
              <div class="buttons space-x-3 space-y-3">
                <VButton tabindex="0">Learn More</VButton>
              </div>
            </div>
          </div>
        </div>

        <StatSection />
      </div>
    </section>

    <div class="ze-why-us ze-sec-alt">
      <section class="ze-section" aria-labelledby="why-voe-h">
        <h2 id="why-voe-h" class="font-serif">Why Fly With Us?</h2>

        <div>
          <section
            v-for="y in whyVoe"
            :key="y.title"
            class="why-reasons"
            :aria-label="y.title"
          >
            <div class="img">
              <img loading="lazy" :alt="y.alt" :src="y.image" />
            </div>
            <div class="text">
              <h3 v-text="y.title" />
              <p v-text="y.text" />
            </div>
          </section>
        </div>
      </section>
    </div>

    <section class="ze-services" aria-labelledby="ze-services">
      <div class="nailed-down">
        <h2 id="ze-services" class="font-serif">
          Services that go far <i>beyond the&nbsp;ordinary</i>
        </h2>
        <p>
          We offer exceptional services and amenities to make your travel
          experience comfortable and convenient.
        </p>
      </div>
      <SliderContainer class="slider-cont" />
    </section>

    <div class="ze-cta">
      <section>
        <div>
          <h2 class="font-serif">
            Discover the Ultimate Travel Experience with First&nbsp;Class
          </h2>
          <p>
            Experience luxury and comfort with our first class services,
            including exclusive lounges, premium dining, and personalized
            assistance. Elevate your journey with us.
          </p>
          <VButton>Experience First Class</VButton>
        </div>
      </section>
    </div>

    <div class="ze-sec-alt">
      <section class="ze-section">
        <BlogSection />
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ze-hero {
  --at-apply: w-full text-white flex items-center justify-center;

  $overlay: hsla(0, 100%, 50%, 0.1);

  min-height: clamp(400px, 99vh, 900px);
  padding-top: $nav-height * 1.5;
  background: linear-gradient(to bottom right, $overlay, $overlay),
    url('@img/hero-pattern.svg') top left / contain repeat,
    $brand-pri url('@img/hero.webp') center / cover no-repeat;

  @apply lg:(bg-fixed) 2xl:(bg-local);
}

#screamer {
  @apply font-semibold transition mb-30 p-5 text-center
    text-2.5rem sm:(text-2.8rem) md:(text-3.1rem);
}

.ze-search-overlap {
  @apply relative;

  > div {
    @apply rounded-lg mt--30 p-8 bg-light-2 mx-auto shadow-(lg zinc)
      sm:(px-12 py-10) md:(px-16 py-12) border-(1 transparent) w-full
        dark:(bg-dark-6 shadow-transparent border-zinc-1/10)
          lg:(max-w-screen-lg);
  }

  form {
    @apply md:(flex items-center gap-5);
  }

  .info-input-cont {
    @apply grid gap-5 overflow-hidden flex-grow py-2 grid-cols-1;

    @media (min-width: 400px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  .info-input {
    @apply w-auto max-w-full;
  }

  h2 {
    @apply text-1.4rem sm:(text-3xl) mb-3 font-semibold;
  }

  .search-button {
    @apply px-6 h-10 flex items-center mt-4 sm:(h-11) md:(mt-0) relative;

    > * {
      @apply transition;
    }

    .icon {
      @apply invisible absolute top-1/2 left-1/2 transform translate--1/2;
    }

    &.loading {
      @apply cursor-wait;

      > span {
        @apply invisible;
      }
      .icon {
        @apply visible;
      }
    }
  }
}

.ze-stats-info {
  @apply my-2;

  > div {
    @apply lg:(max-w-screen-lg) mx-auto;
  }
}

.covid-info {
  @apply shadow light:(bg-light-2) rounded-xl
    border-(1 zinc-5/25) dark:(bg-dark-6 border-zinc-5/20);

  .img {
    @apply w-full min-h-230px rounded-t-inherit;

    background: $brand-pri-dark url('/img/img-01.webp') center 20% / cover
      no-repeat;
  }

  .text {
    @apply w-full rounded-r-inherit p-8 flex place-items-center;

    > div {
      @apply max-w-full;
    }

    h2 {
      @apply text-1.1rem mb-4 md:(text-1.2rem);
    }
  }

  @media (min-width: 512px) {
    @apply flex border-l-0;

    .img {
      @apply w-1/2 rounded-none rounded-l-inherit;
    }

    .text {
      @apply w-1/2;
    }
  }
}

.ze-why-us {
  h2 {
    @apply text-center mx-auto max-w-md text-4xl font-semibold mb-10;
  }

  > section {
    --flex-gap: 2rem;

    > div {
      @apply flex gap-[var(--flex-gap)] flex-wrap sm:px-2;
    }

    @media (min-width: 992px) {
      > div {
        @apply grid grid-cols-3;
      }
    }
  }
}

.why-reasons {
  .img {
    @apply relative h-50 w-full flex-none rounded-t-inherit;

    img {
      @apply w-full h-full absolute inset-0 object-cover
        object-top rounded-inherit;
    }
  }

  .text {
    @apply p-5 rounded-b-inherit self-center;
  }

  h3 {
    @apply text-lg mb-2 font-medium;
  }

  --avail-width-2: calc((100% - var(--flex-gap)) / 2);

  @apply overflow-hidden mx-auto w-full max-w-100 rounded-xl
    dark:(ring-(1 zinc-6/25)) transition-all;

  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  @mixin spread-horizontal($min-h: 100%) {
    .img {
      @apply w-1/2 h-full rounded-(none l-inherit);

      min-height: $min-h;
    }

    .text {
      @apply px-5 py-6;
    }
  }

  @media (min-width: 500px) and (max-width: 767.9px) {
    @apply flex max-w-160 mx-auto;

    @include spread-horizontal(11rem);
  }

  @media (min-width: 768px) and (max-width: 991.9px) {
    @apply w-[var(--avail-width-2)] mx-auto max-w-full;

    &:last-child {
      @apply flex w-[75%] mx-auto;

      @include spread-horizontal(13.8rem);
    }
  }
}

.ze-services {
  --nd-max-w: 100%;
  --nd-space: 0;

  @apply my-8 p-4 md:(p-8 pr-4 flex items-center relative);

  .nailed-down {
    @apply mb-6 w-full max-w-[var(--nd-max-w)];

    h2 {
      @apply text-3xl font-semibold mb-4;

      i {
        @apply text-brand-pri dark:text-fuchsia-4
          underline underline-(1px dashed offset-4);

        font-style: normal;
      }
    }

    h2,
    p {
      @apply text-center mx-auto max-w-md;
    }
  }

  .slider-cont {
    margin-left: var(--nd-space);
    width: calc(100% - var(--nd-space));
  }

  @media (min-width: 768px) {
    --nd-max-w: 16.3rem;
    --nd-space: calc(var(--nd-max-w) + 2rem);

    .nailed-down {
      @apply absolute top-1/2 transform translate-y--1/2;

      h2,
      p {
        @apply text-left mx-0 max-w-full;
      }
    }
  }

  @media (min-width: 1024px) {
    --nd-max-w: 17.5rem;
  }

  @media (min-width: 1024px) and (max-width: 1279.9px) {
    margin-left: calc((100vw - 1024px) / 2);
  }

  @media (min-width: 1279.9px) and (max-width: 1535.9px) {
    margin-left: calc((100vw - 1280px) / 2);
  }

  @media (min-width: 1536px) {
    margin-left: auto;
    max-width: 1400px;
  }
}

.ze-cta {
  section {
    @apply w-full mx-auto max-w-screen-xl text-center flex
      py-16 px-8 xl:(rounded my-10) text-white items-center
        justify-center min-h-100 sm:(px-16 min-h-110);

    @media (min-width: 1300px) {
      @apply rounded-xl;
    }

    background: 
    // radial gradient `at` safari iOS ??
      radial-gradient(ellipse at top, hsla(327, 72%, 20%, 0.95), transparent),
      radial-gradient(ellipse at bottom, hsla(263, 60%, 20%, 0.95), transparent),
      #12020df3 url('@img/first-class.webp') bottom center / cover no-repeat;

    > div {
      @apply max-w-125 sm:max-w-150;

      > * {
        @apply mx-auto;
      }
    }

    h2 {
      @apply text-2rem sm:(text-2.4rem) font-semibold leading-tight;
    }

    p {
      @apply max-w-50ch sm:(text-lg) my-6;
    }
  }
}
</style>
