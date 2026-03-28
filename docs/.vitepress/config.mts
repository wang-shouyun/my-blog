import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '王守云的个人博客',
  description: '聚焦通信、模式识别与信息论，记录学习、项目、思考与成长',
  base: '/my-blog/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习', link: '/learning/' },
      { text: '项目', link: '/projects/' },
      { text: '思考', link: '/reflections/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/learning/': [
        {
          text: '学习总览',
          items: [
            { text: '学习首页', link: '/learning/' },
            { text: '通信原理', link: '/learning/communication' },
            { text: '模式识别', link: '/learning/pattern-recognition' },
            { text: '信息论', link: '/learning/information-theory' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目与实践',
          items: [
            { text: '项目首页', link: '/projects/' },
            { text: '调制识别项目', link: '/projects/amc-project' }
          ]
        }
      ],
      '/reflections/': [
        {
          text: '思考与成长',
          items: [
            { text: '思考首页', link: '/reflections/' },
            { text: '学习方法与复盘', link: '/reflections/study-method' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wang-shouyun' }
    ],

    footer: {
      message: '由 VitePress 与 GitHub Pages 构建',
      copyright: 'Copyright © 2026 王守云'
    }
  }
})