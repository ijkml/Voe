<script setup lang="ts">
import LoadingSvg from '@icons/loading.svg?component';

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

const voeStats = [
  {
    figure: 500,
    suffix: 'k+',
    title: 'Flights',
  },
  {
    figure: 0,
    suffix: '',
    title: 'Crashes',
  },
  {
    figure: 250,
    suffix: '',
    title: 'Destinations',
  },
  {
    figure: 10.1,
    suffix: 'M+',
    title: 'Passengers',
  },
];
</script>

<template>
  <div>
    <section class="ze-hero" aria-labelledby="screamer">
      <h1 id="screamer">Fly with peace of mind</h1>
    </section>

    <section
      class="ze-section ze-search-overlap"
      aria-labelledby="find-ur-flight"
    >
      <div>
        <h2 id="find-ur-flight">Find your flight</h2>
        <form>
          <div class="info-input-cont">
            <VInput class="info-input" label="Departure Airport" />
            <VInput class="info-input" label="Arrival Airport" />
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

        <div class="voe-stats">
          <StatBox v-for="stat in voeStats" v-bind="stat" :key="stat.title" />
        </div>
      </div>
    </section>

    <div class="test">
      <!-- <section class="h-150vh bg-blue-300"></section> -->
      <!-- <section class="h-150vh bg-white"></section> -->
      <!-- <section class="h-150vh bg-blue-800"></section> -->
      <!-- <section class="h-150vh bg-blue-500"></section> -->
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
  @apply text-2.5rem md:(text-3.1rem) font-semibold transition
    sm:(text-2.8rem) mb-30 p-5 text-center font-serif;
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
    @apply text-1.4rem sm:(text-3xl) mb-3 font-(semibold serif);
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

.voe-stats {
  @apply mt-12 p-2 grid gap-4;

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  > div {
    @apply p-2 text-center;

    justify-self: center;
  }

  :deep(.num) {
    @apply text-4xl font-serif font-semibold slashed-zero;
  }

  :deep(.txt) {
    @apply text-sm mt-2 uppercase font-medium;
  }
}
</style>
