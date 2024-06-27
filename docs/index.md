---
title: ZheQi-Blog
layout: page
sidebar: false
head:
    - - meta
      - property: 'og:title'
        content: ZheQi-Blog - 折七的博客

    - - meta
      - name: 'description'
        content: ZheQi-Blog 折七的博客 分享技术、生活、读书、随笔等内容
---

<script setup>
import Landing from '../components/midori/index.vue'
</script>

<Landing>
  <template v-slot:justreturn>
  
```typescript twoslash
type Hello = {
  hello: string;
  interests: string[];
};

type WelcomeMessage<T extends Hello> 
  = `${T['hello']}, 欢迎来到我的博客! 
内容包括: ${string}.`;

const hello: Hello = {
  hello: "你好",
  interests: ["编程", "分享"]
};

function generateWelcomeMessage<T extends Hello>
(hello: T): WelcomeMessage<T> {
    const interests = hello.interests.join(', ');
    return `${hello.hello}, 欢迎来到我的博客! 
内容包括: ${interests}.` as WelcomeMessage<T>;
}

console.log(generateWelcomeMessage(hello));
```

  </template>
</Landing>
