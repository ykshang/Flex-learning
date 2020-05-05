// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';// 引入router路由组件
import ElementUI from 'element-ui';// 引入element-ui组件
import 'element-ui/lib/theme-chalk/index.css';// 引入element-ui必需样式
import Vuex from 'vuex';// 引入Vuex组件
import 'font-awesome/css/font-awesome.css';// 引入font-awesome图表字体组件
import VueI18n from 'vue-i18n';// 引入vue-i18n组件
import i18nList from './i18n';// 引入i18n语言配置文件
import vueGlobal from './util/vueGlobal';// 引入自定义的全部变量
import './assets/css/app.css';// 引入自定义样式
import VueHighlightJS from 'highlight.js';// 引入文字代码高亮组件
import 'highlight.js/styles/googlecode.css';// 高亮组件的样式文件

Vue.use(ElementUI);// 应用element-ui组件
Vue.use(Vuex);// 应用Vuex组件
Vue.use(VueI18n);// 应用VueI18n组件

Vue.config.productionTip = false;

// 加载自定义的全部变量到Vue下
Object.keys(vueGlobal).forEach(key => {
  Vue.prototype['$' + key] = vueGlobal[key];
});

// 配置vue-i18n组件
const i18n = new VueI18n({
  locale: 'zh_CN', // 语言标识
  // this.$i18n.locale, 通过切换locale的值来实现语言切换
  messages: i18nList
});
Vue.use(VueHighlightJS);
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    VueHighlightJS.highlightBlock(block);
  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
});
