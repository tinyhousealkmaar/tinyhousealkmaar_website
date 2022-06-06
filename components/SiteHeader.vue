<template>
  <div class="bg-white p-4">
    <header class="sm:grid grid-cols-12 gap-2">
      <div class="col-start-1 col-span-3">
        <nuxt-link to="/"
          ><img src="~/static/images/logo.png" class="logo w-32 h-auto"
        /></nuxt-link>
      </div>

      <div class="col-start-4 col-span-6 -ml-2">
        <ul class="hidden sm:flex items-center h-full">
          <template v-for="(item, index) in menu">
            <li :key="index">
              <nuxt-link
                class="p-2 px-3 hover:bg-slate-100 rounded-md text-lg font-semibold"
                :to="item.page"
                >{{ item.text }}</nuxt-link
              >
            </li>
          </template>
        </ul>
      </div>

      <div class="col-start-10 col-span-3">
        <div class="flex items-center flex-row-reverse h-full">
          <a href="https://www.facebook.com/tinyhousealkmaar">
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
  data() {
    return {
      menu: [
        { text: "Over", page: "/over" },
        { text: "Bewoners", page: "/bewoners" },
        { text: "Veelgestelde vragen", page: "/veelgestelde-vragen" },
        { text: "Open dagen", page: "/open-dagen" },
        { text: "Contact", page: "/contact" },
      ],
    };
  },
};
</script>
