<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, provide } from 'vue'

import { useData } from 'vitepress'
import useDark from '../../../components/midori/use-dark'
import Ray from '../../../components/midori/ray.vue'

const isDark = useDark()
const { isDark: darkTheme } = useData()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    darkTheme.value = !darkTheme.value
    return
  }
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  // @ts-expect-error startViewTransition is not yet in the TS lib
  if (document.startViewTransition !== undefined)
    // @ts-expect-error startViewTransition is not yet in the TS lib
    await document.startViewTransition(async () => {
      darkTheme.value = !darkTheme.value
      await nextTick()
    }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})

onMounted(() => {
  // 判断当前是否首页 
  if (window.location.pathname !== '/') {
    const vpContent = document.querySelector('#VPContent');
    const newStyle = 'padding-top: var(--vp-nav-height) !important;';
    // 只有在样式实际更改时才设置新样式
    if (vpContent && vpContent.getAttribute('style') !== newStyle) {
      vpContent.setAttribute('style', newStyle);
    }
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-top>
      <Ray class="h-[220px] top-0 left-0 opacity-25 dark:opacity-[.55] pointer-events-none" static />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

html.dark {
  @apply bg-slate-900;
}
</style>
