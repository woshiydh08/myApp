import { navigateTo, reLaunch, switchTab } from '@tarojs/router';

import { queryString } from '@utils/qs';

import ROUTE_ALIASES_MAP from './aliases_to_path.type';
import RouterParams, { ROUTE } from './param.type';

export async function navi<T extends ROUTE>(
    route: T,
    params?: RouterParams[T],
    shouldRelaunch?: boolean,
) {
    // 未传入route跳转到首页
    if (!route) {
        relaunchToIndex();
        return;
    }

    let page = ROUTE_ALIASES_MAP[route];

    if (!page) {
        console.error('获取路由配置失败 ', page);
        return;
    }

    const url = `${page}${queryString(params)}`;

    params && console.table(params);

    if (shouldRelaunch) {
        reLaunch({ url });
        return;
    }

    navigateTo({
        url,
        fail: () => {
            switchTab({
                url: page,
            });
        },
    });
}

/**
 * 重启到首页
 */
export function relaunchToIndex() {
    reLaunch({
        url: ROUTE_ALIASES_MAP.home,
    });
}
