<script setup lang="ts">
  import { useMapStore } from '@/stores/index';
  import { onMounted, ref } from 'vue';

  const { center, markers, fetchMaps } = useMapStore();
  const openedMarkerID = ref(null);

  onMounted(() => {
    fetchMaps();
  });
</script>

<template>
  <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 100%; height: 100vh">
    <GMapCluster>
      <GMapMarker :key="index" v-for="(marker, index) in markers" :position="marker" :clickable="true">
        <GMapInfoWindow :opened="openedMarkerID === marker.id" :closeclick="true">
          <div>{{ marker.title }}</div>
          <div>{{ marker.address }}</div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapCluster>
  </GMapMap>

</template>
