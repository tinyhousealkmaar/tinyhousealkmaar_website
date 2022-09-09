<template>
  <div class="container mx-auto">
    <Grid>
      <GridMainColumn>
        <Prose>
          <h1>Pers</h1>

          <p></p>
        </Prose>
        <div class="pl-4 pr-4 sm:pl-8 max-w-[630px]">
          <ul>
            <template v-for="(bewoner, index) in bewoners">
              <li :key="index">
                <nuxt-link :to="bewoner.page" class="underline">
                  {{ bewoner.text }}</nuxt-link
                >
              </li>
            </template>
          </ul>
        </div>
      </GridMainColumn>
    </Grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bewoners: [
        {
          text: "Vijf jaar Tiny House Alkmaar, mogen de iconische huisjes nog even blijven staan?",
          page: "/pers/vijf-jaar-tiny-house-alkmaar",
        },
      ],
    };
  },
  head() {
    return {
      title: "Pers | Tiny House Alkmaar",
    };
  },
};
</script>
