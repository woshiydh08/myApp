import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ImSliceState {
    active: string;
    list: {
        pagePath: string;
        text: string;
        icon?: string;
        iconActive?: string;
    }[];
}
const initialState: ImSliceState = {
    active: 'pages/main/home/index',
    list: [
        {
            pagePath: 'pages/main/home/index',
            text: '首页',
            icon: 'assets/img/tabbar/home.png',
            iconActive: 'assets/img/tabbar/home_active.png',
        },
        {
            pagePath: 'pages/main/articles/index',
            text: '文章',
            icon: 'assets/img/tabbar/home.png',
            iconActive: 'assets/img/tabbar/home_active.png',
        },
        {
            pagePath: 'pages/main/mine/index',
            text: '我的',
            icon: 'assets/img/tabbar/my.png',
            iconActive: 'assets/img/tabbar/my_active.png',
        },
    ],
};

const TabbarSlice = createSlice({
    name: 'tabbar',
    initialState,
    reducers: {
        // 更新当前激活路由...
        updateActivePage(state, { payload }: PayloadAction<string>) {
            if (state.active === payload) return;
            console.log('激活tabbar', payload);
            state.active = payload;
        },
    },
});

export const { updateActivePage } = TabbarSlice.actions;

export default TabbarSlice.reducer;
