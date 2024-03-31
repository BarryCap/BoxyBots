<template>
  <g :transform="`translate(${x} ${y})`">
    <rect>
      <animate attributeName="opacity" values="1;.2;1;.8;.2;.9;.2;.6;0;.3" dur="1.1" repeatCount="indefinite" />
    </rect>
    <circle>
      <animate attributeName="cx" values="0;1;0" dur="2" repeatCount="indefinite" />
      <animate attributeName="cy" values="8;1" dur=".5" repeatCount="indefinite" />
      <animate attributeName="r" values="1;0" dur=".5" repeatCount="indefinite" />
    </circle>
    <circle>
      <animate attributeName="cx" values="1;2;1" dur="1.75" repeatCount="indefinite" />
      <animate attributeName="cy" values="8;1" dur=".75" repeatCount="indefinite" />
      <animate attributeName="r" values="1;0" dur=".75" repeatCount="indefinite" />
    </circle>
    <circle>
      <animate attributeName="cx" values="0;1;0" dur="1.5" repeatCount="indefinite" />
      <animate attributeName="cy" values="6;-1" dur=".6" repeatCount="indefinite" />
      <animate attributeName="r" values="1;0" dur=".6" repeatCount="indefinite" />
    </circle>
    <g transform="translate(2 0)">
      <circle>
        <animate attributeName="cx" values="0;1;0" dur="1.95" repeatCount="indefinite" />
        <animate attributeName="cy" values="8;1" dur=".45" repeatCount="indefinite" />
        <animate attributeName="r" values="1;0" dur=".45" repeatCount="indefinite" />
      </circle>
      <circle>
        <animate attributeName="cx" values="1;2;1" dur="1.7" repeatCount="indefinite" />
        <animate attributeName="cy" values="8;1" dur=".7" repeatCount="indefinite" />
        <animate attributeName="r" values="1;0" dur=".7" repeatCount="indefinite" />
      </circle>
      <circle>
        <animate attributeName="cx" values="0;1;0" dur="1.45" repeatCount="indefinite" />
        <animate attributeName="cy" values="6;-1" dur=".55" repeatCount="indefinite" />
        <animate attributeName="r" values="1;0" dur=".55" repeatCount="indefinite" />
      </circle>
    </g>
    <g transform="translate(4 0)">
      <circle>
        <animate attributeName="cx" values="0;1;0" dur="2.05" repeatCount="indefinite" />
        <animate attributeName="cy" values="8;1" dur=".65" repeatCount="indefinite" />
        <animate attributeName="r" values="1;0" dur=".65" repeatCount="indefinite" />
      </circle>
      <circle>
        <animate attributeName="cx" values="1;2;1" dur="1.8" repeatCount="indefinite" />
        <animate attributeName="cy" values="8;1" dur=".8" repeatCount="indefinite" />
        <animate attributeName="r" values="1;0" dur=".8" repeatCount="indefinite" />
      </circle>
      <circle>
        <animate attributeName="cx" values="0;1;0" dur="1.55" repeatCount="indefinite" />
        <animate attributeName="cy" values="6;-1" dur=".4" repeatCount="indefinite" />
        <animate attributeName="r" values="1;0" dur=".4" repeatCount="indefinite" />
      </circle>
    </g>
    <g transform="translate(6 0)">
      <circle>
        <animate attributeName="cx" values="0;1;0" dur="2.1" repeatCount="indefinite" />
        <animate attributeName="cy" values="8;1" dur=".6" repeatCount="indefinite" />
        <animate attributeName="r" values="1;0" dur=".6" repeatCount="indefinite" />
      </circle>
      <circle>
        <animate attributeName="cx" values="1;2;1" dur="1.85" repeatCount="indefinite" />
        <animate attributeName="cy" values="8;1" dur=".85" repeatCount="indefinite" />
        <animate attributeName="r" values="1;0" dur=".85" repeatCount="indefinite" />
      </circle>
      <circle>
        <animate attributeName="cx" values="0;1;0" dur="2" repeatCount="indefinite" />
        <animate attributeName="cy" values="6;-1" dur=".95" repeatCount="indefinite" />
        <animate attributeName="r" values="1;0" dur=".95" repeatCount="indefinite" />
      </circle>
    </g>
  </g>
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
