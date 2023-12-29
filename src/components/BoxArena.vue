<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
  >
    <rect class="ground" :style="{ width: mapWidth*scale, height: mapHeight*scale }" />
    <BoxyBot :player="p1" />
    <BoxyBot :player="p2" />
    <clipPath id="p1H-clip">
      <rect x="4" y="3" width="32" height="2" rx="1" />
    </clipPath>
    <g clip-path="url(#p1H-clip)">
      <path class="health-bar" d="m4 4h32" />
      <path id="p1-health" class="health-bar fill" :style="{ d: `path('m4 4h${p1.h}')` }" />
    </g>

    <clipPath id="p2H-clip">
      <rect x="92" y="3" width="32" height="2" rx="1" />
    </clipPath>
    <g clip-path="url(#p2H-clip)">
      <path class="health-bar" d="m124 4h-32" />
      <path id="p2-health" class="health-bar fill" :style="{ d: `path('m124 4h-${p2.h}')` }" />
    </g>
  </svg>
</template>

<script>
import BoxyBot from './BoxyBot.vue'
import { ORIGIN_X, ORIGIN_Y, WIDTH, HEIGHT, SCALE } from '../utils/constants'

export default {
  components: { BoxyBot },
  data: () => ({
    p1: { name: 'p1', x: 2, y: 4, classD: 'right', action: '', h: 32 },
    p2: { name: 'p2', x: 13, y: 4, classD: 'left', action: '', h: 32 },
  }),

  created() {
    window.addEventListener('keyup', this.keyup)
    window.addEventListener('keydown', this.keydown)
  },

  beforeUnmount() {
    window.removeEventListener('keyup', this.keyup)
    window.addEventListener('keydown', this.keydown)
  },

  computed: {
    viewBox: () => [ORIGIN_X, ORIGIN_Y, WIDTH, HEIGHT].map((d) => d*SCALE).join(' '),
    mapHeight: () => HEIGHT - 2,
    mapWidth: () => WIDTH - 2,
    scale:() => SCALE
  },

  methods: {
    isPathClearFor(player) {
      const otherPlayer = player.name == 'p1' ? this.p2 : this.p1
      return !this.isFacingWalls(player) && !this.isFacingPlayer(player, otherPlayer)
    },
    isFacingWalls(player) {
      switch (player.classD) {
        case 'up': return player.y <= ORIGIN_Y + 1
        case 'right': return player.x >= this.mapWidth
        case 'down': return player.y >= this.mapHeight
        case 'left': return player.x <= ORIGIN_X + 1
      }
    },
    isFacingPlayer(player, otherPlayer) {
      switch (player.classD) {
        case 'up': return otherPlayer.y == player.y -1 && player.x == otherPlayer.x
        case 'right': return otherPlayer.x == player.x +1 && player.y == otherPlayer.y
        case 'down': return otherPlayer.y == player.y +1 && player.x == otherPlayer.x
        case 'left': return otherPlayer.x == player.x -1 && player.y == otherPlayer.y
      }
    },
    attack(attackingPlayer, defendingPlayer) {
      if (this.isFacingPlayer(attackingPlayer, defendingPlayer)) {
        defendingPlayer.h--
      }
    },
    keydown({ code, repeat }) {
      // cancel repeated actions
      if (repeat) return

      if (code == 'KeyW') {
        this.p1.classD = 'up'
        if (this.isPathClearFor(this.p1)) this.p1.y -= 1
      }
      if (code == 'KeyD') {
        this.p1.classD = 'right'
        if (this.isPathClearFor(this.p1)) this.p1.x += 1
      }
      if (code == 'KeyS') {
        this.p1.classD = 'down'
        if (this.isPathClearFor(this.p1)) this.p1.y += 1
      }
      if (code == 'KeyA') {
        this.p1.classD = 'left'
        if (this.isPathClearFor(this.p1)) this.p1.x -= 1
      }
      if (code == 'KeyC') {
        this.p1.action = 'lPunch'
        this.attack(this.p1, this.p2)
      }
      if (code == 'KeyV') {
        this.p1.action = 'rPunch'
        this.attack(this.p1, this.p2)
      }
      if (code == 'KeyB') {
        this.p1.action = 'lDefense'
      }
      if (code == 'KeyN') {
        this.p1.action = 'rDefense'
      }

      if (code == 'ArrowUp' || code == 'KeyP') {
        this.p2.classD = 'up'
        if (this.isPathClearFor(this.p2)) this.p2.y -= 1
      }
      if (code == 'ArrowRight' || code == 'Quote') {
        this.p2.classD = 'right'
        if (this.isPathClearFor(this.p2)) this.p2.x += 1
      }
      if (code == 'ArrowDown' || code == 'Semicolon') {
        this.p2.classD = 'down'
        if (this.isPathClearFor(this.p2)) this.p2.y += 1
      }
      if (code == 'ArrowLeft' || code == 'KeyL') {
        this.p2.classD = 'left'
        if (this.isPathClearFor(this.p2)) this.p2.x -= 1
      }
      if (code == 'Numpad1') {
        this.p2.action = 'lPunch'
        this.attack(this.p2, this.p1)
      }
      if (code == 'Numpad2') {
        this.p2.action = 'rPunch'
        this.attack(this.p2, this.p1)
      }
      if (code == 'Numpad3') {
        this.p2.action = 'lDefense'
      }
      if (code == 'NumpadSubtract') {
        this.p2.action = 'rDefense'
      }
    },

    keyup({ code }) {
      if ([ 'KeyC', 'KeyV', 'KeyB', 'KeyN' ].includes(code)) {
        this.p1.action = ''
      }

      if ([ 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadSubtract' ].includes(code)) {
        this.p2.action = ''
      }
    },
  },
}
</script>
