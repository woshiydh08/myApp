export enum ROUTE {
    home = 'home',
    articles = 'articles',
    mine = 'mine',
    note = 'note',
}

export default interface RouterParams extends Record<ROUTE, any> {
    [ROUTE.home]: {};
    [ROUTE.articles]: { id: any; project?: any };
    [ROUTE.mine]: {};
    [ROUTE.note]: {};
}
