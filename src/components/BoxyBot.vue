<template>
  <g
    :style="{
      fill: player.color,
      filter: `drop-shadow(0 0 1px ${player.color}4)`,
      transform: `translate(${player.x * scale}px, ${player.y * scale}px)`,
    }"
  >
    <path
      :id="player.name"
      :class="classes"
      :d="`${body}${leftArm}${rightArm}`"
    />
  </g>
</template>

<script>
import {
  FIRE_DAMAGE_INTERVAL,
  SCALE,
  PATH_BODY,
  PATH_LEFT_ARM_NORMAL,
  PATH_LEFT_ARM_PUNCH,
  PATH_LEFT_ARM_DEFENSE,
  PATH_RIGHT_ARM_NORMAL,
  PATH_RIGHT_ARM_PUNCH,
  PATH_RIGHT_ARM_DEFENSE,
} from '../utils/constants'

export default {
  props: { player: { type: Object }},

  data: () => ({ interval: null }),

  watch: {
    'player.state'(state) {
      if (state === 'fire') {
        this.interval = setInterval(() => {
          this.player.h--
        }, FIRE_DAMAGE_INTERVAL)
      } else {
        clearInterval(this.interval)
      }
    }
  },

  computed: {
    classes() {
      return [this.player.direction, this.player.h <= 0 ? 'dead' : '', this.player.state ?? '']
    },
    scale: () => SCALE,
    body: () => PATH_BODY,
    leftArm() {
      switch (this.player.action) {
        case 'lPunch': return PATH_LEFT_ARM_PUNCH
        case 'lDefense': return PATH_LEFT_ARM_DEFENSE
        default: return PATH_LEFT_ARM_NORMAL
      }
    },
    rightArm() {
      switch (this.player.action) {
        case 'rPunch': return PATH_RIGHT_ARM_PUNCH
        case 'rDefense': return PATH_RIGHT_ARM_DEFENSE
        default: return PATH_RIGHT_ARM_NORMAL
      }
    },
  }
}
</script>
<style scoped>
.dead { opacity: .1; }
.fire { filter: blur(1px); }

.up { transform: rotate(-90deg); }
.right { transform: none; }
.down { transform: rotate(90deg); }
.left { transform: rotate(-180deg); }
</style>
