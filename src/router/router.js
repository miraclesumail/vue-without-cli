const test = r => require.ensure([], () => r(require('../page/test')), 'test')

export default [
    {
        path:'/',
        redirect: '/test'
    },
     {
            path: '/test',
            component: test,
            // meta: { keepAlive: true },
    }
]