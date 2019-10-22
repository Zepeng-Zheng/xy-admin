export default [{
  path: '/account/center',
  name: 'center',
  component: () => import('@/views/account/index.vue')
},{
  path: '/account/setting',
  name: 'setting',
  component: () => import('@/views/account/setting/index')
},{
  path: '/account/setting/password',
  name: 'settingPassword',
  component: () => import('@/views/account/setting/security/password')
}]