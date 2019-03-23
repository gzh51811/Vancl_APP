<template>
    <div>
         <div class="login">
            <span>&lt;</span><span> 登录</span> 
        </div>
        <div class="loginmethods">
            <span class="login1">普通登陆
                <i></i>
            </span>
            <span class="login2">快速登录
                <i></i>
            </span>
        </div>
        <div class="from">
            <ul class="ul">
                 <li><input type="text" placeholder="点击输入手机号/Email" ></li>
                <li><input type="password" placeholder="请输入密码" ></li>
                <li class="li3">登录</li>
            </ul>
            <a href="javascript:void(0);"><span class="fr">免费注册<i>&gt;</i></span></a>
            <a href="javascript:void(0);"><span>手机账号取回密码<i>&gt;</i></span></a>

        </div>
    </div>
</template>
<script>
import basecss from '../lib/base.css';
export default {
   data(){
       return {

       }
   }
}
</script>
<style scope>
    .login{
        height:2.8125rem;
        background-color:#b81c22;
        line-height:2.8125rem;
        color:#fff;
        font-size:1.5rem;
    }
      .login span:nth-child(1){
        margin:0 8.4375rem 0 .9375rem;
    }
    .loginmethods {
        height:3rem;
        line-height:1.5rem;
        color:#666;
    }
    .loginmethods span{
        display:inline-block;
        width:50%;
        text-align:center;
        margin-top:.5rem;
    }
    .loginmethods i{
        display:inline-block;
        width:9.375rem;
        height: .1875rem;
        background-color:#b81c22
    }
    .from{
        padding:2.5rem 2rem;
    }
     .from ul li {
        /* margin-bottom:.75rem; */
        margin-bottom:1.875rem;
    }
    .from ul li:nth-child(1){
        height:2.625rem;
        line-height:2.625rem;
      
    }
    .from ul li:nth-child(1) input,.from ul li:nth-child(2) input{
        width:100%;
        height:2.625rem;
        padding:.75rem;
        background-color:#f5f5f5;
        font-size:.875rem;
        color:#b5b5b5;
    }
     .from ul .li3{
        background:#b81c22;
        font-size:1.5rem;
        color:#fff;
        height:2.625rem;
        line-height:2.625rem;
        text-align:center;
    }
    
    .from a span{
        color:#333;
    }
 
</style>
