import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

interface MapPoint {
  lat: number;
  lng: number;
}

export const useMapStore = defineStore('map', {
  state: () => ({
    center: ref({ lat: 46, lng: 25 }),
    markers: ref([] as MapPoint[]),
  }),
  actions: {
    async fetchMaps() {
      try {
        const response = await axios.get('https://stg-be.gocharge.tech:8443/api/pb/all-stations');
        const mapsData = response.data.data;

        if (Array.isArray(mapsData)) {
          this.markers = mapsData.map((item: { lat: string; lng: string }) => ({
            lat: parseFloat(item.lat),
            lng: parseFloat(item.lng),
          })) as MapPoint[];
          console.log("markers", this.markers);
        } else {
          console.error('Invalid data format.');
        }
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
  },
});
