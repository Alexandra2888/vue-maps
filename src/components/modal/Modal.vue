<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center text-black"
  >
    <div class="relative border w-fit h-fit shadow-lg rounded-md bg-white">
      <div class="flex justify-end">
        <button
          @click="closeModal"
          class="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm inline-block h-2 w-2 m-2"
        >
          &times;
        </button>
      </div>

      <div class="text-black flex items-center justify-center flex-col p-2">
        <h2 class="text-sm font-semibold text-left">{{ title }}</h2>
        <div class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-1"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p class="text-sm p-2 font-thin">{{ address }}</p>
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
  address: String
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>
