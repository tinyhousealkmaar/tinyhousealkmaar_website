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

          <p>...</p>
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
