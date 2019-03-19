//引入模块
const Koa = require('koa');
const static = require('koa-static');

// 路由
const routers = require('./api/routers/');

//new一个koa实例，创建koa应用
const app = new Koa();

app.context.myname = 'Vancl';


//创建静态资源服务器
app.use(static('./'));

// 处理status为404或null时，完善response信息
app.use(routers.allowedMethods());
app.use(routers.routes());


//监听端口
app.listen(1998,()=>{
    console.log('server is running on http://localhost:1998..')
})