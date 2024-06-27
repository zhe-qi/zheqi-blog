<script setup lang="ts">
import Hero from './hero.vue'
import JustReturn from './just-return.vue'
import Plugins from './plugins.vue'
import Ray from './ray.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import useDark from './use-dark'
import Water from './water.vue'

import '../tailwind.css'
import './midori.css'

const isDark = useDark()

const flag = ref(false)

const handleScroll = () => {
  if (window.scrollY > 177) {
    if (flag.value) return
    if (isDark.value) {
      document.querySelector('.VPNavBar')?.classList.add('!bg-dark/70', 'backdrop-blur-2xl')
    } else {
      document.querySelector('.VPNavBar')?.classList.add('!bg-[#ffffffdd]', 'backdrop-blur-2xl')
    }
    document.querySelector('.DocSearch-Button')?.classList.remove('bg-transparent')
    document.querySelector('.DocSearch-Button-Keys')?.classList.remove('!border-none')
    flag.value = true
  } else {
    if (!flag.value) return
    if (isDark.value) {
      document.querySelector('.VPNavBar')?.classList.remove('!bg-dark/70', 'backdrop-blur-2xl')
    } else {
      document.querySelector('.VPNavBar')?.classList.remove('!bg-[#ffffffdd]', 'backdrop-blur-2xl')
    }
    document.querySelector('.DocSearch-Button')?.classList.add('bg-transparent')
    document.querySelector('.DocSearch-Button-Keys')?.classList.add('!border-none')
    flag.value = false
  }
}


// 监听body滚动事件
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.querySelector('#VPContent')?.setAttribute('style', 'padding-top: 0 !important;')
  document.querySelector('.DocSearch-Button')?.classList.add('bg-transparent')
  document.querySelector('.DocSearch-Button-Keys')?.classList.add('!border-none')
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  const vpContent = document.querySelector('#VPContent');
  const newStyle = 'padding-top: var(--vp-nav-height) !important;';
  // 只有在样式实际更改时才设置新样式
  if (vpContent && vpContent.getAttribute('style') !== newStyle) {
    vpContent.setAttribute('style', newStyle);
  }
})

const base64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgYFRcMnfV/y9/GbkVGdjUnDNzW1JyOxhYlAF40Ah0YMgUXQAAAABJRU5ErkJggg==";

</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <!-- <link rel="prefetch" as="video" href="/assets/freecompress-3_15488489005909.webm"> -->
  <link rel="preload" as="image" href="/assets/star.svg" />

  <div id="landing" class="dark:bg-gray-900/60">
    <video :poster="base64" :class="{ 'brightness-[0.7]': isDark }" autoplay loop muted
      class="w-screen h-screen object-cover">
      <source src="/assets/freecompress-3_15488489005909.webm" type="video/webm">
      <source src="/assets/freecompress-3_15488489005909.mp4" type="video/mp4">
    </video>
    <Water class="mt-[-8vh]" />
    <Ray class="h-[60vh] -top-16 pointer-events-none opacity-[.35] dark:opacity-50" />
    <div class="mt-[-90vh]">
      <Hero />
      <article class="flex flex-col gap-4 px-6">
        <section class="flex flex-col justify-center items-center gap-8 w-full mt-4 mb-16">
          <JustReturn>
            <slot name="justreturn"></slot>
          </JustReturn>
          <Plugins />
        </section>
      </article>
    </div>
  </div>
</template>

<style>
#landing div[class*='language-']>pre>code {
  display: block;
  width: -moz-fit-content;
  width: fit-content;
  min-width: 100%;
  line-height: 1.5rem;
  font-size: var(--vp-code-font-size);
  color: var(--vp-code-block-color);
  transition: color 0.5s;
  font-size: 16px;
}

#landing div[class*='language-']>pre {
  position: relative;
  z-index: 1;
  padding: 1em;
  background: transparent;
  overflow-x: auto;
}

#landing div[class*='language-']>span.lang,
#landing div[class*='language-']>button {
  display: none;
}

#landing div[class*='language-'] {
  border-radius: 8px;
  position: relative;
  overflow-x: auto;
  background-color: var(--vp-code-block-bg);
  transition: background-color 0.5s;
}

html.dark pre[class*='language-'] {
  @apply bg-slate-800;
}

html.dark {
  @apply bg-slate-900;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  background-color: transparent !important;
}
</style>
