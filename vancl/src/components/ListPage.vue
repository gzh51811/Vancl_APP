<template>
    <div>
        <header>
            <i class="el-icon-arrow-left"></i>
            <h2>xxx</h2>
        </header>
        <main>
            <ul class="paixu">
                <li v-for="(paixu,idx) in paixus" :class="{active: active === idx }" @click="change(idx)" :key="idx">{{paixu}}</li>
            </ul>
            <ul class="goodslist">
                <li>
                    <p>凡客xxxx衣服</p>
                    <p>679元</p>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
            paixus:["新品","销量","评价","价格"],
            active:0
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
  .paixu{
      width: 100%;
      height: 2.125rem;
  }
  .paixu li{
      float: left;
      width: 25%;
      text-align: center;
      line-height: 2.125rem;
      list-style: none;
  }
  .paixu .active{
      color: #b81c22;
  }
  .goodslist {
      width: 100%;
  }
  .goodslist li {
      width: 50%;
      background: #eee;
  }
  .goodslist li p{
      text-align: center;
      line-height: 2;
      
  }
</style>