/**
 * Created by timl on 2017/4/28.
 */
let url = require('url');

function connectReqHandler(req, socket, head) {
  let reqUrl = url.parse(req.url);
  
  let resourceInfo = {
    host: host,
    method: req.method,
    path: "",
    url: 'https://' + host,
    req: req,
    startTime: new Date().getTime(),
  }
  /**
   * 1. 检查是否有已经启动的https服务器
   * 2. 决定使用哪个server
   * 3.
   */
}