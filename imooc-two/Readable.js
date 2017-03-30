const Readable = require('stream').Readable;
const Writable = require('stream').Writable;
var readStream = new Readable();
var writeStream = new Writable();
readStream.push('I');
readStream.push('am');
readStream.push('hxy');
//表示结束，不push会出错
readStream.push(null);
writeStream._write = function(chunk,encode,cb){
    console.log(chunk.toString())
    cb();
}
readStream.pipe(writeStream)