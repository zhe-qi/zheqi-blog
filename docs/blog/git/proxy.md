---
title: git代理设置
head:
    - - meta
      - name: 'description'
        content: ZheQi-Blog 折七的博客 git代理设置
---

# git相关一键复制区

## git代理设置

> github 老是push不上去，放这给自己复制用，时常切换，市面上好像没有好的一键切换软件

> [!CAUTION]
>打开魔法，设置查看魔法端口

设置Git代理
```bash
git config --global http.proxy 127.0.0.1:7897
git config --global https.proxy 127.0.0.1:7897
```

取消代理
```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```
查看代理
```bash
git config --global --get http.proxy
git config --global --get https.proxy
```
