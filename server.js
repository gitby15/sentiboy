/**
 * Created by timl on 2017/4/17.
 */
let koa = require('koa');
let AV = require('leanengine');

AV.init({
	appId: process.env.LEANCLOUD_APP_ID || 'usbJGVbiA5J2WA8s19H9cB1u-gzGzoHsz',
	appKey: process.env.LEANCLOUD_APP_KEY || 'FL21tj3BQl8gM9bnGwwcja2F',
	masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'TzFPUEhAVCVEwhRlpxVAeOrl'
});

let app = new koa();
app.use(AV.koa());
console.log(process.env.LEANCLOUD_APP_PORT);
app.listen(process.env.LEANCLOUD_APP_PORT);


// x-response-time
app.use(async function (ctx, next) {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	ctx.set('X-Response-Time', `${ms}ms`);
});


// logger
app.use(async function (ctx, next) {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use((contex)=> {
	contex.body = JSON.stringify(contex, null, 2);
});



//
// app.use(function *(next) {
// 	if (this.url === '/time') {
// 		this.body = {
// 			time: new Date()
// 		};
// 	} else {
// 		yield next;
// 	}
// });
//
// app.use(function *(next) {
// 	if (this.url === '/todos') {
// 		return new AV.Query('Todo').find().then(todos => {
// 			this.body = todos;
// 		});
// 	} else {
// 		yield next;
// 	}
// });