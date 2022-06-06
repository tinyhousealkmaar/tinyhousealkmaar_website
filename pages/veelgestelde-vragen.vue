<template>
  <div class="container mx-auto">
    <Grid>
      <GridMainColumn>
        <Prose>
          <h1>Veelgestelde vragen</h1>

          <h3>Hebben jullie nog plek?</h3>
          <p>
            Wooncoöperatie Tiny House Alkmaar is een coöperatief
            samenwerkingsverband van Tiny House liefhebbers uit de regio
            Alkmaar. Het is ons streven om klein, milieuvriendelijk en
            betaalbaar wonen mogelijk te maken in de gemeente Alkmaar, te
            beginnen met een pilot project aan de Helderseweg 28 in Alkmaar.
          </p>

          <h3>Wat is de oppervlakte van jullie huisjes?</h3>
          <p>
            Van de gemeente hebben we toestemming gekregen om op het terrein aan
            de Helderseweg met vijf zelfvoorzienende Tiny Houses, voor een
            periode van vijf jaar te experimenteren met deze vernieuwende
            woonvorm. Op deze website kun je lezen wie we zijn, wat onze
            beweegredenen zijn en met wie wij samenwerken in dit project.
            Daarnaast vind je hier het laatste nieuws en aankondigingen van
            activiteiten zoals open dagen.
          </p>

          <h3>Kan ik jullie reglementen inzien?</h3>
          <p>Oud-bewoner ...</p>

          <h3>Mag ik een keer komen kijken?</h3>
          <p>
            Om mensen kennis te laten maken met het fenomeen tiny houses
            organiseren we regelmatig open dagen. Wil je weten wanneer de
            volgende open dag is? Kijk dan op de pagina
            <nuxt-link to="open-dagen">open dagen</nuxt-link>.
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
      title: "Veelgestelde vragen | Tiny House Alkmaar",
    };
  },
};
</script>
