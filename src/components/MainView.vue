<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 72"
    width="100%"
    height="100%"
  >
    <g
      id="bx-move"
      :style="{ transform: `translate(${bxX}px, ${bxY}px)` }"
    >
      <path
        id="boxer"
        :class="[...bxClassesD, ...bxClassesA]"
        d="M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6"
      />
    </g>
    <g
      id="rx-move"
      :style="{ transform: `translate(${rxX}px, ${rxY}px)` }"
    >
      <path
        id="roxer"
        :class="[...rxClassesD, ...rxClassesA]"
        d="M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'MainView',
  expose: [],
  data: () => ({
    bxX: 16,
    bxY: 32,
    rxX: 104,
    rxY: 32,
    bxClassesA: [],
    rxClassesA: [],
    bxClassesD: ['right'],
    rxClassesD: ['left'],
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
        this.bxY -= 8
        this.bxClassesD = ['up']
      }
      if (code == 'KeyD') {
        this.bxX += 8
        this.bxClassesD = ['right']
      }
      if (code == 'KeyS') {
        this.bxY += 8
        this.bxClassesD = ['down']
      }
      if (code == 'KeyA') {
        this.bxX -= 8
        this.bxClassesD = ['left']
      }
      if (code == 'KeyC') {
        this.bxClassesA = ['latt']
      }
      if (code == 'KeyV') {
        this.bxClassesA = ['ratt']
      }
      if (code == 'KeyB') {
        this.bxClassesA = ['lprot']
      }
      if (code == 'KeyN') {
        this.bxClassesA = ['rprot']
      }

      if (code == 'ArrowUp') {
        this.rxY -= 8
        this.rxClassesD = ['up']
      }
      if (code == 'ArrowRight') {
        this.rxX += 8
        this.rxClassesD = ['right']
      }
      if (code == 'ArrowDown') {
        this.rxY += 8
        this.rxClassesD = ['down']
      }
      if (code == 'ArrowLeft') {
        this.rxX -= 8
        this.rxClassesD = ['left']
      }
      if (code == 'Numpad1') {
        this.rxClassesA = ['latt']
      }
      if (code == 'Numpad2') {
        this.rxClassesA = ['ratt']
      }
      if (code == 'Numpad3') {
        this.rxClassesA = ['lprot']
      }
      if (code == 'NumpadSubtract') {
        this.rxClassesA = ['rprot']
      }
    },

    keyup ({ code }) {
      if ([ 'KeyC', 'KeyV', 'KeyB', 'KeyN' ].includes(code)) {
        this.bxClassesA = []
      }

      if ([ 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadSubtract' ].includes(code)) {
        this.rxClassesA = []
      }
    },
  },
}
</script>

<style scoped>
svg { background: #000; fill: #fff; }
path, g { transition: .1s; }
#boxer,#roxer {
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
</style>
