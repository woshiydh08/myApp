import clsx from 'clsx';

import { View } from '@tarojs/components';
import { switchTab } from '@tarojs/taro';

import IconFont from '@components/iconfont';

import { useAppSelector } from '@hooks/redux';

import store from '@store/index';
import { updateActivePage } from '@store/tabbar';

import styles from './index.module.less';

// @ts-ignore
// eslint-disable-next-line no-undef
wx.onAppRoute((route) => {
    const path = route.path;
    //! 此处不能用hooks
    // const dispatch = useAppDispatch()
    // dispatch(updateActivePage(path))
    store.dispatch(updateActivePage(path));
});

export default function Tabbar() {
    const tabbarConfig = useAppSelector((state) => state.tabbar);

    const onTabClick = (item) => {
        const url = '/' + item.pagePath;
        switchTab({ url });
    };

    return (
        <View className={styles.tabbar}>
            {tabbarConfig.list.map((item) => {
                const active = item.pagePath === tabbarConfig.active;

                return (
                    <View
                      className={clsx(styles.item, {
                            [styles.active]: active,
                        })}
                      key={item.pagePath}
                      onClick={() => onTabClick(item)}
                    >
                        <IconFont
                          name={item.icon}
                          color={active ? '' : 'gray'}
                        />
                        <View className={styles.itemText}>{item.text}</View>
                    </View>
                );
            })}
        </View>
    );
}
