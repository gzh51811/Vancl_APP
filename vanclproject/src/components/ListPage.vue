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
                <li v-for="(goodslist,idx) in goodslists" @click="goto(goodslist.id)" :key="idx">
                    <img width='100%' height='100%' :src="`./img/${goodslist.imgurl}`" alt="">
                    <p>{{goodslist.name}}</p>
                    <p>{{goodslist.price}}元</p>
                </li>
            </ul>
            <el-pagination
             small 
                layout="prev, pager, next"
                :total="20  ">
            </el-pagination>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
            paixus:["新品","销量","评价","价格"],
            active:0,
            goodslists:''
        }
    },
    methods:{
        change(idx){
        this.active = idx;
        },
        goto(id){
            this.$router.push({name:'DetailPage',query:{id},params:{id}});
        }
    },
    created(){
        this.$axios.get("http://localhost:1998/goods/list", {
            params:{
                qry : 'id',
                num:1,
                page:1,
                quantit:6
            }
      }).then(res => {
        this.goodslists=res.data;
      });
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
      list-style: none;
      overflow: hidden;
  }
  .goodslist li {
      width: 50%;
      background: #eee;
      float: left;
  }
  .goodslist li p{
      text-align: center;
      line-height: 2;
  }
</style>