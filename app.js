//导入express 模块
var express = require('express');
//调用express 得到一个网站服务器
var app = express();
//指定默认的模板引擎
app.set('view engine', 'ejs');
//指定模板页面的存放路径
app.set('views', './views')
    //当用户请求/根路径的时候，返回index首页
app.get('/', (req, res) => {
        //在调用render之前 需要先指定express的默认模板引擎和模板页面存放路径
        res.render('index');
    })
    //开启服务器
app.listen(3005, function() {
    console.log('http://127.0.0.1:3005');
});