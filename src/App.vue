<template>
  <BoxArena />
  <div
    v-if="error"
    class="box error"
  >
    An error occurred: {{ error.message }}
  </div>
</template>

<script>
import BoxArena from './components/BoxArena.vue'

export default {
  name: 'App',
  expose: [],
  components: { BoxArena },
  data: () => ({
    error: null,
  }),

  errorCaptured (errorCaptured) {
    this.error = errorCaptured
  },
}
</script>
