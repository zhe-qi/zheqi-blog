<script setup lang="ts">

// 常用网址
const links = [
  {
    name: 'Vue中文文档',
    link: 'https://cn.vuejs.org'
  },
  {
    name: 'mdn',
    link: 'https://developer.mozilla.org/zh-CN/'
  }
]
</script>

<template>
  <div class="container mx-auto max-w-5xl pt-10">
    <h3 class="text-xl font-bold mb-3">常用网址</h3>
    <ul v-for="item in links">
      <li :href="item.link" class="hover:text-pink-300 cursor-pointer">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>