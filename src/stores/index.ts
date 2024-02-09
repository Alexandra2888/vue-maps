import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

interface MapPoint {
  lat: number;
  lng: number;
  title:string;
  address:string;
  id:number;
};

export const useMapStore = defineStore('map', {
  state: () => ({
    center: ref({ lat: 47.151726, lng: 27.587914 }),
    markers: ref([] as MapPoint[]),
  }),
  actions: {
    async fetchMaps() {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        this.markers = response.data.data.map(item => ({
          id: item.id,
          lat: parseFloat(item.lat), // Ensure latitude is a number
          lng: parseFloat(item.lng), // Ensure longitude is a number
          title: item.title,
          address: item.address
        }));
      } catch (error) {
        console.error("Failed to fetch maps:", error);
      }
    }
  },
});



