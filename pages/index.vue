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
    <section class="hero">
      <h1 class="screamer">Fly with peace of mind</h1>
    </section>
    <section id="ze-search-overlap">
      <div>
        <h2>Find your flight</h2>
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
    <div class="test">
      <!-- <section class="h-150vh bg-blue-300"></section> -->
      <!-- <section class="h-150vh bg-white"></section> -->
      <!-- <section class="h-150vh bg-blue-800"></section> -->
      <!-- <section class="h-150vh bg-blue-500"></section> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  --at-apply: w-full text-white flex items-center justify-center;

  $overlay: hsla(0, 100%, 50%, 0.1);

  min-height: clamp(400px, 99vh, 900px);
  padding-top: $nav-height * 1.5;
  background: linear-gradient(to bottom right, $overlay, $overlay),
    url('@img/hero-pattern.svg') top left / contain repeat,
    $brand-pri url('@img/hero.webp') center / cover no-repeat;

  --at-apply: lg:bg-fixed 2xl:bg-local;
}

.screamer {
  --at-apply: text-3.3rem font-medium pb-25 tracking-wide;

  // font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont;
  font-family: Venturis;
}

#ze-search-overlap {
  @apply relative mx-auto p-4 md:(p-8) lg:(max-w-screen-lg);

  > div {
    @apply bg-white rounded-lg mt--30 mb-8 p-4 w-full
      sm:(p-9) light:(shadow-lg sm:shadow-xl shadow-zinc)
        dark:(bg-dark-7 shadow-none border border-zinc-1/8);
  }

  form {
    @apply md:(flex items-center gap-4);
  }

  .info-input-cont {
    @apply grid gap-4 overflow-hidden p-1 flex-grow grid-cols-1;

    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 400px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  .info-input {
    @apply w-full;
  }

  h2 {
    @apply text-1.32rem sm:(text-2xl) mb-4;

    font-family: Venturis;
  }

  .search-button {
    @apply px-6 h-10 flex items-center transition duration-300
      rounded-md bg-brand-pri text-white focus:outline-none
        font-medium mt-4 sm:(h-11) md:(mt-0) relative;

    &:hover, &:focus-visible {
      @apply outline-none bg-opacity-80 dark:(bg-opacity-50);
    }

    > span {
      @apply transition;
    }

    .icon {
      @apply invisible transition absolute top-1/2 left-1/2
        transform translate--1/2;
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
</style>
