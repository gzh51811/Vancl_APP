const Router = require('koa-router');

const db = require('../db/');

// 创建路由
var router = new Router();

//商品列表
router.get('/list',async (ctx,next)=>{
    //qry：按什么排序  num：1升序、-1降序  page：第几页  quantit：每页多少条记录
    let {qry,num,page,quantit} = ctx.query;

    let res =await db.find('goods',{},'id',1);
    // console.log(res)
    ctx.body = res;
});

//详情页
router.get('/details',async (ctx,next)=>{
    let {id} = ctx.query;

    let res =await db.find('goods',{id});
    // console.log(res)
    ctx.body = res;
});

//添加购物车
router.post('/insert',async (ctx,next)=>{
    let {username,gid,quantity} = ctx.request.body;

    let find =await db.find('cart',{username,gid:gid*1});
    // console.log({username,gid})
    if(find.length>0){
        let num = find[0].num+1;
        let update =await db.update('cart',{username,gid:gid*1},{$set:{num:num}});
        console.log(find[0].num)
        ctx.body = update;
    }else{
        let insert = await db.insert('cart',{username,gid,quantity});
        ctx.body =insert;
    }
});

module.exports = router;