<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon'

const users = ref([])
const error = ref(null)
const mapDiv = ref(null)
let map

const baseURL = 'http://localhost:8000' 

async function fetchUsers() {
  try {
    const response = await axios.get(`${baseURL}/api/users`)
    users.value = response.data

    for (const user of users.value) {
      addMarker(user.location.longitude, user.location.latitude)
    }
  } catch (err) {
    error.value = err.message
  }
}

function addMarker(lon, lat) {
  const marker = new Feature({
    geometry: new Point([lon, lat])
  })

  marker.setStyle(
    new Style({
      image: new Icon({
        src: '/img/logo.png',
        scale:0.1 // replace with the path to your icon
      }),
    })
  )

  const vectorSource = new VectorSource({
    features: [marker],
  })

  const markerVectorLayer = new VectorLayer({
    source: vectorSource,
  })

  map.addLayer(markerVectorLayer)
}

onMounted(() => {
  fetchUsers()
  map = new Map({
    target: mapDiv.value,
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: [100000, 1000000],
      zoom: 5,
    }),
  })
  addMarker(100000, 1000000)
})
</script>

<template>
  <div class="main-container">
    <div ref="mapDiv" class="map"></div>
    <!-- Rest of your template -->
  </div>
</template>

<style>
.content {
  height: 100%;
}
.map {
  width: 100%;
  height: 790px;
}
</style>
