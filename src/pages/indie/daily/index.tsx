// import { Component, PropsWithChildren } from "react";
import { Text, View } from '@tarojs/components';
import {
    useDidHide,
    useDidShow,
    useError,
    useLaunch,
    useLoad,
    useReady,
    useRouter,
    useUnload,
} from '@tarojs/taro';

import Footer from '@components/common/footer';

import './index.less';

export default function Index() {
    useLaunch(() => {
        // 等同于 App 入口的 onLaunch 生命周期钩子。
        console.log(`useLaunch()`);
    });
    useError(() => {
        console.log('useError');
    });
    const q = useRouter();
    console.log(q);
    useLoad(() => {
        // 等同于页面的 onLoad 生命周期钩子。
        console.log('useLoad');
    });
    useReady(() => {
        // 等同于页面的 onReady 生命周期钩子。
        console.log('useLoad');
    });
    useDidShow(() => {
        console.log('页面展示时的回调。useDidShow');
    });
    useDidHide(() => {
        console.log('页面隐藏时的回调。useDidHide');
    });
    useUnload(() => {
        console.log('页面卸载时的回调。useUnload');
    });
    return (
        <View className='index'>
            <Text>这是资讯</Text>
            <Footer />
        </View>
    );
}
