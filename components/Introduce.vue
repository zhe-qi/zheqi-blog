<script setup lang="ts">
import { type User } from '../server/api/user'

defineProps<{
  user: User
}>()
</script>

<template>
  <div class="flex justify-between w-full h-full p-2 border">
    <div class="w-4/6 overflow-hidden prose rounded lg:prose-xs dark:text-white whitespace-nowrap text-ellipsis">
      {{ $t('网名') }}: <span class="rainbow-text">{{ $t('折七') }}</span>
      <br>
      {{ $t('年龄') }}: <span class="text-red-400">20</span>
      <br>
      🌈{{ $t('了解前端技术') }}✨
      <br>
      🌏<span class="text-red-600">China</span> {{ $t('现居住于18线小城市 江西新余') }}
      <br>
      🦄<span class="text-sky-300">{{ $t('带砖') }}</span>{{ $t('大三，冶院在读') }}✨
      <br>
      🌈{{ $t('喜欢') }}<span class="text-emerald-400">{{ $t('主流前沿技术') }}</span>
      {{ $t('，喜欢游戏、小说、音乐') }}
      <br>
      🌠{{ $t('写这个网站的第') }}<span class="text-orange-400">{{ 3 }}</span>{{ $t('天') }}🌟({{ $t('不连续') }})
      <br>
      <NuxtLink
        class="cursor-pointer a"
        to="/home/Myself"
      >
        {{ $t('查看更多') }}&gt;
      </NuxtLink>
    </div>
    <NuxtLink
      class="block w-20 h-20 text-center"
      href="https://github.com/zhe-qi"
    >
      <nuxt-img format="webp" src="/images/nahida.jpg" alt="zhe-qi" class="w-full h-full rounded-full" />
      <p class="dark:text-white">
        <!-- {{ user.zheqi }}  这种方式需要用户可以访问github -->
        zhe-qi
      </p>
    </NuxtLink>
  </div>
</template>

<style scoped>
.a {
  text-decoration: none;
}
</style>
