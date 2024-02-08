<script setup lang="ts">
import { useMapStore } from '@/stores/index';
import { ref, onMounted } from 'vue';

const { center, markers, fetchMaps } = useMapStore();
const openedMarkerID = ref<number | null>(null);

function openMarker(index:any) {
  openedMarkerID.value = index;
}

onMounted(() => {
  fetchMaps();
});
</script>

<template>
  <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 100%; height: 100vh">
   <GMapCluster>
<GMapMarker :key="index" v-for="(marker, index) in markers" :position="marker" :clickable="true" @click="openMarker(index)">
    <GMapInfoWindow :opened="openedMarkerID === index" :closeclick="true" @closeclick="openedMarkerID = null">
        <div class="w-[300px] h-[300px] bg-slate-300 text-black">
            <div class="text-xl font-semibold uppercase">
              {{ marker.title }}</div>
            <div>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5 -ms-1 me-2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
            </svg>
            </span>
            <span>{{ marker.address }}</span>
          </div>
          <div>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5 me-2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"></path></svg>
            </span>
            <span>USB-C - Ligntning - Mini USB</span>
          </div>
        </div>
    </GMapInfoWindow>
</GMapMarker>
</GMapCluster>
  </GMapMap>
</template>


