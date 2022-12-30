<script setup lang="ts">
import type { NuxtLinkProps } from '#app';
import { NuxtLink } from '#components';

interface ButtonProps extends NuxtLinkProps {
  variant?: 'primary' | 'secondary';
  small?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  small: false,
  variant: 'primary',
  type: 'button',
});

const emit = defineEmits<{
  (e: 'click', event: any): void;
}>();

function bubble(event: any) {
  emit('click', event);
}

const { to, href, external, variant, small, type, ...otherProps } =
  toRefs(props);

const isLink = computed(() => {
  return Boolean(to?.value || href?.value || external?.value);
});

const btnStyles = computed(() => {
  return `voe-btn-${variant.value} ${small.value ? 'voe-btn-sm' : ''}`.trim();
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
    :type="!isLink && type"
    class="voe-btn"
    :class="[btnStyles]"
    v-bind="{ ...otherProps, ...linkProps }"
    v-bind.attr="$attrs"
    @click="bubble($event)"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.voe-btn {
  @apply border-none text-base inline-block font-medium z-0 truncate
    relative transition duration-300 rounded-md max-w-full bg-none
      overflow-hidden text-center outline-none focus:outline-none
        bg-[var(--bg-def)] color-[var(--txt-color)] select-none;

  &::after {
    @apply content-[''] absolute top-0 left-0 z--1 h-full w-full
      transition duration-300 rounded-inherit transform
        transform-origin-left scale-x-0 bg-[var(--bg-hov)];
  }

  &:disabled {
    @apply cursor-not-allowed;
  }

  &:not(:disabled) {
    @apply cursor-pointer;

    &:hover,
    &:focus-visible {
      &:after {
        @apply scale-x-full;
      }
    }
  }

  &.voe-btn-sm {
    @apply h-8.8 px-4 min-w-13;
  }

  &:not(.voe-btn-sm) {
    @apply h-10 px-4 min-w-16;
  }

  &.voe-btn-primary {
    --bg-def: #{lighten($brand-pri, 1%)};
    --bg-hov: #{darken($brand-pri, 10%)};
    --txt-color: white;
  }

  &.voe-btn-secondary {
    // --bg-def: theme('colors.light.4');
    // --bg-hov: theme('colors.light.6');
    --bg-def: transparent;
    --bg-hov: hsla(263, 60%, 35%, 0.05);
    --txt-color: #{$brand-pri};

    @apply border border-zinc-4/50;

    .dark & {
      // --bg-def: theme('colors.dark.6');
      // --bg-hov: theme('colors.dark.8');
      --bg-def: transparent;
      --bg-hov: hsla(263, 60%, 35%, 0.2);
      --txt-color: #{$brand-sec};

      @apply border-zinc-5/50;
    }

    &:hover,
    &:focus-visible {
      @apply border-brand-pri/50 dark:(border-brand-sec/50);
    }
  }
}
</style>
