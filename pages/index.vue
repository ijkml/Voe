<script setup lang="ts">
import LoadingSvg from '@icons/loading.svg?component';
import features from '@data/features';

const isSearching = ref(false);
function searchAction() {
  if (isSearching.value) {
    return;
  }

  isSearching.value = true;
  setTimeout(() => {
    isSearching.value = false;
  }, 3581);
}

const today = new Date();
const staleDate = new Date();
staleDate.setDate(today.getDate() - 31);
today.setDate(today.getDate() + 7);

function creatInputDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

const minDate = creatInputDate(staleDate);
const maxDate = creatInputDate(today);

const { t } = useI18n();

useSeoMeta({
  // title: 'Voe',
  description: t('footer.paragraph'),
});
</script>

<template>
  <div>
    <HeroSection />

    <section
      class="ze-section ze-search-overlap"
      aria-labelledby="find-ur-flight"
    >
      <div>
        <h2
          id="find-ur-flight"
          class="font-serif"
          v-text="$t('finder.heading')"
        />
        <form class="ze-form" @submit.prevent="searchAction">
          <div class="info-input-cont">
            <VInput
              class="info-input"
              :label="$t('finder.destination.label')"
              required
              :placeholder="$t('finder.destination.placeholder')"
            />
            <VInput
              class="info-input"
              type="date"
              :min="minDate"
              required
              :max="maxDate"
              :label="$t('finder.date.label')"
              placeholder=""
            />
          </div>
          <VButton
            class="search-button"
            :class="{ loading: isSearching }"
            tabindex="0"
            type="submit"
          >
            <span v-text="$t('finder.search')" />
            <LoadingSvg class="icon" />
          </VButton>
        </form>
      </div>
    </section>

    <section class="ze-section ze-stats-info" aria-labelledby="find-covid-info">
      <div>
        <div class="covid-info">
          <div class="img" role="img" title="A woman wearing a mask" />
          <div class="text">
            <div>
              <h2 id="find-covid-info" v-text="$t('safety.text')" />
              <div class="buttons space-x-3 space-y-3">
                <VButton tabindex="0">{{ $t('safety.button') }}</VButton>
              </div>
            </div>
          </div>
        </div>

        <StatSection />
      </div>
    </section>

    <div class="ze-why-us ze-sec-alt">
      <section class="ze-section" aria-labelledby="why-voe-h">
        <h2 id="why-voe-h" class="font-serif" v-text="$t('features.heading')" />

        <div>
          <section
            v-for="feat in features"
            :key="feat.id"
            class="why-reasons"
            :aria-labelledby="`${feat.id}-head--3`"
          >
            <div class="img">
              <img
                :src="feat.image"
                loading="lazy"
                :alt="$t(`features.${feat.id}.alt`)"
              />
            </div>
            <div class="text">
              <h3
                :id="`${feat.id}-head--3`"
                v-text="$t(`features.${feat.id}.title`)"
              />
              <p v-text="$t(`features.${feat.id}.text`)" />
            </div>
          </section>
        </div>
      </section>
    </div>

    <section class="ze-services" aria-labelledby="ze-services">
      <div class="nailed-down">
        <h2
          id="ze-services"
          class="font-serif"
          v-text="$t('services.heading')"
        />
        <p v-text="$t('services.sub')" />
      </div>
      <LazyServiceSection class="slider-cont" />
    </section>

    <div class="dfc-wrap">
      <section class="ze-discover-fc" aria-labelledby="discover-fc">
        <div>
          <h2
            id="discover-fc"
            class="font-serif"
            v-text="$t('first-class.title')"
          />
          <p v-text="$t('first-class.text')" />
          <div class="space-x-5">
            <VButton :to="localizeUrl('/first-class')">
              {{ $t('first-class.button') }}
            </VButton>
          </div>
        </div>
      </section>
    </div>

    <div class="ze-sec-alt">
      <section class="ze-section ze-blog" aria-labelledby="from-blog">
        <h2 id="from-blog" class="font-serif" v-text="$t('blog.heading')" />
        <p v-text="$t('blog.text')" />
        <LazyBlogSection />
      </section>
    </div>

    <section class="ze-newsletter">
      <div>
        <h2 class="font-serif" v-text="$t('mail.heading')" />
        <p v-text="$t('mail.text')" />

        <div class="form-cont">
          <form class="ze-form" @submit.prevent="searchAction">
            <div class="info-input-cont">
              <VInput
                class="info-input"
                :label="$t('mail.name.label')"
                required
                :placeholder="$t('mail.name.placeholder')"
              />
              <VInput
                class="info-input"
                type="email"
                :label="$t('mail.email.label')"
                required
                :placeholder="$t('mail.email.placeholder')"
              />
            </div>
            <VButton
              class="search-button"
              :class="{ loading: isSearching }"
              tabindex="0"
              type="submit"
            >
              <span v-text="$t('mail.subscribe')" />
              <LoadingSvg class="icon" />
            </VButton>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss" src="./css/index.scss" />
