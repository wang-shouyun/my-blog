import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '王守云的个人博客',
  description: '记录学习、项目与思考',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' },
      { text: '关于我', link: '/about' }
    ]
  }
})