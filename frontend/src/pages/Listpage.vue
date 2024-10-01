<template>
  <div class="bg-slate-300">
    <div class="max-w-screen-2xl mx-auto py-8 px-2">
      
      <div v-for="(item, index) in products" :key="index">
        <div class="bg-gray-100 py-4 px-12 rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <!-- From Section -->
            <div class="text-left">
              <p class="text-gray-600">From</p>
              <p class="font-medium text-xl">{{ item.from_start }}</p>
            </div>

            <!-- Arrow -->
            <div class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </div>

            <!-- To Section -->
            <div class="text-left">
              <p class="text-gray-600">To</p>
              <p class="font-medium text-xl">{{ item.from_to }}</p>
            </div>

            <!-- Departure Section -->
            <div class="text-right">
              <p class="text-gray-600">Departure</p>
              <p class="font-medium">{{ formatDate(item.dob) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="py-6">
        <tr v-if="products.length === 0">
          <td colspan="5">No products found</td>
        </tr>
        <div v-else v-for="(item, index) in products" :key="index">
          <!-- First Bus Card -->
          <div class="bg-white mb-4 rounded-lg shadow border-2">
            <div class="flex border-b-2 p-4">
              <!-- Bus Image -->
              <div class="w-1/3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJDnoRMUPBkWVKriLNOZysdvAlqP3bqR6SNNslhW3J178QaWuPv11jdKbRbTP-bC1kW8&usqp=CAU"
                  alt="Luxury Hotel Bus"
                  class="rounded-lg md:h-56 sm:h-36 h-28"
                />
              </div>

              <!-- Bus Details -->
              <div class="w-2/3 pl-4">
                <div class="flex justify-between">
                  <div>
                    <h3 class="text-xl font-semibold">Luxury Hotel Bus</h3>
                    <p class="text-gray-600">Direct - Road No 42</p>
                    <p class="text-gray-600">{{ formatDate(item.dob) }}</p>
                  </div>
                  <div>
                    <span class="text-sm text-orange-500">30/30 Seats</span>
                    <p class="text-6xl font-bold text-gray-900">
                      ${{ item.price }}
                    </p>
                    <p class="text-2xl font-light text-red-500 line-through">
                      ${{ item.discount }}
                    </p>
                  </div>
                </div>

                <div class="mt-4">
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <i class="fas fa-map-marker-alt text-gray-600"></i>
                      <p class="ml-2 text-gray-600 uppercase">
                        Boarding: {{ item.from_start }} to {{ item.from_to }}
                        {{ item.time_start }}
                      </p>
                    </div>
                  </div>

                  <div class="mt-2 grid grid-cols-3 gap-4">
                    <div>
                      <p class="text-gray-600">Departure</p>
                      <p class="text-2xl font-bold">
                        {{ formatTime(item.time_start) }}
                      </p>
                    </div>

                    <div>
                      <p class="text-gray-600">Duration</p>
                      <p class="text-2xl font-bold">
                        {{ getDuration(item.time_start, item.time_end) }}
                      </p>
                    </div>
                    <div>
                      <p class="text-gray-600">Arrival</p>
                      <p class="text-2xl font-bold">
                        {{ formatTime(item.time_end) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 flex justify-between items-center">
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                <!-- Boarding Information -->
                <div class="hidden md:block">
                  <p class="text-gray-600">
                    Boarding: - Phnom Penh (Olympic) 05:30
                  </p>
                  <p>Phnom Penh (Cannon Rifle Roundabout Park) 06:00</p>
                </div>

                <!-- Trip Info -->
                <div class="flex justify-center gap-2 items-center">
                  <img
                    src="https://vireakbuntham.com/img/info.47497234.svg"
                    alt=""
                  />
                  <p class="text-blue-500 cursor-pointer">Trip Info</p>
                </div>

                <!-- Button -->
                <div class="flex justify-end items-center">
                  <a
                    href="/booking"
                    class="bg-orange-500 text-white w-full text-center font-bold py-2 px-4 rounded hover:bg-orange-600"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";

export default {
  name: "ProductForm",
  components: {
    Navbar,
  },

  data() {
    return {
      products: [],
      newProduct: {
        startfrom: "",
        endfrom: "",
        startDate: "",
        endDate: "",
      },
    };
  },

  methods: {
    // Fetch products based on form input
    async betweenProduct() {
      try {
        const response = await axios.post(
          "http://localhost:6900/booking",
          this.newProduct
        );
        this.products = response.data;

        // Save form data and products to localStorage
        localStorage.setItem("newProduct", JSON.stringify(this.newProduct));
        localStorage.setItem("products", JSON.stringify(this.products));

        this.newProduct = {
          startfrom: "",
          endfrom: "",
          startDate: "",
          endDate: "",
        };
      } catch (error) {
        console.error("Error filtering products:", error);
      }
    },

    // Retrieve data from localStorage
    loadSavedData() {
      const savedFormData = localStorage.getItem("newProduct");
      const savedProducts = localStorage.getItem("products");

      if (savedFormData) {
        this.newProduct = JSON.parse(savedFormData);
      }

      if (savedProducts) {
        this.products = JSON.parse(savedProducts);
      }
    },

    formatDate(dateString) {
      if (!dateString) return ""; // Handle cases where dob is undefined or empty
      const date = new Date(dateString);
      return date.toISOString().slice(0, 10); // Output: YYYY-MM-DD
    },
    formatTime(timeString) {
      if (!timeString) return ""; // Handle empty or undefined time
      const time = new Date(`1970-01-01T${timeString}Z`); // Use a dummy date
      return time.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    },
    getDuration(startTime, endTime) {
      if (!startTime || !endTime) return "";

      // Create Date objects using a dummy date
      const start = new Date(`1970-01-01T${startTime}Z`);
      const end = new Date(`1970-01-01T${endTime}Z`);

      // Calculate the difference in milliseconds
      const durationInMs = end - start;

      // Convert milliseconds to minutes
      const minutes = Math.floor(durationInMs / 1000 / 60);
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;

      // Return formatted duration
      return `${hours}h ${remainingMinutes}m`;
    },
  },

  // When component is created, check if there's saved data in localStorage
  created() {
    this.loadSavedData();
  },
};
</script>