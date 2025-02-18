const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/main', component: () => import('pages/IndexPage.vue') },
      { path: '', component: () => import('pages/CreateAccount.vue') },
      { path: '/signIn', component: () => import('pages/SignIn.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
