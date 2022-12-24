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
          <button
            type="submit"
            class="search-button"
            :class="{ loading: isSearching }"
            @click.prevent="searchAction"
          >
            <span>Search</span>
            <LoadingSvg class="icon" />
          </button>
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
              <button>Learn More</button>
              <VButton tabindex="0">Test Test</VButton>
            </div>
          </div>
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
    @apply px-6 h-10 flex items-center transition duration-300
      rounded-md bg-brand-pri text-white focus:outline-none
        font-medium mt-4 sm:(h-11) md:(mt-0) relative;

    &:hover,
    &:focus-visible {
      @apply outline-none bg-opacity-80 dark:(bg-opacity-50);
    }

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
  @apply flex shadow light:(bg-light-2) rounded-xl
    border-(1 l-0 zinc-5/25) dark:(bg-dark-6 border-zinc-5/20);

  .img {
    @apply w-1/2 min-h-270px rounded-l-inherit;

    background: blue url('/img/img-01.webp') top center / cover;
  }

  .text {
    @apply w-1/2 rounded-r-inherit p-8 flex place-items-center;

    h2 {
      @apply text-xl mb-4;
    }

    button {
      // @apply border-2 border-blue;
    }
  }
}
</style>
