<template>
  <GameScene />
  <div
    v-if="error"
    class="box error"
  >
    An error occurred: {{ error.message }}
  </div>
</template>

<script>
import GameScene from './GameScene.vue'

export default {
  name: 'App',
  expose: [],
  components: { GameScene },
  data: () => ({
    error: null,
  }),

  errorCaptured (errorCaptured) {
    this.error = errorCaptured
  },
}
</script>
