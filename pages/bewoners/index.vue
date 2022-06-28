<template>
  <div class="container mx-auto">
    <Grid>
      <GridMainColumn>
        <Prose>
          <h1>Bewoners</h1>

          <p></p>
        </Prose>
        <div class="pl-4 pr-4 sm:pl-8 max-w-[630px]">
          <ul class="grid sm:grid-cols-2 gap-4">
            <template v-for="(bewoner, index) in bewoners">
              <li :key="index">
                <nuxt-link :to="bewoner.page">
                  <nuxt-img
                    :src="bewoner.image"
                    width="550"
                    height="368"
                  ></nuxt-img
                  >{{ bewoner.text }}</nuxt-link
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
          text: "Lan & Ramon",
          page: "/bewoners/lan-en-ramon",
          image: "/images/lan-ramon.jpg",
        },
        {
          text: "Manfred, Caroline & Lola",
          page: "/bewoners/manfred-caroline-en-lola",
          image: "/images/manfred-caroline-lola.jpg",
        },
        {
          text: "Anniek",
          page: { name: "bewoners-anniek" },
          image: "/images/anniek.jpg",
        },
        {
          text: "Jacob",
          page: "/bewoners/jacob",
          image: "/images/jacob.jpg",
        },
        {
          text: "Lennart & Vicky",
          page: "/bewoners/lennart-en-vicky",
          image: "/images/lennart-vicky.jpg",
        },
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
