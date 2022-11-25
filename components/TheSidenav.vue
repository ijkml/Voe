<script setup lang="ts">
const sbn = ref(null);

const [visible, close] = [navIsOpen, closeSideNav];

onClickOutside(sbn, () => {
  visible.value && close();
});

const mobileMenuLinks = [
  {
    text: 'Tours and Flights',
    id: 'voe-demo-intro',
    drop: [
      { text: 'Tour Packages', to: '/t-pkg' },
      { text: 'All Flights', to: '/a-flt' },
      { text: 'Book a Flight', to: '/b-flt' },
    ],
  },
  {
    text: 'Rentals',
    id: 'voe-demo-rents',
    drop: [
      { text: 'Rent a Plane', to: '/r-pln' },
      { text: 'Car Rentals', to: '/r-car' },
      { text: 'Rent Policies', to: '/r-tos' },
    ],
  },
  {
    text: 'About Us',
    id: 'voe-demo-about',
    drop: [
      { text: 'About Us', to: '/abtus' },
      { text: 'Administration', to: '/admin' },
      { text: 'Our History', to: '/hstry' },
      { text: 'Terms of Service', to: '/tosrv' },
      { text: 'Cookies and Privacy', to: '/cooky' },
      { text: 'Careers at Voe', to: '/vwork' },
    ],
  },
  {
    text: 'Customer Service',
    id: 'voe-demo-srvce',
    drop: [
      { text: 'Contact Us', to: '/cntct' },
      { text: 'FAQs', to: '/faqes' },
      { text: 'Special Needs', to: '/s-nds' },
      { text: 'Lost and Found', to: '/l-fnd' },
    ],
  },
];
</script>

<template>
  <aside
    id="app-sidebar-menu"
    ref="sbn"
    aria-label="Menu"
    :class="[visible && 'visible--nav']"
  >
    <div class="header">
      <div class="_left">
        <NuxtLink
          to="https://github.com/ijkml/Voe"
          external
          target="_blank"
          tabindex="0"
        >
          <div class="i-carbon-logo-github" />
        </NuxtLink>

        <DarkToggle class="dark-toggle" />
      </div>

      <button
        class="close-button"
        type="button"
        title="Close Menu"
        tabindex="0"
        @click="close"
      >
        <div class="i-carbon-close"></div>
      </button>
    </div>
    <hr class="hr" />

    <template v-for="nl of mobileMenuLinks" :key="nl.id">
      <div class="item-group-cont">
        <div class="subheader">{{ nl.text }}</div>

        <div class="item-group">
          <template v-for="sv of nl.drop" :key="sv.text">
            <NuxtLink :to="sv.to" exact-active-class="active">
              {{ sv.text }}
            </NuxtLink>
          </template>
        </div>
      </div>

      <hr class="hr" />
    </template>
  </aside>
</template>

<style lang="scss" scoped>
#app-sidebar-menu {
  --offscreen-w: translateX(101%);

  background-color: #f8fbfc;

  .dark & {
    background-color: darken($color: $brand-pri, $amount: 16%);
  }

  height: auto;
  max-height: min(98vh, 100%);
  transform: var(--offscreen-w);
  will-change: transform;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  top: 0.5px;
  right: 0.5px;

  @apply z-20 fixed flex w-full max-w-260px flex-col
    rounded-bl overflow-y-auto invisible overflow-x-hidden dark:text-zinc-2
      border-l border-b border-zinc dark:border-brand-pri;

  &.visible--nav {
    --offscreen-w: translateX(0);
    visibility: visible;
  }

  .item-group-cont {
    @apply px-4 pb-5 pt-4;

    & + hr {
      @apply w-4/5;

      &:last-of-type {
        @apply hidden;
      }
    }
  }

  .subheader {
    @apply block text-xs font-semibold
      uppercase tracking-widest mb-4 mt-1;
  }

  .item-group {
    @apply ml-1 space-y-4px;

    a {
      @apply block -mx-2 py-2 px-6 relative
        rounded transition duration-280 cursor-pointer;

      &:focus-visible,
      &:hover {
        @apply text-brand-pri outline-none bg-gray-200;
      }

      &.active {
        @apply text-brand-pri bg-zinc-200/40;

        &::before {
          @apply absolute w-4px h-full bg-current top-0
            opacity-80 left-0 block content-['']
              transition-colors;
        }

        &:focus-visible,
        &:hover {
          @apply bg-gray-200;
        }
      }
    }
  }
}

.header {
  @apply flex items-center justify-between p-3;

  a,
  .dark-toggle {
    > :deep(*) {
      @apply h-6 w-6;
    }

    &:hover,
    &:focus-visible {
      @apply bg-opacity-88;
    }
  }

  ._left {
    @apply inline-flex gap-2;
  }

  .dark-toggle,
  .close-button,
  a {
    @apply focus:outline-none bg-gray-300 transition
      inline-flex items-center justify-center py-1 px-1.5
        rounded duration-250 bg-opacity-30 cursor-pointer;
  }

  .close-button {
    &:hover,
    &:focus-visible {
      @apply bg-opacity-88;

      > div {
        @apply rotate-180;
      }
    }

    > div {
      @apply h-6 w-6 transition transform-gpu duration-300;
    }
  }
}
</style>
