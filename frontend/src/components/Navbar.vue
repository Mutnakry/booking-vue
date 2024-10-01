<template>
  <nav class="bg-white shadow-sm border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2"
    >
      <a
        href="/"
        class="flex items-center font-semibold md:text-4xl md:xl uppercase text-green-300 space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://www.clubmahindra.com/blog/media/section_images/ghf-b7b2cdb05e9cc78.jpg"
          class="h-14 w-14 rounded-full md:ml-0 ml-4"
          alt="Flowbite Logo"
        />booking
      </a>
      <div
        class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"
      >
        <a href="" class="md:text-lg text-xs font-serif flex">
          ចូលគណនី/ចុះឈ្មោះគណនី</a
        >
        <button
          type="button"
          data-dropdown-toggle="language-dropdown-menu"
          class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <img
            class="h-5 w-5 mr-3"
            src="data:image/png;base64,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"
            alt=""
          />
          ខ្មែរ
        </button>
        <!-- Dropdown -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          id="language-dropdown-menu"
        >
          <ul class="py-2 font-medium" role="none">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div class="items-center">Khmer</div>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div class="items-center">English</div>
              </a>
            </li>
          </ul>
        </div>

        <button
          data-collapse-toggle="navbar-language"
          type="button"
          class="inline-flex items-center p-2 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-language"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-language"
      >
        <ul
          class="flex space-x-5 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <div class="relative">
            <div
              @mouseover="showDropdown = true"
              @mouseleave="showDropdown = false"
              class="relative"
            >
              <p
                class="text-gray-800 text-lg cursor-pointer hover:text-red-500 focus:ring-4 focus:outline-none font-medium text-center inline-flex items-center"
                type="button"
              >
                ស្វែងរក
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </p>

              <!-- Dropdown menu -->
              <div
                v-show="showDropdown"
                class="z-10 bg-white divide-y divide-gray-100 rounded-b-lg -translate-y-2 -translate-x-6 shadow w-64 dark:bg-gray-700 dark:divide-gray-600 absolute top-full left-0 mt-2"
              >
                <ul
                  class="text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li class="p-1">
                    <a
                      href="/resort"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ផ្អះលំហែកាយ</a
                    >
                  </li>

                  <li class="p-1">
                    <a
                      href="/test"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ដាក់ការកុម៉ុង់</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ការសាកសួរតម្លៃដឹកជញ្ជូន</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ការសាកសួរតម្លៃដឹកជញ្ជូន</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ស្វែងរកសាខា</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              @mouseover="showDropdownservise = true"
              @mouseleave="showDropdownservise = false"
              class="relative"
            >
              <p
                class="text-gray-800 text-lg cursor-pointer hover:text-red-500 focus:ring-4 focus:outline-none font-medium text-center inline-flex items-center"
                type="button"
              >
                សេវាកម្ម
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </p>

              <!-- Dropdown menu -->
              <div
                v-show="showDropdownservise"
                class="z-10 bg-white divide-y divide-gray-100 rounded-b-lg -translate-y-2 -translate-x-6 shadow w-64 dark:bg-gray-700 dark:divide-gray-600 absolute top-full left-0 mt-2"
              >
                <ul
                  class="text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >តាមដានកញ្ចប់បញើ</a
                    >
                  </li>

                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ដាក់ការកុម៉ុង់</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ការសាកសួរតម្លៃដឹកជញ្ជូន</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ការសាកសួរតម្លៃដឹកជញ្ជូន</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ស្វែងរកសាខា</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              @mouseover="showDropdowninfo = true"
              @mouseleave="showDropdowninfo = false"
              class="relative"
            >
              <p
                class="text-gray-800 text-lg cursor-pointer hover:text-red-500 focus:ring-4 focus:outline-none font-medium text-center inline-flex items-center"
                type="button"
              >
                ព័ត៍មាន
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </p>

              <!-- Dropdown menu -->
              <div
                v-show="showDropdowninfo"
                class="z-10 bg-white divide-y divide-gray-100 rounded-b-lg -translate-y-2 -translate-x-6 shadow w-64 dark:bg-gray-700 dark:divide-gray-600 absolute top-full left-0 mt-2"
              >
                <ul
                  class="text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >តាមដានកញ្ចប់បញើ</a
                    >
                  </li>

                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ដាក់ការកុម៉ុង់</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ការសាកសួរតម្លៃដឹកជញ្ជូន</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ការសាកសួរតម្លៃដឹកជញ្ជូន</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ស្វែងរកសាខា</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              @mouseover="showDropdownabout = true"
              @mouseleave="showDropdownabout = false"
              class="relative"
            >
              <p
                class="text-gray-800 text-lg cursor-pointer hover:text-red-500 focus:ring-4 focus:outline-none font-medium text-center inline-flex items-center"
                type="button"
              >
                អំពីខ្ញុំ
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </p>

              <!-- Dropdown menu -->
              <div
                v-show="showDropdownabout"
                class="z-10 bg-white divide-y divide-gray-100 rounded-b-lg -translate-y-2 -translate-x-6 shadow w-64 dark:bg-gray-700 dark:divide-gray-600 absolute top-full left-0 mt-2"
              >
                <ul
                  class="text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >តាមដានកញ្ចប់បញើ</a
                    >
                  </li>

                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ដាក់ការកុម៉ុង់</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ការសាកសួរតម្លៃដឹកជញ្ជូន</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-b border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ការសាកសួរតម្លៃដឹកជញ្ជូន</a
                    >
                  </li>
                  <li class="p-1">
                    <a
                      href="#"
                      class="block text-lg px-4 py-2 border-gray-400 hover:bg-gray-100 hover:text-red-600 font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                      >ស្វែងរកសាខា</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <div class="fixed bottom-0 left-0 z-20 w-full shadow">
    <a href="#">
      <div
        class="absolute bottom-8 right-8 flex flex-col items-center space-y-2"
      >
        <img
          src="https://www.jtexpresskh.com/img/customer-service-icon.258aebad.png"
          alt="Customer Service Icon"
        />
        <span class="bg-white py-1 px-3 rounded-xl"
          >សេវាកម្មបម្រើអតិថិជនអនឡាញ</span
        >
      </div>
    </a>
  </div> -->
  <div class="fixed bottom-0 left-0 z-20 w-full shadow">
    <a href="https://t.me/+o417V8nzlexjODBl">
      <div
        class="absolute bottom-8 right-8 flex flex-col items-center space-y-2"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png"
          class="h-12 w-12"
          alt="Customer Service Icon"
        />
        <span class="bg-white py-1 px-3 rounded-xl"
          >សេវាកម្មបម្រើអតិថិជនអនឡាញ</span
        >
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // usericon: require('../assets/image/icons8-user-16.png'),
      showDropdown: false,
      showDropdownservise: false,
      showDropdowninfo: false,
      showDropdownabout: false,
    };
  },
};
</script>

<style scoped>
/* Ensure dropdown menu is positioned correctly */
.relative {
  position: relative;
}
</style>