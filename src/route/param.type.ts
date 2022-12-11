export enum ROUTE {
    chat = 'chat',
    index = 'index',
}
export default interface RouterParams extends Record<ROUTE, any> {
    [ROUTE.chat]: { id: any; project?: any };
    [ROUTE.index]: {};
}
