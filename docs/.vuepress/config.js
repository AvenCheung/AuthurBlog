module.exports = {
  // 插件：置顶按钮、图片缩放
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  // 自定义网站 favicon
  head: [['link', { rel: 'icon', href: '/img/Authur-logo.png' }]],
  // 根路径，和仓库名一致
  base: '/AuthurBlog/',
  // 左上角标题
  title: 'Authur\' Blog',
  // markdown 相关配置
  markdown: {
    // 代码块行号
    lineNumbers: true,
  },
  //主体配置
  // theme: 'vuepress-theme-maker',
  // 默认主题相关配置
  themeConfig: {
    // 配置左上角的 logo
    logo: '/img/Authur-logo.png',
    // 导航栏
    nav: require('./nav.js'),
    // 侧边栏
    sidebar: require('./sidebar.js'),
    // sidebar: 'auto',
    // 标题深度，2 表示提取 h2 和 h3 标题
    // Search 提示
    // searchPlaceholder: 'Search',
    sidebarDepth: 2,
    // 启用页面滚动效果
    smoothScroll: true,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 导航栏显示 gitee 仓库
    repo: 'https://gitee.com/AuthurKing/authur-blog',
    repoLabel: 'Gitee',
    // social: [
    //   {
    //     type: 'email',
    //     link: '1738238581@qq.com'
    //   },
    //   {
    //     type: 'github',
    //     link: '/Authur942'
    //   },
    //   {
    //     type: 'qq',
    //     link: '//qm.qq.com/cgi-bin/qm/qr?k=fknyQ434nkzVUWUmJ6rpIPctkS9eyQaZ&jump_from=webapi'
    //   },
    //   {
    //     type: 'feed',
    //     link: '/rss.xml'
    //   }
    // ],
  },
}