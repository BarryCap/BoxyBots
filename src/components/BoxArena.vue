<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 72"
  >
    <rect class="ground" />
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

export default {
  components: { BoxyBot },
  data: () => ({
    p1: { name: 'p1', x: 16, y: 32, classD: 'right', classA: '', h: 32 },
    p2: { name: 'p2', x: 104, y: 32, classD: 'left', classA: '', h: 32 },
  }),

  created () {
    window.addEventListener('keyup', this.keyup)
    window.addEventListener('keydown', this.keydown)
  },

  beforeUnmount () {
    window.removeEventListener('keyup', this.keyup)
    window.addEventListener('keydown', this.keydown)
  },

  methods: {
    damage (playerId, type) {
      const player = playerId == 1 ? this.p1 : this.p2
      const otherPlayer = playerId == 1 ? this.p2 : this.p1
      if (player.classD == 'up' && !(otherPlayer.y == player.y -8 && player.x == otherPlayer.x)) {
        return 1
      }
      if (player.classD == 'down' && !(otherPlayer.y == player.y +8 && player.x == otherPlayer.x)) {
        return 1
      }
      if (player.classD == 'left' && !(otherPlayer.x == player.x -8 && player.y == otherPlayer.y)) {
        return 1
      }
      if (player.classD == otherPlayer.classD) {
        return 0
      }
      if (player.classD == 'right' && otherPlayer.classD == 'left' && !(otherPlayer.x == player.x +8 && player.y == otherPlayer.y)) {
        if ('lPunch') {
          if ('rDefense') {
            return 0
          } else {
            return 1
          }
        }
      }
    },
    keydown ({ code, repeat }) {
      // cancel repeated actions
      if (repeat) return

      if (code == 'KeyW') {
        this.p1.classD = 'up'
        if (this.p1.y > 8 && !(this.p2.y == this.p1.y -8 && this.p1.x == this.p2.x)) {
          this.p1.y -= 8
        }
      }
      if (code == 'KeyD') {
        this.p1.classD = 'right'
        if (this.p1.x < 112 && !(this.p2.x == this.p1.x +8 && this.p1.y == this.p2.y)) {
          this.p1.x += 8
        }
      }
      if (code == 'KeyS') {
        this.p1.classD = 'down'
        if (this.p1.y < 56 && !(this.p2.y == this.p1.y +8 && this.p1.x == this.p2.x)) {
          this.p1.y += 8
        }
      }
      if (code == 'KeyA') {
        this.p1.classD = 'left'
        if (this.p1.x > 8 && !(this.p2.x == this.p1.x -8 && this.p1.y == this.p2.y)) {
          this.p1.x -= 8
        }
      }
      if (code == 'KeyC') {
        this.p1.classA = 'lPunch'
        this.p2.h -= this.damage(1, 'lPunch')
        if (this.p1.classD == 'right' && this.p2.x == this.p1.x +8 && this.p1.y == this.p2.y && !(this.p2.classA == 'rDefense')) {
          this.p2.h -= 1
        }
        if (this.p1.classD == 'left' && this.p2.x == this.p1.x -8 && this.p1.y == this.p2.y) {
          this.p2.h -= 2
        }
      }
      if (code == 'KeyV') {
        this.p1.classA = 'rPunch'
        if (this.p1.classD == 'right' && this.p2.x == this.p1.x +8 && this.p1.y == this.p2.y && !(this.p2.classA == 'lDefense')) {
          this.p2.h -= 1
        }
        if (this.p1.classD == 'left' && this.p2.x == this.p1.x -8 && this.p1.y == this.p2.y) {
          this.p2.h -= 2
        }
      }
      if (code == 'KeyB') {
        this.p1.classA = 'lDefense'
      }
      if (code == 'KeyN') {
        this.p1.classA = 'rDefense'
      }

      if (code == 'ArrowUp' || code == 'KeyP') {
        this.p2.classD = 'up'
        if (this.p2.y > 8 && !(this.p1.y == this.p2.y -8 && this.p2.x == this.p1.x)) {
          this.p2.y -= 8
        }
      }
      if (code == 'ArrowRight' || code == 'Quote') {
        this.p2.classD = 'right'
        if (this.p2.x < 112 && !(this.p1.x == this.p2.x +8 && this.p2.y == this.p1.y)) {
          this.p2.x += 8
        }
      }
      if (code == 'ArrowDown' || code == 'Semicolon') {
        this.p2.classD = 'down'
        if (this.p2.y < 56 && !(this.p1.y == this.p2.y +8 && this.p2.x == this.p1.x)) {
          this.p2.y += 8
        }
      }
      if (code == 'ArrowLeft' || code == 'KeyL') {
        this.p2.classD = 'left'
        if (this.p2.x > 8 && !(this.p1.x == this.p2.x -8 && this.p2.y == this.p1.y)) {
          this.p2.x -= 8
        }
      }
      if (code == 'Numpad1') {
        this.p2.classA = 'lPunch'
      }
      if (code == 'Numpad2') {
        this.p2.classA = 'rPunch'
      }
      if (code == 'Numpad3') {
        this.p2.classA = 'lDefense'
      }
      if (code == 'NumpadSubtract') {
        this.p2.classA = 'rDefense'
      }
    },

    keyup ({ code }) {
      if ([ 'KeyC', 'KeyV', 'KeyB', 'KeyN' ].includes(code)) {
        this.p1.classA = ''
      }

      if ([ 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadSubtract' ].includes(code)) {
        this.p2.classA = ''
      }
    },
  },
}
</script>
