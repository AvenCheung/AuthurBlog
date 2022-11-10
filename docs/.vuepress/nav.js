// .vuepress/nav.js
module.exports = [

  // 内部链接
  { text: '🏠 Home', link: '/' },
  { text: '📖 network', link: '/categories/theme/' },
  { text: '🐉 Basics', link: '/_post/maker.md' },
  // 多级菜单
  {
    text: '🔥 Frame', items: [{
      text: 'Vue',
      items: [
        {
          text: 'css3',
          link: '/categories/animation-css/'
        }
      ]
    }, {
      text: 'React',
      items: [
        {
          text: 'webgl',
          link: '/categories/animation-webgl/'
        }
      ]
    }]
  },
  { text: '📽 Old Time', link: '/categories/oldtime/' },
  { text: '🔗 friend-links', link: '/friend-links/' },
  // 外部链接
  { text: '📡 Github', link: 'https://github.com/Authur942' },
]