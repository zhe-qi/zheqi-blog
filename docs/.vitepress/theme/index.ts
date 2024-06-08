// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import Layout from './layout.vue'

import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'

import './custom.css'

import type { EnhanceAppContext } from 'vitepress'
import type { Theme } from 'vitepress'

import PrimeVue from 'primevue/config'
import Aura from 'primevue/themes/aura'
import Button from "primevue/button"

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue)
    app.use(PrimeVue, {
      theme: {
        preset: Aura
      }
    })
    app.component('Button', Button)
  }
} satisfies Theme
