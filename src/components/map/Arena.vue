<template>
  <clipPath id="map-clip">
    <rect class="ground" :width="mapWidth" :height="mapHeight" />
  </clipPath>
  <rect class="ground" :width="mapWidth" :height="mapHeight" />
  <g clip-path="url(#map-clip)">
    <component v-for="cell in cells" :is="cell.component" :x="cell.x" :y="cell.y" />
  </g>
</template>

<script>
import FireCell from './FireCell.vue'
import ShadowCell from './ShadowCell.vue'
import WallCell from './WallCell.vue'
import WaterCell from './WaterCell.vue'
import { MAP_WIDTH, MAP_HEIGHT, SCALE } from '../../utils/constants'

export default {
  props: {
    map: { type: Array },
  },
  computed: {
    mapHeight: () => MAP_HEIGHT * SCALE,
    mapWidth: () => MAP_WIDTH * SCALE,
    cells() {
      const cells = []
      const components = {
        x: WallCell,
        w: WaterCell,
        f: FireCell,
        s: ShadowCell
      }
      this.map.forEach((line, y) => {
        [...line].forEach((type, x) => {
          const component = components[type]
          if (component) {
            cells.push({ component, x: (x + 1) * SCALE, y: (y + 1) * SCALE })
          }
        })
      })

      return cells
    }
  },
}
</script>

<style scoped>
.ground {
  fill: #111;
  rx: 2;
  x: 8;
  y: 8;
}
</style>
