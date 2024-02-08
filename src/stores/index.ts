import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

interface MapPoint {
  lat: number;
  lng: number;
  title:string;
  address:string;
  id:number;
}

export const useMapStore = defineStore('map', {
  state: () => ({
    center: ref({ lat: 47.1585, lng: 27.6014 }),
    markers: ref([] as MapPoint[]),
  }),
  actions: {
    async fetchMaps() {
      try {
        const response = await axios.get('https://stg-be.gocharge.tech:8443/api/pb/all-stations');
        const mapsData = response.data.data;

        if (Array.isArray(mapsData)) {
          this.markers = mapsData.map((item: { lat: string; lng: string, title:string; address:string; id:number }) => ({
            lat: parseFloat(item.lat),
            lng: parseFloat(item.lng),
            title: item.title,
            address:item.address,
            id: item.id
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
