var express = require('express');
var app = express();
var pageRouter = require('./routes/page');

app.set('APP_PORT', 9000);
app.set('views', './src/views'); //可以是数组
app.set('view engine', 'jade');

app.use(express.static('./src', {})); // 设置静态文件夹 src 
app.engine('jade', require('jade').__express);// 设置模版引擎为 jade


app.use(pageRouter);

app.listen(app.get('APP_PORT'), function(){
	console.log('app is listen on '+ app.get('APP_PORT') + 'port');
})
