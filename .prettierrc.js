module.exports = {
    plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
    printWidth: 80,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: [
        '<THIRD_PARTY_MODULES>',
        '^@tarojs/(.*)$',
        '^@components/(.*)$',
        '^@hooks/(.*)$',
        '^@service/(.*)$',
        '^@store/(.*)$',
        '^@utils/(.*)$',
        '^@api/(.*)$',
        '^@pages/(.*)$',
        '^@types/(.*)$',
        '^./index.module.less',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
