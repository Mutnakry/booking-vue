<template>
  <div>
    <div class="flex flex-col md:flex-row md:space-x-2">
      <div class="w-full md:w-3/4">
        <div class="grid grid-cols-5 bg-blue-100 text-left font-bold p-2">
          <div>Room type</div>
          <div>Number of guests</div>
          <div>Today's price</div>
          <div>Your choices</div>
          <div>Select amount</div>
        </div>
        <tr v-if="ProductBuilding.length === 0">
          <td colspan="5">No products found</td>
        </tr>
        <div v-else v-for="(items, index) in ProductBuilding" :key="index">
          <div class="mx-auto px-4">
            <!-- Room -->
            <div class="grid grid-cols-5 gap-4 border-b border-gray-300">
              <div class="border-r-2">
                <h3 class="text-blue-600 font-bold">{{ items.roomType }}</h3>
                <p class="text-red-600">Only 2 rooms left on our site</p>
                <ul class="text-gray-600 text-sm">
                  <li>1 large double bed</li>
                  <li>Free cot available on request</li>
                  <li>Garden view, Pool view, Mountain view</li>
                  <li>Ensuite bathroom, Free WiFi</li>
                  <li>Shower, Toilet, Towels, Fan, Hairdryer</li>
                </ul>
              </div>

              <!-- <div
                class="text-center flex items-center border-r-2 justify-center"
              >
                <span>👥 {{ items.num_room }}</span>
              </div> -->
              <div
                class="text-center flex items-center border-r-2 justify-center"
              >
                <span v-if="items.num_user === 1">👤 {{ items.num_user }}</span>
                <span v-else-if="items.num_user === 2"
                  >👤👤 {{ items.num_user }}</span
                >
                <span v-else-if="items.num_user === 3"
                  >👤👤👤 {{ items.num_user }}</span
                >
                <span v-else-if="items.num_user === 4"
                  >👤👤👤👤 {{ items.num_user }}</span
                >
                <span v-else>👤👤👤👤{{ items.num_user }} users</span>
              </div>

              <div
                class="text-center border-r-2 flex items-center justify-center"
              >
                <span class="text-xl font-bold">{{ items.price }}</span>
                <p class="text-gray-500 text-sm">Includes taxes and charges</p>
              </div>

              <div class="text-left">
                <p class="text-green-600">Breakfast $4.25 (optional)</p>
                <ul class="text-gray-600 text-sm">
                  <li>
                    Includes parking + early check-in + high-speed internet
                  </li>
                  <li>Free cancellation before 21 December 2024</li>
                  <li>No prepayment needed – pay at the property</li>
                </ul>
              </div>
              <div class="flex items-center justify-center">
                <select
                  class="border p-2 rounded"
                  @change="addToCart(index, $event.target.value)"
                >
                  <option value="0">0</option>
                  <option
                    v-for="room in items.num_room"
                    :key="room"
                    :value="room"
                  >
                    {{ room }} (US${{ room * items.price }})
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 border bg-slate-500 rounded w-full md:w-1/4">
        <div class="mb-4">
          <div class="mb-4">
            <!-- Cart summary -->
            <div class="p-4 border rounded bg-gray-100 text-center">
              <h2>Your Cart</h2>
              <ul v-if="cart.length > 0">
                <li v-for="(cartItem, index) in cart" :key="index">
                  {{ cartItem.roomType }}
                  <p >Quantity: {{ cartItem.num_room }}</p>
                  <p class="text-xl text-pink-400 line-clamp-1" >Names: {{ cartItem.names }}</p>
                  <!-- Display names -->
                  <p class="text-xs text-red-400 line-clamp-1">Description: {{ cartItem.description }}</p>
                  <!-- Display description -->
                  <p>Total: US${{ cartItem.total }}</p>
                </li>
              </ul>
              <p v-else>Your cart is empty</p>
              <p>Total Price: US${{ totalPrice }}</p>
              <button
                class="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600"
              >
                Continue
              </button>
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
      ProductBuilding: [], // List of products
      cart: [], // Cart array to store the selected items
      totalPrice: 0, // Total price for the cart items
    };
  },
  methods: {
    // Fetch product data from API
    async GetAllProductBulding() {
      try {
        const response = await axios.get("http://localhost:6900/building");
        this.ProductBuilding = response.data;
      } catch (err) {
        console.error(err);
      }
    },
    // Add selected item to the cart by index, clearing previous items
    addToCart(index, selectedQuantity) {
      const quantity = Number(selectedQuantity);
      const item = this.ProductBuilding[index]; // Get the item by index

      if (quantity > 0) {
        const total = quantity * item.price;

        // Check if the item is already in the cart
        const existingCartItemIndex = this.cart.findIndex(
          (cartItem) => cartItem.id === item.id
        );

        if (existingCartItemIndex !== -1) {
          // Update the existing item in the cart
          this.cart[existingCartItemIndex] = {
            id: item.id,
            roomType: item.roomType,
            num_room: quantity,
            total: total,
            names: item.names, // Store names
            description: item.description, // Store description
          };
        } else {
          // Add a new item to the cart
          this.cart.push({
            id: item.id, // Store item id in the cart
            roomType: item.roomType,
            num_room: quantity,
            total: total,
            names: item.names, // Store names
            description: item.description, // Store description
          });
        }

        // Recalculate the total price
        this.calculateTotalPrice();
      } else {
        // If quantity is 0, remove the item from the cart
        this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
        this.calculateTotalPrice();
      }
    },

    // Calculate the total price of all items in the cart
    calculateTotalPrice() {
      this.totalPrice = this.cart.reduce(
        (acc, cartItem) => acc + cartItem.total,
        0
      );
    },
  },
  // Fetch products when the component is mounted
  mounted() {
    this.GetAllProductBulding();
  },
};
</script>
