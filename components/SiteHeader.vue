<template>
  <div class="p-4">
    <header class="flex justify-between flex-row xl:grid grid-cols-12 gap-2">
      <div class="col-start-1 col-span-3">
        <nuxt-link to="/"
          ><img
            src="~/static/images/logo.png"
            class="logo w-32 h-auto"
            :class="{
              'brightness-0': bgImage == true,
              invert: bgImage == true,
              'hover:invert-0': bgImage == true,
            }"
        /></nuxt-link>
      </div>

      <div class="flex content-center items-center xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          :fill="bgImage ? 'white' : 'black'"
          class="bi bi-list"
          viewBox="0 0 16 16"
          @click="showMenu = !showMenu"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>

      <div
        class="
          menu
          xl:hidden
          bg-white
          w-full
          absolute
          top-0
          left-0
          z-10
          p-8
          border-b-[#DBEEE1] border-b-4
        "
        :class="{ visible: showMenu }"
      >
        <ribbon />
        <div class="container mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="m-2"
            viewBox="0 0 16 16"
            @click="showMenu = !showMenu"
          >
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
            />
          </svg>
          <ul class="xl:flex items-center h-full mt-16">
            <template v-for="(item, index) in menu">
              <li :key="index" class="p-2">
                <nuxt-link
                  class="text-xl text-black font-semibold"
                  @click.native="closeMenu"
                  :to="item.page"
                  >{{ item.text }}</nuxt-link
                >
              </li>
            </template>
          </ul>
        </div>
      </div>

      <div class="hidden xl:inline-block col-start-4 col-span-6 -ml-2">
        <ul class="sm:flex items-center h-full">
          <template v-for="(item, index) in menu">
            <li :key="index">
              <nuxt-link
                class="
                  p-2
                  px-3
                  hover:bg-slate-900/50
                  rounded-md
                  text-lg
                  font-semibold
                "
                :class="{ 'text-white': bgImage == true }"
                :to="item.page"
                >{{ item.text }}</nuxt-link
              >
            </li>
          </template>
        </ul>
      </div>

      <div class="hidden xl:inline-block col-start-10 col-span-3">
        <div class="hidden sm:flex items-center flex-row-reverse h-full">
          <a href="https://www.facebook.com/tinyhousealkmaar" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              class="fill-slate-300 hover:fill-slate-600"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    bgImage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showMenu: false,
      menu: [
        { text: "Over", page: "/over" },
        { text: "Bewoners", page: "/bewoners" },
        { text: "Veelgestelde vragen", page: "/veelgestelde-vragen" },
        { text: "Open dagen", page: "/open-dagen" },
        { text: "Contact", page: "/contact" },
      ],
    };
  },
  methods: {
    closeMenu() {
      this.showMenu = false;
    },
  },
};
</script>

<style lang="scss">
.menu {
  overflow: hidden;
  transform: translateY(-70vh);
  transition: transform 300ms linear;
}

.menu.visible {
  transform: translateY(0vh);
  transition: transform 300ms linear;
}
</style>
