module.exports = {
  base: '/blogs/',
  title: '成新宇的博客',
  description: '日复一日 必有精进',
  theme: 'reco',
  themeConfig: {
    subSidebar:'auto',
    logo: "/avatar.jpg",
    authorAvatar: "/avatar.jpg",
    type: "blog",
    author: "Cinyi Cheng",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "成新宇的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn" },
          { text: "Github", link: "https://github.com" }
        ]
      }
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客", // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/cinyic' },
      ]
    },
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
}
