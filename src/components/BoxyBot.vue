<template>
  <g
    :id="`${player.name}-move`"
    :style="{ transform: `translate(${player.x}px, ${player.y}px)` }"
  >
    <path
      :id="player.name"
      :class="classes"
      d="
        M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6
        M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2
        M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6
      "
    />
  </g>
</template>

<script>
export default {
  props: {
    player: { type: Object },
  },

  computed: {
    classes() {
      return [this.player.classD, this.player.classA, this.player.h <= 0 ? 'dead' : '']
    }
  }
}
</script>
