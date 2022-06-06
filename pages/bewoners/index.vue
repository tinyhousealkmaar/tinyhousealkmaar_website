<template>
  <div class="container mx-auto">
    <Grid>
      <GridMainColumn>
        <Prose>
          <h1>Bewoners</h1>

          <p>Op ons terrein staan momenteel vijf huisjes</p>

          <ul>
            <template v-for="(bewoner, index) in bewoners">
              <li :key="index">
                <nuxt-link :to="bewoner.page">{{ bewoner.text }}</nuxt-link>
              </li>
            </template>
          </ul>
        </Prose>
      </GridMainColumn>
    </Grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bewoners: [
        { text: "Lan & Ramon", page: "/bewoners/lan-en-ramon" },
        {
          text: "Manfred, Carolien & Lola",
          page: "/bewoners/manfred-carolien-en-lola",
        },
        { text: "Anniek", page: { name: "bewoners-anniek" } },
        { text: "Jacob", page: "/bewoners/jacob" },
        { text: "Lennart & Vicky", page: "/bewoners/lennart-en-vicky" },
      ],
    };
  },
  head() {
    return {
      title: "Bewoners | Tiny House Alkmaar",
    };
  },
};
</script>
