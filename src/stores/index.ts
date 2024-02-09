import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchMaps } from '@/services/mapService'

interface MapPoint {
  lat: number
  lng: number
  title: string
  address: string
  id: number
}

export const useMapStore = defineStore('map', {
  state: () => ({
    center: ref({ lat: 47.151726, lng: 27.587914 }),
    markers: ref([] as MapPoint[])
  }),
  actions: {
    async fetchMaps() {
      try {
        const apiMapPoints = await fetchMaps()
        this.markers = apiMapPoints.map((item) => ({
          id: item.id,
          lat: parseFloat(item.lat),
          lng: parseFloat(item.lng),
          title: item.title,
          address: item.address
        }))
        console.log('Maps fetched successfully:', this.markers)
      } catch (error) {
        console.error('Failed to fetch maps:', error)
      }
    }
  }
})
