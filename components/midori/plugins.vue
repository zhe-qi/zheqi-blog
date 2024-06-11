<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const plugins = [
  ['Vue', '/assets/vue.svg', ''],
  ['Nuxt', '/assets/nuxt.svg', ''],
  ['TypeScript', '/assets/typescript.svg', ''],
  ['Vite', '/assets/vite.svg', ''],
  ['Node', '/assets/node.svg', ''],
  ['TailwindCSS', '/assets/tailwindcss.svg', ''],
  ['Pinia', '/assets/pinia.svg', ''],
  ['Nest', '/assets/nest.svg', ''],
  ['Prisma', '/assets/prisma.svg', '']
] as const

import useDark from './use-dark'

const isDark = useDark()

// 鼠标动画效果的脚本
const boxes = ref<HTMLDivElement[] | null>(null)
let animationFrameId: number | null = null

function handlerMove(e: MouseEvent) {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  animationFrameId = requestAnimationFrame(() => {
    if (!boxes.value) return
    for (const el of boxes.value) {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--x', `${x}px`)
      el.style.setProperty('--y', `${y}px`)
    }
  })
}

function handlerLeave() {
  if (!boxes.value) return
  for (const el of boxes.value) {
    el.style.setProperty('--x', `-1000px`)
    el.style.setProperty('--y', `-1000px`)
  }
}

onMounted(() => {
  document.addEventListener('mousemove', handlerMove)
  document.addEventListener('mouseleave', handlerLeave)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handlerMove)
  document.removeEventListener('mouseleave', handlerLeave)
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<template>
  <article
    class="flex justify-between flex-col lg:flex-row items-center w-full max-w-6xl mx-auto my-8 gap-12"
  >
    <section class="flex flex-col w-full max-w-lg">
      <header class="flex flex-col justify-center items-start">
        <h2
          class="text-5xl md:text-6xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-tr from-sky-400 to-fuchsia-400 mb-4"
        >
          掌握的技术栈
        </h2>
      </header>
      <p class="text-xl text-gray-400 w-full max-w-lg mb-4">
        掌握并使用了多种技术栈，以确保提供高效、现代化的开发解决方案。
      </p>
      <p class="text-xl text-gray-400 w-full max-w-lg">
        通过掌握并应用这些技术栈，我致力于为你提供最优质的编程学习资源和项目实践经验。希望在ZheQi-Blog上，你能找到所需的知识和灵感，与我一起成长进步。
      </p>
      <div class="mt-8">
        <a
          href="/plugins/overview"
          class="text-xl font-medium bg-blue-200/25 dark:bg-blue-500/25 text-blue-500 px-6 py-3 rounded-xl"
        >
          查看更多
        </a>
      </div>
    </section>
    <section class="flex flex-col w-full max-w-xl">
      <ol
        class="grid grid-cols-2 sm:grid-cols-3 gap-4 list-none w-full text-gray-500 dark:text-gray-400 text-lg"
      >
        <li
          v-for="[name, icon, href, darkIcon = ''] in plugins"
          class="aspect-square border rounded-xl relative overflow-hidden dark:border-none bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 text-xl transform transition-all ease-out duration-200"
          ref="boxes"
        >
          <div class="border-effect"></div>
          <div class="bg-gradient"></div>
          <div class="glass-effect"></div>
          <a
            :href="href"
            :target="href.startsWith('http') ? '_blank' : ''"
            class="flex flex-col justify-center items-center gap-3 w-full h-full text-lg font-medium text-gray-600 dark:text-gray-400 relative z-10"
          >
            <img
              :src="isDark && darkIcon ? darkIcon ?? icon : icon"
              :alt="name"
              loading="lazy"
              class="absolute w-36 h-36 opacity-10 filter blur-lg"
            />
            <img
              :src="isDark && darkIcon ? darkIcon ?? icon : icon"
              :alt="name"
              class="h-14"
              loading="lazy"
            />
            {{ name }}
          </a>
        </li>
      </ol>
    </section>
  </article>
</template>

<style scoped>
.border-effect {
  position: absolute;
  inset: 2px;
  pointer-events: none;
  border-radius: inherit;
  border: 2px solid transparent;
  border-image: radial-gradient(circle, cyan 0%, skyblue 25%, pink 50%, transparent 75%) 1;
  transition: border 0.1s;
  z-index: 1;
}

.bg-gradient {
  position: absolute;
  inset: 2px;
  /* background: linear-gradient(135deg, #ffffff, #f0f0f0); */
  @apply bg-gradient-to-br from-white to-gray-50 dark:from-slate-950 dark:to-slate-950;
  border-radius: inherit;
  z-index: 2;
}

.glass-effect {
  position: absolute;
  inset: 2px;
  backdrop-filter: blur(10px);
  @apply bg-white dark:bg-white/10;
  border-radius: inherit;
  z-index: 3;
}

li::before {
  top: var(--y, -1000px);
  left: var(--x, -1000px);
  content: '';
  position: absolute;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: inherit;
  background: radial-gradient(circle, cyan 0%, skyblue 25%, pink 50%, transparent 75%);
  transition: top 0.1s, left 0.1s;
  z-index: 0;
  transform: translate(-50%, -50%);
}

li {
  position: relative;
  overflow: hidden;
  /* border-radius: inherit; */
}
</style>
