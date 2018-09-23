var fs=require('fs');
fs.readFile('./hello.txt','utf-8',function(err,data){
	if(err){
		throw err;
	}else{
		console.log(data);
		console.log(data);console.log('文件读取完毕');
	}
})
