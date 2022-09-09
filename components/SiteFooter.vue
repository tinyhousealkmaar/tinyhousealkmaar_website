<template>
  <div class="bg-[#DBEEE1] mt-12">
    <header class="container mx-auto flex justify-between px-4 sm:px-0 py-4">
      <ul class="">
        <template v-for="(item, index) in menu">
          <li :key="index">
            <nuxt-link class="hover:underline text-sm" :to="item.page">{{
              item.text
            }}</nuxt-link>
          </li>
        </template>
      </ul>
      <div>
        <nuxt-link to="/"
          ><img src="~/static/images/logo.png" class="w-24 h-auto"
        /></nuxt-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { text: "Over", page: "/over" },
        { text: "Bewoners", page: "/bewoners" },
        { text: "Veelgestelde vragen", page: "/veelgestelde-vragen" },
        { text: "Open dagen", page: "/open-dagen" },
        { text: "Pers", page: "/pers" },
        { text: "Contact", page: "/contact" },
      ],
    };
  },
};
</script>
