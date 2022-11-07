<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <main class="text-center text-teal-700 dark:text-zinc-200 px4 py10">
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block" />
    </div>
    <div>Other Page</div>
    <div>
      <button class="btn text-sm m-3 mt-8" @click="router.back()">Back</button>
    </div>
  </main>
</template>
