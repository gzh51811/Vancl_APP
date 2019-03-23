<template>
  <div id="app">
    <!-- <HelloWorld></HelloWorld> -->
      <reg></reg>
      <!-- <login></login> -->
      <!-- <personal></personal>s -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import reg from './components/reg.vue';
import login from './components/login.vue';
import personal from './components/personal.vue';
export default {
  name: 'app',
  components: {
    // HelloWorld,
    reg,
    login,
    personal
  }
}
</script>
