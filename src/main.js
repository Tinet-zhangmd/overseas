// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入过滤器
import * as filters from './filters/index.js'
//全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//ie可能会不显示
require('es6-promise').polyfill();
require('es6-promise/auto');
// use ElementUI
import {
  Option,
  Select,
  Input,
  DatePicker,
  Message,
  Pagination,
  Form,
  FormItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Option)
Vue.use(Select)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)

// 判断是否为ie 看情况使用哪种形式
if (!!window.ActiveXObject || "ActiveXObject" in window){
    // 使用use方式会导致刷新页面的时候，弹出mesage
    // 但是如果在ie中不使用use 则会报错
    Vue.use(Message)
}else{
    Vue.component(Message.name, Message)
}
  
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

//解决跳转页面滚动条位置不变的问题
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
