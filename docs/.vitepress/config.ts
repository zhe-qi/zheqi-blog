import { defineConfig } from 'vitepress'

import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

const description =
  '折七blog, 一个前端开发者的个人博客，记录前端开发的点点滴滴，分享前端开发的技术和经验。'

export default defineConfig({
  lang: 'zh-CN',
  title: '折七のBlog',
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    codeTransformers: [transformerTwoslash()]
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: ''
      }
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/assets/star.svg'
      }
    ],
    [
      'meta',
      {
        property: 'og:image:width',
        content: '1920'
      }
    ],
    [
      'meta',
      {
        property: 'og:image:height',
        content: '1080'
      }
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'ZheQi-Blog'
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: description
      }
    ]
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    logo: '/assets/star.svg',
    nav: [
      {
        text: '博客导航',
        link: '/blog'
      },
      {
        text: '项目分享',
        link: '/plugins/project'
      },
      {
        text: '友情链接',
        link: '/friend'
      }
    ],
    sidebar: [
      {
        text: '博客1',
        items: [
          {
            text: '这是一级菜单',
            link: '/blog1'
          },
          {
            text: '这是二级菜单',
            link: '/blog2'
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: '#' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2 12l10 7.422L22 12"/><path d="m7 9l5 4l5-4m-6-3l1 .8l1-.8l-1-.8z"/></g></svg>'
        },
        link: '#'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm5-7l2 3m6-3l-2 3m-5 7v-2m6 0v2"/></svg>'
        },
        link: '#'
      }
    ]
  }
})
