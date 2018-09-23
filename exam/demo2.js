//1、加载http模块
var http=require('http');
//2、创建http服务
var server=http.createServer();
//3、为http服务添加request处理程序
server.on('request',function(request,response){
	response.write('hello');
//	response.end();
});
//4、开启http服务监听，准备接收客户端请求
server.listen(8080,function(){
	console.log('服务器已经启动，请访问http://localhost:8080');
})
