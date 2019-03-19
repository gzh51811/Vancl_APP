<template>
  <div id="app">
    <detail></detail>
  </div>
</template>

<script>

//引入
import Vue from 'vue';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUI);
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import category from './components/CategoryPage';
import channel from './components/ChannelPage';
import detail from './components/DetailPage';
import list from './components/ListPage';

export default {
  name : 'app',
  components : {
    category,
    channel,
    detail,
    list
  }
}
</script>

<style>

</style>
