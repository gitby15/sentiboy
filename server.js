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

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'usbJGVbiA5J2WA8s19H9cB1u-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'FL21tj3BQl8gM9bnGwwcja2F',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'TzFPUEhAVCVEwhRlpxVAeOrl'
});

let requestHandler = function (req, res) {
  
}
let connectReqHandler = function(req,cltSocket,header){
  
}
let proxyPort = 9001;
function proxyServer(option) {
  /**
   * 1. 初始化应用数据
   * 2. 创建代理服务器
   * 3. 处理connect请求
   * 4. 启动代理服务器
   * 5. 启动web socket服务器
   * 6. 启动web interface
   * 7. 设置全局代理
   * 8. 管理服务器状态
   */
  let s = null;// httpProxyServer
  s = http.createServer(requestHandler);// step1
  s.on('connect',connectReqHandler);// step2
  s.listen(proxyPort);// step3
  // websocket 服务器暂时先不实现
  // web interface 暂时先不实现
  // 暂时先不设置全局代理
  
  
}


//app.listen(process.env.LEANCLOUD_APP_PORT);

// let httpServer = http.createServer(app);
//
// httpServer.on('connect', function () {
// 	console.log('- connect -');
// });
// httpServer.listen(process.env.LEANCLOUD_APP_PORT, '127.0.0.1');


