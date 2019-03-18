<template>
  <div id="app">
    <div id="nav_bottom">
        <el-badge :value="typeface.num"  class="item" v-for="(typeface,idx) in typefaces" :key="typeface.name" >
          <a href="javascript:;" @click="goto(typeface)"><Icon :type="typeface.type" size="40"  @click="color(idx)" :color="typeface.color"/></a>
        </el-badge>
    </div>
    <!-- <cart></cart> -->
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

import cart from './components/Cart.vue';
import home from './components/Home.vue';

export default {
  name: 'app',
  data(){
    return {
      typefaces:[{
        type:'ios-home',
        color:'red',
        num:'',
        name:'Home'
      },
      {
        type:'md-apps',
        color:'black',
        num:''
      },
      {
        type:'md-videocam',
        color:'black',
        num:''
      },
      {
        type:'md-cart',
        color:'black',
        num:'1',
        name:'Cart'
      },
      {
        type:'md-contact',
        color:'black',
        num:''
      }
      ]
    }
  },
  methods:{
    color(idx){
      // console.log(this.typefaces.length);
      this.typefaces.map(typeface=>typeface.color='black');
      this.typefaces[idx].color='red';
    },
    goto(typeface){
        // console.log('App:',this);
        this.$router.push({name:typeface.name});
    }
  },
  components: {
    cart,
    home
  }
}
</script>

<style>
  #nav_bottom{
    position: fixed;
    display: block;
    width:100%;
    bottom:0;
    z-index: 999;
    background: #ffffff;
  }
  #nav_bottom>div{
    text-align: center;
    width: 20%;
  }
</style>
