<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 72"
  >
    <rect class="ground" />
    <g
      id="p1-move"
      :style="{ transform: `translate(${p1X}px, ${p1Y}px)` }"
    >
      <path
        id="p1"
        :class="[p1ClassesD, p1ClassesA, p1H == 0 ? 'dead' : '']"
        d="M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6"
      />
    </g>
    <g
      id="p2-move"
      :style="{ transform: `translate(${p2X}px, ${p2Y}px)` }"
    >
      <path
        id="p2"
        :class="[p2ClassesD, p2ClassesA, p2H == 0 ? 'dead' : '']"
        d="M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6"
      />
    </g>
    <clipPath id="p1H-clip">
      <rect x="4" y="3" width="32" height="2" rx="1" />
    </clipPath>
    <g clip-path="url(#p1H-clip)">
      <path class="health-bar" d="m4 4h32" />
      <path id="p1-health" class="health-bar fill" :style="{ d: `path('m4 4h${p1H}')` }" />
    </g>

    <clipPath id="p2H-clip">
      <rect x="92" y="3" width="32" height="2" rx="1" />
    </clipPath>
    <g clip-path="url(#p2H-clip)">
      <path class="health-bar" d="m124 4h-32" />
      <path id="p2-health" class="health-bar fill" :style="{ d: `path('m124 4h-${p2H}')` }" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'MainView',
  expose: [],
  data: () => ({
    p1X: 16,
    p1Y: 32,
    p2X: 104,
    p2Y: 32,
    p1H: 32,
    p2H: 32,
    p1ClassesA: '',
    p2ClassesA: '',
    p1ClassesD: 'right',
    p2ClassesD: 'left',
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
    damage (player, type) {
      const otherPlayer = player == 1 ? 2 : 1
      if (this[`p${player}ClassesD`] == 'up' && !(this[`p${otherPlayer}Y`] == this[`p${player}Y`] -8 && this[`p${player}X`] == this[`p${otherPlayer}X`])) {
        return 1
      }
      if (this[`p${player}ClassesD`] == 'down' && !(this[`p${otherPlayer}Y`] == this[`p${player}Y`] +8 && this[`p${player}X`] == this[`p${otherPlayer}X`])) {
        return 1
      }
      if (this[`p${player}ClassesD`] == 'left' && !(this[`p${otherPlayer}X`] == this[`p${player}X`] -8 && this[`p${player}Y`] == this[`p${otherPlayer}Y`])) {
        return 1
      }
      if (this.p1ClassesD == this.p2ClassesD) {
        return 0
      }
      if (this[`p${player}ClassesD`] == 'right' && this[`p${otherPlayer}ClassesD`] == 'left' && !(this[`p${otherPlayer}X`] == this[`p${player}X`] +8 && this[`p${player}Y`] == this[`p${otherPlayer}Y`])) {
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
      if (repeat) return
      if (code == 'KeyW') {
        this.p1ClassesD = 'up'
        if (this.p1Y > 8 && !(this.p2Y == this.p1Y -8 && this.p1X == this.p2X)) {
          this.p1Y -= 8
        }
      }
      if (code == 'KeyD') {
        this.p1ClassesD = 'right'
        if (this.p1X < 112 && !(this.p2X == this.p1X +8 && this.p1Y == this.p2Y)) {
          this.p1X += 8
        }
      }
      if (code == 'KeyS') {
        this.p1ClassesD = 'down'
        if (this.p1Y < 56 && !(this.p2Y == this.p1Y +8 && this.p1X == this.p2X)) {
          this.p1Y += 8
        }
      }
      if (code == 'KeyA') {
        this.p1ClassesD = 'left'
        if (this.p1X > 8 && !(this.p2X == this.p1X -8 && this.p1Y == this.p2Y)) {
          this.p1X -= 8
        }
      }
      if (code == 'KeyC') {
        this.p1ClassesA = 'lPunch'
        this.p2H -= this.damage(1, 'lPunch')
        if (this.p1ClassesD == 'right' && this.p2X == this.p1X +8 && this.p1Y == this.p2Y && !(this.p2ClassesA == 'rDefense')) {
          this.p2H -= 1
        }
        if (this.p1ClassesD == 'left' && this.p2X == this.p1X -8 && this.p1Y == this.p2Y) {
          this.p2H -= 2
        }
      }
      if (code == 'KeyV') {
        this.p1ClassesA = 'rPunch'
        if (this.p1ClassesD == 'right' && this.p2X == this.p1X +8 && this.p1Y == this.p2Y && !(this.p2ClassesA == 'lDefense')) {
          this.p2H -= 1
        }
        if (this.p1ClassesD == 'left' && this.p2X == this.p1X -8 && this.p1Y == this.p2Y) {
          this.p2H -= 2
        }
      }
      if (code == 'KeyB') {
        this.p1ClassesA = 'lDefense'
      }
      if (code == 'KeyN') {
        this.p1ClassesA = 'rDefense'
      }

      if (code == 'ArrowUp' || code == 'KeyP') {
        this.p2ClassesD = 'up'
        if (this.p2Y > 8 && !(this.p1Y == this.p2Y -8 && this.p2X == this.p1X)) {
          this.p2Y -= 8
        }
      }
      if (code == 'ArrowRight' || code == 'Quote') {
        this.p2ClassesD = 'right'
        if (this.p2X < 112 && !(this.p1X == this.p2X +8 && this.p2Y == this.p1Y)) {
          this.p2X += 8
        }
      }
      if (code == 'ArrowDown' || code == 'Semicolon') {
        this.p2ClassesD = 'down'
        if (this.p2Y < 56 && !(this.p1Y == this.p2Y +8 && this.p2X == this.p1X)) {
          this.p2Y += 8
        }
      }
      if (code == 'ArrowLeft' || code == 'KeyL') {
        this.p2ClassesD = 'left'
        if (this.p2X > 8 && !(this.p1X == this.p2X -8 && this.p2Y == this.p1Y)) {
          this.p2X -= 8
        }
      }
      if (code == 'Numpad1') {
        this.p2ClassesA = 'lPunch'
      }
      if (code == 'Numpad2') {
        this.p2ClassesA = 'rPunch'
      }
      if (code == 'Numpad3') {
        this.p2ClassesA = 'lDefense'
      }
      if (code == 'NumpadSubtract') {
        this.p2ClassesA = 'rDefense'
      }
    },

    keyup ({ code }) {
      if ([ 'KeyC', 'KeyV', 'KeyB', 'KeyN' ].includes(code)) {
        this.p1ClassesA = ''
      }

      if ([ 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadSubtract' ].includes(code)) {
        this.p2ClassesA = ''
      }
    },
  },
}
</script>
