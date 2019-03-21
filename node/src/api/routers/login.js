const Router = require('koa-router');

const db = require('../db/');

// 创建路由
var router = new Router();

// 判断用户名是否存在
router.get('/',async (ctx,next)=>{
    let {username} = ctx.query;

    let res =await db.find('user',{username});
    // console.log(res)

    if(res.length>0){
        ctx.body = 0;
    }else{
        ctx.body = 1;
    }
});

//注册
router.post('/insert',async (ctx,next)=>{
    let {username,password} = ctx.request.body;

    let res = await db.insert('user',{username,password});
    // console.log({username,password});

    ctx.body = res;
});

//登录
router.post('/find',async (ctx,next)=>{
    let {username,password} = ctx.request.body;

    let res = await db.find('user',{username,password});
    // console.log({username,password});
    if(res.length>0){
        ctx.body = 1;
    }else{
        ctx.body = 0;
    }
});

module.exports = router;