---
title: 关于
head:
    - - meta
      - name: 'description'
        content: ZheQi-Blog 折七的博客 关于
---

# 关于

23年应届大专的前端开发。

## 项目遇到的一些问题

在这里先记录一些难点，后续拆离出去

## 微信小程序 uniapp

qs 锁5.2.1 版本过低难用，格式化数组无法指定
锁 6.5.3 就行了
```json
// package.json
{
  "devDependencies": {
    ...,
    "qs": "6.5.3",
    ...
  },
}
```
然后执行 `pnpm install`

