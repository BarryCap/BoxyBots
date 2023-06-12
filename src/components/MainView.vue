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
        :class="[p1ClassesD, p1ClassesA]"
        d="M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6"
      />
    </g>
    <g
      id="p2-move"
      :style="{ transform: `translate(${p2X}px, ${p2Y}px)` }"
    >
      <path
        id="p2"
        :class="[p2ClassesD, p2ClassesA]"
        d="M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6"
      />
    </g>
    <path class="health-bar" d="m4 4h32" />
    <path id="p1-health" class="health-bar fill" d="m4 4h32" /> <!--`m4 4h${p1H}`-->

    <path class="health-bar" d="m124 4h-32" />
    <path id="p2-health" class="health-bar fill" d="m124 4h-32" /> <!--`m124 4h-${p2H}`-->
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
      }
      if (code == 'KeyV') {
        this.p1ClassesA = 'rPunch'
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

<style scoped>
svg { background: #000; fill: #fff; }
path, g { transition: .06s; }
.ground {
  fill: #111;
  rx: 2;
  x: 8;
  y: 8;
  width: 112px;
  height: 56px;
}
#p1, #p2 {
  transform-origin: 4px 4px;
}
.up {
  transform: rotate(-90deg);
}
.right {
  transform: none;
}
.down {
  transform: rotate(90deg);
}
.left {
  transform: rotate(-180deg);
}
.lPunch {
  d: path('M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H9A1 1 0 0110 2V2A1 1 0 019 3H6A1 1 0 015 2M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6');
}
.rPunch {
  d: path('M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2M5 6A1 1 0 016 5H9A1 1 0 0110 6V6A1 1 0 019 7H6A1 1 0 015 6');
}
.lDefense {
  d: path('M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 1A1 1 0 016 0H6A1 1 0 017 1V3A1 1 0 016 4H6A1 1 0 015 3M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6');
}
.rDefense {
  d: path('M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2M5 5A1 1 0 016 4H6A1 1 0 017 5V7A1 1 0 016 8H6A1 1 0 015 7');
}
.health-bar {
  stroke: #111;
  stroke-width: 2;
  stroke-linecap: round;
}
.health-bar.fill {
  stroke: #fff;
}
</style>
