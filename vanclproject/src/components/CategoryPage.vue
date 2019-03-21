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
          <div v-for="(feilei,idx) in feileis" class="box" @click="goto('ListPage')" :key="idx">
            <img :src="`./img/${feilei.imgurl}`" alt="">
            <p>{{feilei.title}}</p>
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
        feileis:[
          {
            imgurl:"fenlei1.jpg",
            title:"免烫衬衫"
          },{
            imgurl:"fenlei2.jpg",
            title:"T恤"
          },{
            imgurl:"fenlei3.jpg",
            title:"卫衣"
          },{
            imgurl:"fenlei4.jpg",
            title:"休闲衬衫"
          },{
            imgurl:"fenlei5.jpg",
            title:"POLO衫"
          },{
            imgurl:"fenlei6.jpg",
            title:"短袖衬衫"
          },{
            imgurl:"fenlei7.jpg",
            title:"水柔棉"
          },{
            imgurl:"fenlei8.jpg",
            title:"麻衬衫"
          },{
            imgurl:"fenlei9.jpg",
            title:"针织衫"
          }],
        active: 0
      }
    },
  methods:{
    change(idx){
      this.active = idx;
    },
    goto(typeface){
        this.$router.push(typeface);
    }
  },
  // created() {
  //   this.$axios.get("https://m.vancl.com/Product/AjaxSonCateList",{
  //       params: {
  //         cateId:'',
  //         np:10366,
  //         cateref:''
  //       }
  //     }).then(res => {
  //       console.log(res);
  //     });
  // }
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
    width: 100%;
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
    float: left;
    margin-left: .3125rem;
    padding: .625rem;
    text-align: center;
  }
  .tab .content img{
    width: 100%;
  }
</style>
