<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 72"
  >
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
    <path id="p1-health" class="health-bar fill" d="m4 4h32" /> <!--m4 4h{healthValue}-->

    <path class="health-bar" d="m124 4h-32" />
    <path id="p2-health" class="health-bar fill" d="m124 4h-32" /> <!--m124 4h-{healthValue}-->
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
    keydown ({ code }) {
      if (code == 'KeyW') {
        this.p1Y -= 8
        this.p1ClassesD = 'up'
      }
      if (code == 'KeyD') {
        this.p1X += 8
        this.p1ClassesD = 'right'
      }
      if (code == 'KeyS') {
        this.p1Y += 8
        this.p1ClassesD = 'down'
      }
      if (code == 'KeyA') {
        this.p1X -= 8
        this.p1ClassesD = 'left'
      }
      if (code == 'KeyC') {
        this.p1ClassesA = 'latt'
      }
      if (code == 'KeyV') {
        this.p1ClassesA = 'ratt'
      }
      if (code == 'KeyB') {
        this.p1ClassesA = 'lprot'
      }
      if (code == 'KeyN') {
        this.p1ClassesA = 'rprot'
      }

      if (code == 'ArrowUp') {
        this.p2Y -= 8
        this.p2ClassesD = 'up'
      }
      if (code == 'ArrowRight') {
        this.p2X += 8
        this.p2ClassesD = 'right'
      }
      if (code == 'ArrowDown') {
        this.p2Y += 8
        this.p2ClassesD = 'down'
      }
      if (code == 'ArrowLeft') {
        this.p2X -= 8
        this.p2ClassesD = 'left'
      }
      if (code == 'Numpad1') {
        this.p2ClassesA = 'latt'
      }
      if (code == 'Numpad2') {
        this.p2ClassesA = 'ratt'
      }
      if (code == 'Numpad3') {
        this.p2ClassesA = 'lprot'
      }
      if (code == 'NumpadSubtract') {
        this.p2ClassesA = 'rprot'
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
svg { background: #111; fill: #fff; }
path, g { transition: .06s; }
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
.latt {
  d: path('M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H9A1 1 0 0110 2V2A1 1 0 019 3H6A1 1 0 015 2M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6');
}
.ratt {
  d: path('M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2M5 6A1 1 0 016 5H9A1 1 0 0110 6V6A1 1 0 019 7H6A1 1 0 015 6');
}
.lprot {
  d: path('M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 1A1 1 0 016 0H6A1 1 0 017 1V3A1 1 0 016 4H6A1 1 0 015 3M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6');
}
.rprot {
  d: path('M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2M5 5A1 1 0 016 4H6A1 1 0 017 5V7A1 1 0 016 8H6A1 1 0 015 7');
}
.health-bar {
  stroke: #000;
  stroke-width: 2;
  stroke-linecap: round;
}
.health-bar.fill {
  stroke: #fff;
}
</style>
