import Vue from 'vue'
import Router from 'vue-router'
import pre from '@/components/pre'
import regiter from '@/components/pre/reg'
import imageList from '@/components/image/list'
// 首页
// import index from '@/components/home/index'
// 查看更多部件
// import partMore from '@/components/home/more/part.vue'
// console.log(partMore)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'pre',
      component: pre
    },
    {
      path: '/reg',
      name: 'regiter',
      component: regiter
    },
    {
      path: '/image/list',
      name: 'imageList',
      component: imageList
    }
    // ,
    // {
    //   path: '/part',
    //   name: 'part',
    //   component: container,
    //   children: [
    //     {
    //       path: '',
    //       name: 'index',
    //       component: index
    //     },
    //     {
    //       path: 'more',
    //       name: 'partMore',
    //       component: partMore
    //     }
    //   ]
    // }
  ]
})
