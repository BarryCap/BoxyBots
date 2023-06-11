<template>
  <MainView />
  <div
    v-if="error"
    class="box error"
  >
    An error occurred: {{ error.message }}
  </div>
</template>

<script>
import MainView from './components/MainView.vue'

export default {
  name: 'App',
  expose: [],
  components: { MainView },
  data: () => ({
    error: null,
  }),

  errorCaptured (errorCaptured) {
    this.error = errorCaptured
  },
}
</script>
