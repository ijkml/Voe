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
        <button class="nav-button" type="button" title="Search" tabindex="0">
          <div class="i-carbon-search"></div>
        </button>

        <DarkToggle still class="dark-toggle" />
      </div>

      <button
        class="nav-button"
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
          <NuxtLink
            v-for="sv of nl.drop"
            :key="sv.text"
            :to="sv.to"
            exact-active-class="active"
          >
            {{ sv.text }}
          </NuxtLink>
        </div>
      </div>

      <hr class="hr" />
    </template>
  </aside>
</template>

<style lang="scss" scoped>
#app-sidebar-menu {
  --offscreen-w: translateX(101%);

  height: auto;
  max-height: min(98vh, 100%);
  transform: var(--offscreen-w);
  will-change: transform;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  top: 0.5px;

  --at-apply: z-20 fixed flex w-full max-w-260px flex-col right-0
    rounded-bl-lg overflow-y-auto invisible overflow-x-hidden
      border-l border-b border-zinc will-change-transform bg-light-2
        dark:(border-brand-pri text-zinc-2 bg-brand-pri-dark);

  &.visible--nav {
    --offscreen-w: translateX(0);
    visibility: visible;
  }

  .item-group-cont {
    --at-apply: p-4;

    & + hr {
      --at-apply: w-4/5 dark:(border-brand-pri);

      &:last-of-type {
        --at-apply: hidden;
      }
    }
  }

  .subheader {
    --at-apply: block text-xs font-semibold
      uppercase tracking-widest mb-4 mt-1;
  }

  .item-group {
    --at-apply: ml-1 space-y-4px;

    a {
      --at-apply: block -mx-2 py-2 px-6 relative font-medium
        rounded transition duration-280 cursor-pointer
          focus:outline-none;

      &:focus-visible,
      &:hover {
        --at-apply: text-brand-pri bg-zinc-200
          dark:(bg-brand-pri text-white);
      }

      &.active {
        --at-apply: text-brand-pri bg-zinc-2/70
          dark:(text-zinc-50 bg-white/8);

        &::before {
          --at-apply: absolute w-4px h-full bg-current top-0 left-0
            opacity-80 block content-[''] transition-colors;
        }

        &:focus-visible,
        &:hover {
          --at-apply: bg-zinc-3/80 dark:(bg-brand-pri);
        }
      }
    }
  }
}

.header {
  --at-apply: flex items-center justify-between p-3;

  .dark-toggle {
    &:hover,
    &:focus-visible {
      --at-apply: bg-opacity-88 dark:(bg-opacity-100);
    }
  }

  ._left {
    --at-apply: inline-flex gap-2;
  }

  .dark-toggle,
  .nav-button {
    --at-apply: focus:outline-none bg-gray-300 transition
      inline-flex items-center justify-center py-1.5 px-1.5
        rounded duration-250 cursor-pointer bg-opacity-30
          dark:(bg-brand-pri bg-opacity-30);
  }

  .nav-button {
    &:hover,
    &:focus-visible {
      --at-apply: bg-opacity-100;
    }

    > div {
      --at-apply: transition;
    }
  }

  & + hr {
    --at-apply: dark:border-brand-pri;
  }
}
</style>
