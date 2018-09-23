var http=require('http');
var path=require('path');
var mime=require('mime');
var fs=require('fs');

http.createServer(function(req,res){
	var publicDir=path.join(__dirname,'publics');
	var filename=path.join(publicDir,req.url);
	fs.readFile(filename,function(err,data){
		if(err){
			fs.readFile(path.join(publicDir,'404.html'),function(err,data){
				if(err){
					console.log('文件不存在');
				}else{
					res.setHeader('Content-Type','text/html;charset=utf-8');
					res.end(data);
				}
			})
		}else{
			res.setHeader('Content-Type',mime.getType(filename));
			res.end(data);
		}
	})
}).listen(8888,function(){
	console.log('服务器已经启动，请访问http://localhost:8888');
})

