<template>
  <button
    type="button"
    class="ham-btn"
    :class="{ navIsOpen }"
    aria-label="mobile navigation"
    aria-controls="app-sidebar-menu"
    :aria-expanded="navIsOpen"
    @click="toggleSideNav()"
  >
    <span class="ham-cont">
      <span class="top" />
      <span class="middle" />
      <span class="bottom" />
    </span>
  </button>
</template>

<style scoped lang="scss">
.ham-cont {
  --at-apply: overflow-hidden h-14px w-16px relative pointer-events-none;
}

.ham-btn {
  --at-apply: flex justify-center items-center cursor-pointer select-none h-36px
    w-36px bg-black bg-opacity-20 rounded-md;

  &:focus,
  &:focus-visible {
    --at-apply: outline-none;
  }

  &:hover,
  &:focus-visible {
    --at-apply: bg-opacity-40;

    .top {
      top: 0;
      transform: translateX(4px);
    }
    .middle {
      top: 6px;
      transform: translateX(0);
    }
    .bottom {
      top: 12px;
      transform: translateX(8px);
    }

    .top,
    .bottom,
    .middle {
      --at-apply: bg-zinc-4 left-0;
    }
  }

  &.active {
    .top {
      top: 6px;
      transform: translateX(0) rotate(225deg);
    }
    .middle {
      top: 6px;
      transform: translateX(16px);
    }
    .bottom {
      top: 6px;
      transform: translateX(0) rotate(135deg);
    }

    &:hover {
      .top,
      .middle,
      .bottom {
        transition: top 0.25s, background-color 0.25s, transform 0.25s;
      }
    }
  }
}

.top,
.middle,
.bottom {
  transition: top 0.25s, background-color 0.5s, transform 0.25s;

  --at-apply: absolute w-16px h-2px bg-zinc-3 pointer-events-none;
}
.top {
  top: 0;
  left: 0;
  transform: translateX(0);
}
.middle {
  top: 6px;
  left: 0;
  transform: translateX(8px);
}
.bottom {
  top: 12px;
  left: 0;
  transform: translateX(4px);
}
</style>
