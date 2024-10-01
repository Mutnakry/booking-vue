<template>
  <div>
       <div class="max-w-screen-2xl mx-auto pt-12 px-4">
        <p class="text-2xl text-blue-600 font-medium underline underline-offset-8">ធ្វើការកក់ឲបានទាន់ចិត្តណាប្រយ័ត្តអស់</p>
       </div>
    <!-- product -->
    <div class="flex justify-center items-center min-h-screen">
      <div
        class="gap-3 justify-between items-center p-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <tr v-if="ProductResort.length === 0">
          <td colspan="5">No products found</td>
        </tr>
        <div v-else v-for="(item, index) in ProductResort" :key="index">
          <div
            class="max-w-md p-4 bg-white border rounded-lg shadow-md mx-auto"
          >
            <!-- Image Section -->
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square240/450991982.webp?k=4f757ece9f303b4b9dc233ce913b744b19eb16605425bf8eac185becc7934f02&o="
              alt="Amber Kampot"
              class="w-full lg:h-72 md:h-66 h-48 object-cover rounded-lg"
            />
            <!-- Hotel Information -->
            <div class="mt-4">
              <div class="flex justify-between items-start">
                <div>
                  <h2 class="text-lg font-bold">Amber1 Kampot</h2>
                  <div class="flex items-center space-x-1">
                    <span class="text-yellow-500 text-sm"
                      >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                    >
                    <span class="text-gray-500 text-sm">37 reviews</span>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-red-500">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              </div>

              <!-- Location and details -->
              <div class="text-sm text-blue-500 hover:underline">
                <a href="#">Kampot</a> - <a href="#">Show on map</a> - 5.2 km
                from centre
              </div>

              <!-- Room details -->
              <div class="mt-2 text-sm text-gray-700">
                <p><strong>Pool Villa 1 Bedroom</strong></p>
                <p>1 large double bed</p>
              </div>

              <!-- Perks -->
              <ul class="mt-2 space-y-1 text-sm text-green-600">
                <li>✔ Breakfast included</li>
                <li>✔ Free cancellation</li>
                <li>✔ No prepayment needed – pay at the property</li>
              </ul>

              <!-- Pricing & Availability -->
              <div class="flex justify-between items-center mt-4">
                <div class="text-right">
                  <p class="text-gray-500 text-sm">1 night, 2 adults</p>
                  <p class="text-2xl font-bold text-gray-800">$400</p>
                  <p class="text-xs text-gray-400">
                    Includes taxes and charges
                  </p>
                </div>
                <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
              See availability
            </button> -->
                <a
                  class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
                  href="/resortbooking"
                >
                  See availability</a
                >
              </div>
            </div>

            <!-- Footer Genius Offer -->
            <div class="mt-4 border-t pt-4 text-center text-sm">
              <p>
                Get a member-only discount on this price –
                <a href="#" class="text-blue-500">Sign in</a>
              </p>
              <div class="flex justify-center items-center mt-2">
                <span class="text-blue-500 font-bold">Genius</span>
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

  mounted() {
    this.GetAllProductResort();
  },
};
</script>


<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>