<script setup lang="ts">
interface Props {
  icon: string;
  label?: string;
  size?: string;
  vbox?: string;
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  label: undefined,
  size: '24px',
  vbox: '0 0 24 24',
});

const { icon, label, size: rawSize, vbox } = toRefs(props);

const size = computed(() =>
  Number.isNaN(Number(rawSize.value)) ? rawSize.value : `${rawSize.value}px`
);
</script>

<template>
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="vbox"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      width="24px"
      :aria-hidden="label ? undefined : true"
    >
      <title v-if="label" v-text="label" />
      <path :d="icon" />
    </svg>
  </span>
</template>

<style scoped lang="scss">
span {
  width: v-bind(size);
  height: v-bind(size);
  --at-apply: text-inherit inline-flex items-center justify-center
    leading-inherit;

  > svg {
    fill: currentColor;
    width: v-bind(size);
    height: v-bind(size);
    max-width: 100px;
  }
}
</style>
