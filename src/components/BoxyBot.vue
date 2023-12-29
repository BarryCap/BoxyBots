<template>
  <g
    :id="`${player.name}-move`"
    :style="{ transform: `translate(${player.x * scale}px, ${player.y * scale}px)` }"
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
  props: {
    player: { type: Object },
  },

  computed: {
    classes() {
      return [this.player.classD, this.player.h <= 0 ? 'dead' : '']
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
