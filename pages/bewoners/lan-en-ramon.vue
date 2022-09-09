<template>
  <div class="container mx-auto">
    <Grid>
      <GridMainColumn>
        <Prose>
          <h1>Lan en Ramon</h1>

          <nuxt-img
            src="/images/lan-ramon.jpg"
            width="1132"
            fit="cover"
          ></nuxt-img>

          <p>
            Wij zijn Ramon en Lan en wonen sinds 2018 in deze community op deze
            prachtige locatie in Alkmaar. Onze motivatie om in een tiny house te
            wonen is in eerste instantie meer in het groen te wonen en vanuit
            een off-grid levenswijze een kleinere impact proberen te maken op de
            natuur. Daarnaast is het onze eerste ervaring om in een community te
            wonen. Een mooie en bijzondere ervaring waarin we geweldige mensen
            hebben leren kennen en op deze wijze ook een socialer woonomgeving
            creëren.
          </p>
        </Prose>
      </GridMainColumn>
    </Grid>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Lan & Ramon | Tiny House Alkmaar",
    };
  },
};
</script>
