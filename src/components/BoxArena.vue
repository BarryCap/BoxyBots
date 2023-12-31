<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
  >
    <rect class="ground" rx="2" x="8" y="8" :width="mapWidth" :height="mapHeight" />
    <BoxyBot :player="p1" />
    <BoxyBot :player="p2" />
    <clipPath id="p1H-clip">
      <rect x="4" y="3" width="32" height="2" rx="1" />
    </clipPath>
    <g clip-path="url(#p1H-clip)">
      <path class="health-bar" d="m4 4h32" />
      <path id="p1-health" class="health-bar fill" :d="`m4 4h${Math.max(p1.h, 0)}`" />
    </g>

    <clipPath id="p2H-clip">
      <rect x="92" y="3" width="32" height="2" rx="1" />
    </clipPath>
    <g clip-path="url(#p2H-clip)">
      <path class="health-bar" d="m124 4h-32" />
      <path id="p2-health" class="health-bar fill" :d="`m124 4h-${Math.max(p2.h, 0)}`" />
    </g>
  </svg>
</template>

<script>
import BoxyBot from './BoxyBot.vue'
import {
  ORIGIN_X, ORIGIN_Y, WIDTH, HEIGHT, MAP_WIDTH, MAP_HEIGHT, SCALE,
  KEY_TYPES, ACTIONS, MOVEMENTS, KEY_MAP,
} from '../utils/constants'
import { isAttackAverted, isAttackingBody, isFacingPlayer, isFacingWalls } from '../utils/conditions'

export default {
  components: { BoxyBot },
  data: () => ({
    p1: { name: 'p1', x: 2, y: 4, direction: 'right', action: '', h: 32 },
    p2: { name: 'p2', x: 13, y: 4, direction: 'left', action: '', h: 32 },
  }),

  created() {
    window.addEventListener('keyup', this.keyup)
    window.addEventListener('keydown', this.keydown)
  },

  beforeUnmount() {
    window.removeEventListener('keyup', this.keyup)
    window.removeEventListener('keydown', this.keydown)
  },

  computed: {
    viewBox: () => [ORIGIN_X, ORIGIN_Y, WIDTH, HEIGHT].map((d) => d*SCALE).join(' '),
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
        KEY_TYPES
          .filter((type) => KEY_MAP[player.name][type].includes(code))
          .forEach((type) => {
            if (MOVEMENTS.includes(type)) {
              player.direction = type
              if (this.isPathClearFor(player)) {
                switch (type) {
                  case 'up': return player.y--
                  case 'right': return player.x++
                  case 'down': return player.y++
                  case 'left': return player.x--
                }
              }
            } else {
              player.action = type
              if (type == 'lPunch' || type == 'rPunch') {
                this.attack(player)
              }
            }
          })
      })
    },

    keyup({ code }) {
      [this.p1, this.p2].forEach((player) => {
        if (ACTIONS.some((action) => KEY_MAP[player.name][action].includes(code))) {
          player.action = ''
        }
      })
    },
  },
}
</script>
