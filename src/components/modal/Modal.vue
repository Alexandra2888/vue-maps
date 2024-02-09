<template>
 <div v-if="isVisible" class="modal">
  <div class="modal-content">
    <span class="close" @click="closeModal">&times;</span>
    <h2>{{ title }}</h2>
    <p>{{ address }}</p>
  </div>
</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';



const props = defineProps({
  isVisible: Boolean,
  title: String,
  address: String,
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>