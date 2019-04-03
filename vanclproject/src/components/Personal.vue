<template>
    <div>
        <header>
            <i class="el-icon-arrow-left"></i>
            <h2>个人中心</h2>
        </header>
        <div class="profiles">
            <div class="set"><span><img src="../assets/img/setpic.png"></span></div>
            <div class="grade">
                <p><span>普</span></p>
                 <p>{{user}}</p>
                <p><a href="javascirpt:void(0);" style="color:#333;"><i>N</i>  普通会员</a></p>
               
            </div>
            <div class="growup"> 
                <p>
                    <span>积分:0</span>
                    <span>余额:0:00</span>
                    <span>成长值:0</span>
                </p>
            </div>
        </div>
        <div class="details">
            <div class="order"> <span>全部订单</span><span class="fr">&gt;</span></div>
            <div class="status">
                <ul>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-ziyuan1"></use>
                        </svg>
                        <p>进行中</p>
                    </li>
                    <li>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-yiwancheng"></use>
                        </svg>
                        <p>已完成</p>
                    </li>
                    <li>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xiugai"></use>
                        </svg>
                        <p>待完成</p>
                    </li>
                    <li>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shanchu"></use>
                        </svg>
                        <p>无效</p>
                    </li>
                </ul>
            </div>
            <div class="status">
                <ul>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-chongzhi"></use>
                        </svg>
                        <p>充值返现</p>
                    </li>
                    <li>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-sirendingzhi"></use>
                        </svg>
                        <p>私人定制</p>
                    </li>
                    <li>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wuliu"></use>
                        </svg>
                        <p>物流查询</p>
                    </li>
                    <li>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-tuihuo"></use>
                        </svg>
                        <p>退货</p>
                    </li>
                </ul>
            </div>
             <div class="status">
                <ul>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-iocn-9"></use>
                        </svg>
                        <p>地址管理</p>
                    </li>
                    <li>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-ziyuan"></use>
                        </svg>
                        <p>我的礼品卡</p>
                    </li>
                    <li>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-youhuiquan"></use>
                        </svg>
                        <p>我的优惠券</p>
                    </li>
                    <li>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jifen"></use>
                        </svg>
                        <p>我的积分</p>
                    </li>
                </ul>
            </div>
             <div class="status">
                <ul>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-pinglun"></use>
                        </svg>
                        <p>我的评论</p>
                    </li>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-tiwen"></use>
                        </svg>
                        <p>我的提问</p>
                    </li>
                    <li>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jianyifankui"></use>
                        </svg>
                        <p>投诉建议</p>
                    </li>
                </ul>
            </div>
        </div>
        <div id="footer">
            <Nav/>
        </div>
    </div>
</template>
<script>
import basecss from "../lib/base.css";
import iconfontjs from "../lib/font_6exvjotb9dn/iconfont.js";
// import iconfontcss from '../lib/font_6exvjotb9dn/iconfont.css';
import Nav from './Nav.vue';

export default {
  data() {
    return {
      user: "用户ID"
    };
  },
  components:{
    Nav
  },
};
</script>
<style scope>
.icon {
  width: 1.5625rem;
  height: 1.5625rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
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
.profiles {
  height: 17.8rem;
  background: #c94744;
  text-align: right;
  
}
.profiles .set span {
  margin-right: 0.625rem;
}
.profiles .grade p {
  color: #fff;
  margin-bottom: 0.625rem;
  text-align: center;
}
.profiles .grade p:nth-child(1) span {
  display: inline-block;
  width: 5.125rem;
  height: 5.125rem;
  line-height: 5.125rem;
  background: #7fbd40;
  border-radius: 2.5625rem;
  font-size: 3.75rem;
  text-align: center;
}
.profiles .grade p:nth-child(3) a {
  background: #fff;
  display: inline-block;
  width: 5.125rem;
  border-radius: 0.625rem;
  text-align: center;
  font-size: 0.75rem;
}
.profiles .growup {
  margin-top: 1.25rem;
  color: #fff;
}
.profiles .growup p span {
  display: inline-block;
  width: 33%;
  text-align: center;
  font-size: 0.75rem;
}
.details {
  border-top: 0.9375rem solid #f0eff5;
}
.details .order {
  height: 2.71875rem;
  line-height: 2.71875rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  font-size: 1.5rem;
  color: #000;
  border-bottom: 1px solid #ddd;
}
.details .status ul{
    display: flex;
}
.details .status ul li {
  /* float: left; */
  width: 25%;
  margin-top: 0.5rem;
  height: 100%;
  line-height: 100%;
  text-align: center;
}
.details .status ul li p {
  margin-top: 0.3125rem;
}
#footer{
    margin-top:2.5rem;
}
</style>
