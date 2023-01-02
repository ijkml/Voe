<script setup lang="ts">
setResponseStatus(404);
const router = useRouter();
const { path } = useRoute();

const excuses = [
  "Oops! It looks like you've stumbled upon a page that doesn't exist. Don't worry, it's not your fault. It's the developer's. They must have been too busy filling their pockets with money to actually create a functional website. Better luck next time!",
  "Uh oh, it looks like you've found a 404 page. That must mean the developer was too lazy to finish it. Don't worry, you're not alone. Even Google couldn't find this page.",
  "Sorry, but the page you're looking for has gone missing. The developer probably misplaced it while they were too busy patting themselves on the back for their 'amazing' work.",
  "Oops! The page you're trying to access must have fallen through the cracks. Maybe the developer was too busy trying to impress their boss instead of actually doing their job.",
  "It looks like you've found a 404 page. Don't worry, it's not your fault. The developer probably didn't even know it was there. They're probably still trying to figure out how to turn on their computer.",
  "Looks like you've stumbled upon a broken link. Don't worry, it's not your fault. It's the developer's. They probably spent more time picking out their outfit for the day than they did actually coding this website.",
  "Sorry, but the page you're trying to access doesn't seem to exist. It's probably hidden in the same place the developer's coding skills are - nowhere to be found.",
  "Oops! It looks like you've hit a dead end. Don't worry, it's not your fault. It's the developer's. They probably got distracted by the shiny new computer they just bought instead of actually fixing this website.",
];

function generateMessage(): string {
  return excuses[Math.floor(Math.random() * 8)];
}
</script>

<template>
  <div class="demo-page-root">
    <div class="z-2 relative">
      <div class="page-container">
        <h1>404</h1>
        <p class="label" v-text="path" />
        <ClientOnly>
          <Transition name="fade">
            <p v-text="generateMessage()" />
          </Transition>
        </ClientOnly>
        <button class="btn" @click="router.back">Go Back</button>
      </div>
    </div>

    <div class="left-gradient" />
    <div class="right-gradient" />
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.left-gradient {
  @apply absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r to-transparent
    from-green-300/50 dark:from-green-800/50 z-1;
}

.right-gradient {
  @apply absolute inset-y-0 right-0 w-1/5 bg-gradient-to-r
    from-transparent to-cyan-300/50 dark:to-cyan-800/50 z-1;
}

.demo-page-root {
  @apply flex px-16 py-32 w-full items-center relative
    justify-center min-h-90vh;
}

.page-container {
  @apply w-full text-center space-y-7 font-mono;
}

h1 {
  @apply text-3xl font-medium max-w-50ch slashed-zero;
}

p {
  @apply max-w-prose mx-auto;
}

.label {
  @apply text-sm uppercase line-clamp-1;
}
</style>
