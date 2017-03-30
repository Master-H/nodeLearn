var fs = require('fs');
var http = require('http');
var request = require('request');
http.createServer(function(req, res) {
        // fs.createReadStream('logo.png').pipe(res);
        request('http://files-test.cim120.cn/hmp/p/f/500023/53ce0c686243cf623170eb34cc99462765da14e9_small.jpg').pipe(res);
    }).listen(2080,(err)=>{
        if(err)
        throw err;
        console.log(`成功启动2080端口`)
    });