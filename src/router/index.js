import Vue from 'vue';
import Router from 'vue-router';

import Index from "@/views/layout/Index.vue";
import Overview from "@/views/overview/Overview.vue";
import Introduction from "@/views/introduction/Introduction.vue";
import Init from "@/views/other/Init.vue";
import Other from "@/views/other/Other.vue";
import Direction from "@/views/other/Direction.vue";
import Margin from "@/views/other/Margin.vue";
import Content from "@/views/other/Content.vue";
import MinWidth from "@/views/other/Min-width.vue";
import Demo from "@/views/other/Demo.vue";
import Container from "@/views/container/Container.vue";
import Item from "@/views/item/Item.vue";

const routesMap = [
  {
    name: 'Index',
    path: '/',
    component: Index,
    children: [{
      name: 'Overview',
      path: 'Overview',
      component: Overview,
      children: []
    }, {
      name: 'Introduction',
      path: 'Introduction',
      component: Introduction,
      children: []
    }, {
      name: 'Container',
      path: 'Container',
      component: Container,
      children: []
    }, {
      name: 'Item',
      path: 'Item',
      component: Item,
      children: []
    }, {
      name: 'Other',
      path: 'Other',
      component: Other,
      children: [{
        name: 'Init',
        path: 'Init',
        component: Init
      }, {
        name: 'Content',
        path: 'Content',
        component: Content
      }, {
        name: 'Direction',
        path: 'Direction',
        component: Direction
      }, {
        name: 'Margin',
        path: 'Margin',
        component: Margin
      }, {
        name: 'MinWidth',
        path: 'MinWidth',
        component: MinWidth
      }, {
        name: 'Demo',
        path: 'Demo',
        component: Demo
      }]
    }]
  }
];
Vue.use(Router);
export default new Router({
  mode: 'hash',
  routes: routesMap
});
