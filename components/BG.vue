<script setup lang="ts">
const { isDark } = useTheme()

</script>

<template>
  <nuxt-img v-show="!isDark" preload format="webp" src="/images/tailwind.jpg" class="fixed h-screen w-screen top-0 left-0 z-[-99] bg-cover object-cover bg-center" />
</template>

<style scoped lang="postcss">
</style>
