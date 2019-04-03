<template>
    <div>
        <header>
            <i class="el-icon-arrow-left"></i>
            <h2>频道</h2>
        </header>
        <main>
            <img v-for="(pindao,idx) in pindaos" :src="`./img/${pindao}`" alt="" :key="idx">
        </main>
        <footer>
          <Nav/>
        </footer>
    </div>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  data() {
    return {
      pindaos: [
        "pindao1.jpg",
        "pindao2.jpg",
        "pindao3.jpg",
        "pindao4.jpg",
        "pindao5.jpg",
        "pindao6.jpg",
        "pindao7.jpg",
        "pindao8.jpg",
        "pindao9.jpg",
        "pindao10.jpg",
        "pindao11.jpg",
        "pindao12.jpg"
      ]
    };
  },
  components:{
    Nav
  },
  methods: {
    change(idx) {
      this.active = idx;
    },
    goto(typeface) {
      this.$router.push(typeface);
    }
  }
};
</script>

<style scoped>
header {
  height: 3.75rem;
  padding: 0 1.25rem;
  background: #b81c22;
}
.el-icon-arrow-left {
  font-size: 1.875rem;
  line-height: 3.75rem;
  color: #ffffff;
  float: left;
}
header h2 {
  color: #ffffff;
  font-size: 1.25rem;
  text-align: center;
  line-height: 3.75rem;
}
img {
  width: 100%;
}
footer{
  margin-top:2.5rem;
}
</style>
