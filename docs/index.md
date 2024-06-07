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
import { Elysia } from 'elysia'

new Elysia()
    .get('/', 'Hello World')
    .get('/json', {
        hello: 'world'
    })
    .get('/id/:id', ({ params: { id } }) => id)
    .listen(3000)

```

  </template>
</Landing>
