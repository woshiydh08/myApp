import { ROUTE } from "./param.type";


export async function navi<T extends ROUTE>(route: T, params?: RouterParams[T], shouldRelaunch?: boolean) {
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

  console.log('跳转路由', page);
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
