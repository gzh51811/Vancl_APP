<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(elementUI);

import axios from "axios";

// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios;

export default {
  name: 'app',
  data(){
    return {
      
    }
  }
}
</script>
<style>
  
</style>