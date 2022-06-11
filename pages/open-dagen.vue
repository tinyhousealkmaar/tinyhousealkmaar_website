<template>
  <div class="container mx-auto">
    <Grid>
      <GridMainColumn>
        <Prose>
          <h1>Open dagen</h1>
          <nuxt-picture src="/images/THA 1.jpg" quality="80" width="600" />

          <p>
            Onze missie is om de tiny house spirit te promoten. Daarom
            organiseren we regelmatig open dagen. Kijk op onze facebook voor de
            laatste informatie. Meld je je ook aan als je komt?
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
      title: "Open dagen | Tiny House Alkmaar",
    };
  },
};
</script>
