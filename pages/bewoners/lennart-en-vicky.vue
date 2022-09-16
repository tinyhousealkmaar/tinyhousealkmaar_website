<template>
  <div class="container mx-auto">
    <Grid>
      <GridMainColumn>
        <Prose>
          <h1>Lennart en Vicky</h1>

          <nuxt-img
            src="/images/lennart-vicky.jpg"
            width="1132"
            fit="cover"
          ></nuxt-img>

          <p>
            Wij zijn Vicky en Lennart en we wonen sinds februari 2021 in een
            door ons zelf ontworpen en gebouwd huis.
          </p>
          <p>
            Als je niet al te veel geld te besteden hebt en graag in een eigen
            gebouwd huis wilt wonen dan kom je automatisch op het idee om een
            klein huis te bouwen. Het werken en leven met de dingen die je nodig
            hebt en die je gelukkig maken, dat is waar het voor ons om draait.
          </p>
          <p>
            Vicky heeft haar eigen keramiek atelier en Lennart is als
            meubelmaker dagelijks bezig met het maken van meubels en het
            restaureren van houten boten. Daarnaast luisteren en maken wij beide
            graag muziek.
          </p>
          <p>
            Samen met onze leuke buren genieten we enorm van de plek, het
            buitenleven en de vrijheid die deze woonvorm ons biedt!
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
      title: "Lennart & Vicky | Tiny House Alkmaar",
    };
  },
};
</script>
