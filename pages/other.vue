<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <main class="text-center text-teal-700 dark:text-zinc-200 px4 py10">
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block" />
    </div>
    <div>Other Page</div>
    <div class="test space-y-8">
      <section class="h-150vh bg-blue-300"></section>
      <section class="h-150vh bg-white"></section>
      <section class="h-150vh bg-blue-800"></section>
      <section class="h-150vh bg-blue-500"></section>
    </div>
    <div>
      <button class="btn text-sm m-3 mt-8" @click="router.back()">Back</button>
    </div>
  </main>
</template>
