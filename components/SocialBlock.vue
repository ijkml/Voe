<script setup lang="ts">
const isn = 'https://ijkml.bio.link';

const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/ijkml/Voe',
    icon: 'i-cib-github',
  },
  {
    name: 'Twitter',
    link: isn,
    icon: 'i-cib-twitter',
  },
  {
    name: 'Facebook',
    link: isn,
    icon: 'i-cib-facebook-f',
  },
  {
    name: 'Instagram',
    link: isn,
    icon: 'i-cib-instagram',
  },
  {
    name: 'LinkedIn',
    link: isn,
    icon: 'i-cib-linkedin',
  },
  {
    name: 'WhatsApp',
    link: isn,
    icon: 'i-cib-whatsapp',
  },
];
</script>

<template>
  <div class="soc-block" tabindex="-1">
    <a
      v-for="soc in socials"
      :key="soc.name"
      title=""
      :href="soc.link"
      target="_blank"
      rel="noopener noreferrer"
      class="soc-link"
      tabindex="0"
    >
      <span :class="soc.icon" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.soc-block {
  --at-apply: flex gap-2 justify-around p-2 items-center;
}

.soc-link {
  --at-apply: inline-flex p-1.5 place-items-center focus:(outline-none) rounded-md;

  &:hover,
  &:focus-visible {
    --at-apply: bg-zinc-3 text-brand-pri  dark:(bg-brand-pri text-white);
  }

  > span {
    --at-apply: block;
  }
}
</style>
