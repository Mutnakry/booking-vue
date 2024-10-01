<template>
  <div>
    <div
      class="bg-cover bg-center h-1/2 md:h-[60vh]"
      style="
        background-image: url('https://www.lovecuba.com/blog/wp-content/uploads/2024/01/res.jpg');
      "
    >
      <div
        class="flex justify-center items-center h-full bg-black bg-opacity-30"
      >
        <form action="" @submit.prevent="betweenProduct">
          <div
            class="rounded-xl bg-white opacity-85 shadow-lg p-6 w-full max-w-screen-xl my-16 mx-8"
          >
            <div class="space-y-4">
              <!-- Radio Buttons -->
              <div class="flex items-center space-x-4">
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="citizenship"
                    value="Cambodian"
                    class="form-radio text-blue-500"
                    checked
                  />
                  <span class="ml-2">Cambodian</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="citizenship"
                    value="Non-Cambodian"
                    class="form-radio text-blue-500"
                  />
                  <span class="ml-2">Non-Cambodian</span>
                </label>
              </div>

              <!-- Search Fields -->
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-5">
                <div class="col-span-2 sm:col-span-1">
                  <input
                    type="text"
                    required
                    v-model="newProduct.startfrom"
                    placeholder="Departing From"
                    class="w-full md:p-3 p-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <input
                    type="text"
                    v-model="newProduct.endfrom"
                      required
                    placeholder="Going To"
                    class="w-full md:p-3 p-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <input
                    type="date"
                    id="departure-date"
                    
                    v-model="newProduct.startDate"
                    class="w-full md:p-3 p-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <input
                    type="date"
                    id="return-date"
                    placeholder="Return Date"
                    v-model="newProduct.endDate"
                    class="w-full md:p-3 p-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <a href="#">
                    <button
                      type="submit"
                      class="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 focus:outline-none"
                    >
                      Find Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="max-w-screen-xl mx-auto py-4 px-2">
      <h1 class="text-blue-900 text-4xl font-semibold">Flash Sale</h1>

      <div
        id="default-carousel"
        class="relative h-auto w-full my-4 overflow-hidden"
      >
        <!-- Carousel wrapper -->
        <div
          class="relative h-auto flex space-x-3 overflow-x-auto snap-x snap-mandatory scrollbar-hidden"
        >
          <div
            class="duration-700 ease-in-out p-4 bg-blue-200 w-auto rounded-lg flex-shrink-0 snap-start"
            data-carousel-item
          >
            <!-- First Row -->
            <div class="flex whitespace-nowrap font-extrabold space-x-2 py-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/535/535137.png"
                class="h-6 w-6"
                alt=""
              />
              <p class="text-sm md:text-base">Phnom Penh</p>
              <span class="hidden sm:inline font-serif">To</span>
              <p class="text-sm md:text-base">Siem Reap</p>
              <span class="text-xs md:text-sm">(2:30)</span>
            </div>

            <!-- Second Row -->
            <div class="flex space-x-2 py-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Cambodia_MapFlag.png"
                class="h-6 w-6"
                alt=""
              />
              <p class="text-sm md:text-base text-orange-500 font-extrabold">
                $ 8.00
              </p>
              <p class="text-sm md:text-base text-gray-500 line-through">
                $12.00
              </p>
            </div>

            <!-- Third Row -->
            <div class="flex space-x-2 items-end justify-between py-2">
              <div class="flex space-x-2">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-globe-icon-download-in-svg-png-gif-file-formats--showing-americas-eart-animal-and-nature-pack-icons-33894.png?f=webp&w=256"
                  class="h-6 w-6"
                  alt=""
                />
                <h2
                  class="text-2xl md:text-base text-orange-500 font-extrabold"
                >
                  $ 8
                </h2>
                <p class="text-sm md:text-base text-gray-500 line-through">
                  $12.00
                </p>
              </div>
              <button
                class="text-sm md:text-base text-white font-semibold rounded-lg py-2 px-4 border border-orange-400 hover:bg-orange-400"
              >
                Book Now
              </button>
            </div>

            <!-- Period Info -->
            <p class="text-xs md:text-sm whitespace-nowrap">
              Apply Period: 2024-03-01 to 2024-09-30
            </p>
          </div>
          <div
            class="duration-700 ease-in-out p-4 bg-blue-200 w-auto rounded-lg flex-shrink-0 snap-start"
            data-carousel-item
          >
            <!-- First Row -->
            <div class="flex whitespace-nowrap font-extrabold space-x-2 py-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/535/535137.png"
                class="h-6 w-6"
                alt=""
              />
              <p class="text-sm md:text-base">Poi Pet</p>
              <span class="hidden sm:inline font-serif">To</span>
              <p class="text-sm md:text-base">Siem Reap</p>
              <span class="text-xs md:text-sm">(2:30)</span>
            </div>

            <!-- Second Row -->
            <div class="flex space-x-2 py-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Cambodia_MapFlag.png"
                class="h-6 w-6"
                alt=""
              />
              <p class="text-sm md:text-base text-orange-500 font-extrabold">
                $ 8.00
              </p>
              <p class="text-sm md:text-base text-gray-500 line-through">
                $12.00
              </p>
            </div>

            <!-- Third Row -->
            <div class="flex space-x-2 items-end justify-between py-2">
              <div class="flex space-x-2">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-globe-icon-download-in-svg-png-gif-file-formats--showing-americas-eart-animal-and-nature-pack-icons-33894.png?f=webp&w=256"
                  class="h-6 w-6"
                  alt=""
                />
                <h2
                  class="text-2xl md:text-base text-orange-500 font-extrabold"
                >
                  $ 8
                </h2>
                <p class="text-sm md:text-base text-gray-500 line-through">
                  $12.00
                </p>
              </div>
              <button
                class="text-sm md:text-base text-white font-semibold rounded-lg py-2 px-4 border border-orange-400 hover:bg-orange-400"
              >
                Book Now
              </button>
            </div>

            <!-- Period Info -->
            <p class="text-xs md:text-sm whitespace-nowrap">
              Apply Period: 2024-03-01 to 2024-09-30
            </p>
          </div>
          <div
            class="duration-700 ease-in-out p-4 bg-blue-200 w-auto rounded-lg flex-shrink-0 snap-start"
            data-carousel-item
          >
            <!-- First Row -->
            <div class="flex whitespace-nowrap font-extrabold space-x-2 py-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/535/535137.png"
                class="h-6 w-6"
                alt=""
              />
              <p class="text-sm md:text-base">Phnom Penh</p>
              <span class="hidden sm:inline font-serif">To</span>
              <p class="text-sm md:text-base">Svay Check</p>
              <span class="text-xs md:text-sm">(2:30)</span>
            </div>

            <!-- Second Row -->
            <div class="flex space-x-2 py-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Cambodia_MapFlag.png"
                class="h-6 w-6"
                alt=""
              />
              <p class="text-sm md:text-base text-orange-500 font-extrabold">
                $ 8.00
              </p>
              <p class="text-sm md:text-base text-gray-500 line-through">
                $12.00
              </p>
            </div>

            <!-- Third Row -->
            <div class="flex space-x-2 items-end justify-between py-2">
              <div class="flex space-x-2">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-globe-icon-download-in-svg-png-gif-file-formats--showing-americas-eart-animal-and-nature-pack-icons-33894.png?f=webp&w=256"
                  class="h-6 w-6"
                  alt=""
                />
                <h2
                  class="text-2xl md:text-base text-orange-500 font-extrabold"
                >
                  $ 8
                </h2>
                <p class="text-sm md:text-base text-gray-500 line-through">
                  $12.00
                </p>
              </div>
              <button
                class="text-sm md:text-base text-white font-semibold rounded-lg py-2 px-4 border border-orange-400 hover:bg-orange-400"
              >
                Book Now
              </button>
            </div>

            <!-- Period Info -->
            <p class="text-xs md:text-sm whitespace-nowrap">
              Apply Period: 2024-03-01 to 2024-09-30
            </p>
          </div>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>

    <div class="bg-white py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Everything you need to deploy your app
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          >
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
                >
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
                Push to deploy
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
                >
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                SSL certificates
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                eget. Sem sodales gravida quam turpis enim lacus amet.
              </dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
                >
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                Simple queues
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
                Lobortis auctor congue commodo diam neque.
              </dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
                >
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                    />
                  </svg>
                </div>
                Advanced security
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div class="bg-gray-100">
      <div class="max-w-screen-xl mx-auto">
        <img src="https://vireakbuntham.com/img/app-v1.ba7e06a1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newProduct: {
       startfrom: "",
        endfrom: "",
        startDate: "",
      },
    };
  },
  methods: {
    // async betweenProduct() {
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:6900/booking",
    //       this.newProduct
    //     );
    //     this.products = response.data;
    //     this.$router.push("/list");
    //     this.newProduct = {
    //     startfrom: "",
    //     endfrom: "",
    //     startDate: "",
    //     endDate: "",
    //     };
    //   } catch (error) {
    //     console.error("Error fetching products:", error);
    //   }
    // },
     async betweenProduct() {
      // Basic validation to check if endDate is after startDate
      if (this.newProduct.endDate && this.newProduct.startDate > this.newProduct.endDate) {
        alert("Return date cannot be earlier than the departure date.");
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:6900/booking",
          this.newProduct
        );
          localStorage.setItem("products", JSON.stringify(response.data));
        localStorage.setItem("formData", JSON.stringify(this.newProduct));
        this.products = response.data;  // Storing the fetched product data
        this.$router.push("/list");
        // Resetting form fields after submission
        this.newProduct = {
          startfrom: "",
          endfrom: "",
          startDate: "",
        };
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },

  mounted() {
    const today = new Date().toISOString().split("T")[0];
    const departureDate = document.getElementById("departure-date");
    departureDate.value = today;
    departureDate.setAttribute("min", today);
    departureDate.addEventListener("change", function () {
      const selectedDepartureDate = this.value;
      document
        .getElementById("return-date")
        .setAttribute("min", selectedDepartureDate);
    });

    document.addEventListener("DOMContentLoaded", () => {
      const carousel = document.querySelector("#default-carousel");
      const carouselWrapper = carousel.querySelector(".relative");
      const prevButton = carousel.querySelector("[data-carousel-prev]");
      const nextButton = carousel.querySelector("[data-carousel-next]");

      const scrollAmount = 300; // Adjust this value based on your needs

      prevButton.addEventListener("click", () => {
        carouselWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });

      nextButton.addEventListener("click", () => {
        carouselWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  },
};
</script>



<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>