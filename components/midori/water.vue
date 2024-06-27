<script setup lang="ts">
import useDark from './use-dark'

const isDark = useDark()
</script>

<template>
  <svg class="w-full h-[8vh] relative"
    xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" viewBox="0 24 150 28"
    preserveAspectRatio="none" shapeRendering="auto">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
      <use href="#gentle-wave" x="48" y="0" :fill="`rgba(${isDark ? '0,0,0' : '255,255,255'},0.3`" />
      <use href="#gentle-wave" x="48" y="3" :fill="`rgba(${isDark ? '0,0,0' : '255,255,255'},0.2)`" />
      <use href="#gentle-wave" x="48" y="5" :fill="`rgba(${isDark ? '0,0,0' : '255,255,255'},0.1)`" />
      <use href="#gentle-wave" x="48" y="7" :fill="`rgba(${isDark ? '0,0,0' : '255,255,255'},0.5)`" />
    </g>
  </svg>
</template>

<style scoped>

.parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
}

.parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px,0,0);
    }

    100% {
        transform: translate3d(85px,0,0);
    }
}
</style>
