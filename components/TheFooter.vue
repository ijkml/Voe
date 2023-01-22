<script setup lang="ts">
import links from '@data/footer';
</script>

<template>
  <footer>
    <div>
      <div class="g-left">
        <TheLogo title="Voe logo" class="the-logo" />
        <p v-text="$t('footer.tagline')" />

        <p class="tagline" v-text="$t('footer.paragraph')" />
      </div>

      <div class="g-right">
        <div class="top">
          <div v-for="cat in links" :key="cat.title" class="link-list">
            <div
              class="heading"
              v-text="$t(`footer.links.${cat.title}.heading`)"
            />
            <div>
              <NuxtLink
                v-for="lnk of cat.links"
                :key="lnk.text"
                class="ftr-link"
                :href="lnk.link"
                :external="lnk.external"
                :target="lnk.external ? '_blank' : undefined"
              >
                <template v-if="cat.translate">
                  <div v-text="$t(`footer.links.${cat.title}.${lnk.text}`)" />
                </template>
                <template v-else>
                  <div v-text="lnk.text" />
                </template>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="bottom">
          <div class="copyleft">
            <NuxtLink :to="localizeUrl('/')" tabindex="0">
              &copy;{{ new Date().getFullYear() }}
              Voe International
            </NuxtLink>
          </div>
          <div class="insignia">
            <a href="http://ijkml.bio.link" target="_blank">
              Website by <strong>ML</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
$dim-white: hsl(264, 5%, 75%);

footer {
  --at-apply: p-2.5 sm:(p-5) text-white bg-brand-pri-dark;

  > div {
    --at-apply: mx-auto max-w-screen-xl flex gap-5 flex-wrap;
  }
}

.g-left {
  --at-apply: p-3 w-full lt-md:(text-center flex flex-col items-center)
    md:(w-1/3 max-w-95);
}

.g-right {
  --at-apply: flex-1 flex flex-col;
}

.the-logo {
  --at-apply: w-auto h-11;

  + p {
    --at-apply: font-medium my-3;
  }
}

.tagline {
  --at-apply: text-sm mt-2 max-w-45ch md:(mt-8 max-w-35ch);
  color: $dim-white;
}

.bottom {
  color: $dim-white;

  --at-apply: flex py-2 px-4 mx-auto space-y-2 w-full mt-auto
    items-center flex-col bg-black/20 rounded-sm mb--1 sm:mb--3;

  @media (min-width: 450px) and (max-width: 639.9px) {
    --at-apply: space-y-0 flex-row space-x-4 justify-between;

    .copyleft {
      --at-apply: max-w-1/2 text-center;
    }
  }

  @media (min-width: 640px) {
    --at-apply: flex-row space-y-0 space-x-4 justify-between;
  }
}

.copyleft {
  --at-apply: font-medium;

  a {
    --at-apply: focus:outline-none transition;

    &:hover,
    &:focus-visible {
      --at-apply: outline-none text-fuchsia-50;
    }
  }
}

.insignia {
  --at-apply: underline underline-current decoration-dotted
    underline-offset-4 cursor-pointer transition px-1
      duration-300 decoration-0.5px;

  strong {
    --at-apply: font-semibold;
  }

  a {
    --at-apply: focus:outline-none transition;

    &:hover,
    &:focus-visible {
      --at-apply: outline-none text-fuchsia-50;
    }
  }
}

.top {
  --at-apply: grid gap-4 overflow-hidden mb-2.5;

  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

  .heading {
    --at-apply: font-semibold uppercase mb-4;

    + div {
      --at-apply: p-1 space-y-0.5;
    }
  }
}

.link-list {
  --at-apply: p-2 text-zinc-2;
}

.ftr-link {
  --at-apply: block transition relative focus:(outline-none) select-none;

  padding: 0.2rem 0.25rem;

  div {
    --at-apply: block transition duration-300;
  }

  &:hover,
  &:focus-visible {
    --at-apply: outline-none;

    div {
      transform: translate3d(0.8em, 0, 0);
    }

    &::before {
      transform: scale3d(1, 1, 1);
    }
  }

  &::before {
    content: '';
    transform: scale3d(0, 1, 1);
    transform-origin: 0% 50%;
    height: 0.1em;
    width: 0.8em;
    top: calc(50% - (0.1em / 2));

    --at-apply: transition duration-300 absolute left-0 bg-zinc-4;
  }
}
</style>
