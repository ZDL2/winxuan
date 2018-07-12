//配置文件
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');


const app = express();
//设置跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  if(req.method === "OPTIONS") {
    res.send(200);
  } else{
    next();
  }
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);
//把路由容器挂载到app服务中X
//提供静态资源服务
// app.use(express.static('./public/dist'));
// app.use("/",express.static(__dirname + "./public/dist/index.html"));


app.listen(8002);