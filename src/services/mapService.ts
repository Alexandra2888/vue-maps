import axios from 'axios'

interface ApiMapPoint {
  lat: string
  lng: string
  title: string
  address: string
  id: number
}

export async function fetchMaps(): Promise<ApiMapPoint[]> {
  const response = await axios.get('https://stg-be.gocharge.tech:8443/api/pb/all-stations')
  return response.data.data as ApiMapPoint[]
}
