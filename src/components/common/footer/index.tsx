// import IconFont from '@components/iconfont';
// import store from /'@store';
import { View } from '@tarojs/components';

// import styles from './index.module.less';
import './index.less';

export default function Footer() {
    // const user = store.getState().user;
    const routeList = [
        { label: '首页', path: '/' },
        { label: 'show', path: '/show' },
        { label: '我的', path: '/my' },
    ];
    return (

        <View className='footer'>
            <View className='flex-wrp'>
                {routeList.map((i) => {
                    return (
                        <View className='flex-item demo-text-1' key={i.path} onClick={} >
                            {i.label}
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
