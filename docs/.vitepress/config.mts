import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '王守云的个人博客',
  description: '聚焦通信、模式识别与信息论，记录学习、项目、思考、诗歌与成长',
  base: '/my-blog/',

  markdown: {
    math: true },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习', link: '/learning/' },
      { text: '项目', link: '/projects/' },
      { text: '思考', link: '/reflections/' },
      { text: '诗歌', link: '/poetry/' },
      { text: '资料', link: '/resources/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/learning/': [
        {
          text: '学习总览',
          items: [
            { text: '学习首页', link: '/learning/' },
            { text: '通信原理', link: '/learning/communication' },
            { text: '通信原理 第一章', link: '/learning/communication-chapter1' },
            { text: '通信原理 第二章', link: '/learning/communication-chapter2' },
            { text: '通信原理 第三章', link: '/learning/communication-chapter3' },
            { text: '通信原理 第四章', link: '/learning/communication-chapter4' },
            { text: '通信原理 第五章', link: '/learning/communication-chapter5' },
            { text: '通信原理 第六章', link: '/learning/communication-chapter6' },
            { text: '通信原理 第七章', link: '/learning/communication-chapter7' },
            { text: '通信原理 第八章', link: '/learning/communication-chapter8' },
            { text: '通信原理 第九章', link: '/learning/communication-chapter9' },
            { text: '通信原理 总复习', link: '/learning/communication-final-review' },
            { text: '模式识别', link: '/learning/pattern-recognition' },
            { text: '模式识别 第一章', link: '/learning/pattern-recognition-chapter1' },
            { text: '模式识别 第二章', link: '/learning/pattern-recognition-chapter2' },
            { text: '模式识别 第二章 严格按教材版', link: '/learning/pattern-recognition-chapter2-section-2-1-to-2-6' },
            { text: '模式识别 第三章', link: '/learning/pattern-recognition-chapter3' },
            { text: '模式识别 第四章', link: '/learning/pattern-recognition-chapter4' },
            { text: '模式识别 第五章', link: '/learning/pattern-recognition-chapter5' },
            { text: '模式识别 第六章', link: '/learning/pattern-recognition-chapter6' },
            { text: '模式识别 第七章', link: '/learning/pattern-recognition-chapter7' },
            { text: '模式识别 总复习', link: '/learning/pattern-recognition-final-review' },
            { text: '信息论', link: '/learning/information-theory' },
            { text: '信息论 第一章', link: '/learning/information-theory-chapter1' },
            { text: '信息论 第二章', link: '/learning/information-theory-chapter2' },
            { text: '信息论 第三章', link: '/learning/information-theory-chapter3' },
            { text: '信息论 第四章', link: '/learning/information-theory-chapter4' },
            { text: '信息论 第五章', link: '/learning/information-theory-chapter5' },
            { text: '信息论 第六章', link: '/learning/information-theory-chapter6' },
            { text: '信息论 第七章', link: '/learning/information-theory-chapter7' },
            { text: '信息论 总复习', link: '/learning/information-theory-final-review' },


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
      ],
      '/poetry/': [
        {
          text: '诗歌与鉴赏',
          items: [
            { text: '诗歌首页', link: '/poetry/' },
            { text: '我的诗词', link: '/poetry/my-poems' },
            { text: '鉴赏与解释', link: '/poetry/appreciation' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资料导航',
          items: [
            { text: '资料首页', link: '/resources/' },
            { text: '大模型与 AI 开发', link: '/resources/llm' },
            { text: '项目实战', link: '/resources/projects' },
            { text: '算法与面试', link: '/resources/interview' }
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