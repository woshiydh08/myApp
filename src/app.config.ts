import { useGlobalIconFont } from './components/iconfont/helper';

export default defineAppConfig({
    pages: [
        'pages/main/mine/index',
        'pages/main/home/index',
        'pages/main/articles/index',
        'pages/other/note/index',
    ],
    tabBar: {
        custom: true,
        list: [
            {
                pagePath: 'pages/main/home/index',
                text: '首页',
                iconPath: './assets/img/tabbar/home.png',
                selectedIconPath: './assets/img/tabbar/home_active.png',
            },
            {
                pagePath: 'pages/main/articles/index',
                text: '资讯',
                iconPath: './assets/img/tabbar/home.png',
                selectedIconPath: './assets/img/tabbar/home_active.png',
            },
            {
                pagePath: 'pages/main/mine/index',
                text: '我的',
                iconPath: './assets/img/tabbar/my.png',
                selectedIconPath: './assets/img/tabbar/my_active.png',
            },
        ],
    },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    },

    // eslint-disable-next-line react-hooks/rules-of-hooks
    usingComponents: Object.assign(useGlobalIconFont()),
});
