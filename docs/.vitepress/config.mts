import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '王守云的个人博客',
  description: '记录学习、项目与思考',
  base: '/my-blog/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' },
      { text: '项目', link: '/projects/' },
      { text: '关于我', link: '/about' }
    ],

    sidebar: {
      '/notes/': [
        {
          text: '笔记目录',
          items: [
            { text: '笔记首页', link: '/notes/' },
            { text: '通信原理', link: '/notes/communication' },
            { text: '模式识别', link: '/notes/pattern-recognition' },
            { text: '信息论', link: '/notes/information-theory' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目',
          items: [
            { text: '项目首页', link: '/projects/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wang-shouyun' }
    ],

    footer: {
      message: '由 VitePress & GitHub Pages 驱动',
      copyright: 'Copyright © 2026 王守云'
    }
  }
})