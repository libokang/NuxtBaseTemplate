import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _32054712 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _aa65ca72 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _a1e2f2fe = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _02a48a7e = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _6849ae0b = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _26366d55 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _351003e4 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/NuxtBaseTemplate/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _32054712,
    children: [{
      path: "",
      component: _aa65ca72,
      name: "home"
    }, {
      path: "/login",
      component: _a1e2f2fe,
      name: "login"
    }, {
      path: "/register",
      component: _a1e2f2fe,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _02a48a7e,
      name: "profile"
    }, {
      path: "/settings",
      component: _6849ae0b,
      name: "settings"
    }, {
      path: "/editor",
      component: _26366d55,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _351003e4,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
