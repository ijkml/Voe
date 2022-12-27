<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core';

const props = withDefaults(
  defineProps<{ title: string; figure: number; suffix?: string }>(),
  {
    suffix: '',
  }
);

const { figure, suffix, title } = toRefs(props);

const target = ref<HTMLDivElement>();
const source = ref(0);
const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    source.value = figure.value;
  }
});

const dp = computed(() => {
  return figure.value.toString().split('.')[1]?.length;
});

const output = useTransition(source, {
  delay: 300,
  duration: 3000,
  transition: TransitionPresets.easeInSine,
  onFinished: stop,
});
</script>

<template>
  <div ref="target" :title="`${figure}${suffix} ${title}`">
    <div class="num">{{ output.toFixed(dp) }}&thinsp;{{ suffix }}</div>
    <div class="txt">{{ title }}</div>
  </div>
</template>
