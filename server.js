/**
 * Created by timl on 2017/4/17.
 */
let koa = require('koa');
let proxy = require('koa-proxies');
let koaStatic = require('koa-static');
let AV = require('leanengine');
let rp = require('request-promise');
let koaRouter = require('koa-router');
const mock = require('./route/mock.js');
const doc = require('./route/doc.js');
const net = require('net');
const url = require('url');
const http = require('http');
// 	httpProxy = require('http-proxy');
// var proxy = httpProxy.createProxyServer();


let app = new koa(),
	router = new koaRouter();
AV.init({
	appId: process.env.LEANCLOUD_APP_ID || 'usbJGVbiA5J2WA8s19H9cB1u-gzGzoHsz',
	appKey: process.env.LEANCLOUD_APP_KEY || 'FL21tj3BQl8gM9bnGwwcja2F',
	masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'TzFPUEhAVCVEwhRlpxVAeOrl'
});
app.use(AV.koa());

router.use('/waimai/ajax', mock);
router.use('/waimai', doc);
app.use(router.routes());

app.use(async(ctx)=> {
	let {
		originalUrl,
		socket,
		req,
	} = ctx;
	// let severSocket = net.connect(severUrl.port, severUrl.hostname, function () {
	//
	// })
	console.log(ctx);
})

app.on('error', (err, ctx)=> {
	console.log(err);
});

app.listen(process.env.LEANCLOUD_APP_PORT);

// let httpServer = http.createServer(app);
//
// httpServer.on('connect', function () {
// 	console.log('- connect -');
// });
// httpServer.listen(process.env.LEANCLOUD_APP_PORT, '127.0.0.1');


