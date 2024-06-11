<script setup lang="ts">

// 常用网址
const links = [
  {
    name: 'Vue中文文档',
    link: 'https://cn.vuejs.org'
  }
]

</script>

<template>
  <div class="p-4">
    <div class="p-4">
      <h3 class="text-xl font-bold mb-3">常用网址</h3>
      <ul v-for="item in links">
        <li :href="item.link" class="hover:text-pink-300 cursor-pointer">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  
</style>