<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <main class="text-center text-teal-700 text-dark:gray-200 px4 py10">
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block" />
    </div>
    <div>Not found</div>
    <div>
      <button class="btn text-sm m-3 mt-8" @click="router.back()">Back</button>
    </div>
  </main>
</template>
