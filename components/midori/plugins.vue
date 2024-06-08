<script setup lang="ts">
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
          class="aspect-square rounded-xl border dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700/75 dark:to-gray-800/75 text-xl transform transition-all ease-out duration-200 hover:shadow-lg focus:shadow-lg hover:-translate-y-1.5 focus:-translate-y-1.5"
        >
          <a
            :href="href"
            :target="href.startsWith('http') ? '_blank' : ''"
            class="flex flex-col justify-center items-center gap-3 w-full h-full text-lg font-medium text-gray-600 dark:text-gray-400 overflow-hidden"
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
