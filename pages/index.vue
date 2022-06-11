<template>
  <div>
    <div
      class="absolute h-screen w-screen top-0 left-0 -z-10 overflow-hidden max-w-full"
    >
      <nuxt-picture src="/images/THA 1.jpg" quality="80" />
    </div>
    <Grid>
      <grid-main-column>
        <div class="bg-white sm:mt-[28vw] relative">
          <Prose>
            <h1 class="z-10">Welkom bij Tiny House Alkmaar</h1>

            <p class="lead">
              Tiny House Alkmaar is een experimenteel woonproject met vijf tiny
              houses, gelegen aan de Helderseweg 28 in Alkmaar.
            </p>
            <p class="lead">
              Op deze website kun je lezen wie we zijn, wat ons motiveert en
              onze ervaringen in het wijkje.
            </p>
            <p class="lead">
              Heb je vragen over deze bijzondere woonvorm, kijk dan bij
              <nuxt-link to="/veelgestelde-vragen"
                >veelgestelde vragen</nuxt-link
              >
              of bezoek een van onze
              <nuxt-link to="/open-dagen">open dagen</nuxt-link>.
            </p>
          </Prose>
        </div>
      </grid-main-column>
    </Grid>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "index",
  name: "IndexPage",
  head() {
    return {
      title: "Tiny House Alkmaar",
    };
  },
});
</script>
