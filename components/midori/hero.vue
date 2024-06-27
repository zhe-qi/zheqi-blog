<template>
  <div
    id="splash"
    class="pointer-events-none absolute top-[-70vh] max-w-full justify-center w-full h-screen opacity-25 block gradient"
  ></div>
  <header
    class="relative flex flex-col justify-center items-center w-full px-6 pt-6 md:pt-0 mb-16 md:mb-8 overflow-hidden"
    style="min-height: calc(100vh - 64px)"
    :class="{ 'brightness-[0.9]': isDark }"
  >
    <!-- <img
      src="/assets/zheqi-blog.webp"
      alt="ZheQi-Blog"
      class="h-[400px] w-[400px] translate-y-[-40px] rounded-xl object-contain object-left md:object-center mr-auto md:mr-0"
    /> -->
    <h2
      class="relative mt-[20vh] text-5xl md:text-6xl md:leading-tight font-bold md:text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-400 mb-6"
    >
      ZheQi-Blog
      <span
        class="absolute w-10 md:w-12 h-10 md:h-12 bottom-0 mb-4 ml-2 md:ml-0 md:mb-10 text-sky-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path
            d="M138.7,175.5l-19.2,52.1a8,8,0,0,1-15,0L85.3,175.5a8.1,8.1,0,0,0-4.8-4.8L28.4,151.5a8,8,0,0,1,0-15l52.1-19.2a8.1,8.1,0,0,0,4.8-4.8l19.2-52.1a8,8,0,0,1,15,0l19.2,52.1a8.1,8.1,0,0,0,4.8,4.8l52.1,19.2a8,8,0,0,1,0,15l-52.1,19.2A8.1,8.1,0,0,0,138.7,175.5Z"
            fill="currentcolor"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
          />
          <line
            x1="176"
            y1="16"
            x2="176"
            y2="64"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="200"
            y1="40"
            x2="152"
            y2="40"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="224"
            y1="72"
            x2="224"
            y2="104"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="240"
            y1="88"
            x2="208"
            y2="88"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </svg>
      </span>
    </h2>
    <h3
      class="text-xl shadow-white md:text-2xl text-white !leading-normal text-left md:text-center w-full max-w-[49rem]"
    >
      折七Blog，<span
        class="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-red-300 to-pink-300"
        >记录学习笔记</span
      >
    </h3>
    <p class="flex justify-center items-center mt-10 gap-2 text-white">
      查看更多
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-6 h-6 motion-safe:animate-bounce"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </p>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import useDark from './use-dark'

const isDark = useDark()

const copied = ref(false)
watch(copied, (value) => {
  // [INFO] navigator.clipboard available only in secure contexts.
  if (value && window.isSecureContext) {
    navigator.clipboard.writeText('https://zheqi.netlify.app')

    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
})
</script>
