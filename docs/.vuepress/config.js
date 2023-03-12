module.exports = {
  base: '/blogs/',
  title: '小憩',
  description: '日复一日 必有精进',
  // 移动端优化
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
     // 导航栏左侧logo
     logo: '/avatar.jpg',
     // 搜索设置
     search: true,
     searchMaxSuggestions: 10,
     // 自动形成侧边导航及其深度
     subSidebar: 'auto',
     sidebarDepth: 1,
     // 最后更新时间
     lastUpdated: 'Last Updated',
     // 项目开始时间
     startYear: '2023',
    valineConfig: {
      appId: 'iHc4UchlyB8iAWZb4cMelsSO-gzGzoHsz',// your appId
      appKey: '8XyUFrMw1853Dy1yOBamDXZX', // your appKey
    },
    authorAvatar: "/avatar.jpg",
    type: "blog",
    author: "Cinyi Cheng",
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/cinyic', icon: 'reco-github' }
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
      lang: "zh-CN",
    },
  },
  // 插件配置
  plugins: [
    [
      'permalink-pinyin',
      {
        lowercase: true,
        separator: '-'
      }
    ]
  ]
}
