import Vue from 'vue';
import Router from 'vue-router';

import Index from "@/views/layout/Index.vue";
import Overview from "@/views/overview/Overview.vue";

const routesMap = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
      path: '/',
      name: 'Overview',
      component: Overview,
      children: []
    }]
  }
];
Vue.use(Router);
export default new Router({
  mode: 'hash',
  routes: routesMap
});
