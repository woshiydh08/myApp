export default defineAppConfig({
    pages: ['pages/main/index/index'],
    subpackages: [{ root: 'pages/indie/daily', pages: ['index'] }],
    tabBar: {
      custom: true,
      /** TABBAR_START */
  
      list: [
        { pagePath: 'pages/main/articles/index', text: '资讯' },
        { pagePath: 'pages/main/mine/index', text: '我的' },
      ],
  
      /** TABBAR_END */
    },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    },
});
