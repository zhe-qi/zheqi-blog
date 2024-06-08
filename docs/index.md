---
title: ZheQi-Blog - 折七的博客
layout: page
sidebar: false
head:
    - - meta
      - property: 'og:title'
        content: ZheQi-Blog - 折七的博客

    - - meta
      - name: 'description'
        content: ZheQi-Blog 折七的博客 分享技术、生活、读书、随笔等内容

    - - meta
      - property: 'og:description'
        content: ZheQi-Blog 折七的博客 分享技术、生活、读书、随笔等内容
---

<script setup>
import Landing from '../components/midori/index.vue'
</script>

<Landing>
  <template v-slot:justreturn>
  
```typescript twoslash
type User = {
  name: string;
  interests: string[];
};

type WelcomeMessage<T extends User> = `欢迎来到我的博客, 
${T['name']}! 你喜欢的内容包括: ${T['interests'][number]}.`;

const user: User = {
  name: "朋友",
  interests: ["TypeScript", "编程", "技术博客"]
};

function generateWelcomeMessage<T extends User>(user: T): 
WelcomeMessage<T> {
    const interests = user.interests.join(', ');
    return `欢迎来到我的博客, ${user.name}! 
    你喜欢的内容包括: ${interests}.` as WelcomeMessage<T>;
  }

console.log(generateWelcomeMessage(user))
```

  </template>
</Landing>
