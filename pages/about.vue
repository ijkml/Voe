<script setup lang="ts">
const locales = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
}).format(availableLocales);
</script>

<template>
  <div class="page-root">
    <section class="root-section">
      <h1>Voe</h1>
      <p>
        Voe is a responsive demo of
        <a
          href="http://twitter.com/Prospiroo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Egbo Prosper</a
        >'s
        <a
          href="https://www.behance.net/gallery/156009795/Voe-_-Landing-page-UI-design"
          target="_blank"
          rel="noopener noreferrer"
          >Voe Airport landing page design</a
        >. The website supports a dark mode, and is
        <small>machine-</small>translated to 4 other languages ({{ locales }}).
      </p>
      <p>
        It is open-source on <a href="https://github.com/ijkml/Voe">GitHub</a>.
      </p>
      <Logos class="logos" />
      <p>
        with 💚 and Vue,<br />
        <a href="http://twitter.com/ijk_ml">ML</a>
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.page-root {
  @apply min-h-90vh py-8 grid place-items-center;
}

.root-section {
  @apply mx-auto p-8 font-mono max-w-55ch mx-auto text-center;
}

h1 {
  @apply text-center text-2xl font-medium mb-4;
}

p {
  @apply mb-3;
}

.logos {
  @apply m-(t-5 b-8);
}

a {
  @apply decoration-none relative text-fuchsia-8
    dark:(text-fuchsia-5) focus:(outline-none);

  background: linear-gradient(0deg, currentColor, currentColor) no-repeat right
    bottom / 0 1px;
  transition: background-size 350ms;
  padding-bottom: 1px;

  &:where(:hover, :focus-visible) {
    background-size: 100% 1px;
    background-position-x: left;
  }
}
</style>
