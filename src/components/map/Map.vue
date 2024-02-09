<script setup lang="ts">
import { useMapStore } from '@/stores/index'
import { ref, onMounted } from 'vue'
import Modal from '../modal/Modal.vue'

const { center, fetchMaps, markers } = useMapStore()

function onMarkerClick(marker: any) {
  selectedMarker.value = marker
  isModalVisible.value = true
}

const isModalVisible = ref(false)
const selectedMarker = ref({ title: '', address: '', inventory: [] })

onMounted(() => {
  fetchMaps()
})
</script>

<template>
  <GMapMap :center="center" :zoom="9" style="width: 100%; height: 100vh">
    <GMapCluster>
      <GMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :position="{ lat: marker.lat, lng: marker.lng }"
        :clickable="true"
        @click="onMarkerClick(marker)"
      />
    </GMapCluster>
    <Modal
      :isVisible="isModalVisible"
      :title="selectedMarker.title"
      :address="selectedMarker.address"
      :inventory="selectedMarker.inventory"
      @close="isModalVisible = false"
    />
  </GMapMap>
</template>
