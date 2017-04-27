/**
 * Created by timl on 2017/4/27.
 */
const rp = require('request-promise');
const KoaRouter = require('koa-router');

let option = {
	/*
	 *  `options` is needed and it must have the following layout:
	 *
	 *  {
	 *    target : <url string to be parsed with the url module>
	 *    forward: <url string to be parsed with the url module>
	 *    agent  : <object to be passed to http(s).request>
	 *    ssl    : <object to be passed to https.createServer()>
	 *    ws     : <true/false, if you want to proxy websockets>
	 *    xfwd   : <true/false, adds x-forward headers>
	 *    secure : <true/false, verify SSL certificate>
	 *    toProxy: <true/false, explicitly specify if we are proxying to another proxy>
	 *    prependPath: <true/false, Default: true - specify whether you want to prepend the target's path to the proxy path>
	 *    ignorePath: <true/false, Default: false - specify whether you want to ignore the proxy path of the incoming request>
	 *    localAddress : <Local interface string to bind for outgoing connections>
	 *    changeOrigin: <true/false, Default: false - changes the origin of the host header to the target URL>
	 *    preserveHeaderKeyCase: <true/false, Default: false - specify whether you want to keep letter case of response header key >
	 *    auth   : Basic authentication i.e. 'user:password' to compute an Authorization header.
	 *    hostRewrite: rewrites the location hostname on (301/302/307/308) redirects, Default: null.
	 *    autoRewrite: rewrites the location host/port on (301/302/307/308) redirects based on requested host/port. Default: false.
	 *    protocolRewrite: rewrites the location protocol on (301/302/307/308) redirects to 'http' or 'https'. Default: null.
	 *  }
	 *
	 *  NOTE: `options.ws` and `options.ssl` are optional.
	 *    `options.target and `options.forward` cannot be
	 *    both missing
	 *  }
	 */
};

let _host = 'http://takeaway.dianping.com';



let router = new KoaRouter();

router.get('*', async function(ctx,next) {
	console.log('--- doc ---');
	console.log(ctx.req);
	let req = ctx.req;
	let res = ctx.res;
	let options = {
		method:req.method,
		url:_host+req.url,
	};
	
	try{
		ctx.body = await rp(options);
	} catch(e){
		ctx.body = e;
	}
});

module.exports = router.routes();

