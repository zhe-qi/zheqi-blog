<script setup lang="ts">
import Giscus from '@giscus/vue'
import useDark from '../midori/use-dark';

const isDark = useDark();
</script>

<template>
  <div>
    <Giscus
      repo="zhe-qi/zheqi-blog"
      repo-id="R_kgDOMFS1uw"
      category="Announcements"
      category-id="DIC_kwDOMFS1u84Cf8uc"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      :theme="isDark ? 'cobalt' : 'light'"
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
      async
    ></Giscus>
  </div>
</template>
