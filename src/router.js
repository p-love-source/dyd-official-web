import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: resolve => require(['./view/index'], resolve), //首页页面
    //   hidden: true
    // },
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ './view/index'),
      hidden: true
    }
  ]

//   router.beforeEach((to, from, next) => {
//     console.log()
//     if (to.path) { //如果设置标题，拦截后设置标题
//         document.title = to.meta.title
//     }

//     // if (to.path == '/detail') {
//     //     from.meta.keepAlive = true
//     // } else {
//     //     from.meta.keepAlive = false
//     // }
//     next()
// })
  
  export default new Router({
    // mode: "history",
    // base: "/",
    routes: constantRouterMap
  })