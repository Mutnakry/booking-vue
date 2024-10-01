<template>
  <div class="max-w-screen-xl mx-auto p-4">
    <!-- Header with Route Info -->
    <div class="flex justify-between items-center border-b pb-4">
      <h1 class="text-lg font-semibold">Phnom Penh - SVAY (Direct)</h1>
      <button class="text-gray-500 hover:text-gray-700">&times;</button>
    </div>

    <div class="flex justify-start space-x-6 my-4">
      <div class="flex items-center">
        <div class="w-4 h-4 bg-gray-200 mr-2"></div>
        <span class="text-sm">Seat Available</span>
      </div>
      <div class="flex items-center">
        <div class="w-4 h-4 bg-indigo-600 mr-2"></div>
        <span class="text-sm">Seat Selected</span>
      </div>
      <div class="flex items-center">
        <div class="w-4 h-4 bg-red-600 mr-2"></div>
        <span class="text-sm">Seat Unavailable</span>
      </div>
    </div>

    <!-- Seat Layout -->
    <div class="flex flex-col md:flex-row md:space-x-8">
      <!-- Seat Chart -->
      <div class="p-4 border rounded w-full md:w-1/3">
        <div class="mb-6">
          <p class="font-semibold mb-2">Down Stair</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex space-x-2 items-center justify-center pb-8">
              <div class="text-center">
                <img
                  class="h-8 w-8 mx-auto"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABFgAAARYBhMcjdgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQnSURBVFiFtddNiJZVFAfw3zOK4zQNpowOjh80CKIMfoQu8iORFKSFFBiOy4xmYZAtNEFQaSFYZIsIJkXI2YUYiiDophDTnZQpoQxOVjTqqEmQIC70tnjO4PXpfV/HxAcuPPd8/M+555577rlFSslovqIomvE63sRcTEV7sG/jOi7hGL5PKd0fFXBKqeFAB/pwE8fRi1eC3hSjI2i9IXMzdDqeiN/A8DjsxBB2oC3jzcRSrIuxFDMzflvoDAXGuKdyIFZ0Bv2YErRufI4BPMQVHIpxJWgDIdMdOlMC40y9aNQyPg+D2BTz6TgYYd0eefBSDb2Xgrc9ZA9ievA2Bea8hg7EygexKuar8ReOjGY/KzhHQnd10FYFdkdNB2LPz2Qr78UNbBit4RqObAiM3iwSZ/KcyIV3oj/z9gZm/F/jGe6MwBqJaj92PuZAhGwokqZTea7XPqvxzIm1gdkZNoZGtqJIKSmKog/XUkq7i6L4Gv+klD5U54ui1BFgIumGU4PiUxTFF8qj/G5RFDvQmVJ6H5oDoE15Ai6jubKCqdioPHK38Ley6n0X41LQboXMRkytYDQH9rywdTNo3sDxENqLPZlSNw5jWHms3vJ4QWpCUzZvC5mDoXNY1ITg78He+D8etu3zKEsH8Zqyxn8T8x6MqaxmtrLm345xDLMrMmNCdzCw2gN7MDtl+5qUF8u5oihmYiLu4wdcCO8PpZQeZHs5G6dxEQtiXMTp4IGU0oOU0qGI4oXAvI+JYetc2DagTKhlEbZhLG+Q0cewuwZ9N4410Fue4S8LmwNwJ/ZyXYRzcQOQppCZVoM3LXhNDfQXh8y6wLqTO9AiavfzciCrOS0jDowATk4p3Usp/anBl1J6iLPKklr9NuFsyDTCGE4p3cNk3B6r7GQ6MVwURTvm4GXcxVVcrhSYj5QJB19lxt/DitxYFKw56MKL+C3wRqri9bHKIrIYPynP5l2P7vdudBVF8S2+TCldTSkNFEWxAp/h57B1FitSSgNhuAsf4O1YxC/KkL8TjrwaNi/xeCHahl2VPZuArfgdPTVyoqlC6wnZrZhQ4e3CtmohykvxJPyB1hrJ04UfsblBgm0Oma4avNbAniQvxcHsw474348tdQy0xz7WMtAVvPY6uluwP/53oC+l+tfxAJbUAVqPkzXoJ7G+js6SwPzPdZwL5Q3JfGUNn1UH8GieD7HvR+vIzgqs+THvV21IglFtydZEli6sAdqDA9n8QDVBg74wMNbEvH5Llm1F3pSuDIBP0ZLJLcCJbH4CC7J5S+hcwsqgNW5KM+VqWz4en8QefoxFeAHnM53zQVsUMgPKu398tvInt+WVSFQfJnMje0/hV2ULNyJ/LWinQmZu0J/+YVLJiXpPs9YRI5lzrdn82Z5mNaLx3B6nRRh54ve8nuf/ApMQwrae2OhxAAAAAElFTkSuQmCC"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">Driver</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center pb-8">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://static.vecteezy.com/system/resources/previews/022/767/571/non_2x/door-icon-vector.jpg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">Door</p>
              </div>
            </div>

            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/selected.4fdd7efc.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/selected.4fdd7efc.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/selected.4fdd7efc.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/selected.4fdd7efc.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- up Section -->
        <div class="mb-6">
          <p class="font-semibold mb-2">Up Stair</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex space-x-2 items-center justify-center pb-8">
              <div class="text-center">
                <p class="text-sm mt-2">Toilet</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>

            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/available.ea745ba9.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A</p>
              </div>
              <!-- Seat 1A -->
              <div class="text-center">
                <img
                  class="h-12 w-12 mx-auto"
                  src="https://vireakbuntham.com/img/not_available.6a15ec1d.svg"
                  alt="Seat 1A"
                />
                <p class="text-sm mt-2">1A(F)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trip Information Section -->
      <div class="w-full md:w-1/3">
        <div class="p-4 border grid grid-cols-2 rounded mb-4">
          <div>
            <p><strong>Vehicle Type:</strong> </p>
            <p><strong>Departure:</strong></p>
            <p><strong>Price:</strong></p>
            <p><strong>Selected Seat:</strong> </p>
            <p><strong>Seat Number:</strong></p>
          </div>
          <div>
            <p>: Air Bus 37 Seats</p>
            <p>: 2024-09-17 (14:45)</p>
            <p>: $ 16</p>
            <p>: 4</p>
            <p>: 3D</p>
          </div>
        </div>

        <!-- Total Fare & Button -->
        <div class="p-4 border rounded bg-gray-100 text-center">
          <p class="text-lg mb-2"><strong>Total fare:</strong> $62.00</p>
          <button
            class="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>