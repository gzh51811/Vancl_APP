<template>
    <div>
        <header>
            <i class="el-icon-arrow-left"></i>
            <h2>商品详情</h2>
        </header>
        <main>
            <el-carousel indicator-position="none" height="414px">
                <el-carousel-item v-for="(imgurl,idx) in imgurls" :key="idx">
                    <img :src="`./img/${imgurl}`" alt="" class="lunbo">
                </el-carousel-item>
            </el-carousel>
            <div class="xiangqing">
                <h4>xxxxxxxxxx</h4>
                <p class="price"><del>299元</del><strong>173元</strong></p>
                <p class="recharge">充100反100，<a href="" style="color:#b81c22">点击充值</a></p>
                <p class="tips">充值购买更优惠</p>
                <div class="mianyou"><span>免邮</span>全场购物满199元免邮</div>
                <div class="xuanze">
                    <Icon type="md-checkbox-outline" />
                    选择 颜色/尺码
                    <Icon type="ios-arrow-forward" style="float:right"/>
                </div>
                <div class="size-box">
                    <h3 class="tit">选择颜色</h3>
                    <p class="color">
                        <span v-for="(color,idx) in colors" :class="{'size-color':true, active:active === idx}" @click="change(idx)" :key="idx">{{color}}</span>
                    </p>
                    <h3 class="tit">尺寸选择</h3>
                    <p class="size">
                        <span v-for="(size,idx) in sizes" :class="{'size-color':true, ac:ac === idx}" @click="change(idx)" :key="idx">{{size}}</span>
                    </p>
                    <h3 class="tit">购买数量</h3>
                    <p class="changecount">
                        <span class="minus"><Icon type="ios-remove" /></span>
                        <span class="num">1</span>
                        <span class="add"><Icon type="ios-add" /></span>
                    </p>
                </div>
            </div>
            <ul class="paging">
                <li v-for="(word,idx) in words" :class="{changecolor:changecolor===idx}" @mouseover="color(idx)" :key="idx">{{word}}</li>
            </ul>
            <div class="picbox">
                <div class="picture" v-for="(pic,idx) in pics" :key="idx">
                    <img :src="`./img/${pic}`" alt="">
                </div>
            </div>
        </main>
        <!-- <footer>
            <div class="showcart">
                <Icon type="ios-cart-outline" size="22"/>
            </div>
            <div class="addcart">
                加入购物车
            </div>
        </footer> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgurls:["lunbo.jpg","lunbo2.jpg","lunbo3.jpg","lunbo4.jpg","lunbo5.jpg","lunbo6.jpg","lunbo7.jpg","lunbo8.jpg"],
            colors:["果绿","粉蓝"],
            sizes:["120","130","140","150"],
            words:["商品详情","评论","咨询"],
            changecolor:0,
            active:0,
            ac:0,
            pics:["tu.jpg","tu1.jpg","tu2.jpg","tu3.jpg","tu4.jpg","mote.jpg","tu5.jpg","tu6.jpg","tu7.jpg","tu8.jpg","tu9.jpg",
                "tu10.jpg","mote2.jpg","tu11.jpg","tu12.jpg","tu13.jpg","tu14.jpg","tu15.jpg","tu16.jpg","tu17.jpg","tu18.jpg",
                "tu19.jpg","tu20.jpg","tu21.jpg","tu22.jpg","tu23.jpg","tu24.jpg","tu25.jpg"]
        }
    },
    methods:{
        color(idx){
            this.changecolor = idx;
        },
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
    h4{
        font-size: 1rem;
        line-height: 2;
    }
    .xiangqing{
        padding: 0 1.875rem;
    }
    .lunbo{
        display: block;
        height: 25.875rem;
    }
    .price,.recharge{
        line-height: 2;
        color: #b81c22;
        font-size: .875rem;
    }
    .price del{
        margin-right: .3125rem;
    }
    .price strong{
        font-size: 1.125rem;
    }
    .tips{
        line-height: 2;
        color: #b81c22;
        border-bottom: .0625rem solid #aeaeae;
        font-size: .875rem;
    }
    .mianyou{
        padding: .625rem 0;
        color: #aeaeae;
        font-size: .875rem;
        border-bottom: .0625rem solid #aeaeae;
    }
    .mianyou span{
        display: block;
        padding: 0 .03125rem;
        background: #b81c22;
        color: #fff;
        float: left;
        margin-right: .3125rem;
    }
    .xuanze{
        background: #f5f5f5;
        margin: .625rem 0;
        padding: .5rem;
        cursor: pointer;
    }
    .size-box{
        color: #4d4d4d;
    }
    .size-box .tit{
        font-size: 100%;
        font-weight: 400;
    }
    .size-box .color{
        padding-top: .3125rem;
        padding-bottom: 2.3125rem;
        border-bottom: .0625rem solid #ccc;
        margin-bottom: .75rem;
    }
    .size-box .size-color{
        float: left;
        border: .0625rem solid #b3b3b3;
        border-radius: .0625rem;
        margin-right: .3125rem;
        margin-bottom: .3125rem;
        padding: .3125rem .5rem;
    }
    .size-box .active{
        border: .0625rem solid #b81c22;
    }
    .size-box .size{
        padding-top: .3125rem;
        padding-bottom: 2.3125rem;
        border-bottom: .0625rem solid #ccc;
        margin-bottom: .75rem;
    }
    .size-box .changecount{
        padding-top: .3125rem;
        padding-bottom: 1.3125rem;
        border-bottom: .0625rem solid #ccc;
    }
    .size-box .changecount span{
        display: inline-block;
        width: 1.6875rem;
        height: 1.6875rem;
        line-height: 1.6875rem;
        border-radius: .1875rem;
        text-align: center;
        margin-right: .3125rem;
    }
    .size-box .changecount .minus{
        background: #eee;
        background-size: contain;
    }
    .size-box .changecount .num{
        border: .0625rem solid #000;
    }
    .size-box .changecount .add{
        background-size: contain;
        background:#4d4d4d;
        color: #fff;
    }
    .paging{
        width: 100%;
        height: 2.5rem;
    }
    .paging li{
        list-style: none;
        width: 33%;
        float: left;
        text-align:center;
        font-size: 1rem;
        padding-top: .625rem;
    }
    .picbox{
        border-top: .125rem solid #ccc;
    }
    .picture img{
        width: 25.875rem;
        height: 25.875rem;
    }
    .changecolor{
        color: #b81c22;
    }
    /* footer{
        width: 100%;
        height: 1.875rem;
        border-top: .0625rem solid #aeaeae;
        position: fixed;
        bottom: 0;
     }
    .showcart,.addcart{
        width: 50%;
    }
    .showcart{
        background: #fff;
        float: left;
        text-align: center;
        line-height: 1.875rem;
    }
    .addcart{
        background: #b81c22;
        float: left;
        text-align: center;
        line-height: 1.875rem;
        color: #fff;
    } */
</style>
