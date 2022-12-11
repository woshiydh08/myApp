// import { Component, PropsWithChildren } from "react";
import { View, Text } from '@tarojs/components';
import Footer from '@components/common/footer';
import './index.less';


export default function Index() {
    return (
        <View className='index'>
            <Text>这是首页</Text>
            <Footer />
        </View>
    );
}
