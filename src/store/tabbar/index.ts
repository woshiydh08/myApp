import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ImSliceState {
    active: string;
    list: {
        pagePath: string;
        text: string;
        icon: ICON_ENUM;
    }[];
}
enum ICON_ENUM {
    HOME = 'icon-home',
    FUNCTION = 'icon-function',
    MESSAGE = 'icon-message',
    MINE = 'icon-mine',
}
const initialState: ImSliceState = {
    active: 'pages/main/home/index',
    list: [
        {
            pagePath: 'pages/main/home/index',
            text: '首页',
            icon: ICON_ENUM['HOME'],
        },
        {
            pagePath: 'pages/main/articles/index',
            text: '文章',
            icon: ICON_ENUM['FUNCTION'],
        },
        {
            pagePath: 'pages/main/mine/index',
            text: '我的',
            icon: ICON_ENUM['MINE'],
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
