<template>
  <rect :x="x" :y="y" />
</template>

<script>
export default {
  props: {
    x: { type: Number },
    y: { type: Number },
  },
}
</script>

<style scoped>
rect {
  fill: #080808;
  rx: 1;
  transform: translate(-1px, -1px);
  width: 10px;
  height: 10px;
}
</style>
