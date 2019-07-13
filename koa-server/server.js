const Koa = require('koa')
const router = require('koa-router')
let server = new Koa()
server.listen(3000);
console.log("你正在启动3000");
server.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    await next();
})
let r1 = router();
r1.get('/list', async ctx => {
    ctx.body = [
        { name: '英国', price: 358, sales: 8531 },
        { name: '玩具', price: 18, sales: 915 },
    ]
})
server.use(r1.routes());