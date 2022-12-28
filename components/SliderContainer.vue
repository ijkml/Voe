<script setup lang="ts">
</script>

<template>
  <div class="slider">
    <div class="slides">
      <div id="slide-1">1</div>
      <div id="slide-2">2</div>
      <div id="slide-3">3</div>
      <div id="slide-4">4</div>
      <div id="slide-5">5</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  @apply overflow-hidden text-center w-full max-w-full;
}

.slides {
  @apply flex overflow-x-auto scroll-smooth;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 300px;
    height: 300px;

    margin-right: 50px;
    border-radius: 10px;
    background: #eee;
    font-size: 100px;

    @apply flex items-center justify-center transition;
  }
}
</style>
