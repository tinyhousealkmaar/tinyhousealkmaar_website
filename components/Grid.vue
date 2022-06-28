<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    scale: Boolean,
  },
  computed: {
    classes() {
      return {
        "sm:grid": true,
        "mt-[40vw]": this.scale,
        "mt-8": !this.scale,
        "sm:mt-0": true,
        "grid-cols-12": true,
        "gap-2": true,
        "sm:p-4": true,
      };
    },
  },
};
</script>
