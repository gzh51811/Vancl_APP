<template>
    <div>
        <div class="regtitle">
            <span>&lt;</span><span> 注册</span> 
        </div>
        <div class="from">
            <ul class="ul">
                <li><input type="text" placeholder="请输入验证码" ><span  @click="getcode">{{spantitle}}</span></li>
                <li><input type="text" placeholder="请输入手机号"><span  @click="getphonecode">{{phonecode}}</span></li>
                <li><input type="text" placeholder="请输入手机验证码"></li>
                <li><input type="password" placeholder="密码6-16字母，数字，特殊字符"><span>点击切换</span></li>
                <li>注册账号即表示同意遵守<span>《VANCL凡客服务条款》</span></li>
                <li>点击注册</li>
            </ul>
        </div>
    </div>
</template>
<script>
import basecss from '../lib/base.css';

export default {
    data(){
        return {
            spantitle:'h8joxw',
            phonecode:'获取验证码'
        };
    },
    methods:{
        getcode(){
            let randomMa = [];
            let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            for(var i=0;i<6;i++){
                var randomIdx = parseInt(Math.random()*62);
                randomMa.push(str[randomIdx]);
            }
            this.spantitle = randomMa.join("");
        },
         getphonecode(){
            let randomMa = [];
            let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            for(var i=0;i<6;i++){
                var randomIdx = parseInt(Math.random()*62);
                randomMa.push(str[randomIdx]);
            }
            this.phonecode = randomMa.join("");
        },
    }
}
</script>
<style scope>
   .regtitle{
       width:100%;
        height:2.8125rem;
        background-color:#b81c22;
        line-height:2.8125rem;
        color:#fff;
        font-size:1.5rem;
    }
    .regtitle span:nth-child(1){
        margin:0 6.875rem 0 .9375rem;
    }
    .from{
        padding:2.5rem 2rem;
    }
    .from ul li {
        margin-bottom:.75rem;
    }
    .from ul li:nth-child(1){
        height:2.625rem;
        line-height:2.625rem;
        position:relative;
    }
    .from ul li:nth-child(1) input{
        height:2.625rem;
        padding:.75rem;
        background-color:#f5f5f5;
        font-size:.875rem;
        color:#b5b5b5;
    }
    .from ul li:nth-child(1) span{
        padding-left:.5rem;
        background-color:#fff;
        color:#f00;
        font-size:1rem;
        border:.0625rem solid #ccc;
        position:absolute;
        top:0px;
        left:80%;
    }
    .from ul li:nth-child(2){
        position: relative;
    }
     .from ul li:nth-child(2) input{
        height:2.625rem;
        padding:.75rem;
        background-color:#f5f5f5;
        font-size:.875rem;
        color:#b5b5b5;
    }
    .from ul li:nth-child(2) span{
        height:2.625rem;
        line-height:2.625rem;
        border:.1875rem solid #ccc;
        color:#b71c22;
        font-size:.875rem;
        position:absolute;
        left:15.625rem;
        top:0px;
    }
    .from ul li:nth-child(3){
        background-color:#fff;
    }
    .from ul li:nth-child(3) input{
        height:2.625rem;
        width:21rem;
        background-color:#f5f5f5;
        font-size:.875rem;
        color:#b5b5b5;
    }
    .from ul li:nth-child(4) {
        position:relative;
    }
    .from ul li:nth-child(4) input{
        height:2.625rem;
        width:21rem;
        background-color:#f5f5f5;
        font-size:.875rem;
        color:#b5b5b5;
    }
    .from ul li:nth-child(4) span{
        position: absolute;
        font-size:1em;
        width:60em;
        left:15.625rem;
        top:.5rem;
    }
    .from ul li:nth-child(5) {
        font-size:.75rem;
        color:#b5b5b5;
    }
    .from ul li:nth-child(5) span{
        color:#333;
    } 
    .from ul li:nth-child(6){
        width:100%;
        background:#b81c22;
        font-size:1.5rem;
        color:#fff;
        height:2.625rem;
        line-height:2.625rem;
        text-align:center;
    }
</style>