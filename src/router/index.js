import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../components/HomePage.vue';
import article from '../components/Article.vue';
import comments from '../components/Comments.vue';

Vue.use(Router);

export default new Router({
  routes: [
     { path: "/", redirect: "/home" },
    {
      path: '/home',
      name: 'homePage',
      component: homePage
    },
    {
    // 动态路由，不同路由用同一个组件来渲染
    path: '/article/:id',
    name: 'article',
    component: article
    },
    {
    // 动态路由，不同路由用同一个组件来渲染
    path: '/article/comments/(\\d+)',
    name: 'comments',
    component: comments
    },
  ]
});
