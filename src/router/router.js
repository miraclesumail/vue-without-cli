const test = r => require.ensure([], () => r(require('../page/test')), 'test');
const really = r => require.ensure([], () => r(require('../page/really')), 'really');

export default [
    {
        path: '/',
        redirect: '/test'
    },
    {
        path: '/test',
        component: test
        // meta: { keepAlive: true },
    },
    {
        path: '/really',
        component: really
        // meta: { keepAlive: true },
    }
];
