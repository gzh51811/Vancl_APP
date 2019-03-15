<template>
  <div id="app">
    <div id="nav_bottom">
        <a href="javascript:;"><Icon type="ios-home" size="40" color="red"/></a>
        <a href="javascript:;"><Icon type="md-apps" size="40" color="black"/></a>
        <a href="javascript:;"><Icon type="md-videocam" size="40" color="black"/></a>
        <el-badge :value="3" class="item">
          <a href="javascript:;"><Icon type="md-cart" size="40" color="black"/></a>
        </el-badge>
        <a href="javascript:;"><Icon type="md-contact" size="40" color="black"/></a>
    </div>
    <cart></cart>
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

import cart from './components/Cart.vue';

export default {
  name: 'app',
  components: {
    cart
  }
}
</script>

<style>
  #nav_bottom{
    position: fixed;
    display: block;
    width:100%;
    bottom:0;
    /* display: flex; */
    /* flex:5; */
  }
  #nav_bottom a{
    display: inline-block;
    text-align: center;
    width: 20%;
  }
</style>
