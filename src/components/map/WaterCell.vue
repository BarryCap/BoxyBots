<template>
  <rect :x="x" :y="y" />
</template>

<script>
export default {
  props: {
    x: { type: String },
    y: { type: String },
  },
}
</script>

<style scoped>
rect {
  fill: #023;
  rx: 1;
  transform: translate(-1px, -1px);
  width: 10px;
  height: 10px;
}
</style>
