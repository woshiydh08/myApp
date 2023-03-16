import clsx from 'clsx';

import { View } from '@tarojs/components';
import { switchTab } from '@tarojs/taro';

import { useAppSelector } from '@hooks/redux';

import styles from './index.module.less';

export default function Tabbar() {
    const tabbarConfig = useAppSelector((state) => state.tabbar);

    console.log("🌊 ~ file: index.tsx:36 ~ {tabbarConfig.list.map ~ tabbarConfig.list:", tabbarConfig.list)
    const onTabClick = (item) => {
        const url = '/' + item.pagePath;
        switchTab({ url });
    };

    return (
        <View className={styles.tabbar}>
            {tabbarConfig.list.map((item) => {
                return (
                    <View
                      className={clsx(styles.item)}
                      key={item.pagePath}
                      onClick={() => onTabClick(item)}
                    >
                        <View className={styles.itemText}>{item.text}</View>
                    </View>
                );
            })}
        </View>
    );
}
