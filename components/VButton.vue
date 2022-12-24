<script setup lang="ts">
import type { NuxtLinkProps } from '#app';
import { NuxtLink } from '#components';

interface ButtonProps extends NuxtLinkProps {
  variant?: 'primary' | 'secondary';
  small?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  small: false,
  variant: 'primary',
});

const emit = defineEmits<{
  (e: 'click', event: any): void;
}>();

function bubble(event: any) {
  emit('click', event);
}

const { to, href, external, variant, small, ...otherProps } = toRefs(props);

const isLink = computed(() => {
  return Boolean(to?.value || href?.value || external?.value);
});

const btnStyles = computed(() => {
  return `app-bttn-${variant.value} ${small.value ? 'abttn-sm' : ''}`.trim();
});

const linkProps = isLink.value ? { to, href, external } : undefined;
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <component
    :is="isLink ? NuxtLink : 'button'"
    :class="[btnStyles]"
    v-bind="{ ...otherProps, ...linkProps }"
    v-bind.attr="$attrs"
    @click="bubble($event)"
  >
    <span>
      <slot />
    </span>
  </component>
</template>

<style scoped lang="scss">
.test {
  @apply bg-cyan-9 p-4 text-white;
}

.app-bttn {
  &-primary,
  &-secondary {
    background-image: linear-gradient(
      to bottom right,
      var(--stop-1),
      var(--stop-2)
    );

    @apply inline-block relative rounded-5px
      transition duration-300 cursor-pointer
        overflow-hidden truncate;

    > span {
      @apply inline-flex w-auto z-1 font-medium
        items-center justify-center round-inherit
          relative leading-none;
    }

    &::after {
      @apply outline-none bg-[var(--stop-3)] absolute
        left-0 top-0 z-0 opacity-0 content-[''] w-full
          h-full transition duration-400 rounded-inherit
            pointer-events-none;
    }

    &:disabled,
    &.disabled {
      @apply cursor-not-allowed;
    }

    &.loading {
      @apply cursor-wait;
    }

    &:not(.abttn-sm) {
      span {
        @apply h-10 px-4 min-w-16;
      }
    }

    &.abttn-sm {
      span {
        @apply h-8.8 px-4 min-w-13;
      }
    }

    &:not(:disabled) {
      &:hover,
      &:focus-visible {
        @apply bg-opacity-0 outline-none;
      }
    }
  }

  &-primary {
    // --stop-2: #{$brand-pri-dark};
    // --stop-1: theme('colors.purple.5');
    --stop-1: #{lighten($brand-pri, 15%)};
    --stop-2: #{darken($brand-pri, 15%)};
    --stop-3: var(--stop-2);
    color: #f5f5f5;

    &:not(:disabled) {
      &:hover,
      &:focus-visible {
        &::after {
          @apply opacity-100;
        }
      }
    }
  }

  // &-secondary {
  //   --stop-1: transparent;
  //   --stop-2: transparent;
  //   --stop-3: $text;
  //   color: $text;

  //   &::after {
  //     @apply opacity-8;
  //   }

  //   &:not(:disabled) {
  //     &:hover,
  //     &:focus-visible {
  //       @apply text-brand-pri;

  //       &::after {
  //         @apply bg-current opacity-10;
  //       }
  //     }
  //   }
  // }
}
</style>
