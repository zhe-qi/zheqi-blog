---
title: ZheQi-Blog - 介绍
head:
    - - meta
      - property: 'og:title'
        content: ZheQi-Blog - 介绍

    - - meta
      - name: 'description'
        content: ZheQi-Blog 折七的博客 分享技术、生活、读书、随笔等内容
---

# ZheQi-Blog - 折七的博客

欢迎来到我的博客! 这里是`折七`的博客，我会在这里分享技术、生活、读书、随笔等内容。

这个博客是基于 [VitePress](https://vitepress.vuejs.org/) 搭建的，它是一个 Vue 驱动的静态网站生成器，它的目标是尽可能简单，同时也是非常灵活的。

这个博客的文档模板来自 [ElysiaJS](https://elysiajs.com/) 官方文档，它是一个基于 Vitepress 的 技术文档，它的文档模板非常漂亮，我非常喜欢，所以我就拿来用了。

## 测试代码

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

## 测试表格 
:tada:
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## 测试其他
> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

::: details 点我查看代码
```js
console.log('Hello, VitePress!')
```
:::

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

```ts {1}
// 默认禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

<script setup>
import Giscus from '../../components/blog/giscus.vue'
</script>

<Giscus />
