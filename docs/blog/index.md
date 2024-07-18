---
title: 介绍
head:
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

```json [setting.json]
{
  "git.autofetch": true,
  // 字体 fira code
  "editor.fontFamily": "Fira Code",
  // 开启连体字
  "editor.fontLigatures": true,
  "security.workspace.trust.untrustedFiles": "open",
  "explorer.confirmDelete": false,
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "scminput": false,
    "rust": true
  },
  "editor.fontSize": 14.5,
  "terminal.external.osxExec": "iTerm.app",
  /** 暂时解决vue插件导致折叠图标丢失问题 */
  // "editor.foldingStrategy": "indentation",
  "github.copilot.editor.enableAutoCompletions": true,
  // "terminal.integrated.inheritEnv": false,
  // "window.nativeTabs": true,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorBlinking": "solid",
  "editor.smoothScrolling": true,
  "workbench.list.smoothScrolling": true,
  "terminal.integrated.smoothScrolling": true,
  "window.commandCenter": false,
  // "window.titleBarStyle": "custom",
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // "window.titleBarStyle": "native",
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "editor.tabSize": 2,
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "workbench.colorCustomizations": {
    "activityBarBadge.background": "#cabbe9",
    "sideBarSectionHeader.background": "#9fbbc211",
    "editor.lineHighlightBackground": "#10f5f520",
    // 标签激活的背景颜色
    "tab.activeForeground": "#333333",
    "tab.activeBorder": "#824ae33b"
  },
  "editor.tokenColorCustomizations": {
    "[Quiet Light for VSC]": {
      "textMateRules": [
        {
          "scope": [
            "entity.name.function.ts",
            "variable.other.readwrite.alias.ts",
            "variable.other.readwrite.alias.tsx",
            "entity.name.type.config.prisma",
            "entity.name.type.model.prisma",
            "entity.name.function.attribute.prisma",
            "entity.name.function.tsx",
            "entity.name.function.rust"
          ],
          "settings": {
            "foreground": "#44a2f0",
            "fontStyle": "bold"
          }
        },
        {
          "scope": ["source.python", "meta.function-call.generic.python"],
          "settings": {
            "foreground": "#44a2f0"
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html",
            "string.quoted.double.html",
            "variable.other.assignment.prisma"
          ],
          "settings": {
            "foreground": "#e76590"
          }
        },
        {
          "scope": [
            "string.quoted.single.ts",
            "punctuation.definition.string.begin.ts",
            "punctuation.definition.string.end.ts",
            "punctuation.definition.string.begin.tsx",
            "punctuation.definition.string.end.tsx"
          ],
          "settings": {
            "foreground": "#75bb59"
          }
        },
        {
          "scope": [
            "variable.other.constant.ts",
            "variable.other.object.ts",
            "variable.other.constant.tsx",
            "variable.other.object.tsx",
            "keyword.operator.new.tsx"
          ],
          "settings": {
            "foreground": "#FF5370"
          }
        },
        {
          "scope": [
            "constant.numeric",
            "variable.language.this.ts",
            "keyword.control.import.ts",
            "support.class.promise.tsx"
          ],
          "settings": {
            "foreground": "#E06C75"
          }
        },
        {
          "scope": ["constant.language.null", "support.type.python"],
          "settings": {
            "foreground": "#C678DD" // 你可以替换为你喜欢的颜色
          }
        },
        {
          "scope": "constant.language.undefined",
          "settings": {
            "foreground": "#C678DD" // 你可以替换为你喜欢的颜色
          }
        },
        {
          "scope": [
            "support.type.property-name",
            "variable.other.property",
            "meta.object-literal.key.ts",
            "entity.name.function.ts",
            "variable.other.object.property.ts",
            "entity.name.function.js"
          ],
          "settings": {
            "foreground": "#61AFEF" // 浅蓝色
          }
        },
        {
          "scope": [
            "storage.type.model.prisma",
            "keyword.control.from.ts",
            "keyword.control.import.tsx",
            "keyword.control.from.tsx",
            "entity.name.type.tsx",
            "entity.name.type.rust"
          ],
          "settings": {
            "foreground": "#eb99a1"
          }
        },
        {
          "scope": [
            "entity.name.type.ts",
            "entity.name.type.tsx",
            "support.function.functional.prisma",
            "variable.language.relations.prisma",
            "support.class.promise.ts",
            "keyword.control.import.python",
            "support.class.component.tsx",
            "variable.other.readwrite.alias.js",
            "variable.other.object.js",
            "variable.other.constant.js",
            "variable.other.readwrite.js"
          ],
          "settings": {
            "foreground": "#ed8a94"
          }
        },
        {
          "scope": [
            "variable.other.property.ts",
            "variable.other.property.tsx",
            "support.constant.constant.prisma",
            "variable.other.constant.property.ts",
            "meta.function-call.arguments.python",
            "variable.other.constant.property.js"
          ],
          "settings": {
            "foreground": "#32b1a9"
          }
        },
        {
          "scope": [
            "variable.parameter.key.prisma",
            "entity.name.function.macro.rust",
            "variable.other.object.property.js"
          ],
          "settings": {
            "foreground": "#aa65cc"
          }
        },
        {
          "scope": [
            "variable.other.readwrite.ts",
            "variable.parameter.ts",
            "variable.other.readwrite.tsx",
            "variable.parameter.tsx",
            "storage.type.config.prisma",
            "support.type.primitive.prisma",
            "entity.name.type.result.rust",
            "variable.parameter.function-call.python",
            "meta.object-literal.key.tsx",
            "meta.object-literal.key.js"
          ],
          "settings": {
            "foreground": "#f1844a"
          }
        },
        {
          "scope": [
            "string.key.json5",
            "support.variable.property.importmeta.ts"
          ],
          "settings": {
            "foreground": "#f1844a"
          }
        },
        {
          "scope": ["support.type.primitive.ts", "support.type.primitive.tsx"],
          "settings": {
            "foreground": "#11a6dc"
          }
        },
        {
          "scope": ["keyword.operator.new.ts"],
          "settings": {
            "foreground": "#dc2c11"
          }
        }
      ]
    }
  },
  "workbench.colorTheme": "Quiet Light for VSC",
  "vscode_vibrancy.opacity": 0.05,
  "vscode_vibrancy.theme": "Default Light",
  "vscode_vibrancy.refreshInterval": 60,
  "window.titleBarStyle": "custom",
}

// 字体用的是 Fira Code，开启了连体字，这样代码看起来更舒服。  
// 主题用的是 Quiet Light for VSC，这是一个非常好看的主题，我非常喜欢。  
// 背景透明度设置为 0.05，用的是vscode_vibrancy插件。  
```

:::

<script setup>
import Giscus from '../../components/blog/giscus.vue'
</script>

<Giscus />
