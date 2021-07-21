const routes = [
  {
    path: '/', component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/anasayfa.vue')
      },
      {
        path: '/markalar', component: () => import('pages/markalar.vue')
      },
      {
        path: '/hakkimizda', component: () => import('pages/hakkimizda.vue')
      },
      {
        path: '/iletisim', component: () => import('pages/iletisim.vue')
      }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
