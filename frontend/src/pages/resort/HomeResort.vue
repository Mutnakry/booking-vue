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
                  placeholder="Departing From"
                  class="w-full md:p-3 p-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <input
                  type="text"
                  placeholder="Going To"
                  class="w-full md:p-3 p-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <input
                  type="date"
                  id="departure-date"
                  class="w-full md:p-3 p-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <input
                  type="date"
                  id="return-date"
                  placeholder="Return Date"
                  class="w-full md:p-3 p-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <a href="/productresortbooking">
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
            class="duration-700 ease-in-out p-4 bg-slate-200 w-auto rounded-lg flex-shrink-0 snap-start"
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
            class="duration-700 ease-in-out p-4 bg-slate-200 w-auto rounded-lg flex-shrink-0 snap-start"
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
            class="duration-700 ease-in-out p-4 bg-slate-200 w-auto rounded-lg flex-shrink-0 snap-start"
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

    <!-- product resort -->

    <div class="max-w-screen-2xl mx-auto py-8 px-2">
      <div class="">
        <!-- First Bus Card -->
        <div class="bg-white rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <tr v-if="ProductResort.length === 0">
              <td colspan="5">No products found</td>
            </tr>
            <div v-else v-for="(item, index) in ProductResort" :key="index">
              <div class="">
                <div
                  class="bg-white mb-4 rounded-tr-3xl rounded-bl-3xl shadow border-2"
                >
                  <div class="flex border-b-2 p-4">
                    <!-- Bus Image -->
                    <div class="w-1/4">
                      <img
                        src="https://cf.bstatic.com/xdata/images/hotel/square600/450991982.webp?k=4f757ece9f303b4b9dc233ce913b744b19eb16605425bf8eac185becc7934f02&o="
                        alt="Luxury Hotel Bus"
                        class="rounded-lg md:h-56 sm:h-36 h-28"
                      />
                    </div>
                    <!-- Bus Details -->
                    <div class="w-3/4 pl-4">
                      <div class="flex justify-between border-b">
                        <div>
                          <h3 class="text-xl font-medium text-blue-600">
                            {{ item.names }}
                          </h3>
                          <p class="flex cursor-pointer py-2">
                            <img
                              src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png"
                              class="h-6 w-6"
                              alt=""
                            />
                            <span class="text-md font-serif">{{
                              item.province
                            }}</span>
                          </p>
                        </div>
                        <div class="flex space-x-2">
                          <div>
                            <p class="text-xl font-semibold">Good</p>
                          </div>
                          <div>
                            <div
                              class="h-10 w-10 text-center justify-end items-end rounded-t-lg rounded-br-xl bg-blue-800"
                            >
                              <p class="text-white text-xl font-medium">8.5</p>
                            </div>
                            <p class="text-gray-500 text-md">10 review</p>
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-2 w-full">
                        <div class="flex justify-between">
                          <div class="flex items-center">
                            <p class="ml-2 text-gray-600 line-clamp-5">
                              {{ item.description }};
                            </p>
                          </div>
                        </div>

                        <div class="flex flex-col items-end justify-end">
                          <p>Price from</p>
                          <p
                            class="text-sm font-extralight text-red-500 line-through"
                          >
                            $18.00
                          </p>
                          <p
                            class="text-2xl font-medium uppercase text-green-600"
                          >
                            180,002,30.00 khr
                          </p>
                          <p class="text-2xl font-medium text-green-600">
                            $180
                          </p>
                          <p>per night</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 flex justify-between items-center">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                      <!-- Boarding Information -->
                      <div class="hidden md:block">
                        <p class="flex py-2 space-x-2">
                          <a href="#">
                            <img
                              src="https://www.jtexpresskh.com/img/lingying.2713ef18.png"
                              class="h-6 w-6"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARKADAAQAAAABAAAARAAAAADA2cO/AAAG2ElEQVR4Ae1ca0wcVRQ+d3dZFtilWCivVgu0tj5qowUUoptCrTX4CqZNY6umJv7yj79M/GETY0p9RI0xvhrTX0YhNj7wh0lLfxhCggiIhtLa1kJpK1AFyrOUx+6O58zuLLOzs7O7s5fsYziBzN655957zjfnnHvunb3LIAKqaBp8QBDc9cjqZIytF0AoBgHsETSNHwuDWQZsWBCEIRSijTFzc/eBkj/CCcS0GCqaBvah4g0IwFYtvmSpQ4AuAIPD3QfKvgslsyogD54YLHW7PY0gCFWhGib1fcY6zGbTwc79JZeVegQBUnni8k7BJXyPVpGrZE6lMlrLOLOwvV37S1vlegUAQmB4XJ7TyJAmZ0rhz0smi+kxOSh+QMhNEIyuVLcM5cMlS0FQKiX3MUkMFDOMBgbpTjqL8dIHhAiIdzZJ0QAqPXGtK04eIgbI47UQnFq1+A1R58OA+ZKuHkMoHUZJTN52mHwZaBhWY1QTFuQyTmOoG5GWThOtTSJiNQATYWHCaafYALpGpCJhYUr4VWtEqnBiwhW8PzHj1GXSd7MKiOIRrgKiAMSiKCdVMd3M4NHbs+CZMgdsuc0KLVduwrvdYzHpkJSAbMmxQv0mB9SV2MFhNfsB2HdnNnxzfhKuzbr896L9kDSAZFkYPL7RjkBkwz256SH1NDP/jkZIHq2KhAdke166CMKeO7LAZtEOeW6PANfn9FsHAZWQgORYTfBkqUN0i9I1Vq0HGlA3MLUI824h4F60hYQC5KHCDKjHAFmzIQvSMGCq0bzLA/gHdgRNSWdvLChvRV2OOyD5GWZxlqCZotiuvZXb3D8NX/ROwFtV66CqKDNI2XPjSQoIPXxncaYYG6qLMsBsUrcGSeNrM0twtHMU+lDh950FqmAQb9JZyAa7RQThqVI75GWEN04XBsmvz0/Bl2cmMKAyOLarCLbl2SScAq4Lbg/0Ty4G3NNTCC+Vnl5lbaz49Hdh8kR5Q3m+DXCJLasN/ZHMvwGt4iIqSW71aW0RlGkE2AsTi+CKLZ6KwqwYIJspecK48ARaQ7YseQoNgbeGguYxtIjGC1OABgIbHWnwGYJRmKUtKo/4QRJojxJOekV9Jpr1HjF5csC2XHXTVjQJKHaMzMHbXWMwfNObS9y91gqf1BRBTvpyNhrQQFag+MKDuACyDTPHZ9ElCIyMMMmTmtCTC274qGccfh6c9VdXFtjgQ2chZKYFT69+JtmHcxymXOpONyAUCZ5Gl3h+6xrYhO6hl04iCB/0jMHkAiYXPtqNMedIdX7IXETik64zi264ijMRD9INCE1/lEDppZGbS/AOukf7yK2ALvZudsDrFXmAm70B97UKvKyDxtANCM0eesgjCPDtxWn4vPcG3FJMCy/fmwOvbF8bdbe8AioNrBuQV1uvw871mbAbF13O4izVVFqp2SWcQo/8NqqaQL22IxeeQ/fTQ2c5BVQaWzcg1Lh1aE78t7BRqCjIgFr0fQJJmXQt4oLreN8EfPXXZFCugBMTvImpeF2Jg7rURTwyVGlgVt7YzyGdkbrzXmnJXovx5T7MKilWHO+bhCsqQc+GOfx7jxTAw5jG66VRXO7X/XRVb/OgdjFZSFBvvhu9YwtA/1rkwOn045pC2B4iFddqK6/jaR3U74oAIhdY7XOezSxmn7FM11K/POMH9RlZ1iONzulKe6E8wCBxeE651F9cAKFp94dL0zR+TITfQQWeUy4JExdAFnHVRmuWN9r/hbml5Qw1WnRod30mhvZq48UFEEmQU/ge5YVTQ/D3hHYAlviVV97WQf3HFRASgNYgh1qG4UcdLtQ3Pk9dcKW4A0LakAsdRRc63P5fVC7EO6CSLAkBCAlCdPLKLLwYoQvR9iLtkvGmhAKElKOM9qXTw0A77FrUj+9gFmJ8B6PWf8IBQkKSog2d2i7EOyGTwElIQCThJBeiVbKSzozxD6g0RkIDQgKSCx1qGQpwoVu4Ef3LP3NUzZ1WZLXLXUpfh/evs0EVvu5sw20H3os6Sea4LO6kwaO9/jk6D/S/kpTwLrOSyqv1vQqIAhUTHspbfhmiqDRaEXczZ3DvnA0bTfGQ+jI2gqchxHOtIXmMVEFYUAxpM5LSYXRtwxdk5uYwTIapJizE128VjQPn8SRASpze1vv06NR398Gyu7zTLh7/1ttRyrTzYeB/QVveNPBryh5tD/fU8Oj77wfKqonNn5jRWXg61BuubarVk86ku6SXHxA62Uxn4bGCzxctpBES+7pEOkunuklUPyBUoDPwdBbeCJZCOirP/QcBIgOlEr8u2EHllCTUjc77y38EQdLTH1SlG/Lr6g+qyNGQfTbST+78D2YnPb3PvRMdAAAAAElFTkSuQmCC"
                              class="h-6 w-6"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <img
                              src="data:image/png;base64,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"
                              class="h-6 w-6"
                              alt=""
                            />
                          </a>
                        </p>
                      </div>

                      <!-- Trip Info -->
                      <div class="flex justify-center gap-2 items-center">
                        <img
                          src="https://vireakbuntham.com/img/info.47497234.svg"
                          alt=""
                        />
                        <p class="text-blue-500 cursor-pointer">Trip Info</p>
                      </div>

                      <div class="flex justify-end items-center">
                        <router-link
                          :to="{
                            name: 'showProductDetail',
                            params: { id: item.id },
                          }"
                          class="bg-orange-500 text-white w-full text-center font-bold py-2 px-4 rounded hover:bg-orange-600"
                        >
                          Book Now
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto h-96">
      <img
        src="https://www.shutterstock.com/image-vector/vector-beautiful-realistic-illustration-sandy-260nw-2471400087.jpg"
        class="h-96 w-full rounded-b-full"
        alt=""
      />
    </div>

    <div class="flex w-full h-screen">
      <div class="w-1/3 bg-white p-4">
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">Filter by:</h2>
          <div>
            <p class="font-medium">Availability</p>
            <div class="flex items-center space-x-2">
              <input type="checkbox" class="w-4 h-4" />
              <label>Only show available properties</label>
            </div>
          </div>
        </div>

        <div class="mt-8 border rounded-lg shadow-md p-4">
          <div class="flex items-start space-x-4">
            <img
              src="https://www.shutterstock.com/image-vector/vector-beautiful-realistic-illustration-sandy-260nw-2471400087.jpg"
              alt="Resort Image"
              class="w-32 h-32 rounded-md"
            />
            <div>
              <h3 class="text-xl font-semibold">The B Resort</h3>
              <div class="flex items-center space-x-1">
                <span class="text-yellow-400">⭐⭐⭐⭐</span>
                <span class="text-gray-500">82 reviews</span>
              </div>
              <p class="text-sm text-gray-500">Standard Double Room</p>
              <p class="text-lg font-bold mt-2">US$56</p>
              <p class="text-green-600 text-sm">Free cancellation</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/3">
        <iframe
          class="w-full h-full"
          src="https://www.shutterstock.com/image-vector/vector-beautiful-realistic-illustration-sandy-260nw-2471400087.jpg"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      ProductResort: [],
    };
  },

  methods: {
    async GetAllProductResort() {
      try {
        const response = await axios.get("http://localhost:6900/resort");
        this.ProductResort = response.data;
        console.log(ProductResort);
      } catch (err) {}
    },
  },
  //   methods: {
  //   async GetAllProductResort() {
  //     try {
  //       const response = await axios.get("http://localhost:6900/resort");
  //       this.ProductResort = response.data;
  //       console.log(this.ProductResort); // Use this.ProductResort for logging
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //     }
  //   },
  // },

  mounted() {
    this.GetAllProductResort();

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