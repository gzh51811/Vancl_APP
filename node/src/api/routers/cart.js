const Router = require('koa-router');

const db = require('../db/');

// 创建路由
var router = new Router();

//购物车渲染
router.post('/find',async (ctx,next)=>{
    let {username} = ctx.request.body;

    let res = await db.find('cart',{username});
    // console.log(res[0].num)
    let arr=[];
    for(var i=0; i<res.length; i++){
        arr.push(res[i].gid);
    }

    let goods = await db.find('goods',{id:{$in:arr}});

    for(var i=0; i<res.length; i++){
        goods[i].num = res[i].num;
        goods[i].username = res[i].username;
    }

    // console.log(goods);

    ctx.body = goods;
});

//修改
router.get('/update',async (ctx,next)=>{
    let {username,gid,num} = ctx.query;
    console.log(username,gid,num);
    let res =await db.update('cart',{username,gid:gid*1},{$set:{num:num*1}});
    ctx.body = res;
});

module.exports = router;