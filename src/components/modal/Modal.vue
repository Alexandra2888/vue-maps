<template>
  <div v-if="isVisible" class="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center text-black">
    <div class="relative border w-[300px] h-fit shadow-lg rounded-md bg-white">
      <div class="flex justify-end">
        <button @click="closeModal" class="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm inline-block h-2 w-2 m-2">
          &times;
        </button>
      </div>

      <div class="text-black flex items-center justify-center flex-col p-2">
         <div class="flex items-center justify-center">
        <h2 class="text-sm font-semibold text-left px-4">{{ title }}</h2>
        <p class="text-sm font-thin text-orange-700 bg-yellow-50" v-if="inventory.length === 0">Offline</p>
        <p class="text-sm font-thin text-green-700 bg-green-200" v-else>Online</p>
      </div>
        <div class="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p class="text-sm p-2 font-thin">{{ address }}</p>
        </div>
        <div class="font-thin text-xs">USB-C lightning - Mini USB</div>
        <div class=" bg-blue-950 p-8 my-2" v-if="inventory.length > 0">
          <p class="text-green-700">2 available power banks</p>
          <p class="text-white">€1/hour - max €6/day</p>
          <div class="flex flex-col">
          <button class="bg-green-600 text-blue-950 rounded-md m-3 py-1 px-6">Rent a Power Bank</button>
          <button class="bg-slate-100 text-gray-600 rounded-md m-3 py-1 px-6">Directions</button>
        </div>
        </div>
        <div class="bg-blue-950 text-white text-sm text-center p-3 my-2" v-else>
          <p>No available power banks at this moment</p>
          <p class="py-1">€1/hhour - max €6/day</p>
          <button class="bg-slate-100 text-blue-950 rounded-md py-1 px-16 m-3 hover:bg-blue-500" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  isVisible: Boolean,
  title: String,
  address: String,
  inventory: {
    type: Array,
    default: () => [] 
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>
