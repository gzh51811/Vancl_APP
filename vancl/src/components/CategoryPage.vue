<template>
    <div>
      <header>
        <i class="el-icon-arrow-left"></i>
        <h2>分类</h2>
      </header>
      <main class="tab">
        <ul>
          <li v-for="(kind, idx) in kinds" :class="{active: active === idx }" @click="change(idx)" :key="idx">{{kind}}</li>
        </ul>
        <div class="content">
          <!-- <div class="box" v-for="(content, idx) in contents" v-show="active === idx" :key="idx">

          </div> -->
          <div class="box">
            <p>羊毛衣</p>
          </div>
          <div class="box">
            <p>羊毛衣</p>
          </div>
          <div class="box">
            <p>羊毛衣</p>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
export default {
  data() {
      return {
        kinds: ["推荐", "男装","女装","男鞋","女鞋","袜品","家居","童装","内衣"],
        active: 0
      }
    },
  methods:{
    change(idx){
      this.active = idx;
    }
  }
}
</script>

<style scoped>
  header{
    height: 3.75rem;
    padding: 0 1.25rem;
    background: #b81c22;
  }
  .el-icon-arrow-left{
    font-size: 1.875rem;
    line-height: 3.75rem;
    color: #ffffff;
    float: left;
  }
  header h2{
    color: #ffffff;
    font-size: 1.25rem;
    text-align: center;
    line-height: 3.75rem;
  }
  .tab{
    width: 100%;
  }
  .tab .active {
    background: #fff;
    color: #b81c22;
  }
  .tab ul{
    float: left;
    background: #e5e5e5;
    height: 39.375rem;
    width: 25%;
  }
  .tab ul li {
    list-style: none;
    width: 6.5rem;
    height: 2.625rem;
    text-align: center;
    line-height: 2.625rem;
    color:#000;
    background: #e5e5e5;
    border-bottom: .0625rem solid #f8f8f8;
  }
  .tab .content {
    float: left;
    height: 18.75rem;
    width: 75%;
  }
  .tab .content .box{
    width: 31%;
    background: pink;
    float: left;
    margin-right: .3125rem;
    padding: .625rem;
    text-align: center;
  }
</style>
