<script setup lang="ts">
  import { useMapStore } from '@/stores/index';
  import { onMounted } from 'vue';

  const { center, markers, fetchMaps } = useMapStore();

  onMounted(() => {
    fetchMaps();
  });
</script>


<template>
  <GMapMap :center="center" :zoom="9" map-type-id="terrain" style="width: 100%; height: 100vh">
    <GMapMarker :key="index" v-for="(marker, index) in markers" :position="marker"  :clickable="true"/>
  </GMapMap>
  <router-view></router-view>
</template>