<template>
  <g :transform="`translate(${x} ${y})`">
    <rect>
      <animate attributeName="opacity" values="1;.2;1;.8;.2;.9;.2;.6;0;.3" dur="1.1" repeatCount="indefinite" />
    </rect>
    <circle id="fire-particle1">
      <animate attributeName="cx" values="0;1;0" dur="2" repeatCount="indefinite" />
      <animate attributeName="cy" values="8;1" dur=".5" repeatCount="indefinite" />
      <animate attributeName="r" values="1;0" dur=".5" repeatCount="indefinite" />
    </circle>
    <circle id="fire-particle2">
      <animate attributeName="cx" values="1;2;1" dur="1.75" repeatCount="indefinite" />
      <animate attributeName="cy" values="8;1" dur=".75" repeatCount="indefinite" />
      <animate attributeName="r" values="1;0" dur=".75" repeatCount="indefinite" />
    </circle>
    <circle id="fire-particle3">
      <animate attributeName="cx" values="0;1;0" dur="1.5" repeatCount="indefinite" />
      <animate attributeName="cy" values="6;-1" dur=".6" repeatCount="indefinite" />
      <animate attributeName="r" values="1;0" dur=".6" repeatCount="indefinite" />
    </circle>
    <use href="#fire-particle1" transform="translate(2 0)" />
    <use href="#fire-particle2" transform="translate(2 0)" />
    <use href="#fire-particle3" transform="translate(2 0)" />
    <use href="#fire-particle1" transform="translate(4 0)" />
    <use href="#fire-particle2" transform="translate(4 0)" />
    <use href="#fire-particle3" transform="translate(4 0)" />
    <use href="#fire-particle1" transform="translate(6 0)" />
    <use href="#fire-particle2" transform="translate(6 0)" />
    <use href="#fire-particle3" transform="translate(6 0)" />
  </g>
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
circle {
  fill: #820;
  filter: drop-shadow(0 0 1px #820);
}
rect {
  fill: #410;
  rx: 1;
  transform: translate(-1px, -1px);
  width: 10px;
  height: 10px;
}
</style>
