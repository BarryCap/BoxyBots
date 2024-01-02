<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
  >
    <ArenaVue :map="map" />
    <BoxyBot :player="p1" />
    <BoxyBot :player="p2" />
    <clipPath id="p1H-clip">
      <rect x="4" y="3" width="32" height="2" rx="1" />
    </clipPath>
    <g clip-path="url(#p1H-clip)">
      <path class="health-bar" d="m4 4h32" />
      <path class="health-bar" :d="`m4 4h${Math.max(p1.h, 0)}`" :style="{ stroke: p1.color }" />
    </g>

    <clipPath id="p2H-clip">
      <rect x="92" y="3" width="32" height="2" rx="1" />
    </clipPath>
    <g clip-path="url(#p2H-clip)">
      <path class="health-bar" d="m124 4h-32" />
      <path class="health-bar" :d="`m124 4h-${Math.max(p2.h, 0)}`" :style="{ stroke: p2.color }" />
    </g>
  </svg>
</template>

<script>
import BoxyBot from './components/BoxyBot.vue'
import ArenaVue from './components/map/Arena.vue'
import {
  MIN_X, MIN_Y, WIDTH, HEIGHT, MAP_WIDTH, MAP_HEIGHT, SCALE,
  KEY_TYPES, MOVEMENTS, KEY_MAP,
  ACTION_DURATION, ACTION_RELOAD,
  DEFAULT_P1, DEFAULT_P2,
} from './utils/constants'
import { isAttackAverted, isAttackingBody, isFacingPlayer, isFacingWalls } from './utils/conditions'
import { MAP_1 } from './utils/maps'

export default {
  components: { BoxyBot, ArenaVue },
  data: () => ({
    map: MAP_1,
    p1: DEFAULT_P1,
    p2: DEFAULT_P2,
  }),

  created() {
    window.addEventListener('keydown', this.keydown)
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this.keydown)
  },

  computed: {
    viewBox: () => [MIN_X, MIN_Y, WIDTH, HEIGHT].map((d) => d*SCALE).join(' '),
    mapHeight: () => MAP_HEIGHT * SCALE,
    mapWidth: () => MAP_WIDTH * SCALE,
    scale:() => SCALE
  },

  methods: {
    getOtherPlayer(player) {
      return player.name == 'p1' ? this.p2 : this.p1
    },
    isPathClearFor(player) {
      return !isFacingWalls(player) && !isFacingPlayer(player, this.getOtherPlayer(player))
    },
    attack(attackingPlayer) {
      const defendingPlayer = this.getOtherPlayer(attackingPlayer)
      if (isFacingPlayer(attackingPlayer, defendingPlayer)) {
        if (isAttackAverted(attackingPlayer, defendingPlayer)) return
        // in case of body attack, one more damage
        if (isAttackingBody(attackingPlayer, defendingPlayer)) {
          defendingPlayer.h--
        }
        defendingPlayer.h--
      }
    },
    keydown({ code, repeat }) {
      // cancel repeated actions
      if (repeat) return

      [this.p1, this.p2].forEach((player) => {
        const keyPressType = KEY_TYPES.find((type) => KEY_MAP[player.name][type].includes(code))
        if (keyPressType) {
          if (MOVEMENTS.includes(keyPressType)) {
            player.direction = keyPressType
            if (this.isPathClearFor(player)) {
              switch (keyPressType) {
                case 'up': return player.y--
                case 'right': return player.x++
                case 'down': return player.y++
                case 'left': return player.x--
              }
            }
          } else {
            if (player.isReloading) return
            player.action = `${player.nextArm}${keyPressType}`
            player.nextArm = player.nextArm == 'l' ? 'r' : 'l'
            player.isReloading = true
            setTimeout(() => player.action = '', ACTION_DURATION)
            setTimeout(() => player.isReloading = false, ACTION_RELOAD)
            if (keyPressType == 'Punch') {
              this.attack(player)
            }
          }
        }
      })
    },
  },
}
</script>
