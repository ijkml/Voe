<script setup lang="ts">
import LoadingSvg from '@icons/loading.svg?component';
import whyVoe from '@/i18n/copy/whyVoe';

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
staleDate.setDate(today.getDate() - 30);

function creatInputDate(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

const minDate = creatInputDate(staleDate);
const maxDate = creatInputDate(today);
</script>

<template>
  <div>
    <section class="ze-hero" aria-labelledby="screamer">
      <h1 id="screamer" class="font-serif">Fly with peace of mind</h1>
    </section>

    <section
      class="ze-section ze-search-overlap"
      aria-labelledby="find-ur-flight"
    >
      <div>
        <h2 id="find-ur-flight" class="font-serif">Find your flight</h2>
        <form class="ze-form" @submit.prevent="searchAction">
          <div class="info-input-cont">
            <VInput
              class="info-input"
              label="Flight Destination"
              required
              placeholder="Enter flight destination"
            />
            <VInput
              class="info-input"
              type="date"
              :min="minDate"
              required
              :max="maxDate"
              label="Flight Date"
              placeholder=""
            />
          </div>
          <VButton
            class="search-button"
            :class="{ loading: isSearching }"
            tabindex="0"
            type="submit"
          >
            <span>Search</span>
            <LoadingSvg class="icon" />
          </VButton>
        </form>
      </div>
    </section>

    <section class="ze-section ze-stats-info" aria-labelledby="find-covid-info">
      <div>
        <div class="covid-info">
          <div
            v-lazy-pix:bg="'y'"
            class="img"
            role="img"
            title="A woman wearing a mask"
          />
          <div class="text">
            <div>
              <h2 id="find-covid-info">
                Find out everything you need to know about the safety measures
                implemented to safeguard travellers against COVID-19.
              </h2>
              <div class="buttons space-x-3 space-y-3">
                <VButton tabindex="0">Learn More</VButton>
              </div>
            </div>
          </div>
        </div>

        <StatSection />
      </div>
    </section>

    <div class="ze-why-us ze-sec-alt">
      <section class="ze-section" aria-labelledby="why-voe-h">
        <h2 id="why-voe-h" class="font-serif">Why Fly With Us?</h2>

        <div>
          <section
            v-for="y in whyVoe"
            :key="y.title"
            class="why-reasons"
            :aria-label="y.title"
          >
            <div class="img">
              <!-- <img loading="lazy" :alt="y.alt" :src="y.image" /> -->
              <img v-lazy-pix="y.image" :alt="y.alt" />
            </div>
            <div class="text">
              <h3 v-text="y.title" />
              <p v-text="y.text" />
            </div>
          </section>
        </div>
      </section>
    </div>

    <section class="ze-services" aria-labelledby="ze-services">
      <div class="nailed-down">
        <h2 id="ze-services" class="font-serif">
          Services that go far <i>beyond the&nbsp;ordinary</i>
        </h2>
        <p>
          We offer exceptional services and amenities to make your travel
          experience comfortable and convenient.
        </p>
      </div>
      <ServiceSection class="slider-cont" />
    </section>

    <section v-lazy-pix:bg class="ze-discover-fc" aria-labelledby="discover-fc">
      <div>
        <h2 id="discover-fc" class="font-serif">
          Discover the Ultimate Travel Experience with First&nbsp;Class
        </h2>
        <p>
          Experience luxury and comfort with our first class services, including
          exclusive lounges, premium dining, and personalized assistance.
          Elevate your journey with us.
        </p>
        <VButton>Experience First Class</VButton>
      </div>
    </section>

    <div class="ze-sec-alt">
      <section class="ze-section ze-blog" aria-labelledby="from-blog">
        <h2 id="from-blog" class="font-serif">Around the World with&nbsp;Us</h2>
        <p>
          Discover travel tips, the latest news, and inspiration for your next
          adventure on our blog.
        </p>
        <BlogSection />
      </section>
    </div>

    <section class="ze-newsletter">
      <div>
        <h2 class="font-serif">Join Our Mailing List</h2>
        <p>
          Sign up for our mailing list to stay up to date on flight news,
          promotions, deals and exclusive offers.
        </p>

        <div class="form-cont">
          <form class="ze-form" @submit.prevent="searchAction">
            <div class="info-input-cont">
              <VInput
                class="info-input"
                label="First Name"
                required
                placeholder="Enter your first name"
              />
              <VInput
                class="info-input"
                type="email"
                label="Your Email"
                required
                placeholder="Enter your email address"
              />
            </div>
            <VButton
              class="search-button"
              :class="{ loading: isSearching }"
              tabindex="0"
              type="submit"
              required
            >
              <span>Sign Up</span>
              <LoadingSvg class="icon" />
            </VButton>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss" src="./css/index.scss" />
